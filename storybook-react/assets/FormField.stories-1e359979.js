import{a as r,j as e,F as h}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-5f4fb476.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as k,P as y,A as _,a as x,S as A}from"./index-300c8065.js";import{O as o,P as i,T}from"./index-f23962d2.js";import{t as j,d as w}from"./util-33573bfe.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b865602a.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./inheritsLoose-3b3397bf.js";import"./setPrototypeOf-d30c36af.js";import"./getPrototypeOf-e4242ba0.js";import"./index-c7926236.js";import"./index-356e4a49.js";import"./defineProperty-6eb08761.js";import"./clsx.m-1229b3e0.js";import"./index-1fc0ca9a.js";const C='<!-- @license CC0-1.0 -->\n\n# Form field\n\nGebruik het _form field_ component om een alle onderdelen van een formulierveld in te verzamelen: het label, de _form control_, eventueel een extra beschrijving of de status en eventueel een validatiemelding of foutmelding.\n\nDe volgende componenten zijn vaak onderdeel van een _form field_:\n\n- _form label_ component\n- _form field description_ component met extra beschrijving\n- _form field description_ component met een validatiemelding\n- een form control component zoals bijvoorbeeld:\n  - _textbox_ component\n  - _textarea_ component\n  - _checkbox_ component\n  - _radio button_ component\n  - _form select_ component\n  - etcetera\n- _form field description_ component met een foutmelding\n- _form field description_ component status van component\n\n## HTML\n\nGebruik een element `<div>` element voor formuliervelden met één _form control_. Een formulierveld moet meerdere `<p>` elementen kunnen bevatten, gebruik daarom geen `<p>` element voor de form field. Je moet geen _landmark role_ gebruiken voor een formulierveld (dus geen `<section>`) element.\n\nVoor formuliervelden met meerdere _form controls_ mag je een `<fieldset>` element gebruiken, bijvoorbeeld voor: jaar, maand en dag. Voor CSS is het handig om dan nog steeds een `<div>` om de fieldset heen te hebben: `<div><fieldset>...</fieldset></div>`.\n\n## Gebruikte termen\n\n- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.\n- `field` komt van `<fieldset>` in HTML.\n- `invalid` komt van `aria-invalid` in WAI-ARIA.\n- `radio` komt van `<input type="radio">` in HTML.\n- `checkbox` komt van `<input type="checkbox">` in HTML.\n- `label` komt van `<label>` in HTML en `aria-labelledby` in WAI-ARIA.\n- `description` komt van `aria-describedby` in WAI-ARIA.\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn\n- [WCAG eis 3.3.9](https://www.w3.org/TR/WCAG22/#redundant-entry): gebruik niet een formulierveld voor informatie die de gebruiker eerder al heeft ingevuld.\n  - Vraag gebruikers niet twee keer achter elkaar identieke gegevens in te vullen, bijvoorbeeld om typfouten te herkennen en daarmee fouten te voorkomen. Bied liever een mogelijkheid aan om de gegevens te controleren als laatste stap.\n  - Vul bestaande gegevens in als standaardwaarde wanneer je de gegevens al hebt maar je graag zeker wilt weken of de oude gegevens nog juist zijn.\n',F={"form-field":{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},invalid:{"border-inline-start-color":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"border-inline-start-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},label:{"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},R={utrecht:F},S={title:"React Component/Form Field/Textbox",id:"react-form-field",component:o,render:p=>{const{description:g,invalid:u,label:f,type:v,input:b}=p;return r(o,{invalid:u,type:v,children:[e(i,{className:"utrecht-form-field__label",children:f}),e(i,{className:"utrecht-form-field__input",children:b}),g]})},args:{description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:T},argTypes:{invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{category:"Component",defaultValue:{summary:!1}}},type:{name:"type",control:{type:"select"},options:["","checkbox","radio","text"],table:{category:"Component",defaultValue:{summary:!1}}}},parameters:{tokensPrefix:"utrecht-form-field",tokens:j,tokensDefinition:R,docs:{page:()=>r(h,{children:[e(k,{children:C}),e(y,{}),e(_,{story:x}),e(A,{})]})}}},n={},t=w(S);var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"designTokenStory(meta)",...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Z=["FormFieldStory","DesignTokens"];export{t as DesignTokens,n as FormFieldStory,Z as __namedExportsOrder,S as default};
//# sourceMappingURL=FormField.stories-1e359979.js.map
