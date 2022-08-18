/*! For license information please see 1f391b9e.85dc9b42.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[85],{8398:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});var t=r(2784),s=r(6277),c=r(8162),l=r(211),n=r(7155),i=r(5480),d=r(8188);const u="mdxPageWrapper_SLvB";function o(e){const{content:a}=e,{metadata:{title:r,description:o,frontMatter:h}}=a,{wrapperClassName:m,hide_table_of_contents:f}=h;return t.createElement(c.FG,{className:(0,s.Z)(null!=m?m:l.k.wrapper.mdxPages,l.k.page.mdxPage)},t.createElement(c.d,{title:r,description:o}),t.createElement(n.Z,null,t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,s.Z)("row",u)},t.createElement("div",{className:(0,s.Z)("col",!f&&"col--8")},t.createElement("article",null,t.createElement(i.Z,null,t.createElement(a,null)))),!f&&a.toc.length>0&&t.createElement("div",{className:"col col--2"},t.createElement(d.Z,{toc:a.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level}))))))}},170:(e,a,r)=>{r.d(a,{Cd:()=>f,GS:()=>N,SC:()=>x,XJ:()=>u,Z0:()=>v,aC:()=>o,by:()=>m,iA:()=>p,k8:()=>h,nL:()=>d,nv:()=>b,pj:()=>j,xs:()=>g});var t=r(5619),s=r(6277),c=r(1104);function l(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]])}return r}(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("article",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-article",c)},{children:r}))})).displayName="Article",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-backdrop",c)},{children:r}))})).displayName="Backdrop";var n=(0,c.forwardRef)((function(e,a){var r=e.appearance,c=e.busy,n=e.disabled,i=e.children,d=e.className,u=e.type,o=l(e,["appearance","busy","disabled","children","className","type"]);return(0,t.jsx)("button",Object.assign({},o,{ref:a,className:(0,s.Z)("utrecht-button",c&&"utrecht-button--busy",n&&"utrecht-button--disabled","submit"===u&&"utrecht-button--submit","primary-action-button"===r&&"utrecht-button--primary-action","secondary-action-button"===r&&"utrecht-button--secondary-action","subtle-button"===r&&"utrecht-button--subtle",d),"aria-busy":c||void 0,disabled:n,type:u||"button"},{children:i}))}));n.displayName="Button";var i=function(e){var a;" "===e.key&&"function"==typeof(null===(a=e.target)||void 0===a?void 0:a.click)&&(e.preventDefault(),e.target.click())};(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=e.external,d=e.role,u=l(e,["children","className","external","role"]),o=u;return"button"===d&&(o=Object.assign(Object.assign({},u),{onKeyDown:i})),(0,t.jsx)("a",Object.assign({},o,{ref:a,role:d,className:(0,s.Z)("utrecht-button-link","utrecht-button-link--html-button",{"utrecht-button-link--external":n},c),rel:n?"external noopener noreferrer":void 0},{children:r}))})).displayName="ButtonLink",(0,c.forwardRef)((function(e,a){var r=e.disabled,c=e.invalid,n=e.required,i=e.className,d=l(e,["disabled","invalid","required","className"]);return(0,t.jsx)("input",Object.assign({},d,{ref:a,type:"checkbox",className:(0,s.Z)("utrecht-checkbox","utrecht-checkbox--html-input",r&&"utrecht-checkbox--disabled",c&&"utrecht-checkbox--invalid",n&&"utrecht-checkbox--required",i),"aria-invalid":c||void 0,disabled:r,required:n}))})).displayName="Checkbox",(0,c.forwardRef)((function(e,a){var r=e.disabled,c=e.required,n=e.className,i=e.invalid,d=l(e,["disabled","required","className","invalid"]);return(0,t.jsx)("input",Object.assign({type:"radio","aria-invalid":i||void 0,disabled:r,required:c,ref:a,className:(0,s.Z)("utrecht-custom-radio-button",r&&"utrecht-custom-radio-button--disabled",i&&"utrecht-custom-radio-button--invalid",n)},d))})).displayName="CustomRadioButton",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-document",c)},{children:r}))})).displayName="Document",(0,c.forwardRef)((function(e,a){var r=e.appearance,c=e.children,n=e.className,i=l(e,["appearance","children","className"]);return(0,t.jsx)("dl",Object.assign({},i,{className:(0,s.Z)("utrecht-data-list","utrecht-data-list--html-dl","rows"===r&&"utrecht-data-list--rows",n),ref:a},{children:c}))})).displayName="DataList",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},n,{className:(0,s.Z)("utrecht-data-list__item",c),ref:a},{children:r}))})).displayName="DataListItem",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("dt",Object.assign({},n,{className:(0,s.Z)("utrecht-data-list__item-key",c),ref:a},{children:r}))})).displayName="DataListKey",(0,c.forwardRef)((function(e,a){var r=e.value,c=e.children,l=e.className,n=e.emptyDescription,i=e.multiline,d=e.notranslate,u=""===r||null===r;return(0,t.jsx)("dd",Object.assign({className:(0,s.Z)("utrecht-data-list__item-value","utrecht-data-list__item-value--html-dd",l,i&&"utrecht-data-list__item-value--multiline"),translate:"boolean"==typeof d?d?"no":"yes":void 0,ref:a},{children:u?(0,t.jsx)("span",Object.assign({"aria-label":n},{children:"-"})):c}))})).displayName="DataListValue",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("dd",Object.assign({},n,{className:(0,s.Z)("utrecht-data-list__actions","utrecht-data-list__actions--html-dd",c),ref:a},{children:r}))})).displayName="DataListActions",(0,c.forwardRef)((function(e,a){var r=e.className,c=e.children,n=l(e,["className","children"]);return(0,t.jsx)("fieldset",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-form-fieldset","utrecht-form-fieldset--reset-fieldset",r)},{children:c}))})).displayName="Fieldset",(0,c.forwardRef)((function(e,a){var r=e.className,c=e.children,n=l(e,["className","children"]);return(0,t.jsx)("legend",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-form-fieldset__legend","utrecht-form-fieldset__legend--reset-legend",r)},{children:c}))})).displayName="FieldsetLegend",(0,c.forwardRef)((function(e,a){var r=e.className,c=e.children,n=l(e,["className","children"]);return(0,t.jsx)("div",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-form-field","utrecht-form-field--distanced",r)},{children:c}))})).displayName="FormField",(0,c.forwardRef)((function(e,a){var r=e.invalid,c=e.valid,n=e.warning,i=e.className,d=e.children,u=l(e,["invalid","valid","warning","className","children"]);return(0,t.jsx)("div",Object.assign({},u,{ref:a,className:(0,s.Z)("utrecht-form-field-description",r&&"utrecht-form-field-description--invalid",c&&"utrecht-form-field-description--valid",n&&"utrecht-form-field-description--warning",i)},{children:d}))})).displayName="FormFieldDescription",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=e.type,i=e.disabled,d=e.checked,u=l(e,["children","className","type","disabled","checked"]);return(0,t.jsx)("label",Object.assign({},u,{ref:a,className:(0,s.Z)("utrecht-form-label",n&&"utrecht-form-label--".concat(n),i&&"utrecht-form-label--disabled",d&&"utrecht-form-label--checked",c)},{children:r}))})).displayName="FormLabel",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-html",c)},{children:r}))})).displayName="HTMLContent";var d=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("h1",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-heading-1",c)},{children:r}))}));d.displayName="Heading1";var u=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("h2",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-heading-2",c)},{children:r}))}));u.displayName="Heading2";var o=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("h3",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-heading-3",c)},{children:r}))}));o.displayName="Heading3";var h=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("h4",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-heading-4",c)},{children:r}))}));h.displayName="Heading4";var m=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("h5",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-heading-5",c)},{children:r}))}));m.displayName="Heading5";var f=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("h6",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-heading-6",c)},{children:r}))}));f.displayName="Heading6",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=e.external,i=l(e,["children","className","external"]);return(0,t.jsx)("a",Object.assign({},i,{ref:a,className:(0,s.Z)("utrecht-link",{"utrecht-link--external":n},c),rel:n?"external noopener noreferrer":void 0},{children:r}))})).displayName="Link",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.inline,n=e.className,i=l(e,["children","inline","className"]);return(0,t.jsx)("button",Object.assign({},i,{ref:a,className:(0,s.Z)("utrecht-link-button","utrecht-link-button--html-button",{"utrecht-link-button--inline":c},n)},{children:r}))})).displayName="LinkButton",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=e.value,i=l(e,["children","className","value"]);return(0,t.jsx)("data",Object.assign({value:"string"==typeof n||"number"==typeof n?String(n):void 0},i,{ref:a,className:(0,s.Z)("utrecht-value-number",c)},{children:r}))})).displayName="NumberValue";var N=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("ol",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-ordered-list",c)},{children:r}))}));N.displayName="OrderedList",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("li",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-ordered-list__item",c)},{children:r}))})).displayName="OrderedListItem",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-page",c)},{children:r}))})).displayName="Page",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-page-content",c)},{children:r}))})).displayName="PageContent",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("main",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-page-content__main",c)},{children:r}))})).displayName="PageContentMain",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("footer",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-page-footer",c)},{children:r}))})).displayName="PageFooter",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("header",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-page-header",c)},{children:r}))})).displayName="PageHeader";var b=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=e.lead,i=l(e,["children","className","lead"]);return(0,t.jsx)("p",Object.assign({},i,{ref:a,className:(0,s.Z)("utrecht-paragraph",n&&"utrecht-paragraph--lead",c)},{children:r}))}));b.displayName="Paragraph",(0,c.forwardRef)((function(e,a){var r=e.invalid,c=e.className,n=l(e,["invalid","className"]);return(0,t.jsx)("input",Object.assign({},n,{ref:a,type:"radio",className:(0,s.Z)("utrecht-radio-button","utrecht-radio-button--html-input",r&&"utrecht-radio-button--invalid",c)}))})).displayName="RadioButton",(0,c.forwardRef)((function(e,a){var r=e.invalid,c=e.required,n=e.className,i=e.noscript,d=e.children,u=l(e,["invalid","required","className","noscript","children"]);return(0,t.jsx)("select",Object.assign({},u,{ref:a,"aria-invalid":r||void 0,required:!!i&&c,"aria-required":i?void 0:c,className:(0,s.Z)("utrecht-select","utrecht-select--html-select",r&&"utrecht-select--invalid",c&&"utrecht-select--required",n)},{children:d}))})).displayName="Select",(0,c.forwardRef)((function(e,a){var r=e.disabled,c=e.invalid,n=e.value,i=e.children,d=e.className,u=l(e,["disabled","invalid","value","children","className"]);return(0,t.jsx)("option",Object.assign({},u,{ref:a,disabled:r,value:n,className:(0,s.Z)("utrecht-select__option",r&&"utrecht-select__option--disabled",c&&"utrecht-select__option--invalid",d)},{children:i}))})).displayName="SelectOption";var v=(0,c.forwardRef)((function(e,a){var r=e.className;e.children;var c=l(e,["className","children"]);return(0,t.jsx)("hr",Object.assign({},c,{ref:a,className:(0,s.Z)("utrecht-separator",r)}))}));v.displayName="Separator",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-surface",c)},{children:r}))})).displayName="Surface";var p=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("table",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table",c)},{children:r}))}));p.displayName="Table",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("tbody",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table__body",c)},{children:r}))})).displayName="TableBody",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("caption",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table__caption",c)},{children:r}))})).displayName="TableCaption";var j=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("td",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table__cell",c)},{children:r}))}));j.displayName="TableCell",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("tfoot",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table__footer",c)},{children:r}))})).displayName="TableFooter",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("thead",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table__header",c)},{children:r}))})).displayName="TableHeader";var g=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("th",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table__header-cell",c)},{children:r}))}));g.displayName="TableHeaderCell";var x=(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("tr",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-table__row",c)},{children:r}))}));x.displayName="TableRow",(0,c.forwardRef)((function(e,a){var r=e.disabled,c=e.invalid,n=e.readOnly,i=e.required,d=e.className,u=l(e,["disabled","invalid","readOnly","required","className"]);return(0,t.jsx)("textarea",Object.assign({},u,{ref:a,className:(0,s.Z)("utrecht-textarea","utrecht-textarea--html-textarea",r&&"utrecht-textarea--disabled",c&&"utrecht-textarea--invalid",n&&"utrecht-textarea--readonly",i&&"utrecht-textarea--required",d),disabled:r,readOnly:n,required:i,"aria-invalid":c||void 0}))})).displayName="Textarea",(0,c.forwardRef)((function(e,a){var r=e.disabled,c=e.invalid,n=e.readOnly,i=e.required,d=e.className,u=e.type,o=void 0===u?"text":u,h=e.maxLength,m=e.inputMode,f=l(e,["disabled","invalid","readOnly","required","className","type","maxLength","inputMode"]);return(0,t.jsx)("input",Object.assign({},f,{ref:a,type:o,className:(0,s.Z)("utrecht-textbox","utrecht-textbox--html-input",r&&"utrecht-textbox--disabled",c&&"utrecht-textbox--invalid",n&&"utrecht-textbox--readonly",i&&"utrecht-textbox--required",d),maxLength:h,disabled:r,readOnly:n,required:i,"aria-invalid":c||void 0,inputMode:m||("number"===o?"numeric":void 0)}))})).displayName="Textbox",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("bdi",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-url",c)},{children:r}))})).displayName="URLValue",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("ul",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-unordered-list",c)},{children:r}))})).displayName="UnorderedList",(0,c.forwardRef)((function(e,a){var r=e.children,c=e.className,n=l(e,["children","className"]);return(0,t.jsx)("li",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-unordered-list__item",c)},{children:r}))})).displayName="UnorderedListItem"},821:(e,a,r)=>{r.d(a,{Z:()=>i});var t=r(7896),s=r(9817),c=r(6277),l=r(2784);var n=r(170);const i={a:function(e){const a=/^https?:/i.test(e.href);return l.createElement(s.Z,(0,t.Z)({className:(0,c.Z)("utrecht-link",a&&"utrecht-link--external")},e))},h1:n.nL,h2:n.XJ,h3:n.aC,h4:n.k8,h5:n.by,h6:n.Cd,hr:n.Z0,ol:n.GS,p:n.nv,table:n.iA,td:n.pj,th:n.xs,tr:n.SC,ul:function(e){return l.createElement("ul",(0,t.Z)({},e,{className:(a=e.className,(0,c.Z)("utrecht-unordered-list",a,"string"==typeof a&&a.includes("contains-task-list")&&"contains-task-list_leKa"))}));var a}}}}]);