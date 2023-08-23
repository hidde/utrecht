"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[61499],{"../../components/button/docs/accessibility.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>accessibility_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.3.2_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const accessibility_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\n# Toegangkelijkheidseisen\n\n## Focus\n\n### WCAG 2.4.11\n\nBij het Link component hebben we te maken met [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG22/#focus-appearance-minimum). Deze eis beschrijft dat als een link de focus door het te selecteren met het toetsenbord het uiterlijk van de link moet veranderen. De [bedoeling van dit punt](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html#intent) is dat de keyboard focus indicator altijd duidelijk zichtbaar is.\n\n### Design keuzes\n\nWe maken daarom de volgende design keuzes bij een hover state:\n\n- Een link in focus state krijgt een gele achtergrondkleur (`var(--utrecht-yellow-60)`).\n- Een link in focus state krijgt een donkerblauwe outline (`var(--utrecht-blue-35)`).\n- We kiezen voor outline in plaats van border omdat dit beter opgepakt wordt door de verschillende browsers.\n\nAls een link de focus krijgt is deze een stuk zichtbaarder dan zonder deze achtergrond. Het verschil tussen de normale achtergrond (zonder focus) en de nieuwe achtergrond (met focus) moet voldoen aan een contrast ration van 3:1. Met de bovenstaande keuzes hebben we een contrastwaarde van ??:??\nHet verschil tussen de achtergrond met focus en de omgeving moet voldoen aan een contrast van 3:1 of de afscheiding heeft ten minste een waarde van 2 pixels. Met de bovenstaande keuzes hebben we een contrastwaarde van ??:?? en de dikte van de outline is ??:??.\n\n### Toegevoegde waarde\n\nDe toegevoegde waarde van deze beslissingen is:\n\n- Bij het gebruik van het toetsenbord om door de links te navigeren is het visueel duidelijker welke link geselecteerd is.\n- We voldoen aan [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG22/#focus-appearance-minimum), zodat we de voldoen aan de [wettelijke bepaling voor een gemeente](https://wcag.nl/wat-is-wcag/wet--en-regelgeving).\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS Component/Button/Accessibility"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:accessibility_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"CSS Component/Button/Accessibility",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const accessibility_stories=componentMeta}}]);