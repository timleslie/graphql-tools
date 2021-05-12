(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[954],{5318:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return u}});var p=t(7378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);a&&(p=p.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,p,r=function(e,a){if(null==e)return{};var t,p,r={},n=Object.keys(e);for(p=0;p<n.length;p++)t=n[p],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)t=n[p],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=p.createContext({}),m=function(e){var a=p.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=m(e.components);return p.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return p.createElement(p.Fragment,{},a)}},o=p.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),o=m(t),u=r,k=o["".concat(l,".").concat(u)]||o[u]||d[u]||n;return t?p.createElement(k,i(i({ref:a},c),{},{components:t})):p.createElement(k,i({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=o;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<n;m++)i[m]=t[m];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}o.displayName="MDXCreateElement"},1410:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var p=t(9603),r=t(120),n=(t(7378),t(5318)),i={},s={unversionedId:"api/interfaces/utils_src.schemamapper",id:"api/interfaces/utils_src.schemamapper",isDocsHomePage:!1,title:"Interface: SchemaMapper",description:"utils/src.SchemaMapper",source:"@site/docs/api/interfaces/utils_src.schemamapper.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/utils_src.schemamapper",permalink:"/docs/api/interfaces/utils_src.schemamapper",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/interfaces/utils_src.schemamapper.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Interface: Request",permalink:"/docs/api/interfaces/utils_src.request"},next:{title:"Interface: SchemaPrintOptions",permalink:"/docs/api/interfaces/utils_src.schemaprintoptions"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"MapperKind.ABSTRACT_TYPE",id:"mapperkindabstract_type",children:[]},{value:"MapperKind.ARGUMENT",id:"mapperkindargument",children:[]},{value:"MapperKind.COMPOSITE_FIELD",id:"mapperkindcomposite_field",children:[]},{value:"MapperKind.COMPOSITE_TYPE",id:"mapperkindcomposite_type",children:[]},{value:"MapperKind.DIRECTIVE",id:"mapperkinddirective",children:[]},{value:"MapperKind.ENUM_TYPE",id:"mapperkindenum_type",children:[]},{value:"MapperKind.ENUM_VALUE",id:"mapperkindenum_value",children:[]},{value:"MapperKind.FIELD",id:"mapperkindfield",children:[]},{value:"MapperKind.INPUT_OBJECT_FIELD",id:"mapperkindinput_object_field",children:[]},{value:"MapperKind.INPUT_OBJECT_TYPE",id:"mapperkindinput_object_type",children:[]},{value:"MapperKind.INTERFACE_FIELD",id:"mapperkindinterface_field",children:[]},{value:"MapperKind.INTERFACE_TYPE",id:"mapperkindinterface_type",children:[]},{value:"MapperKind.MUTATION",id:"mapperkindmutation",children:[]},{value:"MapperKind.MUTATION_ROOT_FIELD",id:"mapperkindmutation_root_field",children:[]},{value:"MapperKind.OBJECT_FIELD",id:"mapperkindobject_field",children:[]},{value:"MapperKind.OBJECT_TYPE",id:"mapperkindobject_type",children:[]},{value:"MapperKind.QUERY",id:"mapperkindquery",children:[]},{value:"MapperKind.QUERY_ROOT_FIELD",id:"mapperkindquery_root_field",children:[]},{value:"MapperKind.ROOT_FIELD",id:"mapperkindroot_field",children:[]},{value:"MapperKind.ROOT_OBJECT",id:"mapperkindroot_object",children:[]},{value:"MapperKind.SCALAR_TYPE",id:"mapperkindscalar_type",children:[]},{value:"MapperKind.SUBSCRIPTION",id:"mapperkindsubscription",children:[]},{value:"MapperKind.SUBSCRIPTION_ROOT_FIELD",id:"mapperkindsubscription_root_field",children:[]},{value:"MapperKind.TYPE",id:"mapperkindtype",children:[]},{value:"MapperKind.UNION_TYPE",id:"mapperkindunion_type",children:[]}]}],m={toc:l};function c(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,p.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/utils_src"},"utils/src"),".SchemaMapper"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.abstract_type"},"MapperKind.ABSTRACT","_","TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.argument"},"MapperKind.ARGUMENT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.composite_field"},"MapperKind.COMPOSITE","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.composite_type"},"MapperKind.COMPOSITE","_","TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.directive"},"MapperKind.DIRECTIVE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.enum_type"},"MapperKind.ENUM","_","TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.enum_value"},"MapperKind.ENUM","_","VALUE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.field"},"MapperKind.FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.input_object_field"},"MapperKind.INPUT","_","OBJECT","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.input_object_type"},"MapperKind.INPUT","_","OBJECT","_","TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.interface_field"},"MapperKind.INTERFACE","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.interface_type"},"MapperKind.INTERFACE","_","TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.mutation"},"MapperKind.MUTATION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.mutation_root_field"},"MapperKind.MUTATION","_","ROOT","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.object_field"},"MapperKind.OBJECT","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.object_type"},"MapperKind.OBJECT","_","TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.query"},"MapperKind.QUERY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.query_root_field"},"MapperKind.QUERY","_","ROOT","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.root_field"},"MapperKind.ROOT","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.root_object"},"MapperKind.ROOT","_","OBJECT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.scalar_type"},"MapperKind.SCALAR","_","TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.subscription"},"MapperKind.SUBSCRIPTION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.subscription_root_field"},"MapperKind.SUBSCRIPTION","_","ROOT","_","FIELD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.type"},"MapperKind.TYPE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils_src.schemamapper#mapperkind.union_type"},"MapperKind.UNION","_","TYPE"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"mapperkindabstract_type"},"MapperKind.ABSTRACT","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.ABSTRACT","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#abstracttypemapper"},(0,n.kt)("em",{parentName:"a"},"AbstractTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L441"},"packages/utils/src/Interfaces.ts:441")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindargument"},"MapperKind.ARGUMENT"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.ARGUMENT"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#argumentmapper"},(0,n.kt)("em",{parentName:"a"},"ArgumentMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L457"},"packages/utils/src/Interfaces.ts:457")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindcomposite_field"},"MapperKind.COMPOSITE","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.COMPOSITE","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#fieldmapper"},(0,n.kt)("em",{parentName:"a"},"FieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L456"},"packages/utils/src/Interfaces.ts:456")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindcomposite_type"},"MapperKind.COMPOSITE","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.COMPOSITE","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#compositetypemapper"},(0,n.kt)("em",{parentName:"a"},"CompositeTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L438"},"packages/utils/src/Interfaces.ts:438")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkinddirective"},"MapperKind.DIRECTIVE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.DIRECTIVE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#directivemapper"},(0,n.kt)("em",{parentName:"a"},"DirectiveMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L459"},"packages/utils/src/Interfaces.ts:459")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindenum_type"},"MapperKind.ENUM","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.ENUM","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#enumtypemapper"},(0,n.kt)("em",{parentName:"a"},"EnumTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L437"},"packages/utils/src/Interfaces.ts:437")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindenum_value"},"MapperKind.ENUM","_","VALUE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.ENUM","_","VALUE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#enumvaluemapper"},(0,n.kt)("em",{parentName:"a"},"EnumValueMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L448"},"packages/utils/src/Interfaces.ts:448")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindfield"},"MapperKind.FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#genericfieldmapper"},(0,n.kt)("em",{parentName:"a"},"GenericFieldMapper")),"<","GraphQLInputFieldConfig ","|"," GraphQLFieldConfig","<","any, any, { ","[argName: string]",": ",(0,n.kt)("em",{parentName:"p"},"any"),";  }\\",">","\\",">"),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L449"},"packages/utils/src/Interfaces.ts:449")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindinput_object_field"},"MapperKind.INPUT","_","OBJECT","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.INPUT","_","OBJECT","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#inputfieldmapper"},(0,n.kt)("em",{parentName:"a"},"InputFieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L458"},"packages/utils/src/Interfaces.ts:458")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindinput_object_type"},"MapperKind.INPUT","_","OBJECT","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.INPUT","_","OBJECT","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#inputobjecttypemapper"},(0,n.kt)("em",{parentName:"a"},"InputObjectTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L440"},"packages/utils/src/Interfaces.ts:440")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindinterface_field"},"MapperKind.INTERFACE","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.INTERFACE","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#fieldmapper"},(0,n.kt)("em",{parentName:"a"},"FieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L455"},"packages/utils/src/Interfaces.ts:455")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindinterface_type"},"MapperKind.INTERFACE","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.INTERFACE","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#interfacetypemapper"},(0,n.kt)("em",{parentName:"a"},"InterfaceTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L443"},"packages/utils/src/Interfaces.ts:443")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindmutation"},"MapperKind.MUTATION"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.MUTATION"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#objecttypemapper"},(0,n.kt)("em",{parentName:"a"},"ObjectTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L446"},"packages/utils/src/Interfaces.ts:446")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindmutation_root_field"},"MapperKind.MUTATION","_","ROOT","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.MUTATION","_","ROOT","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#fieldmapper"},(0,n.kt)("em",{parentName:"a"},"FieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L453"},"packages/utils/src/Interfaces.ts:453")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindobject_field"},"MapperKind.OBJECT","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.OBJECT","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#fieldmapper"},(0,n.kt)("em",{parentName:"a"},"FieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L450"},"packages/utils/src/Interfaces.ts:450")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindobject_type"},"MapperKind.OBJECT","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.OBJECT","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#objecttypemapper"},(0,n.kt)("em",{parentName:"a"},"ObjectTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L439"},"packages/utils/src/Interfaces.ts:439")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindquery"},"MapperKind.QUERY"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.QUERY"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#objecttypemapper"},(0,n.kt)("em",{parentName:"a"},"ObjectTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L445"},"packages/utils/src/Interfaces.ts:445")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindquery_root_field"},"MapperKind.QUERY","_","ROOT","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.QUERY","_","ROOT","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#fieldmapper"},(0,n.kt)("em",{parentName:"a"},"FieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L452"},"packages/utils/src/Interfaces.ts:452")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindroot_field"},"MapperKind.ROOT","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.ROOT","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#fieldmapper"},(0,n.kt)("em",{parentName:"a"},"FieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L451"},"packages/utils/src/Interfaces.ts:451")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindroot_object"},"MapperKind.ROOT","_","OBJECT"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.ROOT","_","OBJECT"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#objecttypemapper"},(0,n.kt)("em",{parentName:"a"},"ObjectTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L444"},"packages/utils/src/Interfaces.ts:444")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindscalar_type"},"MapperKind.SCALAR","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.SCALAR","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#scalartypemapper"},(0,n.kt)("em",{parentName:"a"},"ScalarTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L436"},"packages/utils/src/Interfaces.ts:436")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindsubscription"},"MapperKind.SUBSCRIPTION"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.SUBSCRIPTION"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#objecttypemapper"},(0,n.kt)("em",{parentName:"a"},"ObjectTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L447"},"packages/utils/src/Interfaces.ts:447")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindsubscription_root_field"},"MapperKind.SUBSCRIPTION","_","ROOT","_","FIELD"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.SUBSCRIPTION","_","ROOT","_","FIELD"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#fieldmapper"},(0,n.kt)("em",{parentName:"a"},"FieldMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L454"},"packages/utils/src/Interfaces.ts:454")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindtype"},"MapperKind.TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#namedtypemapper"},(0,n.kt)("em",{parentName:"a"},"NamedTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L435"},"packages/utils/src/Interfaces.ts:435")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapperkindunion_type"},"MapperKind.UNION","_","TYPE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"MapperKind.UNION","_","TYPE"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#uniontypemapper"},(0,n.kt)("em",{parentName:"a"},"UnionTypeMapper"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L442"},"packages/utils/src/Interfaces.ts:442")))}c.isMDXComponent=!0}}]);