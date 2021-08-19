"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[141],{5318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(5773),r=n(808),l=(n(7378),n(5318)),i=["components"],o={title:"Event-driven tooling"},d={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Event-driven tooling",description:"What kind of tool would Beemo be without the ability to listen to events? A terrible one, and as",source:"@site/docs/events.md",sourceDirName:".",slug:"/events",permalink:"/docs/events",editUrl:"https://github.com/beemojs/beemo/edit/master/website/docs/events.md",version:"current",frontMatter:{title:"Event-driven tooling"},sidebar:"docs",previous:{title:"Tool instance",permalink:"/docs/tool"},next:{title:"Scaffolding",permalink:"/docs/scaffolding"}},p=[{value:"Bootstrap resolution",id:"bootstrap-resolution",children:[]},{value:"Supported events",id:"supported-events",children:[{value:"Tool",id:"tool",children:[]},{value:"Driver",id:"driver",children:[]},{value:"Script",id:"script",children:[]}]},{value:"Type declarations",id:"type-declarations",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"What kind of tool would Beemo be without the ability to listen to events? A terrible one, and as\nsuch, Beemo totally supports them! Events provide an easy mechanism for hooking into the lifecycle\nof a Beemo process."),(0,l.kt)("p",null,"To begin, create an index file in your configuration module that exports a function, either as a\ndefault export or as a named ",(0,l.kt)("inlineCode",{parentName:"p"},"bootstrap")," export. This function will receive a\n",(0,l.kt)("a",{parentName:"p",href:"/docs/tool"},"Beemo Tool instance")," for the current process, in which listeners can be registered."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import { Tool } from '@beemo/core';\n\nexport default function bootstrap(tool: Tool) {\n    // Add command line args to every execution\n    tool.driverRegistry.get('eslint').onBeforeExecute.listen((context) => {\n        context.addOptions(['--color', '--report-unused-disable-directives']);\n    });\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The bootstrap function supports async/await.")),(0,l.kt)("h3",{id:"bootstrap-resolution"},"Bootstrap resolution"),(0,l.kt)("p",null,"The bootstrap file is looked for and resolved in the following order relative to the configuration\nmodule."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index.ts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src/index.ts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lib/index.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"main")," field in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,l.kt)("h2",{id:"supported-events"},"Supported events"),(0,l.kt)("p",null,"The following list of events, and their arguments, can be listened to."),(0,l.kt)("h3",{id:"tool"},"Tool"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onResolveDependencies")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, drivers: Driver[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after a list of ",(0,l.kt)("inlineCode",{parentName:"td"},"Driver"),"s have been resolved in which to create configuration files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onRunCreateConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, driverNames: string[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before ",(0,l.kt)("inlineCode",{parentName:"td"},"beemo create-config")," is ran.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onRunDriver")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: DriverContext, driver: Driver")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before ",(0,l.kt)("inlineCode",{parentName:"td"},"beemo <driver>")," is ran. ",(0,l.kt)("em",{parentName:"td"},"Requires a scope of the driver name."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onRunScript")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ScriptContext")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before ",(0,l.kt)("inlineCode",{parentName:"td"},"beemo run-script <script>")," is ran. ",(0,l.kt)("em",{parentName:"td"},"Requires a scope of the script name."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onScaffold")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ScaffoldContext, generator: string, action: string, name?: string")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before templates are generated when scaffolding.")))),(0,l.kt)("h3",{id:"driver"},"Driver"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onAfterExecute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: DriverContext, response: unknown")),(0,l.kt)("td",{parentName:"tr",align:null},"Concurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after the driver has successfully been executed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onBeforeExecute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: DriverContext, argv: string[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Concurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before the underlying ",(0,l.kt)("inlineCode",{parentName:"td"},"Driver")," binary command is executed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onCreateConfigFile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path, config: object")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before the configuration file is written.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onCopyConfigFile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path, config: object")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before the configuration file is copied from module.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onDeleteConfigFile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before the configuration file is deleted. Occurs during the ",(0,l.kt)("inlineCode",{parentName:"td"},"cleanup")," phase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onFailedExecute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: DriverContext, error: Error")),(0,l.kt)("td",{parentName:"tr",align:null},"Concurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after the driver has failed to execute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLoadModuleConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path, config: object")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after configuration has been loaded from the configuration module.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLoadPackageConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, config: object")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after configuration has been extracted from ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onMergeConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, config: object")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after multiple configuration sources have been merged into 1.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onReferenceConfigFile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path, config: object")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before the configuration file is referenced.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onTemplateConfigFile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ConfigContext, path: Path, config: object/string")),(0,l.kt)("td",{parentName:"tr",align:null},"Normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before the configuration file is written. The config is built using a consumer template, so can appear as an object or raw string (config file contents).")))),(0,l.kt)("h3",{id:"script"},"Script"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Arguments"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onAfterExecute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ScriptContext, response: unknown")),(0,l.kt)("td",{parentName:"tr",align:null},"Concurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after the script has successfully been executed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onBeforeExecute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ScriptContext, argv: string[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Concurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Called before the ",(0,l.kt)("inlineCode",{parentName:"td"},"Script#execute")," method is ran.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onFailedExecute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context: ScriptContext, error: Error")),(0,l.kt)("td",{parentName:"tr",align:null},"Concurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Called after the script has failed to execute.")))),(0,l.kt)("h2",{id:"type-declarations"},"Type declarations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Driver")," - An instance of the\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/beemojs/beemo/blob/master/packages/core/src/Driver.ts"},"Driver")," class."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Script")," - An instance of the\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/beemojs/beemo/blob/master/packages/core/src/Script.ts"},"Script")," class."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Context"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"DriverContext"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ScriptContext"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ScaffoldContext")," -\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/beemojs/beemo/tree/master/packages/core/src/contexts"},"Special objects")," passed\nthrough the entire execution process.")))}u.isMDXComponent=!0}}]);