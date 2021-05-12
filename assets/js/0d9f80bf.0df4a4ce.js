(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[387],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return i},kt:function(){return u}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(k,o(o({ref:t},i),{},{components:a})):r.createElement(k,o({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6732:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return i}});var r=a(9603),n=a(120),l=(a(7378),a(5318)),o={},s={unversionedId:"api/classes/loaders_module_src.moduleloader",id:"api/classes/loaders_module_src.moduleloader",isDocsHomePage:!1,title:"Class: ModuleLoader",description:"loaders/module/src.ModuleLoader",source:"@site/docs/api/classes/loaders_module_src.moduleloader.md",sourceDirName:"api/classes",slug:"/api/classes/loaders_module_src.moduleloader",permalink:"/docs/api/classes/loaders_module_src.moduleloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/loaders_module_src.moduleloader.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Class: MockStore",permalink:"/docs/api/classes/mock_src.mockstore"},next:{title:"Class: PrismaLoader",permalink:"/docs/api/classes/loaders_prisma_src.prismaloader"}},d=[{value:"Implements",id:"implements",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],p={toc:d};function i(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/loaders_module_src"},"loaders/module/src"),".ModuleLoader"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This loader loads documents and type definitions from a Node module")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const schema = await loadSchema('module:someModuleName#someNamedExport', {\n  loaders: [new ModuleLoader()],\n})\n")),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/modules/utils#universalloader"},(0,l.kt)("em",{parentName:"a"},"UniversalLoader")))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_module_src.moduleloader#constructor"},"constructor"))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_module_src.moduleloader#canload"},"canLoad")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_module_src.moduleloader#canloadsync"},"canLoadSync")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_module_src.moduleloader#load"},"load")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_module_src.moduleloader#loadsync"},"loadSync")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_module_src.moduleloader#loaderid"},"loaderId"))),(0,l.kt)("h2",{id:"constructors-1"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"+"," ",(0,l.kt)("strong",{parentName:"p"},"new ModuleLoader"),"(): ",(0,l.kt)("a",{parentName:"p",href:"loaders_module_src.moduleloader"},(0,l.kt)("em",{parentName:"a"},"ModuleLoader"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"loaders_module_src.moduleloader"},(0,l.kt)("em",{parentName:"a"},"ModuleLoader"))),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"canload"},"canLoad"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"canLoad"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<","boolean\\",">"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<","boolean\\",">"),(0,l.kt)("p",null,"Implementation of: UniversalLoader.canLoad"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L47"},"packages/loaders/module/src/index.ts:47")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"canloadsync"},"canLoadSync"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"canLoadSync"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Implementation of: UniversalLoader.canLoadSync"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L51"},"packages/loaders/module/src/index.ts:51")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"load"},"load"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"load"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,l.kt)("em",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#singlefileoptions"},(0,l.kt)("em",{parentName:"a"},"SingleFileOptions")),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,l.kt)("em",{parentName:"a"},"Source")),"\\",">"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/utils#singlefileoptions"},(0,l.kt)("em",{parentName:"a"},"SingleFileOptions")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,l.kt)("em",{parentName:"a"},"Source")),"\\",">"),(0,l.kt)("p",null,"Implementation of: UniversalLoader.load"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L55"},"packages/loaders/module/src/index.ts:55")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadsync"},"loadSync"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"loadSync"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),": ",(0,l.kt)("em",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#singlefileoptions"},(0,l.kt)("em",{parentName:"a"},"SingleFileOptions")),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,l.kt)("em",{parentName:"a"},"Source"))),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/utils#singlefileoptions"},(0,l.kt)("em",{parentName:"a"},"SingleFileOptions")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},(0,l.kt)("em",{parentName:"a"},"Source"))),(0,l.kt)("p",null,"Implementation of: UniversalLoader.loadSync"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L69"},"packages/loaders/module/src/index.ts:69")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loaderid"},"loaderId"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"loaderId"),"(): ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Implementation of: UniversalLoader.loaderId"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/module/src/index.ts#L43"},"packages/loaders/module/src/index.ts:43")))}i.isMDXComponent=!0}}]);