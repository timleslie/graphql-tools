(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[5363],{5318:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8540:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(9603),a=t(120),i=(t(7378),t(5318)),o={id:"webpack-loader-runtime",title:"@graphql-tools/webpack-loader-runtime",sidebar_label:"webpack-loader-runtime"},u={unversionedId:"api/modules/webpack-loader-runtime",id:"api/modules/webpack-loader-runtime",isDocsHomePage:!1,title:"@graphql-tools/webpack-loader-runtime",description:"- uniqueCode",source:"@site/docs/api/modules/webpack_loader_runtime_src.md",sourceDirName:"api/modules",slug:"/api/modules/webpack-loader-runtime",permalink:"/docs/api/modules/webpack-loader-runtime",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/webpack_loader_runtime_src.md",version:"current",sidebar_label:"webpack-loader-runtime",frontMatter:{id:"webpack-loader-runtime",title:"@graphql-tools/webpack-loader-runtime",sidebar_label:"webpack-loader-runtime"},sidebar:"someSidebar",previous:{title:"@graphql-tools/webpack-loader",permalink:"/docs/api/modules/webpack-loader"},next:{title:"@graphql-tools/wrap",permalink:"/docs/api/modules/wrap"}},l=[{value:"Functions",id:"functions",children:[]},{value:"Variables",id:"variables",children:[{value:"uniqueCode",id:"uniquecode",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"useUnique",id:"useunique",children:[]}]}],c={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/modules/webpack-loader-runtime#uniquecode"},"uniqueCode"))),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/modules/webpack-loader-runtime#useunique"},"useUnique"))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"uniquecode"},"uniqueCode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"uniqueCode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"\"\\n  var names = {};\\n  function unique(defs) {\\n    return defs.filter(function (def) {\\n      if (def.kind !== 'FragmentDefinition') return true;\\n      var name = def.name.value;\\n      if (names[name]) {\\n        return false;\\n      } else {\\n        names[name] = true;\\n        return true;\\n      }\\n    });\\n  };\\n\"")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/webpack-loader-runtime/src/index.ts#L3"},"packages/webpack-loader-runtime/src/index.ts:3")),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"useunique"},"useUnique"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useUnique"),"(): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"defs"),": DefinitionNode[]) =",">"," DefinitionNode[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/webpack-loader-runtime/src/index.ts#L19"},"packages/webpack-loader-runtime/src/index.ts:19")))}p.isMDXComponent=!0}}]);