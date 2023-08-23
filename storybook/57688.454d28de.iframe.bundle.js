"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[57688],{"../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{c:()=>clsx})},"../web-component-library-stencil/dist/esm/utrecht-custom-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_custom_checkbox:()=>CustomCheckbox});var _index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-380964e2.js"),_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js");const CustomCheckbox=class{constructor(hostRef){(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.disabled=void 0,this.checked=void 0,this.indeterminate=void 0,this.invalid=void 0,this.required=void 0}render(){const{checked,required,disabled,indeterminate,invalid}=this;return(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{"aria-invalid":invalid?"true":null,class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-custom-checkbox","utrecht-custom-checkbox--html-input",invalid&&"utrecht-custom-checkbox__box--invalid"),type:"checkbox",checked,required,indeterminate,disabled})}};CustomCheckbox.style=".utrecht-checkbox--custom,.utrecht-custom-checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-position:center;background-repeat:no-repeat;background-size:contain;block-size:var(--utrecht-checkbox-size, 1em);border-color:var(--utrecht-checkbox-border-color);border-style:solid;border-width:var(--utrecht-checkbox-border-width);cursor:var(--utrecht-action-activate-cursor, revert);inline-size:var(--utrecht-checkbox-size, 1em);margin-block-start:var(--utrecht-checkbox-margin-block-start);-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:top}.utrecht-checkbox--custom.utrecht-checkbox--checked,.utrecht-custom-checkbox--checked{background-color:var(--utrecht-checkbox-checked-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-checked-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-checked-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--disabled,.utrecht-custom-checkbox--disabled{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-disabled-border-width, var(--utrecht-checkbox-border-width));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--custom.utrecht-checkbox--disabled:checked,.utrecht-custom-checkbox--disabled:checked{background-color:var(--utrecht-checkbox-disabled-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--disabled:active,.utrecht-custom-checkbox--disabled:active{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--indeterminate,.utrecht-custom-checkbox--indeterminate{background-color:var(--utrecht-checkbox-indeterminate-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-indeterminate-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-indeterminate-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-indeterminate-color, var(--utrecht-checkbox-color))}.utrecht-checkbox--custom.utrecht-checkbox--invalid,.utrecht-custom-checkbox--invalid{border-color:var(--utrecht-checkbox-invalid-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-invalid-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--active,.utrecht-custom-checkbox--active{background-color:var(--utrecht-checkbox-active-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-active-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-active-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-active-color, var(--utrecht-checkbox-color))}.utrecht-checkbox--custom.utrecht-checkbox--hover,.utrecht-custom-checkbox--hover{background-color:var(--utrecht-checkbox-hover-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-hover-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-hover-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--focus,.utrecht-custom-checkbox--focus{background-color:var(--utrecht-checkbox-focus-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-focus-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-focus-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--focus-visible,.utrecht-custom-checkbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled,.utrecht-custom-checkbox--html-input:disabled{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-disabled-border-width, var(--utrecht-checkbox-border-width));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled:checked,.utrecht-custom-checkbox--html-input:disabled:checked{background-color:var(--utrecht-checkbox-disabled-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:disabled:active,.utrecht-custom-checkbox--html-input:disabled:active{border-color:var(--utrecht-checkbox-disabled-border-color, var(--utrecht-checkbox-border-color))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:hover,.utrecht-custom-checkbox--html-input:hover{background-color:var(--utrecht-checkbox-hover-background-color, var(--utrecht-checkbox-background-color));border-color:var(--utrecht-checkbox-hover-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-hover-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:focus,.utrecht-custom-checkbox--html-input:focus{background-color:var(--utrecht-checkbox-focus-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-focus-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-focus-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:focus-visible,.utrecht-custom-checkbox--html-input:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-checkbox--custom.utrecht-checkbox--html-input:invalid,.utrecht-checkbox--custom.utrecht-checkbox--html-input[aria-invalid=true],.utrecht-custom-checkbox--html-input:invalid,.utrecht-custom-checkbox--html-input[aria-invalid=true]{border-color:var(--utrecht-checkbox-invalid-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-invalid-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:active,.utrecht-custom-checkbox--html-input:active{background-color:var(--utrecht-checkbox-active-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-active-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-active-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-active-color, var(--utrecht-checkbox-color))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:checked,.utrecht-custom-checkbox--html-input:checked{background-color:var(--utrecht-checkbox-checked-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-checked-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-checked-border-width, var(--utrecht-checkbox-border-width))}.utrecht-checkbox--custom.utrecht-checkbox--html-input:indeterminate,.utrecht-custom-checkbox--html-input:indeterminate{background-color:var(--utrecht-checkbox-indeterminate-background-color, var(--utrecht-checkbox-background-color));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");border-color:var(--utrecht-checkbox-indeterminate-border-color, var(--utrecht-checkbox-border-color));border-width:var(--utrecht-checkbox-indeterminate-border-width, var(--utrecht-checkbox-border-width));color:var(--utrecht-checkbox-indeterminate-color, var(--utrecht-checkbox-color))}:host{display:block}:host([hidden]){display:none !important}"}}]);