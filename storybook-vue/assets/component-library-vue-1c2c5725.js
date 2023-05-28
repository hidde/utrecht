import{d as l,a as q,g as $,o as r,b as a,t as U,f as _,i as g,e as u,n as p,j as k,k as S,w as x,m as h,l as C,p as v,q as y,v as I,s as N,u as V,F as w,x as F,y as B}from"./vue.esm-bundler-e2716445.js";const M=l({name:"UtrechtAlertDialog",props:{icon:{type:String,default:null},type:{type:String,default:null}},setup(t){return{dialogRef:q(null),props:t}}}),c=(t,e)=>{const n=t.__vccOpts||t;for(const[s,o]of e)n[s]=o;return n},H={key:0,class:"utrecht-alert-dialog__icon"},P={class:"utrecht-alert-dialog__message"};function T(t,e,n,s,o,i){return r(),a("dialog",{ref:"dialogRef",class:p(["utrecht-alert-dialog",{"utrecht-alert-dialog--error":t.type==="error","utrecht-alert-dialog--info":t.type==="info","utrecht-alert-dialog--warning":t.type==="warning"}])},[t.icon?(r(),a("div",H,U(t.icon),1)):_("",!0),g("div",P,[u(t.$slots,"default")])],2)}const Qr=c(M,[["render",T]]),D=l({name:"UtrechtArticle"}),R={class:"utrecht-article"};function O(t,e,n,s,o,i){return r(),a("article",R,[u(t.$slots,"default")])}const Wr=c(D,[["render",O]]),A=l({name:"UtrechtBadgeCounter",props:{value:{type:[Number,String],required:!1,default:void 0}}}),E=["value"],j={key:1,class:"utrecht-badge-counter"};function z(t,e,n,s,o,i){return typeof t.value<"u"?(r(),a("data",{key:0,class:"utrecht-badge-counter",value:t.value?String(t.value):void 0},[u(t.$slots,"default")],8,E)):(r(),a("span",j,[u(t.$slots,"default")]))}const Yr=c(A,[["render",z]]),G=l({name:"UtrechtBadgeStatus",props:{status:{type:String,required:!1,default:void 0}}});function K(t,e,n,s,o,i){return r(),a("span",{class:p([{[`utrecht-badge-status--${t.status}`]:!0},"utrecht-badge-status"])},[u(t.$slots,"default")],2)}const Zr=c(G,[["render",K]]),J=l({name:"UtrechtLink",props:{external:{type:Boolean,required:!1,default:!1}}}),Q=["rel"];function W(t,e,n,s,o,i){return r(),a("a",{class:p(["utrecht-link",{"utrecht-link--external":t.external}]),rel:t.external?"external noopener noreferrer":void 0},[u(t.$slots,"default")],10,Q)}const Y=c(J,[["render",W]]),L=({prop:t,type:e})=>({itemscope:!0,itemtype:e,itemprop:t}),Z=t=>({itemprop:t}),X=l({name:"UtrechtBreadcrumbLink",components:{UtrechtLink:Y},props:{href:{type:String,required:!0},current:{type:Boolean,required:!1,default:!1},rel:{type:String,required:!1,default:""},index:{type:Number,required:!1,default:void 0}},methods:{ref:q,useMicrodataProp:Z,useMicrodataItem:L,getCurrentInstance:$}}),tt=["content"];function et(t,e,n,s,o,i){const d=k("UtrechtLink");return r(),a("li",h({class:"utrecht-breadcrumb__item"},t.useMicrodataItem({type:"https://schema.org/ListItem",prop:"itemListElement"})),[S(d,h({...t.useMicrodataProp("item")},{ref:t.ref,class:"utrecht-breadcrumb__link","aria-current":t.current&&"location",href:t.href,rel:t.rel}),{default:x(()=>[g("span",h({class:"utrecht-breadcrumb__text"},{...t.useMicrodataProp("name")}),[u(t.$slots,"default")],16),typeof t.index=="number"?(r(),a("meta",h({key:0},{...t.useMicrodataProp("position")},{content:String(t.index+1)}),null,16,tt)):_("",!0)]),_:3},16,["aria-current","href","rel"])],16)}const Xr=c(X,[["render",et]]),rt=l({name:"UtrechtHeading",props:{level:{type:Number,required:!0,default:6}}}),at={key:0,class:"utrecht-heading-1"},nt={key:1,class:"utrecht-heading-2"},st={key:2,class:"utrecht-heading-3"},lt={key:3,class:"utrecht-heading-4"},ot={key:4,class:"utrecht-heading-5"},ut={key:5,class:"utrecht-heading-6"};function ct(t,e,n,s,o,i){return t.level==1?(r(),a("h1",at,[u(t.$slots,"default",{},void 0,!0)])):t.level==2?(r(),a("h2",nt,[u(t.$slots,"default",{},void 0,!0)])):t.level==3?(r(),a("h3",st,[u(t.$slots,"default",{},void 0,!0)])):t.level==4?(r(),a("h4",lt,[u(t.$slots,"default",{},void 0,!0)])):t.level==5?(r(),a("h5",ot,[u(t.$slots,"default",{},void 0,!0)])):(r(),a("h6",ut,[u(t.$slots,"default",{},void 0,!0)]))}const it=c(rt,[["render",ct],["__scopeId","data-v-7324134c"]]);function f(t,e,n="modelValue"){return C({get:()=>t.modelValue,set:s=>e(`update:${n}`,s)})}const dt=l({name:"UtrechtBreadcrumbNav",components:{UtrechtHeading:it},props:{appearance:{type:String,required:!1,default:"arrows"},headingLevel:{type:Number,required:!1,default:2},label:{type:String,required:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}},data(){var t;return{headingId:this.$props.label?String((t=$())==null?void 0:t.uid):void 0}},methods:{useMicrodataItem:L,getCurrentInstance:$}}),ht=["aria-labelledby"];function pt(t,e,n,s,o,i){const d=k("UtrechtHeading");return r(),a("nav",{class:p(["utrecht-breadcrumb",{"utrecht-breadcrumb--arrows":t.appearance==="arrows"}]),"aria-labelledby":t.headingId},[S(d,{id:t.headingId,class:"utrecht-breadcrumb__heading",level:t.headingLevel??2,"aria-hidden":"true"},{default:x(()=>[v(U(t.label),1)]),_:1},8,["id","level"]),g("ol",h({class:"utrecht-breadcrumb__list"},{...t.useMicrodataItem({type:"https://schema.org/BreadcrumbList"})}),[u(t.$slots,"default")],16)],10,ht)}const ta=c(dt,[["render",pt]]),ft=l({name:"UtrechtButton",props:{appearance:{type:String,required:!1,default:void 0},type:{type:String,required:!1,default:"button"},busy:{type:Boolean,required:!1,default:!1}}}),mt=["aria-busy","type"];function vt(t,e,n,s,o,i){return r(),a("button",{"aria-busy":t.busy||void 0,class:p(["utrecht-button",{"utrecht-button--busy":t.busy},{"utrecht-button--primary-action":t.appearance==="primary-action-button"},{"utrecht-button--secondary-action":t.appearance==="secondary-action-button"},{"utrecht-button--submit":t.type==="submit"},{"utrecht-button--subtle":t.appearance==="subtle-button"}]),type:t.type},[u(t.$slots,"default")],10,mt)}const ea=c(ft,[["render",vt]]),yt=l({name:"UtrechtButtonGroup"}),bt={class:"utrecht-button-group"};function gt(t,e,n,s,o,i){return r(),a("div",bt,[u(t.$slots,"default")])}const ra=c(yt,[["render",gt]]),$t=l({name:"UtrechtCheckbox",props:{appearance:{type:String,required:!1,default:"custom"},invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],required:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Ut=["aria-invalid"];function _t(t,e,n,s,o,i){return y((r(),a("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"checkbox","aria-invalid":t.invalid||void 0,class:p(["utrecht-checkbox","utrecht-checkbox--html-input",{"utrecht-checkbox--invalid":t.invalid},{"utrecht-checkbox--custom":t.appearance==="custom"}])},null,10,Ut)),[[I,t.value]])}const aa=c($t,[["render",_t]]),qt=l({name:"UtrechtCode"}),kt={class:"utrecht-code"};function St(t,e,n,s,o,i){return r(),a("code",kt,[u(t.$slots,"default")])}const na=c(qt,[["render",St]]),xt=l({name:"UtrechtCodeBlock"}),Bt={class:"utrecht-code-block"},Lt={class:"utrecht-code-block__content"};function Ct(t,e,n,s,o,i){return r(),a("pre",Bt,[v("      "),g("code",Lt,[v(`
          `),u(t.$slots,"default"),v(`
      `)]),v(`
  `)])}const sa=c(xt,[["render",Ct]]),It=l({name:"UtrechtDataList",props:{appearance:{type:String,required:!1,default:"rows"}}});function Nt(t,e,n,s,o,i){return r(),a("dl",{class:p([{"utrecht-data-list--rows":t.appearance==="rows"},"utrecht-data-list utrecht-data-list--html-dl"])},[u(t.$slots,"default")],2)}const la=c(It,[["render",Nt]]);l({name:"UtrechtDataListActions"});const Vt=l({name:"UtrechtDataListItem"}),wt={class:"utrecht-data-list__item"};function Ft(t,e,n,s,o,i){return r(),a("div",wt,[u(t.$slots,"default")])}const oa=c(Vt,[["render",Ft]]),Mt=l({name:"UtrechtDataListKey"}),Ht={class:"utrecht-data-list__item-key"};function Pt(t,e,n,s,o,i){return r(),a("dt",Ht,[u(t.$slots,"default")])}const ua=c(Mt,[["render",Pt]]),Tt=l({name:"UtrechtDataListValue",props:{value:{type:[Number,String],required:!1,default:""},emptyDescription:{type:String,required:!1,default:""},multiline:{type:Boolean,required:!1},notranslate:{type:Boolean,required:!1}},data(){return{empty:this.$props.value===""||this.$props.value===void 0}}}),Dt=["translate"],Rt=["aria-label"];function Ot(t,e,n,s,o,i){return r(),a("dd",{class:p(["utrecht-data-list__item-value utrecht-data-list__item-value--html-dd",{"utrecht-data-list__item-value--multiline":t.multiline}]),translate:typeof t.notranslate=="boolean"?t.notranslate?"no":"yes":void 0},[t.empty?(r(),a("span",{key:0,"aria-label":t.emptyDescription},"-",8,Rt)):u(t.$slots,"default",{key:1})],10,Dt)}const ca=c(Tt,[["render",Ot]]),At=l({name:"UtrechtDocument"}),Et={class:"utrecht-document"};function jt(t,e,n,s,o,i){return r(),a("div",Et,[u(t.$slots,"default")])}const ia=c(At,[["render",jt]]),zt=l({name:"UtrechtEmphasis"});function Gt(t,e,n,s,o,i){return r(),a("em",h(t.$attrs,{class:"utrecht-emphasis utrecht-emphasis--stressed"}),[u(t.$slots,"default")],16)}const da=c(zt,[["render",Gt]]),Kt=l({name:"UtrechtFigure"});function Jt(t,e,n,s,o,i){return r(),a("figure",h(t.$attrs,{class:"utrecht-figure"}),[u(t.$slots,"default")],16)}const ha=c(Kt,[["render",Jt]]),Qt=l({name:"UtrechtFigureCaption"});function Wt(t,e,n,s,o,i){return r(),a("figcaption",h(t.$attrs,{class:"utrecht-figure__caption"}),[u(t.$slots,"default")],16)}const pa=c(Qt,[["render",Wt]]),Yt=l({name:"UtrechtFormField",props:{invalid:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:void 0}}});function Zt(t,e,n,s,o,i){return r(),a("div",{class:p(["utrecht-form-field",{"utrecht-form-field--invalid":t.invalid},{"utrecht-form-field--checkbox":t.type==="checkbox"},{"utrecht-form-field--radio":t.type==="radio"},{"utrecht-form-field--text":!t.type||t.type==="text"}])},[u(t.$slots,"default")],2)}const fa=c(Yt,[["render",Zt]]);l({name:"UtrechtFormFieldset",props:{describedby:{type:String,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:!1},invalid:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:void 0},labelledby:{type:String,required:!1,default:void 0},role:{type:String,required:!1,default:null},name:{type:String,required:!1,default:""},form:{type:String,required:!1,default:null}}});l({name:"UtrechtFormFieldsetLegend"});const Xt=l({name:"UtrechtFormLabel",props:{checked:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:void 0}}});function te(t,e,n,s,o,i){return r(),a("label",{class:p(["utrecht-form-label",{"utrecht-form-label--checked":t.checked},{"utrecht-form-label--disabled":t.disabled},{[`utrecht-form-label--${t.type}`]:t.type}])},[u(t.$slots,"default")],2)}const ma=c(Xt,[["render",te]]),ee=l({name:"UtrechtHeading1"}),re={class:"utrecht-heading-1"};function ae(t,e,n,s,o,i){return r(),a("h1",re,[u(t.$slots,"default")])}const va=c(ee,[["render",ae]]),ne=l({name:"UtrechtHeading2"}),se={class:"utrecht-heading-2"};function le(t,e,n,s,o,i){return r(),a("h2",se,[u(t.$slots,"default")])}const ya=c(ne,[["render",le]]),oe=l({name:"UtrechtHeading3"}),ue={class:"utrecht-heading-3"};function ce(t,e,n,s,o,i){return r(),a("h3",ue,[u(t.$slots,"default")])}const ba=c(oe,[["render",ce]]),ie=l({name:"UtrechtHeading4"}),de={class:"utrecht-heading-4"};function he(t,e,n,s,o,i){return r(),a("h4",de,[u(t.$slots,"default")])}const ga=c(ie,[["render",he]]),pe=l({name:"UtrechtHeading5"}),fe={class:"utrecht-heading-5"};function me(t,e,n,s,o,i){return r(),a("h5",fe,[u(t.$slots,"default")])}const $a=c(pe,[["render",me]]),ve=l({name:"UtrechtHeading6"}),ye={class:"utrecht-heading-6"};function be(t,e,n,s,o,i){return r(),a("h6",ye,[u(t.$slots,"default")])}const Ua=c(ve,[["render",be]]),ge=l({name:"UtrechtImage",props:{photo:{type:Boolean,default:!1,required:!1}}}),$e=["alt","src","height","width"];function Ue(t,e,n,s,o,i){var d,b,m;return r(),a("img",h({class:"utrecht-img"},t.$attrs,{class:{"utrecht-img--photo":t.photo},alt:(d=t.$attrs)==null?void 0:d.alt,src:t.$attrs.src,height:(b=t.$attrs)==null?void 0:b.height,width:(m=t.$attrs)==null?void 0:m.width}),null,16,$e)}const _a=c(ge,[["render",Ue]]),_e=l({name:"UtrechtLinkSocial",props:{external:{type:Boolean,default:!1,required:!1}}}),qe=["rel"];function ke(t,e,n,s,o,i){return r(),a("a",h({class:"utrecht-link-social"},t.$attrs,{rel:t.external!==!1?"external noopener noreferrer":void 0}),[u(t.$slots,"default")],16,qe)}const qa=c(_e,[["render",ke]]),Se=l({name:"UtrechtListSocial",props:{external:{type:Boolean,default:!1,required:!1}}});function xe(t,e,n,s,o,i){return r(),a("ul",h({class:"utrecht-list-social"},t.$attrs),[u(t.$slots,"default")],16)}const ka=c(Se,[["render",xe]]),Be=l({name:"UtrechtListSocialItem"});function Le(t,e,n,s,o,i){return r(),a("li",h({class:"utrecht-list-social__item"},t.$attrs),[u(t.$slots,"default")],16)}const Sa=c(Be,[["render",Le]]),Ce=l({name:"UtrechtOrderedList"});function Ie(t,e,n,s,o,i){return r(),a("ol",h({class:"utrecht-ordered-list"},t.$attrs),[u(t.$slots,"default")],16)}const xa=c(Ce,[["render",Ie]]),Ne=l({name:"UtrechtOrderedListItem"});function Ve(t,e,n,s,o,i){return r(),a("li",h({class:"utrecht-ordered-list__item"},t.$attrs),[u(t.$slots,"default")],16)}const Ba=c(Ne,[["render",Ve]]),we=l({name:"UtrechtNumberValue",props:{value:{type:[Number,String],required:!1,default:void 0}}}),Fe=["value"];function Me(t,e,n,s,o,i){return r(),a("data",{value:typeof t.value=="string"||typeof t.value=="number"?String(t.value):void 0,class:"utrecht-value-number"},[u(t.$slots,"default")],8,Fe)}const La=c(we,[["render",Me]]),He=l({name:"UtrechtPage"}),Pe={class:"utrecht-page"};function Te(t,e,n,s,o,i){return r(),a("div",Pe,[u(t.$slots,"default")])}const Ca=c(He,[["render",Te]]),De=l({name:"UtrechtPageContent"}),Re={class:"utrecht-page-content"};function Oe(t,e,n,s,o,i){return r(),a("div",Re,[u(t.$slots,"default")])}const Ia=c(De,[["render",Oe]]),Ae=l({name:"UtrechtPageFooter"}),Ee={class:"utrecht-page-footer"};function je(t,e,n,s,o,i){return r(),a("footer",Ee,[u(t.$slots,"default")])}const Na=c(Ae,[["render",je]]),ze=l({name:"UtrechtPageHeader"}),Ge={class:"utrecht-page-header"};function Ke(t,e,n,s,o,i){return r(),a("header",Ge,[u(t.$slots,"default")])}const Va=c(ze,[["render",Ke]]),Je=l({name:"UtrechtParagraph",props:{lead:{type:Boolean,required:!1,default:!1},small:{type:Boolean,required:!1,default:!1}}}),Qe={key:0,class:"utrecht-paragraph__small"};function We(t,e,n,s,o,i){return r(),a("p",{class:p(["utrecht-paragraph",{"utrecht-paragraph--lead":t.lead,"utrecht-paragraph--small":t.small}])},[t.small?(r(),a("small",Qe,[u(t.$slots,"default")])):u(t.$slots,"default",{key:1})],2)}const wa=c(Je,[["render",We]]),Ye=l({name:"UtrechtRadioButton",props:{invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],required:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Ze=["aria-invalid"];function Xe(t,e,n,s,o,i){return y((r(),a("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),type:"radio","aria-invalid":t.invalid||void 0,class:p(["utrecht-radio-button","utrecht-radio-button--html-input",{"utrecht-radio-button--invalid":t.invalid}])},null,10,Ze)),[[N,t.value]])}const Fa=c(Ye,[["render",Xe]]),tr=l({name:"UtrechtSelect",props:{invalid:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},options:{type:[Array,Object],required:!0},modelValue:{type:[String,Number,Boolean],required:!1,default:""}},setup(t,{emit:e}){return{selected:f(t,e)}}}),er=["aria-invalid","readonly"],rr=["value","disabled"];function ar(t,e,n,s,o,i){return y((r(),a("select",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.selected=d),"aria-invalid":t.invalid||void 0,class:p([{"utrecht-select--invalid":t.invalid},{"utrecht-select--readonly":t.readonly},"utrecht-select--html-select","utrecht-select"]),readonly:t.readonly},[t.options&&t.options.length>0?(r(!0),a(w,{key:0},F(t.options,({value:d,label:b,disabled:m})=>(r(),a("option",{key:d,value:d,class:p([{"utrecht-select__option--disabled":m},"utrecht-select__option"]),disabled:m},U(b),11,rr))),128)):_("",!0)],10,er)),[[V,t.selected]])}const Ma=c(tr,[["render",ar]]),nr=l({name:"UtrechtSeparator"});function sr(t,e,n,s,o,i){return r(),a("hr",h({class:"utrecht-separator"},t.$attrs),null,16)}const Ha=c(nr,[["render",sr]]),lr=l({name:"UtrechtSkipLink",props:{href:{type:String,default:void 0,required:!1}}}),or=["href"];function ur(t,e,n,s,o,i){return r(),a("a",h(t.$attrs,{href:t.$props.href,class:"utrecht-skip-link utrecht-skip-link--visible-on-focus"}),[u(t.$slots,"default")],16,or)}const Pa=c(lr,[["render",ur]]),cr=l({name:"UtrechtStrong"});function ir(t,e,n,s,o,i){return r(),a("strong",h(t.$attrs,{class:"utrecht-emphasis utrecht-emphasis--strong"}),[u(t.$slots,"default")],16)}const Ta=c(cr,[["render",ir]]),dr=l({name:"UtrechtTable"}),hr={class:"utrecht-table"};function pr(t,e,n,s,o,i){return r(),a("table",hr,[u(t.$slots,"default")])}const Da=c(dr,[["render",pr]]),fr=l({name:"UtrechtTableBody"}),mr={class:"utrecht-table__body"};function vr(t,e,n,s,o,i){return r(),a("tbody",mr,[u(t.$slots,"default")])}const Ra=c(fr,[["render",vr]]),yr=l({name:"UtrechtTableCaption"}),br={class:"utrecht-table__caption"};function gr(t,e,n,s,o,i){return r(),a("caption",br,[u(t.$slots,"default")])}const Oa=c(yr,[["render",gr]]),$r=l({name:"UtrechtTableCell"}),Ur={class:"utrecht-table__cell"};function _r(t,e,n,s,o,i){return r(),a("td",Ur,[u(t.$slots,"default")])}const Aa=c($r,[["render",_r]]),qr=l({name:"UtrechtTableFooter"}),kr={class:"utrecht-table__footer"};function Sr(t,e,n,s,o,i){return r(),a("tfoot",kr,[u(t.$slots,"default")])}const Ea=c(qr,[["render",Sr]]),xr=l({name:"UtrechtTableHeader"}),Br={class:"utrecht-table__header"};function Lr(t,e,n,s,o,i){return r(),a("thead",Br,[u(t.$slots,"default")])}const ja=c(xr,[["render",Lr]]),Cr=l({name:"UtrechtTableHeaderCell"}),Ir={class:"utrecht-table__header-cell"};function Nr(t,e,n,s,o,i){return r(),a("th",Ir,[u(t.$slots,"default")])}const za=c(Cr,[["render",Nr]]),Vr=l({name:"UtrechtTableRow"}),wr={class:"utrecht-table__row"};function Fr(t,e,n,s,o,i){return r(),a("tr",wr,[u(t.$slots,"default")])}const Ga=c(Vr,[["render",Fr]]),Mr=l({name:"UtrechtTextarea",props:{dir:{type:String,required:!1,default:"auto"},invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],require:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Hr=["aria-invalid","dir"];function Pr(t,e,n,s,o,i){return y((r(),a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),"aria-invalid":t.invalid||void 0,class:p([{"utrecht-textarea--invalid":t.invalid},"utrecht-textarea","utrecht-textarea--html-textarea"]),dir:t.dir},null,10,Hr)),[[B,t.value]])}const Ka=c(Mr,[["render",Pr]]),Tr=l({name:"UtrechtTextbox",props:{dir:{type:String,required:!1,default:"auto"},invalid:{type:Boolean,required:!1},modelValue:{type:[String,Number,Boolean],require:!1,default:""}},setup(t,{emit:e}){return{value:f(t,e)}}}),Dr=["aria-invalid","dir"];function Rr(t,e,n,s,o,i){return y((r(),a("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),"aria-invalid":t.invalid||void 0,class:p([{"utrecht-textbox--invalid":t.invalid},"utrecht-textbox","utrecht-textbox--html-input"]),dir:t.dir},null,10,Dr)),[[B,t.value]])}const Ja=c(Tr,[["render",Rr]]),Or=l({name:"UtrechtUnorderedList"});function Ar(t,e,n,s,o,i){return r(),a("ul",h({class:"utrecht-unordered-list"},t.$attrs),[u(t.$slots,"default")],16)}const Qa=c(Or,[["render",Ar]]),Er=l({name:"UtrechtOrderedListItem"});function jr(t,e,n,s,o,i){return r(),a("li",h({class:"utrecht-ordered-list__item"},t.$attrs),[u(t.$slots,"default")],16)}const Wa=c(Er,[["render",jr]]),zr=l({name:"UtrechtURLValue"}),Gr={translate:"no",class:"utrecht-url"};function Kr(t,e,n,s,o,i){return r(),a("bdi",Gr,[u(t.$slots,"default")])}const Ya=c(zr,[["render",Kr]]);export{na as $,La as A,za as B,va as C,Ua as D,Ca as E,ya as F,wa as G,ba as H,_a as I,Ma as J,Fa as K,Aa as L,xa as M,qa as N,Ia as O,Sa as P,Pa as Q,Ba as R,fa as S,ga as T,da as U,$a as V,Ha as W,Y as X,Da as Y,Ra as Z,ea as _,Qr as a,Ea as a0,Ka as a1,Qa as a2,Wa as a3,Ya as a4,ia as b,Yr as c,Zr as d,ta as e,sa as f,ua as g,la as h,Xr as i,Ja as j,ha as k,it as l,Na as m,Ta as n,Wr as o,aa as p,pa as q,Oa as r,ja as s,Ga as t,ra as u,ca as v,ka as w,ma as x,oa as y,Va as z};
//# sourceMappingURL=component-library-vue-1c2c5725.js.map
