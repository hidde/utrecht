"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[5089],{"../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{c:()=>clsx})},"../web-component-library-stencil/dist/esm/utrecht-form-toggle.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_form_toggle:()=>FormToggle});var _index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-8a2cc32e.js"),_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js");const FormToggle=class{constructor(hostRef){(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.utrechtBlur=(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtBlur",7),this.utrechtChange=(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtChange",7),this.utrechtFocus=(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtFocus",7),this.utrechtInput=(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"utrechtInput",7),this.disabled=!1,this.checked=!1}render(){const{checked,disabled}=this,toggleInteraction=()=>{this.disabled||(this.checked=!this.checked,this.utrechtInput.emit(this),this.utrechtChange.emit(this))};return(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-form-toggle",checked&&"utrecht-form-toggle--checked",!checked&&"utrecht-form-toggle--not-checked",disabled&&"utrecht-form-toggle--disabled"),tabIndex:disabled?null:0,role:"switch","aria-disabled":disabled?"true":null,onClick:()=>{toggleInteraction()},onKeyPress:evt=>{"Space"!==evt.code&&" "!==evt.key||evt.preventDefault()},onKeyUp:evt=>{"Space"!==evt.code&&" "!==evt.key||toggleInteraction()}},(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"utrecht-form-toggle__label utrecht-form-toggle__label--off"}),(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"utrecht-form-toggle__label utrecht-form-toggle__label--on"}),(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-form-toggle__track",checked&&"utrecht-form-toggle__track--checked",!checked&&"utrecht-form-toggle__track--not-checked",disabled&&"utrecht-form-toggle__track--disabled")},(0,_index_8a2cc32e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-form-toggle__thumb",checked&&"utrecht-form-toggle__thumb--checked",!checked&&"utrecht-form-toggle__thumb--not-checked",disabled&&"utrecht-form-toggle__thumb--disabled")})))}};FormToggle.style=".utrecht-form-toggle{align-items:center;border-color:var(--utrecht-form-toggle-border-color, currentColor);border-radius:var(--utrecht-form-toggle-border-radius, 999rem);border-style:var(--utrecht-form-toggle-border-style, solid);border-width:var(--utrecht-form-toggle-border-width, 1px);color:var(--utrecht-form-toggle-color);cursor:var(--utrecht-action-activate-cursor);display:flex;height:var(--utrecht-form-toggle-height, 2em);padding-block-end:var(--utrecht-form-toggle-padding-block-end);padding-block-start:var(--utrecht-form-toggle-padding-block-start);padding-inline-end:var(--utrecht-form-toggle-padding-inline-end);padding-inline-start:var(--utrecht-form-toggle-padding-inline-start);position:relative;user-select:none;width:var(--utrecht-form-toggle-width, 6em)}.utrecht-form-toggle--focus,.utrecht-form-toggle:not(.utrecht-form-toggle--disabled):focus{border-color:var(--utrecht-form-toggle-focus-border-color, var(--utrecht-form-toggle-border-color, currentColor));border-style:var(--utrecht-form-toggle-focus-border-style, var(--utrecht-form-toggle-border-style, solid));border-width:var(--utrecht-form-toggle-focus-border-width, var(--utrecht-form-toggle-border-width, 1px))}.utrecht-form-toggle--hover,.utrecht-form-toggle:not(.utrecht-form-toggle--disabled):hover{background-color:var(--utrecht-form-toggle-hover-background-color, var(--utrecht-form-toggle-background-color));color:var(--utrecht-form-toggle-hover-color, var(--utrecht-form-toggle-color))}.utrecht-form-toggle--disabled{border-color:var(--utrecht-form-toggle-disabled-border-color, var(--utrecht-form-toggle-border-color, currentColor));border-style:var(--utrecht-form-toggle-disabled-border-style, var(--utrecht-form-toggle-border-style, solid));border-width:var(--utrecht-form-toggle-disabled-border-width, var(--utrecht-form-toggle-border-width, 1px));cursor:var(--utrecht-action-disabled-cursor)}.utrecht-form-toggle__thumb{background-color:var(--utrecht-form-toggle-thumb-background-color, currentColor);border-radius:var(--utrecht-form-toggle-thumb-border-radius, 50%);box-shadow:var(--utrecht-form-toggle-thumb-box-shadow);margin-inline-end:var(--utrecht-form-toggle-thumb-margin-inline-end, 0);margin-inline-start:var(--utrecht-form-toggle-thumb-margin-inline-start, 0);min-block-size:var(--utrecht-form-toggle-thumb-min-inline-size, 1.5em);min-inline-size:var(--utrecht-form-toggle-thumb-min-inline-size, 1.5em);z-index:20}.utrecht-form-toggle__thumb--checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:checked~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{margin-inline-start:auto}.utrecht-form-toggle__thumb--not-checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:not(:checked)~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{margin-inline-end:auto}.utrecht-form-toggle__thumb--disabled,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:disabled~.utrecht-form-toggle__track .utrecht-form-toggle__thumb{background-color:var(--utrecht-form-toggle-thumb-disabled-background-color, #aaa);box-shadow:var(--utrecht-form-toggle-thumb-disabled-box-shadow, 0)}.utrecht-form-toggle__track{align-items:center;background-color:var(--utrecht-form-toggle-accent-color);border-radius:var(--utrecht-form-toggle-track-border-radius, var(--utrecht-form-toggle-border-radius));display:flex;height:100%;width:100%}.utrecht-form-toggle__track--checked,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:checked~.utrecht-form-toggle__track{background-color:var(--utrecht-form-toggle-checked-accent-color, var(--utrecht-form-toggle-accent-color))}.utrecht-form-toggle__track--disabled,.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:disabled~.utrecht-form-toggle__track{background-color:var(--utrecht-form-toggle-background-disabled-background-color, #ddd);color:var(--utrecht-form-toggle-disabled-color, black)}.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;height:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;white-space:nowrap !important;width:1px !important}.utrecht-form-toggle--html-checkbox .utrecht-form-toggle__checkbox:focus~.utrecht-form-toggle__track{outline-color:var(--utrecht-form-toggle-focus-border-color, var(--utrecht-form-toggle-border-color, currentColor));outline-style:var(--utrecht-form-toggle-focus-border-style, var(--utrecht-form-toggle-border-style, solid));outline-width:var(--utrecht-form-toggle-focus-border-width, var(--utrecht-form-toggle-border-width, 1px))}:host{display:inline-block}:host([hidden]){display:none !important}"}}]);