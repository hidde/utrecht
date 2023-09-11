/*! For license information please see icon-icon-gallery-functional-stories-mdx.982f97c4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[42673],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/icon/icon-gallery-functional.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _home_runner_work_utrecht_utrecht_node_modules_pnpm_storybook_addon_docs_7_4_0_types_react_dom_18_2_7_types_react_18_2_21_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.0_@types+react-dom@18.2.7_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_CustomIconGallery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/icon/CustomIconGallery.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{id:"utrecht-iconen-functional",title:"Utrecht/Iconen/Overzicht Functional",parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_CustomIconGallery__WEBPACK_IMPORTED_MODULE_1__.L,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CustomIconGallery__WEBPACK_IMPORTED_MODULE_1__.r,{name:"utrecht-icon-arrow",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("utrecht-icon-arrow",{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CustomIconGallery__WEBPACK_IMPORTED_MODULE_1__.r,{name:"utrecht-icon-checkmark",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("utrecht-icon-checkmark",{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CustomIconGallery__WEBPACK_IMPORTED_MODULE_1__.r,{name:"utrecht-icon-cross",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("utrecht-icon-cross",{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CustomIconGallery__WEBPACK_IMPORTED_MODULE_1__.r,{name:"utrecht-icon-loupe",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("utrecht-icon-loupe",{})})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Utrecht/Iconen/Overzicht Functional",id:"utrecht-iconen-functional",parameters:{status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_utrecht_utrecht_node_modules_pnpm_storybook_addon_docs_7_4_0_types_react_dom_18_2_7_types_react_18_2_21_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./stories/icon/CustomIconGallery.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>CustomIconGallery_CustomIconGallery,r:()=>CustomIconGalleryItem});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CustomIconGallery=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./stories/icon/CustomIconGallery.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CustomIconGallery.Z,options);CustomIconGallery.Z&&CustomIconGallery.Z.locals&&CustomIconGallery.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const CustomIconGallery_CustomIconGallery=({children})=>(0,jsx_runtime.jsx)("div",{className:"utrecht-custom-icon-gallery",children});CustomIconGallery_CustomIconGallery.displayName="CustomIconGallery";const CustomIconGalleryItem=({children,name})=>(0,jsx_runtime.jsxs)("div",{className:"utrecht-custom-icon-gallery-item",children:[children&&(0,jsx_runtime.jsx)("div",{className:"utrecht-custom-icon-gallery-item__icon",children}),name&&(0,jsx_runtime.jsx)("div",{className:"utrecht-custom-icon-gallery-item__name",children:name})]});CustomIconGalleryItem.displayName="CustomIconGalleryItem";try{CustomIconGallery_CustomIconGallery.displayName="CustomIconGallery",CustomIconGallery_CustomIconGallery.__docgenInfo={description:"",displayName:"CustomIconGallery",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/icon/CustomIconGallery.tsx#CustomIconGallery"]={docgenInfo:CustomIconGallery_CustomIconGallery.__docgenInfo,name:"CustomIconGallery",path:"stories/icon/CustomIconGallery.tsx#CustomIconGallery"})}catch(__react_docgen_typescript_loader_error){}try{CustomIconGalleryItem.displayName="CustomIconGalleryItem",CustomIconGalleryItem.__docgenInfo={description:"",displayName:"CustomIconGalleryItem",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/icon/CustomIconGallery.tsx#CustomIconGalleryItem"]={docgenInfo:CustomIconGalleryItem.__docgenInfo,name:"CustomIconGalleryItem",path:"stories/icon/CustomIconGallery.tsx#CustomIconGalleryItem"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./stories/icon/CustomIconGallery.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.utrecht-custom-icon-gallery {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.utrecht-custom-icon-gallery > * {\n  flex: 1 1 25ch;\n}\n\n.utrecht-custom-icon-gallery-item {\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.utrecht-custom-icon-gallery-item__icon {\n  align-items: center;\n  background: rgb(255 255 255);\n  block-size: 70px;\n  border: 1px solid rgb(0 0 0 / 10%);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;\n  display: flex;\n  flex: none;\n  inline-size: 70px;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.utrecht-custom-icon-gallery-item__name {\n  color: #333;\n  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI",\n    "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 14px;\n  line-height: 1.2;\n  margin-inline-end: 10px;\n  word-break: break-word;\n}\n',"",{version:3,sources:["webpack://./stories/icon/CustomIconGallery.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,4BAA4B;EAC5B,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX;sDACoD;EACpD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,sBAAsB;AACxB",sourcesContent:['.utrecht-custom-icon-gallery {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.utrecht-custom-icon-gallery > * {\n  flex: 1 1 25ch;\n}\n\n.utrecht-custom-icon-gallery-item {\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.utrecht-custom-icon-gallery-item__icon {\n  align-items: center;\n  background: rgb(255 255 255);\n  block-size: 70px;\n  border: 1px solid rgb(0 0 0 / 10%);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;\n  display: flex;\n  flex: none;\n  inline-size: 70px;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.utrecht-custom-icon-gallery-item__name {\n  color: #333;\n  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI",\n    "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 14px;\n  line-height: 1.2;\n  margin-inline-end: 10px;\n  word-break: break-word;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);