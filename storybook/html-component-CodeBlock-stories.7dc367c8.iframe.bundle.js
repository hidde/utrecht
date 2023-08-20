/*! For license information please see html-component-CodeBlock-stories.7dc367c8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[25430],{"../../node_modules/.pnpm/@babel+runtime@7.21.5/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./stories/html-component/CodeBlock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CodeBlock_stories});var tokens=__webpack_require__("../../components/code-block/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),decorator=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/html-component/decorator.tsx")),util=__webpack_require__("./stories/components/util.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const CodeBlock=({children})=>(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{children})});CodeBlock.displayName="CodeBlock";const meta={title:"HTML Component/Code block",id:"html-code-block",component:CodeBlock,decorators:[decorator.j],argTypes:{children:{description:"Code",control:"text"}},args:{children:'<!DOCTYPE html>\n<html lang="nl" dir="ltr">\n  <head>\n    <title>NL Design System</title>\n    <meta charset="utf-8"/>\n  </head>\n  <body>\n    <h1>NL Design System</h1>\n  </body>\n</html>\n'},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-code-block",tokens:dist,tokensDefinition:tokens,docs:{description:{component:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Code block\n"}}}},CodeBlock_stories=meta,Default={parameters:{docs:{description:{story:"Markup using the `<pre>` and `<code>` elements."}}}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<pre>` and `<code>` elements.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]},"./stories/html-component/decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>htmlContentDecorator});var _utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../component-library-react/dist/css-module/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const htmlContentDecorator=(Story,storyContext)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_utrecht_component_library_react_dist_css_module__WEBPACK_IMPORTED_MODULE_2__.pu,{dir:storyContext?.args?.dir,lang:storyContext?.args?.lang,children:Story()});htmlContentDecorator.displayName="htmlContentDecorator"},"../../components/code-block/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"code-block":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}}}}')}}]);