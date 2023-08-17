import{j as e,a as d,F as c}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-8d1d5c64.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as p,P as g,A as u,a as h,S as y}from"./index-8a9b2011.js";import{am as k,an as s}from"./index-7370ff9b.js";import{t as f,d as x}from"./util-590dce94.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-bff0c62d.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./index-1fc0ca9a.js";const b='<!-- @license CC0-1.0 -->\n\n# Lijsten\n\nLijsten worden gebruikt voor opsommingen op een contentpagina. Hier gaan opsommingen vooraf met een bullet of een cijfer. De marge tussen twee list items (li) is 0.5em (8px).\n\nGebruik `role="list"` om te voorkomen dat de component niet toegankelijkheid is in combinatie met een eigen icoon voor elke list item, wanneer je `list-style: none` gebruikt om de browser-icoon uit te zetten. ([Safari behandelt lijsten met eigen `list-style` anders dan normaal.](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html))\n\n## Terminologie\n\n- **unordered list**: uitgeschreven versie van de HTML afkorting `<ul>`\n- **list item**: uitgeschreven van van [HTML `<li>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het `role="listitem"`](https://www.w3.org/TR/wai-aria-1.2/#listitem)\n- **marker**: zoals in de [CSS pseudo-selector `::marker`](https://drafts.csswg.org/css-pseudo-4/#marker-pseudo)\n\n## Class names\n\n- `utrecht-unordered-list`\n- `utrecht-unordered-list--distanced`: standaard heeft een component geen marge, gebruik deze class name om in een bepaalde context de standaard-marge toe te passen\n- `utrecht-unordered-list--nested`\n- `utrecht-unordered-list__item`: misschien moet nog aangepast worden naar `utrecht-unordered-list__listitem` of - `utrecht-unordered-list__list-item`\n- `utrecht-unordered-list__marker`\n\n## Design tokens\n\n- Document\n  - `--utrecht-document-font-family`\n  - `--utrecht-document-font-size`\n  - `--utrecht-document-line-height`\n- Paragraph\n  - `--utrecht-paragraph-margin-block-start`\n  - `--utrecht-paragraph-margin-block-end`\n- List\n  - `--utrecht-unordered-list-margin-block-start`\n  - `--utrecht-unordered-list-margin-block-end`\n  - List item\n    - `--utrecht-unordered-list-item-margin-block-start`\n    - `--utrecht-unordered-list-item-margin-block-end`\n  - Marker\n    - `--utrecht-unordered-list-marker-color`\n',w={"unordered-list":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},item:{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"}},marker:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}},L={utrecht:w},S={title:"React Component/Unordered List",id:"react-unordered-list",component:k,argTypes:{},args:{children:[e(s,{children:"List item 1"}),e(s,{children:"List item 2"}),e(s,{children:"List item 3"})]},parameters:{tokensPrefix:"utrecht-unordered-list",tokens:f,tokensDefinition:L,docs:{page:()=>d(c,{children:[e(p,{children:b}),e(g,{}),e(u,{story:h}),e(y,{})]})}}},t={},n=x(S);var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,m,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"designTokenStory(meta)",...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const B=["Default","DesignTokens"];export{t as Default,n as DesignTokens,B as __namedExportsOrder,S as default};
//# sourceMappingURL=UnorderedList.stories-a9ee4de6.js.map
