import { GraphQLError, locatedError, graphql } from 'graphql';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { ExecutionResult } from '@graphql-tools/utils';
import { stitchSchemas } from '@graphql-tools/stitch';
import { DelegationContext, externalValueFromResult } from '@graphql-tools/delegate';

import { UNPATHED_ERRORS_SYMBOL } from '../src/symbols';
import { getUnpathedErrors } from '../src/externalObjects';
import { delegateToSchema, defaultMergedResolver } from '../src';

class ErrorWithExtensions extends GraphQLError {
  constructor(message: string, code: string) {
    super(message, null, null, null, null, null, { code });
  }
}

describe('Errors', () => {
  describe('getUnpathedErrors', () => {
    test('should return all unpathed errors', () => {
      const error = {
        message: 'Test error without path',
      };
      const mockExternalObject: any = {
        responseKey: '',
        [UNPATHED_ERRORS_SYMBOL]: [error],
      };

      expect(getUnpathedErrors(mockExternalObject)).toEqual([
        mockExternalObject[UNPATHED_ERRORS_SYMBOL][0],
      ]);
    });
  });

  describe('CheckResultAndHandleErrors', () => {
    test('persists single error', () => {
      const result = {
        errors: [new GraphQLError('Test error')],
      };
      try {
        externalValueFromResult(
          result,
          { fieldName: 'responseKey' } as unknown as DelegationContext,
        );
      } catch (e) {
        expect(e.message).toEqual('Test error');
        expect(e.originalError.errors).toBeUndefined();
      }
    });

    test('persists single error with extensions', () => {
      const result = {
        errors: [new ErrorWithExtensions('Test error', 'UNAUTHENTICATED')],
      };
      try {
        externalValueFromResult(
          result,
          { fieldName: 'responseKey '} as unknown as DelegationContext,
        );
      } catch (e) {
        expect(e.message).toEqual('Test error');
        expect(e.extensions && e.extensions.code).toEqual('UNAUTHENTICATED');
        expect(e.originalError.errors).toBeUndefined();
      }
    });

    test('combines errors and persists the original errors', () => {
      const result = {
        errors: [new GraphQLError('Error1'), new GraphQLError('Error2')],
      };
      try {
        externalValueFromResult(
          result,
          { fieldName: 'reponseKey' } as unknown as DelegationContext,
        );
      } catch (e) {
        expect(e.message).toEqual('Error1\nError2');
        expect(e.originalError).toBeDefined();
        expect(e.originalError.errors).toBeDefined();
        expect(e.originalError.errors).toHaveLength(result.errors.length);
        result.errors.forEach((error, i) => {
          expect(e.originalError.errors[i]).toEqual(error);
        });
      }
    });

    // see https://github.com/ardatan/graphql-tools/issues/1641
    describe('it proxies errors with invalid paths', () => {
      test('it works with bare delegation', async () => {
        const typeDefs = `
          type Object {
            field1: String
            field2: String
          }
          type Query {
            object: Object
          }
        `;

        const unpathedError = locatedError(new Error('TestError'), undefined, ["_entities", 7, "name"]);

        const remoteSchema = makeExecutableSchema({
          typeDefs,
          resolvers: {
            Query: {
              object: () => ({
                field1: unpathedError,
                field2: 'data',
              })
            }
          }
        });

        const gatewaySchema = makeExecutableSchema({
          typeDefs,
          resolvers: {
            Query: {
              object: (_parent, _args, context, info) => delegateToSchema({
                schema: remoteSchema,
                operation: 'query',
                context,
                info,
              }),
            }
          },
        });

        const query = `{
          object {
            field1
            field2
          }
        }`;

        const expectedResult: ExecutionResult = {
          data: {
            object: {
              field1: null,
              field2: 'data',
            }
          },
          errors: [unpathedError],
        };

        const gatewayResult = await graphql({
          schema: gatewaySchema,
          source: query,
          fieldResolver: defaultMergedResolver,
        });

        expect(gatewayResult).toEqual(expectedResult);
      });

      test('it works with stitched schemas', async () => {
        const typeDefs = `
          type Object {
            field1: String
            field2: String
          }
          type Query {
            object: Object
          }
        `;

        const unpathedError = locatedError(new Error('TestError'), undefined, ["_entities", 7, "name"]);

        const remoteSchema = makeExecutableSchema({
          typeDefs,
          resolvers: {
            Query: {
              object: () => ({
                field1: unpathedError,
                field2: 'data',
              })
            }
          }
        });

        const gatewaySchema = stitchSchemas({
          subschemas: [remoteSchema],
        });

        const query = `{
          object {
            field1
            field2
          }
        }`;

        const expectedResult: ExecutionResult = {
          data: {
            object: {
              field1: null,
              field2: 'data',
            }
          },
          errors: [unpathedError],
        };

        const gatewayResult = await graphql(gatewaySchema, query);

        expect(gatewayResult).toEqual(expectedResult);
      });
    });
  });
});
