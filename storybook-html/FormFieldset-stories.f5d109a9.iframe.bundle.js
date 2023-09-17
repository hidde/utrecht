/*! For license information please see FormFieldset-stories.f5d109a9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook_html=self.webpackChunk_utrecht_storybook_html||[]).push([[6072],{"./src/FormFieldset.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormFieldset_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"form-fieldset":{"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"invalid":{"border-inline-start-color":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"border-inline-start-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"section":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"legend":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"font-weight":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<number>","inherits":true}}},"line-height":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"disabled":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),decorator=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/decorator.tsx")),design_token_story=__webpack_require__("./src/design-token-story.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Fieldset=({disabled,children,legend})=>(0,jsx_runtime.jsxs)("fieldset",{disabled:disabled||void 0,children:[legend?(0,jsx_runtime.jsx)("legend",{children:legend}):null,children]});Fieldset.displayName="Fieldset";const meta={title:"HTML Component/Form fieldset",id:"html-form-fieldset",component:Fieldset,decorators:[decorator.j],argTypes:{children:{description:"Content of the fieldset"},disabled:{description:"Disabled",control:"boolean"},legend:{description:"Set the content of the legend",control:"text"}},args:{children:[(0,jsx_runtime.jsx)("h1",{children:"Lorem ipsum"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-form-fieldset",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Fieldset\n\n## States\n\n### `disabled`\n\nEen veldengroep waar alle velden `disabled` zijn.\n\n### `invalid`\n\nEen veldengroep die niet valide is. Gebruik deze voor veldengroepen de als geheel gevalideerd worden, bijvoorbeeld een _radio group_ of een _checkbox group_. Gebruik `invalid` niet voor veldengroepen waar één los onderdeel invalide is, bijvoorbeeld: als één van de vragen nog niet beantwoord is.\n\n## HTML\n\nIn HTML kun je de `<fieldset>` en `<legend>` elementen gebruiken, die worden automatisch gekoppeld aan radio buttons en checkboxes.\n\nVoor een radio button group gebruik je `<fieldset role="radiogroup">`, dat maakt het extra duidelijk voor screen reader gebruikers. `<fieldset>` heeft als default `role="group"` en daarom hoef je nooit `<fieldset role="group">` te gebruiken.\n\nDe bijzondere browser default stylesheet voor `<fieldset>` en `<legend>` maken het erg moeilijk om CSS te gebruiken voor deze elementen, maar voor toegankelijkheid is het echter zeker de moeite waarde deze elementen toch te gebruiken. Gebruik de reset CSS voor fieldset en legend om geen default styles te gebruiken.\n\nGebruik een extra `<div>` om je `<fieldset>` zodat het mogelijk wordt een `background-color` of `border` in te stellen, door de browser default stylesheet is dat voor `<fieldset>` niet goed mogelijk.\n\n### HTML attributen\n\nDeze attributen moet je kunnen gebruiken in de fieldset component van een framework:\n\n- `class`\n- [`disabled`](https://html.spec.whatwg.org/multipage/form-elements.html#dom-fieldset-disabled)\n- `hidden`: om een _conditional fieldset_ te maken moet je het `hidden` attribuut kunnen gebruiken\n- `role`: het moet mogelijk zijn `role="radiogroup"` in te stellen\n- `aria-describedby`: gebruik bij voorkeur `<legend>`\n- `aria-invalid`\n\nDeze attributen willen mensen soms ook gebruiken:\n\n- `aria-label`: gebruik bij voorkeur `<legend>`\n- `aria-labelledby`: gebruik bij voorkeur `<legend>`\n- `aria-disabled`: gebruik bij voorkeur `disabled`, behalve als je _client-side form validation_ gebruikt om `aria-disabled` te maken.\n- [`form`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fae-form)\n- [`name`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fe-name)\n\n## CSS\n\nDe tokens voor `background-color` en `border` werken niet goed als alleen een `<fieldset>` wordt gebruikt. Voor goed resultaat is een extra `div` nodig. De HTML component heeft daarom geen goede ondersteuning voor `background-color` en `border`.\n\n## Relevante WCAG regels\n\n- [WCAG eis 1.3.5](https://www.w3.org/TR/WCAG21/#identify-input-purpose)\n  - voor een _radio group_ en _checkbox group_ is fieldset een goede manier het doel van de groep aan te geven\n'}}}},FormFieldset_stories=meta,Default={args:{children:(0,jsx_runtime.jsx)("p",{children:"Fieldset body"}),legend:"Fieldset legend"},parameters:{docs:{description:{story:"Markup using the `<fieldset>` element."}}}},Disabled={args:{children:(0,jsx_runtime.jsx)("p",{children:"Fieldset body"}),disabled:!0,legend:"Fieldset legend"},name:"Disabled",parameters:{docs:{description:{story:"Markup using the `disabled` attribute."}}}},DesignTokens=(0,design_token_story.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <p>Fieldset body</p>,\n    legend: 'Fieldset legend'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `<fieldset>` element.'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <p>Fieldset body</p>,\n    disabled: true,\n    legend: 'Fieldset legend'\n  },\n  name: 'Disabled',\n  parameters: {\n    docs: {\n      description: {\n        story: 'Markup using the `disabled` attribute.'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","DesignTokens"]}}]);