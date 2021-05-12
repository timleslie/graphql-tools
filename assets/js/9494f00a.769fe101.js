(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[3139],{5318:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return u}});var a=r(7378);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),m=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},s=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=m(r),u=n,k=c["".concat(o,".").concat(u)]||c[u]||d[u]||i;return r?a.createElement(k,p(p({ref:e},s),{},{components:r})):a.createElement(k,p({ref:e},s))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,p=new Array(i);p[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var m=2;m<i;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2007:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return s}});var a=r(9603),n=r(120),i=(r(7378),r(5318)),p={id:"import",title:"@graphql-tools/import",sidebar_label:"import"},l={unversionedId:"api/modules/import",id:"api/modules/import",isDocsHomePage:!1,title:"@graphql-tools/import",description:"- VisitedFilesMap",source:"@site/docs/api/modules/import_src.md",sourceDirName:"api/modules",slug:"/api/modules/import",permalink:"/docs/api/modules/import",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/import_src.md",version:"current",sidebar_label:"import",frontMatter:{id:"import",title:"@graphql-tools/import",sidebar_label:"import"},sidebar:"someSidebar",previous:{title:"@graphql-tools/graphql-tag-pluck",permalink:"/docs/api/modules/graphql-tag-pluck"},next:{title:"@graphql-tools/links",permalink:"/docs/api/modules/links"}},o=[{value:"Functions",id:"functions",children:[]},{value:"Type aliases",id:"type-aliases",children:[{value:"VisitedFilesMap",id:"visitedfilesmap",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"parseImportLine",id:"parseimportline",children:[]},{value:"processImport",id:"processimport",children:[]}]}],m={toc:o};function s(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/modules/import#visitedfilesmap"},"VisitedFilesMap"))),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/modules/import#parseimportline"},"parseImportLine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/modules/import#processimport"},"processImport"))),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"visitedfilesmap"},"VisitedFilesMap"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"VisitedFilesMap"),": ",(0,i.kt)("em",{parentName:"p"},"Map"),"<","string, Map","<","string, Set","<","DefinitionNode\\",">","\\",">","\\",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/import/src/index.ts#L62"},"packages/import/src/index.ts:62")),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"parseimportline"},"parseImportLine"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"parseImportLine"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"importLine"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"importLine")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"from")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"imports")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"),"[]")))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/import/src/index.ts#L329"},"packages/import/src/index.ts:329")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"processimport"},"processImport"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"processImport"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"filePath"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cwd?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"predefinedImports?"),": ",(0,i.kt)("em",{parentName:"p"},"Record"),"<","string, string\\",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"visitedFiles?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/import#visitedfilesmap"},(0,i.kt)("em",{parentName:"a"},"VisitedFilesMap")),"): DocumentNode"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filePath")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cwd")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"predefinedImports")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Record"),"<","string, string\\",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"visitedFiles")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/import#visitedfilesmap"},(0,i.kt)("em",{parentName:"a"},"VisitedFilesMap"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," DocumentNode"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/import/src/index.ts#L64"},"packages/import/src/index.ts:64")))}s.isMDXComponent=!0}}]);