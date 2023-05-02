import{m as u,n as a,o as k,p as s,C as P,q as $}from"./index-6592553e.js";import{t as M,d as j}from"./util-2a59d28b.js";import"./clsx.m-59171c9b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-91a467a5.js";import"./extends-98964cd2.js";import"./index-1fc0ca9a.js";var C={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weken"},xWeeks:{one:"1 week",other:"{{count}} weken"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}},D=function(e,o,n){var r,i=C[e];return typeof i=="string"?r=i:o===1?r=i.one:r=i.other.replace("{{count}}",String(o)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"over "+r:r+" geleden":r};const z=D;var T={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd-MM-y"},W={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},V={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},A={date:u({formats:T,defaultWidth:"full"}),time:u({formats:W,defaultWidth:"full"}),dateTime:u({formats:V,defaultWidth:"full"})};const S=A;var B={lastWeek:"'afgelopen' eeee 'om' p",yesterday:"'gisteren om' p",today:"'vandaag om' p",tomorrow:"'morgen om' p",nextWeek:"eeee 'om' p",other:"P"},H=function(e,o,n,r){return B[e]};const I=H;var N={narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},Y={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},E={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},F={narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},X={narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"}},L=function(e,o){var n=Number(e);return n+"e"},R={ordinalNumber:L,era:a({values:N,defaultWidth:"wide"}),quarter:a({values:Y,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:a({values:E,defaultWidth:"wide"}),day:a({values:F,defaultWidth:"wide"}),dayPeriod:a({values:X,defaultWidth:"wide"})};const _=R;var q=/^(\d+)e?/i,K=/\d+/i,O={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},Z={any:[/^v/,/^n/]},U={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},J={any:[/1/i,/2/i,/3/i,/4/i]},Q={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},G={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},ee={narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},te={narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},ne={any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},re={any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},ae={ordinalNumber:k({matchPattern:q,parsePattern:K,valueCallback:function(e){return parseInt(e,10)}}),era:s({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:Z,defaultParseWidth:"any"}),quarter:s({matchPatterns:U,defaultMatchWidth:"wide",parsePatterns:J,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:s({matchPatterns:Q,defaultMatchWidth:"wide",parsePatterns:G,defaultParseWidth:"any"}),day:s({matchPatterns:ee,defaultMatchWidth:"wide",parsePatterns:te,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:ne,defaultMatchWidth:"any",parsePatterns:re,defaultParseWidth:"any"})};const se=ae;var oe={code:"nl",formatDistance:z,formatLong:S,formatRelative:I,localize:_,match:se,options:{weekStartsOn:1,firstWeekContainsDate:4}};const ie=oe,le={calendar:{width:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},table:{"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"weeks-item":{width:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"days-item-day":{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"out-of-the-month":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"is-today":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},emphasis:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},selected:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},navigation:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},label:{"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},de={utrecht:le},w=[{date:"2022-09-22T21:59:59.999Z",emphasis:!0,selected:!1,disabled:!1},{date:"2022-09-23T21:59:59.999Z",emphasis:!1,selected:!1,disabled:!1},{date:"2022-09-24T21:59:59.999Z",emphasis:!1,selected:!1,disabled:!0}],ce={title:"React Component/Calendar",id:"react-calendar",component:P,parameters:{tokensPrefix:"utrecht-calendar",tokens:M,tokensDefinition:de},args:{onCalendarClick:t=>{console.log(t)},currentDate:new Date,events:w,locale:ie,previousYearButtonTitle:"Vorig jaar",nextYearButtonTitle:"volgend jaar",previousMonthButtonTitle:"Vorige maand",nextMonthButtonTitle:"volgende maand"},argTypes:{onCalendarClick:{name:"onCalendarClick",description:"It's a callback function that returns the selected date, triggered when you click on the day",type:{name:"number",required:!1},table:{category:"API"}},events:{name:"events",description:"An array of event objects that contain some properties that allow you to change the calendar day style base on your value `{date?: Date; emphasis?: boolean; selected?: boolean; disabled?: boolean;}`",table:{category:"API",defaultValue:{summary:void 0}}},currentDate:{name:"currentDate",description:"The default value is `new Date()`, but you can provide a different date",table:{category:"API",defaultValue:{summary:new Date}}},locale:{name:"locale",description:"to change the calendar language by using `date-fns/locale`\n\n `import { nl, enUS } from 'date-fns/locale';`",table:{category:"API",defaultValue:{summary:"enUS"}}},previousYearButtonTitle:{name:"previousYearButtonTitle",table:{category:"API",defaultValue:{summary:"Previous year"}}},nextYearButtonTitle:{name:"nextYearButtonTitle",table:{category:"API",defaultValue:{summary:"Next year"}}},previousMonthButtonTitle:{name:"previousMonthButtonTitle",table:{category:"API",defaultValue:{summary:"Previous month"}}},nextMonthButtonTitle:{name:"nextMonthButtonTitle",table:{category:"API",defaultValue:{summary:"Next month"}}}}},l={},d={args:{onCalendarClick:t=>{console.log(t)},currentDate:new Date,events:w,locale:$}},c=j(ce);var m,h,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,p,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onCalendarClick: date => {
      console.log(date);
    },
    currentDate: new Date(),
    events,
    locale: enUS
  }
}`,...(v=(p=d.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var b,x,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"designTokenStory(meta)",...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const xe=["Default","EnglishCalendar","DesignTokens"];export{l as Default,c as DesignTokens,d as EnglishCalendar,xe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Calendar.stories-9377b85b.js.map
