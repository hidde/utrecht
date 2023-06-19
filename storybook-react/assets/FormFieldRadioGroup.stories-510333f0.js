import{a as p,j as e}from"./jsx-runtime-91a467a5.js";import{F as b,a as V,b as j,H as q,c as o,P as B,d as N,R as $}from"./index.esm-234dfa7c.js";import O from"./FormField.stories-dfc3e5a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defineProperty-6eb08761.js";import"./clsx.m-1229b3e0.js";import"./chunk-PCJTTTQV-4d31cac7.js";import"./iframe-cc4c96d6.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-c0d00d1d.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./inheritsLoose-3b3397bf.js";import"./setPrototypeOf-d30c36af.js";import"./getPrototypeOf-e4242ba0.js";import"./index-c7926236.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-f23962d2.js";import"./index-1fc0ca9a.js";import"./util-33573bfe.js";const H={...O.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},de={title:"React Component/Form Field/Radio group",id:"react-form-field--radio-group",component:b,argTypes:H,args:{name:"828aa90e-0e99-4db9-a5e5-d39f689cf7b3",groupLabel:"Choose your option",groupId:"df861ef1-844a-42df-8365-b54f59474fb8",options:[{id:"800b7f3f-5048-4dcc-8f23-d04fa6ca4199",value:"1",label:"Option 1"},{id:"fbc03e63-42c2-46e3-9acc-183fa64c6dcd",value:"2",label:"Option 2"},{id:"62824075-bcc1-4563-a97b-78d1eae3544f",value:"3",label:"Option 3"}]},render:I=>{const{groupDescription:i,groupId:a,groupInvalidDescription:d,groupLabel:n,headingLevel:c,invalid:_,options:D,name:x}=I,m=i?`${a}-description`:void 0,u=d?`${a}-invalid-description`:void 0,f=[m,u].filter(Boolean),L=f.length?f.join(" "):void 0;return p(V,{role:"radiogroup",id:a,"aria-describedby":L,invalid:_,children:[e(j,{children:c?e(q,{level:c,children:n}):n}),i?e(o,{id:m,children:i}):void 0,d?e(o,{status:"invalid",id:u,children:d}):void 0,D.map(({id:r,label:S,description:l,invalidDescription:s,value:R})=>{const g=l?`${r}-description`:void 0,y=s?`${r}-invalid-description`:void 0;return p(b,{type:"radio",children:[e(B,{className:"utrecht-form-field__label utrecht-form-field__label--radio",children:p(N,{type:"radio",htmlFor:r,children:[e($,{className:"utrecht-form-field__input",id:r,value:R,name:x,"aria-describedby":[g,y].filter(Boolean).join(" ")||void 0}),S]})}),l?e(o,{id:g,className:"utrecht-form-field__description",children:l}):void 0,s?e(o,{id:y,status:"invalid",className:"utrecht-form-field__description",children:s}):void 0]},r)})]})}},t={};var h,v,F;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(v=t.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const le=["FormFieldRadioGroup"];export{t as FormFieldRadioGroup,le as __namedExportsOrder,de as default};
//# sourceMappingURL=FormFieldRadioGroup.stories-510333f0.js.map
