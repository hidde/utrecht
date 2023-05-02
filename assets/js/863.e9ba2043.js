"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[863],{3673:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(2983),o=t(4517);const r={tabItem:"tabItem_ZNjK"};function a(e){let{children:n,hidden:t,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,a),hidden:t},n)}},7731:(e,n,t)=>{t.d(n,{Z:()=>k});var i=t(3223),o=t(2983),r=t(4517),a=t(559),u=t(4079),s=t(7872),l=t(1420),c=t(4973);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}function f(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,u.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=f(e),[a,u]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[s,l]=g({queryString:t,groupId:i}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Nk)(t);return[i,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),p=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{p&&u(p)}),[p]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),l(e),h(e)}),[l,h,r]),tabValues:r}}var p=t(4610);const b={tabList:"tabList_CiZE",tabItem:"tabItem_kUB7"};function w(e){let{className:n,block:t,selectedValue:u,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),f=e=>{const n=e.currentTarget,t=c.indexOf(n),i=l[t].value;i!==u&&(d(n),s(i))},m=e=>{let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:a}=e;return o.createElement("li",(0,i.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:f},a,{className:(0,r.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":u===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i}))))}function v(e){const n=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(w,(0,i.Z)({},e,n)),o.createElement(y,(0,i.Z)({},e,n)))}function k(e){const n=(0,p.Z)();return o.createElement(v,(0,i.Z)({key:String(n)},e))}},8856:(e,n,t)=>{t.d(n,{Z:()=>g});var i=t(7862),o=t.n(i),r=t(2983);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}var s,l,c=(s=function(e){!function(n){if("undefined"!=typeof window){var t,i=0,o=!1,r=!1,a=7,u="[iFrameSizer]",s=u.length,l=null,c=window.requestAnimationFrame,d={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},f={},m=null,g={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){M("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},h={};window.jQuery&&((t=window.jQuery).fn?t.fn.iFrameResize||(t.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,t){P(t,e)})).end()}):I("","Unable to bind to jQuery, it is not fully loaded.")),"function"==typeof n&&n.amd?n([],B):e.exports=B(),window.iFrameResize=window.iFrameResize||B()}function p(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function b(e,n,t){e.addEventListener(n,t,!1)}function w(e,n,t){e.removeEventListener(n,t,!1)}function y(e){return u+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function v(e){return f[e]?f[e].log:o}function k(e,n){z("log",e,n,v(e))}function I(e,n){z("info",e,n,v(e))}function M(e,n){z("warn",e,n,!0)}function z(e,n,t,i){!0===i&&"object"==typeof window.console&&console[e](y(n),t)}function x(e){function n(){o("Height"),o("Width"),W((function(){N(A),O(q),y("onResized",A)}),A,"init")}function t(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function i(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function o(e){var n=Number(f[q]["max"+e]),t=Number(f[q]["min"+e]),i=e.toLowerCase(),o=Number(A[i]);k(q,"Checking "+i+" is in range "+t+"-"+n),o<t&&(o=t,k(q,"Set "+i+" to min value")),o>n&&(o=n,k(q,"Set "+i+" to max value")),A[i]=""+o}function r(e){return L.substr(L.indexOf(":")+a+e)}function c(e,n){var t,i,o;t=function(){var t,i;V("Send Page Info","pageInfo:"+(t=document.body.getBoundingClientRect(),i=A.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(i.top-t.top,10),offsetLeft:parseInt(i.left-t.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},i=32,h[o=n]||(h[o]=setTimeout((function(){h[o]=null,t()}),i))}function d(e){var n=e.getBoundingClientRect();return F(q),{x:Math.floor(Number(n.left)+Number(l.x)),y:Math.floor(Number(n.top)+Number(l.y))}}function m(e){var n=e?d(A.iframe):{x:0,y:0},t={x:Number(A.width)+n.x,y:Number(A.height)+n.y};k(q,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):M(q,"Unable to scroll to requested position, window.parentIFrame not found"):(l=t,g(),k(q,"--"))}function g(){!1!==y("onScroll",l)?O(q):C()}function p(e){y(e,{iframe:A.iframe,screenX:A.width,screenY:A.height,type:A.type})}function y(e,n){return E(q,e,n)}var v,z,x,T,P,j,L=e.data,A={},q=null;"[iFrameResizerChild]Ready"===L?function(){for(var e in f)V("iFrame requested init",H(e),f[e].iframe,e)}():u===(""+L).substr(0,s)&&L.substr(s).split(":")[0]in f?(x=L.substr(s).split(":"),T=x[1]?parseInt(x[1],10):0,P=f[x[0]]&&f[x[0]].iframe,j=getComputedStyle(P),A={iframe:P,id:x[0],height:T+t(j)+i(j),width:x[2],type:x[3]},q=A.id,f[q]&&(f[q].loaded=!0),(z=A.type in{true:1,false:1,undefined:1})&&k(q,"Ignoring init message from meta parent page"),!z&&function(e){var n=!0;return f[e]||(n=!1,M(A.type+" No settings for "+e+". Message was: "+L)),n}(q)&&(k(q,"Received: "+L),v=!0,null===A.iframe&&(M(q,"IFrame ("+A.id+") not found"),v=!1),v&&function(){var n,t=e.origin,i=f[q]&&f[q].checkOrigin;if(i&&""+t!="null"&&!(i.constructor===Array?function(){var e=0,n=!1;for(k(q,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}():(n=f[q]&&f[q].remoteHost,k(q,"Checking connection is from: "+n),t===n)))throw new Error("Unexpected message received from: "+t+" for "+A.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[q]&&f[q].firstRun&&f[q]&&(f[q].firstRun=!1),A.type){case"close":R(A.iframe);break;case"message":a=r(6),k(q,"onMessage passed: {iframe: "+A.iframe.id+", message: "+a+"}"),y("onMessage",{iframe:A.iframe,message:JSON.parse(a)}),k(q,"--");break;case"mouseenter":p("onMouseEnter");break;case"mouseleave":p("onMouseLeave");break;case"autoResize":f[q].autoResize=JSON.parse(r(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":c(f[q]&&f[q].iframe,q),function(){function e(e,i){function o(){f[t]?c(f[t].iframe,t):n()}["scroll","resize"].forEach((function(n){k(t,e+n+" listener for sendPageInfo"),i(window,n,o)}))}function n(){e("Remove ",w)}var t=q;e("Add ",b),f[t]&&(f[t].stopPageInfo=n)}();break;case"pageInfoStop":f[q]&&f[q].stopPageInfo&&(f[q].stopPageInfo(),delete f[q].stopPageInfo);break;case"inPageLink":t=r(9).split("#")[1]||"",i=decodeURIComponent(t),(o=document.getElementById(i)||document.getElementsByName(i)[0])?(e=d(o),k(q,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),l={x:e.x,y:e.y},g(),k(q,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):k(q,"In page link #"+t+" not found and window.parentIFrame not found"):k(q,"In page link #"+t+" not found");break;case"reset":S(A);break;case"init":n(),y("onInit",A.iframe);break;default:n()}var e,t,i,o,a}())):I(q,"Ignored: "+L)}function E(e,n,t){var i=null,o=null;if(f[e]){if("function"!=typeof(i=f[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function T(e){var n=e.id;delete f[n]}function R(e){var n=e.id;if(!1!==E(n,"onClose",n)){k(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(t){M(t)}E(n,"onClosed",n),k(n,"--"),T(e)}else k(n,"Close iframe cancelled by onClose event")}function F(e){null===l&&k(e,"Get page position: "+(l={x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}).x+","+l.y)}function O(e){null!==l&&(window.scrollTo(l.x,l.y),k(e,"Set page position: "+l.x+","+l.y),C())}function C(){l=null}function S(e){k(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),F(e.id),W((function(){N(e),V("reset","reset",e.iframe,e.id)}),e,"reset")}function N(e){function n(n){r||"0"!==e[n]||(r=!0,k(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function n(n){return"0px"===(f[e]&&f[e].iframe.style[n])}function t(e){return null!==e.offsetParent}f[e]&&t(f[e].iframe)&&(n("height")||n("width"))&&V("Visibility change","resize",f[e].iframe,e)}Object.keys(f).forEach((function(n){e(n)}))}function n(n){k("window","Mutation observed: "+n[0].target+" "+n[0].type),j(e,16)}function t(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new i(n).observe(e,t)}var i=p();i&&t()}())}function t(t){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",k(e.id,"IFrame ("+i+") "+n+" set to "+e[n]+"px")):k("undefined","messageData id not set")}(t),n(t)}var i=e.iframe.id;f[i]&&(f[i].sizeHeight&&t("height"),f[i].sizeWidth&&t("width"))}function W(e,n,t){t!==n.type&&c&&!window.jasmine?(k(n.id,"Requesting animation frame"),c(e)):e()}function V(e,n,t,i,o){var r,a=!1;i=i||t.id,f[i]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(r=f[i]&&f[i].targetOrigin,k(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(u+n,r)):M(i,"["+e+"] IFrame("+i+") not found"),o&&f[i]&&f[i].warningTimeout&&(f[i].msgTimeout=setTimeout((function(){!f[i]||f[i].loaded||a||(a=!0,M(i,"IFrame has not responded within "+f[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),f[i].warningTimeout)))}function H(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod}function P(e,t){function r(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],M(s,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var a,u,s=function(n){var r;return""===n&&(e.id=(r=t&&t.id||g.id+i++,null!==document.getElementById(r)&&(r+=i++),n=r),o=(t||{}).log,k(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}(e.id);s in f&&"iFrameResizer"in e?M(s,"Ignored iFrame, already setup."):(function(n){var t;n=n||{},f[s]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(n),Object.keys(n).forEach(r,n),function(e){for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(f[s][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:g[n])}(n),f[s]&&(f[s].targetOrigin=!0===f[s].checkOrigin?""===(t=f[s].remoteHost)||null!==t.match(/^(about:blank|javascript:|file:\/\/)/)?"*":t:"*")}(t),function(){switch(k(s,"IFrame scrolling "+(f[s]&&f[s].scrolling?"enabled":"disabled")+" for "+s),e.style.overflow=!1===(f[s]&&f[s].scrolling)?"hidden":"auto",f[s]&&f[s].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=f[s]?f[s].scrolling:"no"}}(),function(){function n(n){1/0!==f[s][n]&&0!==f[s][n]&&(e.style[n]=f[s][n]+"px",k(s,"Set "+n+" = "+f[s][n]+"px"))}function t(e){if(f[s]["min"+e]>f[s]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof(f[s]&&f[s].bodyMargin)&&"0"!==(f[s]&&f[s].bodyMargin)||(f[s].bodyMarginV1=f[s].bodyMargin,f[s].bodyMargin=f[s].bodyMargin+"px"),a=H(s),(u=p())&&function(n){e.parentNode&&new n((function(n){n.forEach((function(n){Array.prototype.slice.call(n.removedNodes).forEach((function(n){n===e&&R(e)}))}))})).observe(e.parentNode,{childList:!0})}(u),b(e,"load",(function(){var t,i;V("iFrame.onload",a,e,n,!0),t=f[s]&&f[s].firstRun,i=f[s]&&f[s].heightCalculationMethod in d,!t&&i&&S({iframe:e,height:0,width:0,type:"init"})})),V("init",a,e,n,!0),f[s]&&(f[s].iframe.iFrameResizer={close:R.bind(null,f[s].iframe),removeListeners:T.bind(null,f[s].iframe),resize:V.bind(null,"Window resize","resize",f[s].iframe),moveToAnchor:function(e){V("Move to anchor","moveToAnchor:"+e,f[s].iframe,s)},sendMessage:function(e){V("Send Message","message:"+(e=JSON.stringify(e)),f[s].iframe,s)}}))}function j(e,n){null===m&&(m=setTimeout((function(){m=null,e()}),n))}function L(){"hidden"!==document.visibilityState&&(k("document","Trigger event: Visiblity change"),j((function(){A("Tab Visable","resize")}),16))}function A(e,n){Object.keys(f).forEach((function(t){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(t)&&V(e,n,f[t].iframe,t)}))}function q(){b(window,"message",x),b(window,"resize",(function(){var e;k("window","Trigger event: "+(e="resize")),j((function(){A("Window "+e,"resize")}),16)})),b(document,"visibilitychange",L),b(document,"-webkit-visibilitychange",L)}function B(){function e(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),P(n,e),t.push(n))}var t;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!c;e+=1)c=window[n[e]+"RequestAnimationFrame"];c?c=c.bind(window):k("setup","RequestAnimationFrame not supported")}(),q(),function(i,o){switch(t=[],function(e){e&&e.enablePublicMethods&&M("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(i),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(n,i));break;case"object":e(i,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return t}}}()},s(l={exports:{}},l.exports),l.exports),d=function(){},f=d,m=function(e){var n=e.title,t=e.forwardRef,i=u(e,["title","forwardRef"]),o=function(e){return e.autoResize,e.bodyBackground,e.bodyMargin,e.bodyPadding,e.checkOrigin,e.inPageLinks,e.heightCalculationMethod,e.interval,e.log,e.maxHeight,e.maxWidth,e.minHeight,e.minWidth,e.resizeFrom,e.scrolling,e.sizeHeight,e.sizeWidth,e.warningTimeout,e.tolerance,e.widthCalculationMethod,e.onClosed,e.onInit,e.onMessage,e.onMouseEnter,e.onMouseLeave,e.onResized,u(e,["autoResize","bodyBackground","bodyMargin","bodyPadding","checkOrigin","inPageLinks","heightCalculationMethod","interval","log","maxHeight","maxWidth","minHeight","minWidth","resizeFrom","scrolling","sizeHeight","sizeWidth","warningTimeout","tolerance","widthCalculationMethod","onClosed","onInit","onMessage","onMouseEnter","onMouseLeave","onResized"])}(i),s=(0,r.useRef)(null),l=function(){return f(!s.current,"[iframeSizerReact]["+(s&&s.current&&s.current.id)+"] Close event ignored, to remove the iframe update your React component"),!s.current};return(0,r.useEffect)((function(){var e=s.current;return c(a({},i,{onClose:l}),e),function(){return e.iFrameResizer&&e.iFrameResizer.removeListeners()}}),[]),(0,r.useImperativeHandle)(t,(function(){return{resize:function(){return s.current.iFrameResizer.resize()},moveToAnchor:function(e){return s.current.iFrameResizer.moveToAnchor(e)},sendMessage:function(e,n){s.current.iFrameResizer.sendMessage(e,n)}}})),r.createElement("iframe",a({title:n},o,{ref:s}))};m.defaultProps={title:"iframe"},m.propTypes={title:o().string};const g=m}}]);