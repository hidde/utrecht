import{a as v,F as f,j as e}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-b66db9df.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as j,P as T,A as w,a as y,S}from"./index-888bd646.js";import{D,P as x}from"./index-c155c877.js";import{t as z}from"./tokens-d9dc99be.js";import{t as A,d as C}from"./util-05318661.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-984362c8.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./index-1fc0ca9a.js";const P='<!-- @license CC0-1.0 -->\n\n# Data badge\n\n## HTML\n\nGebruik een inline HTML-element voor de _badge component_, zodat de badge binnen een `p` HTML-element gebruikt kan worden. Bijvoorbeeld een `span`, `time` of `data` element:\n\n```html\n<p>\n  Belangrijke gegevens: <span class="utrecht-badge-data">≥ 250㎡</span>\n  <span class="utrecht-badge-data">Energielabel A</span>\n</p>\n```\n\nGebruik niet een `div`:\n\n```html\n<p>Belangrijke gegevens: <div>≥ 250㎡</div> <div>Energielabel A</div></p>\n```\n\nEen `div` in een `p` element wordt door de parser gezien als het einde van een `p` element, waardoor je eigenlijk dit bereikt:\n\n```html\n<p>Belangrijke gegevens:</p>\n<div>≥ 250㎡</div>\n<div>Energielabel A</div>\n</p>\n```\n\n### Computer-leesbare datum en tijd\n\nGebruik een `time` element wanneer je een datum of een datum en tijd hebt:\n\n```html\n<time class="utrecht-badge-data" datetime="2038-01-19T03:14:08Z">19 januari 2038 om 03:14:08</time>\n```\n\nGebruik een `time` element wanneer je een een tijdsduur hebt, in het `datetime` attribuut moet periode in [ISO 8601 notatie](https://en.wikipedia.org/wiki/ISO_8601#Durations).\n\n```html\n<time class="utrecht-badge-data" datetime="PT1H39M">1 uur en 39 minuten</time>\n```\n\n### Overige computer-leesbare data\n\nGebruik een `data` element wanneer je een `value` hebt met een waarde die voor de computer duidelijk is. De gewone tekst kan dan voor mensen leesbaar zijn. Je kunt de `value` bijvoorbeeld gebruiken om een tabel te sorteren op die waarde. Gebruik nooit een `<data>` element zonder `value`.\n\n```html\n<tr>\n  <th>Koningsweg 13</th>\n  <td>\n    <data class="utrecht-badge-data" value="259">≥ 250㎡</data>\n  </td>\n</tr>\n```\n\n## CSS\n\nAls je de data badge verschillende designs wilt geven, dan kan dat met eigen CSS. De data badge component heeft standaard maar design tokens voor een soort kleur. Je kunt een class name maken om de kleur aan te passen:\n\n```css\n.utrecht-badge-data--myprefix-numeric {\n  --utrecht-badge-background-color: var(--myprefix-color-blue);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n\n.utrecht-badge-data--myprefix-date {\n  --utrecht-badge-background-color: var(--myprefix-color-red);\n  --utrecht-badge-color: var(--myprefix-color-offwhite);\n}\n```\n\nJe kunt voor de modifier class name een eigen prefix gebruiken (zoals `example-`), zodat je er in de toekomst geen last van hebt als deze component toevallig een identieke uitbreiding krijgt.\n',G={title:"React Component/Data badge",id:"react-data-badge",component:D,args:{children:"Utrecht"},argTypes:{dateTime:{name:"dateTime",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},value:{name:"value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},parameters:{tokensPrefix:"utrecht-badge-data",tokens:A,tokensDefinition:z,docs:{page:()=>v(f,{children:[e(j,{children:P}),e(T,{}),e(w,{story:y}),e(S,{})]})}},decorators:[k=>e(x,{children:k()})]},n={},a={args:{children:"50,000",value:"50000"}},t={args:{children:"19 januari 2038 om 03:14:08",dateTime:"2038-01-19T03:14:08Z"}},r=C(G);var i,o,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var s,m,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: '50,000',
    value: '50000'
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: '19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08Z'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"designTokenStory(meta)",...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const ee=["Default","Value","Time","DesignTokens"];export{n as Default,r as DesignTokens,t as Time,a as Value,ee as __namedExportsOrder,G as default};
//# sourceMappingURL=DataBadge.stories-9e934a1b.js.map
