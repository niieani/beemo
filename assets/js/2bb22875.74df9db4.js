"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[804],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},517:function(e,t,n){var r=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6359:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7378),a=n(4309),i=n(8944),o="tabItem_c0e5",c="tabItemActive_28AG";var l=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),b=f.tabGroupChoices,v=f.setTabGroupChoices,g=(0,r.useState)(s),k=g[0],y=g[1],h=r.Children.toArray(e.children),w=[];if(null!=d){var O=b[d];null!=O&&O!==k&&p.some((function(e){return e.value===O}))&&y(O)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;y(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,a,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},4956:function(e,t,n){var r=(0,n(7378).createContext)(void 0);t.Z=r},4309:function(e,t,n){var r=n(7378),a=n(4956);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7115:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=n(6359),c=n(517),l=["components"],u={title:"Webpack driver",sidebar_label:"Webpack"},s={unversionedId:"drivers/webpack",id:"drivers/webpack",isDocsHomePage:!1,title:"Webpack driver",description:"Provides Webpack support by dynamically generating a",source:"@site/docs/drivers/webpack.mdx",sourceDirName:"drivers",slug:"/drivers/webpack",permalink:"/docs/drivers/webpack",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/drivers/webpack.mdx",version:"current",sidebar_label:"Webpack",frontMatter:{title:"Webpack driver",sidebar_label:"Webpack"},sidebar:"docs",previous:{title:"TypeScript driver",permalink:"/docs/drivers/typescript"},next:{title:"Tool instance",permalink:"/docs/tool"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Integration",id:"integration",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack")," support by dynamically generating a\n",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," config file."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Webpack ^4.0.0 || ^5.0.0")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In your configuration module, install the driver, Webpack, and any loaders or plugins."),(0,i.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @beemo/driver-webpack webpack webpack-cli\n"))),(0,i.kt)(c.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @beemo/driver-webpack webpack webpack-cli\n")))),(0,i.kt)("p",null,"Create a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/webpack.ts")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"js"),") in which to house your Webpack configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="configs/webpack.ts"',title:'"configs/webpack.ts"'},"import { WebpackConfig } from '@beemo/driver-webpack';\nimport path from 'path';\n\nconst config: WebpackConfig = {{\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js',\n  },\n}\n  // ...\n};\n\nexport default config;\n")),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"In your consuming project, enable the driver by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"drivers")," config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".config/beemo.ts"',title:'".config/beemo.ts"'},"import { BeemoConfig } from '@beemo/core';\n\nconst config: BeemoConfig = {\n    module: '<config-module>',\n    drivers: ['webpack'],\n};\n\nexport default config;\n")))}m.isMDXComponent=!0},8944:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);