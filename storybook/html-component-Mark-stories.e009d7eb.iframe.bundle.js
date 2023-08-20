/*! For license information please see html-component-Mark-stories.e009d7eb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[78678],{"../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./stories/html-component/Mark.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Mark_stories});var tokens=__webpack_require__("../../components/mark/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),decorator=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/html-component/decorator.tsx")),util=__webpack_require__("./stories/components/util.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Mark=({children})=>(0,jsx_runtime.jsx)("mark",{children});Mark.displayName="Mark";const meta={title:"HTML Component/Mark",id:"html-mark",component:Mark,decorators:[decorator.j],argTypes:{children:{description:"Content of the marked text"}},args:{children:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-mark",tokens:dist,tokensDefinition:tokens,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Mark\n\n## HTML\n\nGebruik het `<mark>` HTML element.\n\n## Toegankelijkheid\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de gemarkeerde tekst gebruikt het `mark` element.\n- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast van de tekst met de achtergrondkeur moet voldoende zijn.\n\n## Gerelateerde websites\n\n- [Tweaking Text Level Styles - Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)\n- [`mark` element - HTML specificatie van WHATWG](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element)\n- [`mark` element - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)\n"}}}},Mark_stories=meta,Default={args:{children:"The Quick Brown Fox Jumps Over The Lazy Dog"},parameters:{docs:{description:{story:"Markup using the `<mark>` element."}}}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'The Quick Brown Fox Jumps Over The Lazy Dog'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<mark>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]},"./stories/html-component/decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>htmlContentDecorator});var _utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../component-library-react/dist/css-module/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const htmlContentDecorator=(Story,storyContext)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__.pu,{dir:storyContext?.args?.dir,lang:storyContext?.args?.lang,children:Story()});htmlContentDecorator.displayName="htmlContentDecorator"},"../../components/mark/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"mark":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}')}}]);