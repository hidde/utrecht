"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[86667],{"../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{c:()=>clsx})},"../web-component-library-stencil/dist/esm/utrecht-breadcrumb.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{utrecht_breadcrumb:()=>Breadcrumb});var _index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-component-library-stencil/dist/esm/index-380964e2.js"),_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-component-library-stencil/dist/esm/clsx.m-9f200cc0.js");const Breadcrumb=class{constructor(hostRef){(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.json=void 0,this.variant=void 0}render(){const{json,variant}=this;console.log(json);const items=json?JSON.parse(json):[];return(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-breadcrumb","arrows"===variant&&"utrecht-breadcrumb--arrows")},(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{class:"utrecht-breadcrumb__list",itemscope:!0,itemtype:"https://schema.org/BreadcrumbList"},items.map((({href,title,current},index)=>(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:href,class:"utrecht-breadcrumb__item",itemscope:!0,itemtype:"https://schema.org/ListItem",itemprop:"itemListElement"},(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{class:(0,_clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-breadcrumb__link","utrecht-link",current&&"utrecht-link--current"),href,"aria-current":current?"location":null,itemprop:"item"},(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"utrecht-breadcrumb__text",itemprop:"name"},title),(0,_index_380964e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("meta",{itemprop:"position",content:index+1})))))))}};Breadcrumb.style='.utrecht-breadcrumb--arrows{--utrecht-breadcrumb-arrow-size:24px;overflow:hidden}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link{padding-inline-end:0;position:relative}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::after,.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::before{block-size:0;border-block-end-width:var(--utrecht-breadcrumb-block-size);border-block-start-width:var(--utrecht-breadcrumb-block-size);border-color:transparent;border-style:solid;content:" ";display:block;inline-size:0;inset-block-start:50%;inset-inline-start:100%;margin-block-start:calc(-1 * var(--utrecht-breadcrumb-block-size));position:absolute}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::after{border-inline-start-color:var(--utrecht-breadcrumb-link-background-color);border-inline-start-width:var(--utrecht-breadcrumb-arrow-size);z-index:2}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::before{border-inline-start-color:var(--utrecht-document-background-color);border-inline-start-width:var(--utrecht-breadcrumb-arrow-size);margin-block-start:calc(-1 * var(--utrecht-breadcrumb-block-size));margin-inline-start:1px;z-index:1}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link--focus,.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link:focus{background-color:var(--utrecht-breadcrumb-link-focus-background-color)}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link--focus::after,.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link:focus::after{border-inline-start-color:var(--utrecht-breadcrumb-link-focus-background-color)}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__item~.utrecht-breadcrumb__item .utrecht-breadcrumb__link{padding-inline-start:calc(var(--utrecht-breadcrumb-item-padding-inline-start) + var(--utrecht-breadcrumb-arrow-size))}.utrecht-breadcrumb__item~.utrecht-breadcrumb__item{margin-inline-start:var(--utrecht-breadcrumb-item-divider-inline-size)}.utrecht-breadcrumb{--utrecht-focus-background-color:var(--utrecht-breadcrumb-link-focus-background-color);--utrecht-link-background-color:var(--utrecht-breadcrumb-link-background-color);--utrecht-link-color:var(--utrecht-breadcrumb-link-color);--utrecht-link-focus-color:var(--utrecht-breadcrumb-link-focus-color, var(--utrecht-breadcrumb-link-color));--utrecht-link-focus-text-decoration:var(--utrecht-link-text-decoration);--utrecht-link-hover-color:var(--utrecht-breadcrumb-link-color);--utrecht-link-hover-text-decoration:var(--utrecht-link-text-decoration);--utrecht-link-visited-color:var(--utrecht-breadcrumb-link-color);--utrecht-link-visited-text-decoration:var(--utrecht-link-text-decoration);font-family:var(--utrecht-document-font-family, inherit);font-size:var(--utrecht-breadcrumb-font-size);text-transform:var(--utrecht-document-text-transform, inherit)}.utrecht-breadcrumb__heading{display:none}.utrecht-breadcrumb__list{block-size:var(--utrecht-breadcrumb-block-size);display:flex}ol.utrecht-breadcrumb__list{list-style:none;margin-block-end:0;margin-block-start:0;padding-inline-start:0}.utrecht-breadcrumb__item{block-size:100%}.utrecht-breadcrumb__link{background-color:var(--utrecht-breadcrumb-link-background-color);display:block;padding-block-end:var(--utrecht-breadcrumb-item-padding-block-end, 8px);padding-block-start:var(--utrecht-breadcrumb-item-padding-block-start, 8px);padding-inline-end:var(--utrecht-breadcrumb-item-padding-inline-end, 8px);padding-inline-start:var(--utrecht-breadcrumb-item-padding-inline-start, 8px)}.utrecht-breadcrumb--arrows{--utrecht-breadcrumb-arrow-size:24px;overflow:hidden}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link{padding-inline-end:0;position:relative}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::after,.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::before{block-size:0;border-block-end-width:var(--utrecht-breadcrumb-block-size);border-block-start-width:var(--utrecht-breadcrumb-block-size);border-color:transparent;border-style:solid;content:" ";display:block;inline-size:0;inset-block-start:50%;inset-inline-start:100%;margin-block-start:calc(-1 * var(--utrecht-breadcrumb-block-size));position:absolute}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::after{border-inline-start-color:var(--utrecht-breadcrumb-link-background-color);border-inline-start-width:var(--utrecht-breadcrumb-arrow-size);z-index:2}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link::before{border-inline-start-color:var(--utrecht-document-background-color);border-inline-start-width:var(--utrecht-breadcrumb-arrow-size);margin-block-start:calc(-1 * var(--utrecht-breadcrumb-block-size));margin-inline-start:1px;z-index:1}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link--focus,.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link:focus{background-color:var(--utrecht-breadcrumb-link-focus-background-color)}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link--focus::after,.utrecht-breadcrumb--arrows .utrecht-breadcrumb__link:focus::after{border-inline-start-color:var(--utrecht-breadcrumb-link-focus-background-color)}.utrecht-breadcrumb--arrows .utrecht-breadcrumb__item~.utrecht-breadcrumb__item .utrecht-breadcrumb__link{padding-inline-start:calc(var(--utrecht-breadcrumb-item-padding-inline-start) + var(--utrecht-breadcrumb-arrow-size))}.utrecht-breadcrumb__item~.utrecht-breadcrumb__item{margin-inline-start:var(--utrecht-breadcrumb-item-divider-inline-size)}.utrecht-link{--utrecht-icon-size:var(--utrecht-link-icon-size, 1em);color:var(--utrecht-link-color, blue);text-decoration:var(--utrecht-link-text-decoration, underline);text-decoration-color:var(--utrecht-link-text-decoration-color, currentColor);text-decoration-skip-ink:all;text-decoration-thickness:max(var(--utrecht-link-text-decoration-thickness), 1px);text-underline-offset:var(--utrecht-link-text-underline-offset)}.utrecht-link--icon-left{background-image:var(--utrecht-link-icon-left-background-image, none);background-position:0 0.25em;background-repeat:no-repeat;color:var(--utrecht-link-color, blue);font-weight:var(--utrecht-typography-weight-scale-bold-font-weight);padding-inline-start:var(--utrecht-space-block-md);text-decoration:none}.utrecht-link:visited,.utrecht-link--visited{color:var(--utrecht-link-visited-color, var(--utrecht-link-color))}.utrecht-link:hover,.utrecht-link--hover{color:var(--utrecht-link-hover-color, var(--utrecht-link-color));text-decoration:var(--utrecht-link-hover-text-decoration, var(--utrecht-link-text-decoration, underline));text-decoration-skip:none;text-decoration-skip-ink:none;text-decoration-thickness:max(var(--utrecht-link-hover-text-decoration-thickness, var(--utrecht-link-text-decoration-thickness)), 1px)}.utrecht-link--focus{background-color:var(--utrecht-link-focus-background-color, transparent);color:var(--utrecht-link-focus-color, var(--utrecht-link-color));text-decoration:var(--utrecht-link-focus-text-decoration, var(--utrecht-link-text-decoration, underline));text-decoration-skip:none;text-decoration-skip-ink:none;text-decoration-thickness:max(var(--utrecht-link-focus-text-decoration-thickness, var(--utrecht-link-text-decoration-thickness)), 1px)}.utrecht-link--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-link:focus{background-color:var(--utrecht-link-focus-background-color, transparent);color:var(--utrecht-link-focus-color, var(--utrecht-link-color));text-decoration:var(--utrecht-link-focus-text-decoration, var(--utrecht-link-text-decoration, underline));text-decoration-skip:none;text-decoration-skip-ink:none;text-decoration-thickness:max(var(--utrecht-link-focus-text-decoration-thickness, var(--utrecht-link-text-decoration-thickness)), 1px);--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-link:active,.utrecht-link--active{color:var(--utrecht-link-active-color, var(--utrecht-link-color))}.utrecht-link--telephone{white-space:nowrap}.utrecht-link--box-content{color:unset;display:inline-block;text-decoration:unset;text-decoration-skip-ink:unset;text-decoration-thickness:unset;text-underline-offset:unset}.utrecht-link--placeholder{color:var(--utrecht-link-placeholder-color, var(--utrecht-link-color));cursor:var(--utrecht-action-disabled-cursor);text-decoration:none}:host{display:block}:host([hidden]){display:none !important}'}}]);