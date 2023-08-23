/*! For license information please see textbox-css-stories-readme-stories-mdx.e7613378.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[43289],{"../../components/textbox/css/stories/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.3.2_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const README_namespaceObject='\x3c!-- @license CC0-1.0 --\x3e\n\n# Text box\n\n## Metadata van veelgebruikte formuliervelden\n\n| Data type                                        | `autocomplete`                                   | `spellcheck` | `translate` | value component | input direction |\n| ------------------------------------------------ | ------------------------------------------------ | ------------ | ----------- | --------------- | --------------- |\n| Naam                                             | `name`                                           | `false`      | `no`        | `bdi`           | `auto`          |\n| Voornaam (1 of meerdere)                         | `given-name`                                     | `false`      | `no`        | `bdi`           | leeg of `auto`  |\n| Voorvoegsel                                      |                                                  | `false`      | `no`        | `bdi`           | `auto`          |\n| Achternaam                                       | `family-name`                                    | `false`      | `no`        | `bdi`           | `auto`          |\n| Adresregel 1                                     | `address-line1`                                  |              | `no`        | -               | -               |\n| Adresregel 2                                     | `address-line2`                                  |              | `no`        | -               | -               |\n| Adresregel 3                                     | `address-line3`                                  |              | `no`        | -               | -               |\n| Postcode                                         | `postal-code`                                    | `false`      | `no`        | -               | -               |\n| Straatnaam                                       |                                                  |              | `no`        | -               | -               |\n| Huisnummer                                       |                                                  |              | `no`        | -               | -               |\n| Huisletter                                       |                                                  |              | `no`        | -               | -               |\n| Huisnummer toevoeging                            |                                                  | `false`      | `no`        | -               | -               |\n| Woonplaats                                       |                                                  |              |             | -               | -               |\n| Burgerservicenummer                              |                                                  | `false`      | `no`        | -               | -               |\n| E-mailadres                                      | `email`                                          | `false`      | `no`        | `URLValue`      | `ltr`           |\n| Website                                          | `url`                                            | `false`      | `no`        | `URLValue`      | `ltr`           |\n| Bestandsnaam                                     |                                                  |              | `no`        | `URLValue`      | -               |\n| Wachtwoord                                       | `password` / `new-password` / `current-password` | `false`      | `no`        | `URLValue`      | -               |\n| Geboortedatum                                    | `bday`                                           |              |             |                 | -               |\n| Telefoonnummer (Europa en internationaal)        | `tel`                                            | `false`      |             |                 | `ltr`           |\n| Mobiel telefoonnummer (Europa en internationaal) | `mobile tel`                                     | `false`      |             |                 | `ltr`           |\n| Telefoonnummer thuis (Europa en internationaal)  | `home tel`                                       | `false`      |             |                 | `ltr`           |\n| Telefoonnummer werk (Europa en internationaal)   | `work tel`                                       | `false`      |             |                 | `ltr`           |\n| Faxnummer (Europa en internationaal)             | `fax tel`                                        | `false`      |             |                 | `ltr`           |\n| Telefoonnummer binnen Nederland                  | `tel-national`                                   | `false`      |             |                 | `ltr`           |\n| Mobiel telefoonnummer binnen Nederland           | `mobile tel-national`                            | `false`      |             |                 | `ltr`           |\n| Telefoonnummer thuis binnen Nederland            | `home tel-national`                              | `false`      |             |                 | `ltr`           |\n| Telefoonnummer werk binnen Nederland             | `work tel-national`                              | `false`      |             |                 | `ltr`           |\n| Faxnummer binnen Nederland                       | `fax tel-national`                               | `false`      |             |                 | `ltr`           |\n| Kenteken                                         |                                                  | `false`      |             |                 | -               |\n\n_Let op:_\n\n- Straatnaam moet niet `autocomplete="street-address"` gebruiken, `street-address` is voor een textarea.\n\n## Terminologie\n\n- **textbox**: [`role="textbox"` in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#textbox), [Text box lemma op Wikipedia](https://en.wikipedia.org/wiki/Text_box). HTML noemt het "text control" en text edit control". [MDN noemt het](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) "text field" en "text input".\n- **invalid**: ...\n- **disabled**: ...\n- **read-only**: ...\n\n## Class names\n\n- `.utrecht-textbox`\n- `.utrecht-textbox--invalid`\n- `.utrecht-textbox--disabled`\n- `.utrecht-textbox--read-only`\n\n## Design Tokens\n\n- Textbox:\n  - `--utrecht-textbox-border-bottom-width`\n  - `--utrecht-textbox-border-color`\n  - `--utrecht-textbox-border-radius`\n  - `--utrecht-textbox-border-width`\n  - `--utrecht-textbox-color`\n  - `--utrecht-textbox-font-family`\n  - `--utrecht-textbox-font-size`\n  - `--utrecht-textbox-max-inline-size`\n  - `--utrecht-textbox-padding-block-end`\n  - `--utrecht-textbox-padding-block-start`\n  - `--utrecht-textbox-padding-inline-end`\n  - `--utrecht-textbox-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textbox-disabled-border-color`\n    - `--utrecht-textbox-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textbox-invalid-border-color`\n    - `--utrecht-textbox-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textbox-read-only-border-color`\n    - `--utrecht-textbox-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n',design_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\n\x3c!-- markdownlint-disable first-line-h1 --\x3e\n\n## Design\n\n[Figma - Utrecht Design System - Text Field](https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=302%3A3975)\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-textbox--readme",title:"CSS Component/Textbox/README"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:design_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"CSS Component/Textbox/README",id:"css-textbox--readme",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const readme_stories=componentMeta}}]);