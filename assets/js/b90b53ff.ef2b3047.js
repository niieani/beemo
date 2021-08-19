"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[888],{5318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},517:function(e,n,t){var r=t(7378);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},6359:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7378),i=t(4309),a=t(8944),o="tabItem_c0e5",l="tabItemActive_28AG";var s=37,c=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,i.Z)(),g=f.tabGroupChoices,b=f.setTabGroupChoices,v=(0,r.useState)(u),k=v[0],y=v[1],h=r.Children.toArray(e.children),N=[];if(null!=d){var C=g[d];null!=C&&C!==k&&p.some((function(e){return e.value===C}))&&y(C)}var E=function(e){var n=e.currentTarget,t=N.indexOf(n),r=p[t].value;y(r),null!=d&&(b(d,r),setTimeout((function(){var e,t,r,i,a,o,s,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,i=e.bottom,a=e.right,o=window,s=o.innerHeight,c=o.innerWidth,t>=0&&a<=c&&i<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},w=function(e){var n,t;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case s:var i=N.indexOf(e.target)-1;t=N[i]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":k===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:E,onClick:E},t)}))),n?(0,r.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},4956:function(e,n,t){var r=(0,t(7378).createContext)(void 0);n.Z=r},4309:function(e,n,t){var r=t(7378),i=t(4956);n.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1094:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(5773),i=t(808),a=(t(7378),t(5318)),o=t(6359),l=t(517),s=["components"],c={title:"ESLint driver",sidebar_label:"ESLint"},u={unversionedId:"drivers/eslint",id:"drivers/eslint",isDocsHomePage:!1,title:"ESLint driver",description:"Provides ESLint support by dynamically generating a",source:"@site/docs/drivers/eslint.mdx",sourceDirName:"drivers",slug:"/drivers/eslint",permalink:"/docs/drivers/eslint",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/drivers/eslint.mdx",version:"current",sidebar_label:"ESLint",frontMatter:{title:"ESLint driver",sidebar_label:"ESLint"},sidebar:"docs",previous:{title:"Babel driver",permalink:"/docs/drivers/babel"},next:{title:"Flow driver",permalink:"/docs/drivers/flow"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Events",id:"events",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Integration",id:"integration",children:[]},{value:"Ignoring paths",id:"ignoring-paths",children:[]}],d={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint"},"ESLint")," support by dynamically generating a\n",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," config file."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ESLint ^7.0.0")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"Can be listened to on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLintDriver")," instance."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"onCreateIgnoreFile")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path, config: { ignore: string[] }")),(0,a.kt)("td",{parentName:"tr",align:null},"Called before the ignore file is written.")))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In your configuration module, install the driver, ESLint, and any plugins."),(0,a.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @beemo/driver-eslint eslint eslint-config-airbnb\n"))),(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @beemo/driver-eslint eslint eslint-config-airbnb\n")))),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"configs/eslint.ts")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),") in which to house your ESLint configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="configs/eslint.ts"',title:'"configs/eslint.ts"'},"import { ESLintConfig } from '@beemo/driver-eslint';\n\nconst config: ESLintConfig = {\n    extends: ['airbnb'],\n    // ...\n};\n\nexport default config;\n")),(0,a.kt)("h2",{id:"integration"},"Integration"),(0,a.kt)("p",null,"In your consuming project, enable the driver by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"drivers")," config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo.ts"',title:'".config/beemo.ts"'},"import { BeemoConfig } from '@beemo/core';\n\nconst config: BeemoConfig = {\n    module: '<config-module>',\n    drivers: ['eslint'],\n};\n\nexport default config;\n")),(0,a.kt)("h2",{id:"ignoring-paths"},"Ignoring paths"),(0,a.kt)("p",null,"Instead of using an ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintignore")," dotfile, you can define an ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore")," property in your\nconfiguration module's ",(0,a.kt)("inlineCode",{parentName:"p"},"configs/eslint.ts")," file, or a project's ",(0,a.kt)("inlineCode",{parentName:"p"},".config/beemo/eslint.ts")," file. This\nproperty accepts an array of strings. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".eslintignore"',title:'".eslintignore"'},"lib/\n*.min.js\n*.map\n")),(0,a.kt)("p",null,"Becomes..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo/eslint.ts"',title:'".config/beemo/eslint.ts"'},"import { ESLintConfig } from '@beemo/driver-eslint';\n\nconst config: ESLintConfig = {\n    // ...\n    ignore: ['lib/', '*.min.js', '*.map'],\n};\n\nexport default config;\n")),(0,a.kt)("p",null,"This feature follows the same configuration lifecycle as ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc.js"),", with the added benefit of\nconditional logic, and being generated at runtime!"))}m.isMDXComponent=!0},8944:function(e,n,t){function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);