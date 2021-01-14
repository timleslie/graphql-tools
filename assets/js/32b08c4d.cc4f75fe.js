(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),s=(n(0),n(258)),i={id:"stitch-type-merging",title:"Type merging",sidebar_label:"Type merging"},o={unversionedId:"stitch-type-merging",id:"stitch-type-merging",isDocsHomePage:!1,title:"Type merging",description:"Type merging allows partial definitions of a type to exist in any subschema, all of which are merged into one unified type in the gateway schema. When querying for a merged type, the gateway smartly delegates portions of a request to each relevant subschema in dependency order, and then combines all results for the final return.",source:"@site/docs/stitch-type-merging.md",slug:"/stitch-type-merging",permalink:"/docs/stitch-type-merging",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/stitch-type-merging.md",version:"current",sidebar_label:"Type merging",sidebar:"someSidebar",previous:{title:"Combining schemas",permalink:"/docs/stitch-combining-schemas"},next:{title:"Directives SDL",permalink:"/docs/stitch-directives-sdl"}},c=[{value:"Basic example",id:"basic-example",children:[{value:"Types without a database",id:"types-without-a-database",children:[]},{value:"Null records",id:"null-records",children:[]}]},{value:"Merging flow",id:"merging-flow",children:[]},{value:"Batching",id:"batching",children:[]},{value:"Unidirectional merges",id:"unidirectional-merges",children:[]},{value:"Merged interfaces",id:"merged-interfaces",children:[]},{value:"Computed fields",id:"computed-fields",children:[]},{value:"Federation services",id:"federation-services",children:[]},{value:"Type resolvers",id:"type-resolvers",children:[{value:"Wrapped resolvers",id:"wrapped-resolvers",children:[]},{value:"Custom resolvers",id:"custom-resolvers",children:[]}]}],l={toc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Type merging allows ",Object(s.b)("em",{parentName:"p"},"partial definitions")," of a type to exist in any subschema, all of which are merged into one unified type in the gateway schema. When querying for a merged type, the gateway smartly delegates portions of a request to each relevant subschema in dependency order, and then combines all results for the final return."),Object(s.b)("p",null,"Type merging is now the preferred method of including GraphQL types across subschemas, replacing the need for ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions"}),"schema extensions")," (though does not preclude their use). To migrate from schema extensions, simply enable type merging and then start replacing extensions one by one with merges."),Object(s.b)("h2",{id:"basic-example"},"Basic example"),Object(s.b)("p",null,"Type merging allows each subschema to provide subsets of a type that it has data for. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\n\nlet postsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      message: String!\n      author: User!\n    }\n\n    type User {\n      id: ID!\n      posts: [Post]!\n    }\n\n    type Query {\n      postById(id: ID!): Post\n      postUserById(id: ID!): User\n    }\n  `\n});\n\nlet usersSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String!\n    }\n\n    type Query {\n      userById(id: ID!): User\n    }\n  `\n});\n\n// just mock the schemas for now to make them return dummy data\npostsSchema = addMocksToSchema({ schema: postsSchema });\nusersSchema = addMocksToSchema({ schema: usersSchema });\n")),Object(s.b)("p",null,"Note that both services define a ",Object(s.b)("em",{parentName:"p"},"different")," ",Object(s.b)("inlineCode",{parentName:"p"},"User")," type. While the users service manages information about user accounts, the posts service simply provides posts associated with a user ID. Now we just have to configure the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," type to be merged. Type merging requires a query from each subschema to provide its version of a merged type:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { stitchSchemas } from '@graphql-tools/stitch';\n\nconst gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: postsSchema,\n      merge: {\n        User: {\n          fieldName: 'postUserById',\n          selectionSet: '{ id }',\n          args: (originalObject) => ({ id: originalObject.id }),\n        }\n      }\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          fieldName: 'userById',\n          selectionSet: '{ id }',\n          args: (originalObject) => ({ id: originalObject.id }),\n        }\n      }\n    },\n  ],\n  mergeTypes: true // << default in v7\n});\n")),Object(s.b)("p",null,"That's it! Under the subschema config ",Object(s.b)("inlineCode",{parentName:"p"},"merge")," option, each merged type provides a query for accessing its respective partial type (services without an expression of the type may omit this). The query settings are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"fieldName")," specifies a root field used to request the local type."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"selectionSet")," specifies one or more key fields required from other services to perform this query. Query planning will automatically resolve these fields from other subschemas in dependency order."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"args")," formats the initial object representation into query arguments.")),Object(s.b)("p",null,"See related ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gmac/schema-stitching-handbook/tree/master/type-merging-single-records"}),"handbook example")," for a working demonstration of this setup. This JavaScript-based syntax may also be written directly into schema type definitions using the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-directives-sdl"}),"stitching directives SDL"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type User @key(selectionSet: "{ id }") {\n  id: ID!\n  email: String!\n}\n\ntype Query {\n  userById(id: ID!): User @merge(keyField: "id")\n}\n')),Object(s.b)("p",null,"Regardless of how this merge configuration is written, it allows type merging to smartly resolve a complete ",Object(s.b)("inlineCode",{parentName:"p"},"User"),", regardless of which service provides the initial representation of it. We now have a combined ",Object(s.b)("inlineCode",{parentName:"p"},"User")," type in the gateway schema:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  id: ID!\n  email: String!\n  posts: [Post]!\n}\n")),Object(s.b)("h3",{id:"types-without-a-database"},"Types without a database"),Object(s.b)("p",null,"It's logical to assume that each ",Object(s.b)("inlineCode",{parentName:"p"},"postUserById")," query has a backing database table used to lookup the requested user ID. However, this is frequently not the case. Here's a simple example that demonstrates how ",Object(s.b)("inlineCode",{parentName:"p"},"User.posts")," can be resolved without the posts service having any formal database concept of a User:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const postsData = [\n  { id: '1', message: 'Hello', authorId: '7' },\n  { id: '2', message: 'Goodbye', authorId: '5' },\n];\n\nconst postsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      message: String!\n      author: User!\n    }\n\n    type User {\n      id: ID!\n      posts: [Post]!\n    }\n\n    type Query {\n      postById(id: ID!): Post\n      postUserById(id: ID!): User\n    }\n  `,\n  resolvers: {\n    Query: {\n      postById: (root, { id }) => postsData.find(post => post.id === id),\n      postUserById: (root, { id }) => ({ id }),\n    },\n    User: {\n      posts(user) {\n        return postsData.filter(post => post.authorId === user.id);\n      }\n    }\n  }\n});\n")),Object(s.b)("p",null,"In this example, the ",Object(s.b)("inlineCode",{parentName:"p"},"postUserById")," resolver simply converts a submitted user ID into stub record that gets resolved as the local ",Object(s.b)("inlineCode",{parentName:"p"},"User")," type."),Object(s.b)("h3",{id:"null-records"},"Null records"),Object(s.b)("p",null,"The above example will always resolve a stubbed ",Object(s.b)("inlineCode",{parentName:"p"},"User")," record for ",Object(s.b)("em",{parentName:"p"},"any")," requested ID. For example, requesting ID ",Object(s.b)("inlineCode",{parentName:"p"},"7")," (which has no associated posts) would return:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{ id: '7', posts: [] }\n")),Object(s.b)("p",null,"This fabricated record fulfills the not-null requirement of the ",Object(s.b)("inlineCode",{parentName:"p"},"posts:[Post]!")," field. However, it also makes the posts service awkwardly responsible for data it knows only by omission. A cleaner solution may be to loosen schema nullability down to ",Object(s.b)("inlineCode",{parentName:"p"},"posts:[Post]"),", and then return ",Object(s.b)("inlineCode",{parentName:"p"},"null")," for unknown user IDs without associated posts. Null is a valid mergable object as long as the unique fields it fulfills are nullable. See the related ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gmac/schema-stitching-handbook/tree/master/type-merging-nullables"}),"handbook example")," for a detailed explanation."),Object(s.b)("h2",{id:"merging-flow"},"Merging flow"),Object(s.b)("p",null,"To better understand the flow of merged object calls, let's break down the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#basic-example"}),"basic example")," above:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Schema Stitching flow",src:n(316).default})),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"A request is submitted to the gateway schema that selects fields from multiple subschemas."),Object(s.b)("li",{parentName:"ol"},"The gateway fetches the resource that was ",Object(s.b)("strong",{parentName:"li"},"explicitly")," requested (",Object(s.b)("inlineCode",{parentName:"li"},"userById"),"), known as the ",Object(s.b)("em",{parentName:"li"},"original object"),". This subquery is filtered to match its subschema, and adds the ",Object(s.b)("inlineCode",{parentName:"li"},"selectionSet")," of other subschemas that must ",Object(s.b)("strong",{parentName:"li"},"implicitly")," provide data for the request."),Object(s.b)("li",{parentName:"ol"},"The original object returns with fields requested by the user and those necessary to query other subschemas, per their ",Object(s.b)("inlineCode",{parentName:"li"},"selectionSet"),"."),Object(s.b)("li",{parentName:"ol"},"Merge config builds subsequent queries for ",Object(s.b)("em",{parentName:"li"},"merger objects")," that will provide missing data. These subqueries are built using ",Object(s.b)("inlineCode",{parentName:"li"},"fieldName")," with arguments derived from the original object."),Object(s.b)("li",{parentName:"ol"},"Subqueries for merger objects are initiated; again filtering each query to match its intended subschema, and adding the ",Object(s.b)("inlineCode",{parentName:"li"},"selectionSet")," of other subschemas","\u2020",". Merger queries run in parallel when possible."),Object(s.b)("li",{parentName:"ol"},"Merger objects are returned with additional fields requested by the user and those necessary to query other subschemas, per their ",Object(s.b)("inlineCode",{parentName:"li"},"selectionSet"),"\u2020","."),Object(s.b)("li",{parentName:"ol"},"Merger objects are applied to the original object, building an aggregate result."),Object(s.b)("li",{parentName:"ol"},"The gateway responds with the original query selection applied to the aggregate merge result.")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"\u2020"," Note: merger subqueries may still collect unique ",Object(s.b)("inlineCode",{parentName:"em"},"selectionSet")," fields. Given subschemas A, B, and C, it's perfectly valid for schema C to specify fields from both A and B in its selection set. When this happens, resolving C will simply be deferred until the merger of A and B can be provided as its original object.")),Object(s.b)("h2",{id:"batching"},"Batching"),Object(s.b)("p",null,"The ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#basic-example"}),"basic example")," above queries for a single record each time it performs a merge, which is suboptimal when merging arrays of objects. Instead, we should batch many record requests together using array queries that may fetch many partials at once, the schema for which would be:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"postUsersByIds(ids: [ID!]!): [User]!\nusersByIds(ids: [ID!]!): [User]!\n")),Object(s.b)("p",null,"Once a service provides an array query for a merged type, batching may be enabled by adding a ",Object(s.b)("inlineCode",{parentName:"p"},"key")," method that picks a key from each partial record. The ",Object(s.b)("inlineCode",{parentName:"p"},"argsFromKeys")," method then transforms the list of picked keys into query arguments:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: postsSchema,\n      merge: {\n        User: {\n          fieldName: 'postUsersByIds',\n          selectionSet: '{ id }',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          fieldName: 'usersByIds',\n          selectionSet: '{ id }',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n  ]\n});\n")),Object(s.b)("p",null,"A ",Object(s.b)("inlineCode",{parentName:"p"},"valuesFromResults")," method may also be provided to map the raw query result into the batched set. With this array optimization in place, we'll now only perform one query ",Object(s.b)("em",{parentName:"p"},"per merged field")," (versus per record). However, requesting multiple merged fields will still perform a query each. To optimize this further, we can enable ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gmac/schema-stitching-handbook/wiki/Batching-Arrays-and-Queries#what-is-query-batching"}),"query batching"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: postsSchema,\n  batch: true,\n  batchingOptions: { ... },\n  merge: {\n    User: {\n      fieldName: 'postUsersByIds',\n      selectionSet: '{ id }',\n      key: ({ id }) => id,\n      argsFromKeys: (ids) => ({ ids }),\n    }\n  }\n}\n")),Object(s.b)("p",null,"Query batching will collect all queries made during an execution cycle and combine them into a single GraphQL operation to send to the subschema. This consolidates networking with remote services, and improves database batching within the underlying service implementation. You may customize query batching behavior with ",Object(s.b)("inlineCode",{parentName:"p"},"batchingOptions"),"\u2014","this is particularly useful for providing ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/dataloader#new-dataloaderbatchloadfn--options"}),"DataLoader options"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"batchingOptions?: {\n  dataLoaderOptions?: DataLoader.Options<K, V, C>;\n  extensionsReducer?: (mergedExtensions: Record<string, any>, executionParams: ExecutionParams) => Record<string, any>;\n}\n")),Object(s.b)("p",null,"Using both array batching and query batching together is recommended, and should flatten transactional costs down to one query per subservice per generation of data. See related ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gmac/schema-stitching-handbook/tree/master/type-merging-arrays"}),"handbook example")," for a working demonstration of this process."),Object(s.b)("h2",{id:"unidirectional-merges"},"Unidirectional merges"),Object(s.b)("p",null,"Type merging allows services to provide the bare minimum of fields they possess data for","\u2014","and this is frequently nothing but an ID. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let postsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      message: String!\n      author: User!\n    }\n\n    # ID-only stub...\n    type User {\n      id: ID!\n    }\n\n    type Query {\n      postById(id: ID!): Post\n    }\n  `\n});\n\nlet usersSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String!\n    }\n\n    type Query {\n      usersByIds(ids: [ID!]!): [User]!\n    }\n  `\n});\n")),Object(s.b)("p",null,"When a stub type like the one above includes no unique fields beyond a key shared across services, then the type may be considered ",Object(s.b)("em",{parentName:"p"},"unidirectional")," to the service","\u2014","that is, the service holds no unique data that would require an inbound request to fetch it. In these cases, ",Object(s.b)("inlineCode",{parentName:"p"},"merge")," config may be omitted entirely for the stub type:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: postsSchema,\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          selectionSet: '{ id }',\n          fieldName: 'usersByIds',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n  ]\n});\n")),Object(s.b)("p",null,"Stubbed types are quick and easy to setup and effectively work as automatic ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions"}),"schema extensions")," (in fact, you might not need extensions). A stubbed type may always be expanded with additional service-specific fields (see the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#basic-example"}),"basic example"),"), however it requires a query in ",Object(s.b)("inlineCode",{parentName:"p"},"merge")," config as soon as it offers unique data."),Object(s.b)("h2",{id:"merged-interfaces"},"Merged interfaces"),Object(s.b)("p",null,"Type merging will automatically consolidate interfaces of the same name across subschemas, allowing each subschema to contribute fields. This is extremely useful when the complete interface of fields is not available in all subschemas","\u2014","each subschema simply provides the minimum set of fields that it contains:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const postsSchema = makeExecutableSchema({\n  typeDefs: `\n    interface HomepageSlot {\n      id: ID!\n      title: String!\n      url: URL!\n    }\n\n    type Post implements HomepageSlot {\n      id: ID!\n      title: String!\n      url: URL!\n    }\n  `\n});\n\nconst layoutsSchema = makeExecutableSchema({\n  typeDefs: `\n    interface HomepageSlot {\n      id: ID!\n    }\n\n    type Post implements HomepageSlot {\n      id: ID!\n    }\n\n    type Section implements HomepageSlot {\n      id: ID!\n      title: String!\n      url: URL!\n      posts: [Post!]!\n    }\n\n    type Homepage {\n      slots: [HomepageSlot]!\n    }\n  `\n});\n")),Object(s.b)("p",null,"In the above, both ",Object(s.b)("inlineCode",{parentName:"p"},"Post")," and ",Object(s.b)("inlineCode",{parentName:"p"},"Section")," will have a common interface of ",Object(s.b)("inlineCode",{parentName:"p"},"{ id title url }")," in the gateway schema. The difference in interface fields between the gateway schema and the layouts subschema will automatically be expanded into typed fragments for compatibility. See related ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gmac/schema-stitching-handbook/tree/master/type-merging-interfaces"}),"handbook example")," for a working demonstration."),Object(s.b)("h2",{id:"computed-fields"},"Computed fields"),Object(s.b)("p",null,"APIs may leverage the gateway layer to transport field dependencies from one subservice to another while resolving data. This is useful when a field in one subschema requires one or more fields from other subschemas to be resolved, as described in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/#requires"}),"federation spec"),". For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const productsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Product {\n      id: ID!\n      price: Float!\n      weight: Int!\n    }\n\n    type Query {\n      productsByIds(ids: [ID!]!): [Product]!\n    }\n  `,\n  resolvers: { ... },\n});\n\nconst storefrontsSchema = makeExecutableSchema({\n  typeDefs: `\n    directive @computed(selectionSet: String!) on FIELD_DEFINITION\n\n    type Storefront {\n      id: ID!\n      availableProducts: [Product]!\n    }\n\n    type Product {\n      id: ID!\n      shippingEstimate: Float! @computed(selectionSet: \"{ price weight }\")\n      deliveryService: String! @computed(selectionSet: \"{ weight }\")\n    }\n\n    input ProductInput {\n      id: ID!\n      price: Float\n      weight: Int\n    }\n\n    type Query {\n      storefront(id: ID!): Storefront\n      _products(representations: [ProductInput!]!): [Product]!\n    }\n  `,\n  resolvers: {\n    Query: {\n      storefront: (root, { id }) => ({ id, availableProducts: [{ id: '23' }] }),\n      _products: (root, { representations }) => representations,\n    },\n    Product: {\n      shippingEstimate: (rep) => rep.price > 50 ? 0 : rep.weight / 2,\n      deliveryService: (rep) => rep.weight > 50 ? 'FREIGHT' : 'POSTAL',\n    }\n  }\n});\n\nconst gatewaySchema = stitchSchemas({\n  subschemas: [{\n    schema: productsSchema,\n    merge: {\n      Product: {\n        selectionSet: '{ id }',\n        fieldName: 'productsByIds',\n        key: ({ id }) => id,\n        args: (ids) => ({ ids }),\n      }\n    }\n  }, {\n    schema: storefrontsSchema,\n    merge: {\n      Product: {\n        selectionSet: '{ id }',\n        fieldName: '_products',\n        key: ({ id, price, weight }) => ({ id, price, weight }),\n        argsFromKeys: (representations) => ({ representations }),\n      }\n    }\n  }]\n});\n")),Object(s.b)("p",null,"In the above, the ",Object(s.b)("inlineCode",{parentName:"p"},"shippingEstimate")," and ",Object(s.b)("inlineCode",{parentName:"p"},"deliveryService")," fields are marked with ",Object(s.b)("inlineCode",{parentName:"p"},"@computed")," directives (see ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-directives-sdl"}),"stitching directives SDL"),"), which specify additional ",Object(s.b)("em",{parentName:"p"},"field-level dependencies")," required to resolve these specific fields beyond the ",Object(s.b)("inlineCode",{parentName:"p"},"Product")," type's base selection set. When a computed field appears in a query, the gateway will collect that field's dependencies from other subschemas so they may be sent as input with the request for the computed field(s)."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"@computed")," SDL directive is a convenience syntax for static configuration that can be written as:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: storefrontsSchema,\n  merge: {\n    Product: {\n      selectionSet: '{ id }',\n      computedFields: {\n        shippingEstimate: { selectionSet: '{ price weight }' },\n        deliveryService: { selectionSet: '{ weight }' },\n      },\n      fieldName: '_products',\n      key: ({ id, price, weight }) => ({ id, price, weight }),\n      argsFromKeys: (representations) => ({ representations }),\n    }\n  }\n}\n")),Object(s.b)("p",null,"The main disadvantage of computed fields is that they cannot be resolved independently from the stitched gateway. Tolerance for this subservice inconsistency is largely dependent on your own service architecture. An imperfect solution is to deprecate all computed fields within a subschema, and then normalize their behavior in the gateway schema with a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema-wrapping#grooming"}),Object(s.b)("inlineCode",{parentName:"a"},"RemoveObjectFieldDeprecations"))," transform. See related ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gmac/schema-stitching-handbook/tree/master/computed-fields"}),"handbook example"),"."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Implementation note:")," to facilitate field-level dependencies, computed and non-computed fields of a type in the same subservice are automatically split apart into separate schemas. This assures that computed fields are always requested directly by the gateway with their dependencies provided. However, it also means that computed and non-computed fields may require separate resolution steps. You may enable ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#batching"}),"query batching")," to consolidate requests whenever possible.")),Object(s.b)("h2",{id:"federation-services"},"Federation services"),Object(s.b)("p",null,"If you're familiar with ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"}),"Apollo Federation"),", then you may notice that the above pattern of computed fields looks similar to the ",Object(s.b)("inlineCode",{parentName:"p"},"_entities")," service design of the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"}),"Apollo Federation specification"),". Federation resources can be included in a stitched gateway when integrating with third-party services or in the process of a migration. See related ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gmac/schema-stitching-handbook/tree/master/federation-services"}),"handbook example")," for specifics."),Object(s.b)("h2",{id:"type-resolvers"},"Type resolvers"),Object(s.b)("p",null,"Similar to how GraphQL objects implement field resolvers, merging implements type resolvers for fetching and merging partial types. These resolvers are configured automatically, though advanced use cases may want to customize some or all of their default behavior. Merged type resolver methods are of type ",Object(s.b)("inlineCode",{parentName:"p"},"MergedTypeResolver"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type MergedTypeResolver = (\n  originalObject: any, // initial object being merged onto\n  context: Record<string, any>, // gateway request context\n  info: GraphQLResolveInfo, // gateway request info\n  subschema: SubschemaConfig, // target subschema configuration\n  selectionSet: SelectionSetNode, // target subschema selection\n  key?: any // the batch key being requested\n) => any;\n")),Object(s.b)("h3",{id:"wrapped-resolvers"},"Wrapped resolvers"),Object(s.b)("p",null,"Frequently we want to augment type resolution without fundamentally changing its behavior. This can be done by building a default resolver function, and then wrapping it in a custom implementation. For example, adding ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/msiebuhr/node-statsd-client"}),"statsd instrumentation")," might look like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createMergedTypeResolver, stitchSchemas } from '@graphql-tools/stitch';\nimport { SDC } from 'statsd-client';\n\nconst statsd = new SDC({ ... });\n\nfunction createInstrumentedMergedTypeResolver(resolverOptions) {\n  const defaultResolve = createMergedTypeResolver(resolverOptions);\n  return async (obj, ctx, info, cfg, sel, key) => {\n    const startTime = process.hrtime();\n    try {\n      return await defaultResolve(obj, ctx, info, cfg, sel, key);\n    } finally {\n      statsd.timing(info.path.join('.'), process.hrtime(startTime));\n    }\n  };\n}\n\nconst schema = stitchSchemas({\n  subschemas: [{\n    schema: widgetsSchema,\n    merge: {\n      Widget: {\n        selectionSet: '{ id }',\n        key: ({ id }) => id,\n        resolve: createInstrumentedMergedTypeResolver({\n          fieldName: 'widgets',\n          argsFromKeys: (ids) => ({ ids }),\n        }),\n      }\n    }\n  }]\n});\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"createMergedTypeResolver")," helper accepts a subset of options that would otherwise be included directly on merged type configuration: ",Object(s.b)("inlineCode",{parentName:"p"},"fieldName"),", ",Object(s.b)("inlineCode",{parentName:"p"},"args"),", ",Object(s.b)("inlineCode",{parentName:"p"},"argsFromKeys"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"valuesFromResults"),". A default MergedTypeResolver function is returned, and may be wrapped with additional behavior and then assigned as a custom ",Object(s.b)("inlineCode",{parentName:"p"},"resolve")," option for the type."),Object(s.b)("h3",{id:"custom-resolvers"},"Custom resolvers"),Object(s.b)("p",null,"Alternatively, you may provide completely custom resolver implementations for fetching types in non-standard ways. For example, fetching a merged type from a REST API might look like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: widgetsSchema,\n  merge: {\n    Widget: {\n      selectionSet: '{ id }',\n      resolve: async (originalObject) => {\n        const mergeObject = await fetchViaREST(originalObject.id);\n        return { ...originalObject, ...mergeObject };\n      }\n    }\n  }\n}\n")),Object(s.b)("p",null,"When incorporating plain objects, always extend the provided ",Object(s.b)("inlineCode",{parentName:"p"},"originalObject")," to retain internal merge configuration. You may also return direct calls to ",Object(s.b)("inlineCode",{parentName:"p"},"delegateToSchema")," and ",Object(s.b)("inlineCode",{parentName:"p"},"batchDelegateToSchema")," (as described for ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions#basic-example"}),"schema extensions"),"), however","\u2014","always provide these delegation methods with a ",Object(s.b)("inlineCode",{parentName:"p"},"skipTypeMerging: true")," option to prevent infinite recursion."))}p.isMDXComponent=!0},258:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,h=d["".concat(i,".").concat(b)]||d[b]||m[b]||s;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},316:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/stitching-flow-03e3b647f107414635db52ae8cda8270.png"}}]);