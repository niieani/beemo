"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[208],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},517:function(e,t,n){var r=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6359:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7378),a=n(4309),i=n(8944),o="tabItem_c0e5",l="tabItemActive_28AG";var s=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,y=f.setTabGroupChoices,k=(0,r.useState)(p),b=k[0],v=k[1],h=r.Children.toArray(e.children),N=[];if(null!=d){var C=g[d];null!=C&&C!==b&&u.some((function(e){return e.value===C}))&&v(C)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),r=u[n].value;v(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,a,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},4956:function(e,t,n){var r=(0,n(7378).createContext)(void 0);t.Z=r},4309:function(e,t,n){var r=n(7378),a=n(4956);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=n(6359),l=n(517),s=["components"],c={title:"TypeScript driver",sidebar_label:"TypeScript"},p={unversionedId:"drivers/typescript",id:"drivers/typescript",isDocsHomePage:!1,title:"TypeScript driver",description:"Provides TypeScript support by dynamically generating a",source:"@site/docs/drivers/typescript.mdx",sourceDirName:"drivers",slug:"/drivers/typescript",permalink:"/docs/drivers/typescript",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/drivers/typescript.mdx",version:"current",sidebar_label:"TypeScript",frontMatter:{title:"TypeScript driver",sidebar_label:"TypeScript"},sidebar:"docs",previous:{title:"Stylelint driver",permalink:"/docs/drivers/stylelint"},next:{title:"Webpack driver",permalink:"/docs/drivers/webpack"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Events",id:"events",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Integration",id:"integration",children:[]},{value:"Commands",id:"commands",children:[{value:"<code>sync-project-refs</code>",id:"sync-project-refs",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/typescript"},"TypeScript")," support by dynamically generating a\n",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," config file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If using workspaces, the driver will assume and use project references, by injecting ",(0,i.kt)("inlineCode",{parentName:"p"},"references"),"\ninto the root config automatically, and separating compiler options into a ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.options.json"),"\nfile.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TypeScript ^4.0.0")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"Can be listened to on the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeScriptDriver")," instance."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onCreateProjectConfigFile")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"path: Path, config: TypeScriptConfig, isTests: boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Called before a workspace package config file is written when using project references.")))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In your configuration module, install the driver and TypeScript."),(0,i.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @beemo/driver-typescript typescript\n"))),(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @beemo/driver-typescript typescript\n")))),(0,i.kt)("p",null,"Create a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/typescript.ts")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"js"),") in which to house your TypeScript configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="configs/typescript.ts"',title:'"configs/typescript.ts"'},"import { TypeScriptConfig } from '@beemo/driver-typescript';\n\nconst config: TypeScriptConfig = {\n    compilerOptions: {\n        strict: true,\n    },\n    // ...\n};\n\nexport default config;\n")),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"In your consuming project, enable the driver by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"drivers")," config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo.ts"',title:'".config/beemo.ts"'},"import { BeemoConfig } from '@beemo/core';\n\nconst config: BeemoConfig = {\n    module: '<config-module>',\n    drivers: ['typescript'],\n};\n\nexport default config;\n")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"sync-project-refs"},(0,i.kt)("inlineCode",{parentName:"h3"},"sync-project-refs")),(0,i.kt)("p",null,"Managing ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/project-references.html"},"project references"),"\nmanually can be tedious, and honestly, quite hard. Beemo mitigates this by automating the creation\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," files, with correct project references (based on package dependencies), in every\nworkspace package."),(0,i.kt)("p",null,"Run the following command in your project root to make use of this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"beemo typescript:sync-project-refs\n")),(0,i.kt)("p",null,"By default, the config will compile a ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder into a ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," folder, while including a local and\nglobal ",(0,i.kt)("inlineCode",{parentName:"p"},"types")," folder. A ",(0,i.kt)("inlineCode",{parentName:"p"},"tests")," folder will receive a custom config file, which type checks the\nfolder but does not compile. A represenation of this is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"packages/\n  foo/\n    src/\n    tsconfig.json # Created that compiles src/ to lib/\n  bar\n    src/\n    types/ # Local types folder\n    tsconfig.json # Created that includes types/ folder\n  baz\n    src/\n    tests/\n      tsconfig.json # Created for tests only\n    tsconfig.json\ntypes/ # Global types folder\ntsconfig.json # Created with refs that point to each package\n")),(0,i.kt)("p",null,"To customize this process, the following options are available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"buildFolder")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Name of output directory relative to package root. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"lib"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"declarationOnly")," (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),") - Only emit declaration files for all packages instead of source\nfiles. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"globalTypes")," (",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),") - Include global types defined in the root (usually cwd). Defaults to\n",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"srcFolder")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Name of source directory relative to package root. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"src"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testsFolder")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Name of tests directory relative to package root. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"tests"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"typesFolder")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - Name of local and global types directory. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"types"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo.ts"',title:'".config/beemo.ts"'},"import { BeemoConfig } from '@beemo/core';\n\nconst config: BeemoConfig = {\n    module: '<config-module>',\n    drivers: [\n        [\n            'typescript',\n            {\n                globalTypes: true,\n                testsFolder: 'test',\n            },\n        ],\n    ],\n};\n\nexport default config;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If your tests are co-located with your source files, the tests specific ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file will\nbe skipped.")))}m.isMDXComponent=!0},8944:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);