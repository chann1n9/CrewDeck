import{p as V,m as L,a as D,b as F,c as O,g as T,r as R,d as M,t as C,s as S,u as de,e as d,f as q,h as P,i as r,j as k,k as U,w as j,l as G,o as N,n as J,q as w,v as ve,F as fe,x as me,y as A,z as K,A as ge,T as W,B as Y,C as Q,D as he,E as ye,G as be,H as pe,I,J as _e,K as Se,L as xe,M as Te,N as X,O as Ve,V as Be,P as ke,Q as we,R as Ce}from"./index-g7ys5Kns.js";import{m as Z,a as ee,b as te,u as ae,c as oe,d as ne,e as le,V as Pe,f as E}from"./index-Ct5Leev3.js";import{V as He}from"./VBtn-BuUcNNgs.js";import{V as Ie}from"./VImg-B-peo7ke.js";const Ae=V({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Z(),...L(),...ee(),...D(),...te(),...F({tag:"footer"}),...O()},"VFooter"),Ee=T()({name:"VFooter",props:Ae(),setup(e,i){let{slots:t}=i;const n=R(),{themeClasses:s}=M(e),{backgroundColorClasses:l,backgroundColorStyles:a}=ae(C(e,"color")),{borderClasses:o}=oe(e),{elevationClasses:f}=ne(e),{roundedClasses:y}=le(e),c=S(32),{resizeRef:v}=de(g=>{g.length&&(c.value=g[0].target.clientHeight)}),b=d(()=>e.height==="auto"?c.value:parseInt(e.height,10));return q(()=>e.app,()=>{const g=U({id:e.name,order:d(()=>parseInt(e.order,10)),position:d(()=>"bottom"),layoutSize:b,elementSize:d(()=>e.height==="auto"?void 0:b.value),active:d(()=>e.app),absolute:C(e,"absolute")});j(()=>{n.value=g.layoutItemStyles.value})}),P(()=>r(e.tag,{ref:v,class:["v-footer",s.value,l.value,o.value,f.value,y.value,e.class],style:[a.value,e.app?n.value:{height:k(e.height)},e.style]},t)),{}}}),Ne=["href","title"],Le={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},Fe=G({__name:"AppFooter",setup(e){const i=[{title:"Projects",icon:"mdi-developer-board",href:"https://github.com/orgs/NullPointers-Co/projects"},{title:"Repositories",icon:"mdi-source-repository-multiple",href:"https://github.com/orgs/NullPointers-Co/repositories"},{title:"Documentation",icon:"mdi-text-box-outline",href:"https://www.notion.so/app-12970de2bada80b2a10ad1e8c5ad3cb9?"}];return(t,n)=>(N(),J(Ee,{height:"40",app:""},{default:w(()=>[(N(),ve(fe,null,me(i,s=>A("a",{key:s.title,href:s.href,title:s.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[r(Pe,{icon:s.icon,size:20},null,8,["icon"])],8,Ne)),64)),A("div",Le,[K(" © 2024-"+ge(new Date().getFullYear())+" ",1),n[0]||(n[0]=A("span",{class:"d-none d-sm-inline-block"},"NullPointers Co",-1))])]),_:1}))}}),Re=(e,i)=>{const t=e.__vccOpts||e;for(const[n,s]of i)t[n]=s;return t},ze=Re(Fe,[["__scopeId","data-v-31f67d96"]]),se=V({text:String,...L(),...F()},"VToolbarTitle"),ie=T()({name:"VToolbarTitle",props:se(),setup(e,i){let{slots:t}=i;return P(()=>{const n=!!(t.default||t.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[n&&r("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),$e=V({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function h(e,i,t){return T()({name:e,props:$e({mode:t,origin:i}),setup(n,s){let{slots:l}=s;const a={onBeforeEnter(o){n.origin&&(o.style.transformOrigin=n.origin)},onLeave(o){if(n.leaveAbsolute){const{offsetTop:f,offsetLeft:y,offsetWidth:c,offsetHeight:v}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${f}px`,o.style.left=`${y}px`,o.style.width=`${c}px`,o.style.height=`${v}px`}n.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(n.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:f,top:y,left:c,width:v,height:b}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=f||"",o.style.top=y||"",o.style.left=c||"",o.style.width=v||"",o.style.height=b||""}}};return()=>{const o=n.group?W:Y;return Q(o,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:a},l.default)}}})}function re(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return T()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(n,s){let{slots:l}=s;const a=n.group?W:Y;return()=>Q(a,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:i},l.default)}})}function ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=he(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const o=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const f=`${a[n]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=o.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=f})},onAfterEnter:l,onEnterCancelled:l,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[n]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(a){e&&a._parent&&a._parent.classList.remove(e),l(a)}function l(a){const o=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,o!=null&&(a.style[t]=o),delete a._initialStyle}}h("fab-transition","center center","out-in");h("dialog-bottom-transition");h("dialog-top-transition");h("fade-transition");h("scale-transition");h("scroll-x-transition");h("scroll-x-reverse-transition");h("scroll-y-transition");h("scroll-y-reverse-transition");h("slide-x-transition");h("slide-x-reverse-transition");h("slide-y-transition");h("slide-y-reverse-transition");const De=re("expand-transition",ue());re("expand-x-transition",ue("",!0));const Oe=[null,"prominent","default","comfortable","compact"],ce=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Oe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Z(),...L(),...ee(),...te(),...F({tag:"header"}),...O()},"VToolbar"),$=T()({name:"VToolbar",props:ce(),setup(e,i){var g;let{slots:t}=i;const{backgroundColorClasses:n,backgroundColorStyles:s}=ae(C(e,"color")),{borderClasses:l}=oe(e),{elevationClasses:a}=ne(e),{roundedClasses:o}=le(e),{themeClasses:f}=M(e),{rtlClasses:y}=ye(),c=S(!!(e.extended||(g=t.extension)!=null&&g.call(t))),v=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=d(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return be({VBtn:{variant:"text"}}),P(()=>{var H;const m=!!(e.title||t.title),p=!!(t.image||e.image),x=(H=t.extension)==null?void 0:H.call(t);return c.value=!!(e.extended||x),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,l.value,a.value,o.value,f.value,y.value,e.class],style:[s.value,e.style]},{default:()=>[p&&r("div",{key:"image",class:"v-toolbar__image"},[t.image?r(E,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):r(Ie,{key:"image-img",cover:!0,src:e.image},null)]),r(E,{defaults:{VTabs:{height:k(v.value)}}},{default:()=>{var u,_,B;return[r("div",{class:"v-toolbar__content",style:{height:k(v.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[(u=t.prepend)==null?void 0:u.call(t)]),m&&r(ie,{key:"title",text:e.title},{text:t.title}),(_=t.default)==null?void 0:_.call(t),t.append&&r("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),r(E,{defaults:{VTabs:{height:k(b.value)}}},{default:()=>[r(De,null,{default:()=>[c.value&&r("div",{class:"v-toolbar__extension",style:{height:k(b.value)}},[x])]})]})]})}),{contentHeight:v,extensionHeight:b}}}),Me=V({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function qe(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let n=0,s=0;const l=R(null),a=S(0),o=S(0),f=S(0),y=S(!1),c=S(!1),v=d(()=>Number(e.scrollThreshold)),b=d(()=>pe((v.value-a.value)/v.value||0)),g=()=>{const m=l.value;if(!m||t&&!t.value)return;n=a.value,a.value="window"in m?m.pageYOffset:m.scrollTop;const p=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(s!==p){s=p;return}c.value=a.value<n,f.value=Math.abs(a.value-v.value)};return I(c,()=>{o.value=o.value||a.value}),I(y,()=>{o.value=0}),_e(()=>{I(()=>e.scrollTarget,m=>{var x;const p=m?document.querySelector(m):window;p&&p!==l.value&&((x=l.value)==null||x.removeEventListener("scroll",g),l.value=p,l.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),Se(()=>{var m;(m=l.value)==null||m.removeEventListener("scroll",g)}),t&&I(t,g,{immediate:!0}),{scrollThreshold:v,currentScroll:a,currentThreshold:f,isScrollActive:y,scrollRatio:b,isScrollingUp:c,savedScroll:o}}const Ue=V({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ce(),...D(),...Me(),height:{type:[Number,String],default:64}},"VAppBar"),je=T()({name:"VAppBar",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=R(),s=xe(e,"modelValue"),l=d(()=>{var _;const u=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:u.has("hide"),fullyHide:u.has("fully-hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),a=d(()=>{const u=l.value;return u.hide||u.fullyHide||u.inverted||u.collapse||u.elevate||u.fadeImage||!s.value}),{currentScroll:o,scrollThreshold:f,isScrollingUp:y,scrollRatio:c}=qe(e,{canScroll:a}),v=d(()=>l.value.hide||l.value.fullyHide),b=d(()=>e.collapse||l.value.collapse&&(l.value.inverted?c.value>0:c.value===0)),g=d(()=>e.flat||l.value.fullyHide&&!s.value||l.value.elevate&&(l.value.inverted?o.value>0:o.value===0)),m=d(()=>l.value.fadeImage?l.value.inverted?1-c.value:c.value:void 0),p=d(()=>{var B,z;if(l.value.hide&&l.value.inverted)return 0;const u=((B=n.value)==null?void 0:B.contentHeight)??0,_=((z=n.value)==null?void 0:z.extensionHeight)??0;return v.value?o.value<f.value||l.value.fullyHide?u+_:u:u+_});q(d(()=>!!e.scrollBehavior),()=>{j(()=>{v.value?l.value.inverted?s.value=o.value>f.value:s.value=y.value||o.value<f.value:s.value=!0})});const{ssrBootStyles:x}=Te(),{layoutItemStyles:H}=U({id:e.name,order:d(()=>parseInt(e.order,10)),position:C(e,"location"),layoutSize:p,elementSize:S(void 0),active:s,absolute:C(e,"absolute")});return P(()=>{const u=$.filterProps(e);return r($,X({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...H.value,"--v-toolbar-image-opacity":m.value,height:void 0,...x.value},e.style]},u,{collapse:b.value,flat:g.value}),t)}),{}}}),Ge=T()({name:"VAppBarTitle",props:se(),setup(e,i){let{slots:t}=i;return P(()=>r(ie,X(e,{class:"v-app-bar-title"}),t)),{}}}),Qe=G({__name:"default",setup(e){const i=Ve();function t(){i.global.name.value=i.global.current.value.dark?"light":"dark"}return(n,s)=>{const l=ke("router-view"),a=ze;return N(),J(Be,null,{default:w(()=>[r(je,{app:""},{default:w(()=>[r(Ge,null,{default:w(()=>s[0]||(s[0]=[K("Team Kit")])),_:1}),r(He,{icon:we(i).global.current.value.dark?"mdi-weather-sunny":"mdi-weather-night",onClick:t},null,8,["icon"])]),_:1}),r(Ce,null,{default:w(()=>[r(l)]),_:1}),r(a)]),_:1})}}});export{Qe as default};
