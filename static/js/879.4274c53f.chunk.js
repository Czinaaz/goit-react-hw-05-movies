"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[879],{600:function(e,t,n){n.d(t,{PY:function(){return c},bp:function(){return u},dB:function(){return l},l$:function(){return f},ug:function(){return d}});var r=n(861),o=n(757),a=n.n(o),s={api_key:"38f484d9cc7856fa655e9ccb822c26af"},i=n(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:s}),c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/week");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("\n/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},879:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(439),o=n(791),a=n(87),s=n(689),i=n(600),c="Movies_form__4ow+Z",u="Movies_filmList__kdMGP",l="Movies_filmListItem__2StDL",f=n(942),d=n(413);function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=n(433);function v(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var h=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r},g=["theme","type"],y=["delay","staleId"],E=function(e){return"number"==typeof e&&!isNaN(e)},T=function(e){return"string"==typeof e},b=function(e){return"function"==typeof e},_=function(e){return T(e)||b(e)?e:null},C=function(e){return(0,o.isValidElement)(e)||T(e)||b(e)||E(e)};function Z(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,p=a?"".concat(t,"--").concat(s):t,v=a?"".concat(n,"--").concat(s):n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,t=f.current,n=p.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,m.Z)(n)))};(e=t.classList).add.apply(e,(0,m.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),o.createElement(o.Fragment,null,r)}}function I(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,m.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},x=function(e){var t=e.theme,n=e.type,r=p(e,g);return o.createElement("svg",(0,d.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},O={info:function(e){return o.createElement(x,(0,d.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(x,(0,d.Z)({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(x,(0,d.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(x,(0,d.Z)({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),s=(0,r.Z)(a,2),i=s[0],c=s[1],u=(0,o.useRef)(null),l=(0,o.useRef)(new Map).current,f=function(e){return-1!==i.indexOf(e)},v=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return l.get(e)}}).current;function h(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function g(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function Z(){var e=v.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function x(e,t){var a=t.delay,s=t.staleId,i=p(t,y);if(C(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var c=i.toastId,f=i.updateId,m=i.data,h=v.props,x=function(){return g(c)},N=null==f;N&&v.count++;var R,k,M=(0,d.Z)((0,d.Z)((0,d.Z)({},h),{},{style:h.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,r.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:f,data:m,closeToast:x,isIn:!1,className:_(i.className||h.toastClassName),bodyClassName:_(i.bodyClassName||h.bodyClassName),progressClassName:_(i.progressClassName||h.progressClassName),autoClose:!i.isLoading&&(R=i.autoClose,k=h.autoClose,!1===R||E(R)&&R>0?R:k),deleteToast:function(){var e=I(l.get(c),"removed");l.delete(c),w.emit(4,e);var t=v.queue.length;if(v.count=null==c?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==c?v.props.limit:1;if(1===t||1===r)v.displayedToast++,Z();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)Z()}}else n()}});M.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,s=null,i={theme:t,type:n};return!1===a||(b(a)?s=a(i):(0,o.isValidElement)(a)?s=(0,o.cloneElement)(a,i):T(a)||E(a)?s=a:r?s=O.spinner():function(e){return e in O}(n)&&(s=O[n](i))),s}(M),b(i.onOpen)&&(M.onOpen=i.onOpen),b(i.onClose)&&(M.onClose=i.onClose),M.closeButton=h.closeButton,!1===i.closeButton||C(i.closeButton)?M.closeButton=i.closeButton:!0===i.closeButton&&(M.closeButton=!C(h.closeButton)||h.closeButton);var P=e;(0,o.isValidElement)(e)&&!T(e.type)?P=(0,o.cloneElement)(e,{closeToast:x,toastProps:M,data:m}):b(e)&&(P=e({closeToast:x,toastProps:M,data:m})),h.limit&&h.limit>0&&v.count>h.limit&&N?v.queue.push({toastContent:P,toastProps:M,staleId:s}):E(a)?setTimeout((function(){L(P,M,s)}),a):L(P,M,s)}}function L(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,m.Z)(e),[r]).filter((function(e){return e!==n}))})),w.emit(4,I(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return v.containerId=e.containerId,w.cancelEmit(3).on(0,x).on(1,(function(e){return u.current&&g(e)})).on(5,h).emit(2,v),function(){l.clear(),w.emit(3,v)}}),[]),(0,o.useEffect)((function(){v.props=e,v.isToastActive=f,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:f}}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function k(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],s=n[1],i=(0,o.useState)(!1),c=(0,r.Z)(i,2),u=c[0],l=c[1],f=(0,o.useRef)(null),d=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",I),document.addEventListener("touchmove",Z),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=N(t.nativeEvent),d.y=R(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=s&&d.y>=r&&d.y<=o?C():_()}}function _(){s(!0)}function C(){s(!1)}function Z(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,a&&C(),d.x=N(t),d.y=R(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",I);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return f.current&&f.current.addEventListener("d",_,{once:!0}),b(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;b(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",_),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(w.onMouseEnter=C,w.onMouseLeave=_),y&&(w.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:_,pauseToast:C,isRunning:a,preventExitTransition:u,toastRef:f,eventHandlers:w}}function M(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,s=void 0===a?"default":a,i=e.hide,c=e.className,u=e.style,l=e.controlledProgress,p=e.progress,m=e.rtl,v=e.isIn,g=e.theme,y=i||l&&0===p,E=(0,d.Z)((0,d.Z)({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});l&&(E.transform="scaleX(".concat(p,")"));var T=h("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":m}),_=b(c)?c({rtl:m,type:s,defaultClassName:T}):h(T,c);return o.createElement("div",(0,f.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:_,style:E},l&&p>=1?"onTransitionEnd":"onAnimationEnd",l&&p<1?null:function(){v&&r()}))}var B=function(e){var t=k(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,g=e.position,y=e.className,E=e.style,T=e.bodyClassName,_=e.bodyStyle,C=e.progressClassName,Z=e.progressStyle,I=e.updateId,w=e.role,x=e.progress,O=e.rtl,L=e.toastId,N=e.deleteToast,R=e.isIn,B=e.isLoading,D=e.iconOut,j=e.closeOnClick,A=e.theme,S=h("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":j}),z=b(y)?y({rtl:O,position:g,type:f,defaultClassName:S}):h(S,y),q=!!x||!u,F={closeToast:m,type:f,theme:A},H=null;return!1===i||(H=b(i)?i(F):(0,o.isValidElement)(i)?(0,o.cloneElement)(i,F):M(F)),o.createElement(v,{isIn:R,done:N,position:g,preventExitTransition:r,nodeRef:a},o.createElement("div",(0,d.Z)((0,d.Z)({id:L,onClick:l,className:z},s),{},{style:E,ref:a}),o.createElement("div",(0,d.Z)((0,d.Z)({},R&&{role:w}),{},{className:b(T)?T({type:f}):h("Toastify__toast-body",T),style:_}),null!=D&&o.createElement("div",{className:h("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},D),o.createElement("div",null,c)),H,o.createElement(P,(0,d.Z)((0,d.Z)({},I&&!q?{key:"pb-".concat(I)}:{}),{},{rtl:O,theme:A,delay:u,isRunning:n,isIn:R,closeToast:m,hide:p,type:f,style:Z,className:C,controlledProgress:q,progress:x||0}))))},D=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=Z(D("bounce",!0)),A=(Z(D("slide",!0)),Z(D("zoom")),Z(D("flip")),(0,o.forwardRef)((function(e,t){var n=L(e),r=n.getToastToRender,a=n.containerRef,s=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function f(e){var t=h("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return b(i)?i({position:e,rtl:u,defaultClassName:t}):h(t,_(i))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:l},r((function(e,t){var n=t.length?(0,d.Z)({},c):(0,d.Z)((0,d.Z)({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(B,(0,d.Z)((0,d.Z)({},a),{},{isIn:s(a.toastId),style:(0,d.Z)((0,d.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),r)})))})))})));A.displayName="ToastContainer",A.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:M,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,z=new Map,q=[],F=1;function H(){return""+F++}function Q(e){return e&&(T(e.toastId)||E(e.toastId))?e.toastId:H()}function V(e,t){return z.size>0?w.emit(0,e,t):q.push({content:e,options:t}),t.toastId}function U(e,t){return(0,d.Z)((0,d.Z)({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function G(e){return function(t,n){return V(t,U(e,n))}}function Y(e,t){return V(e,U("default",t))}Y.loading=function(e,t){return V(e,U("default",(0,d.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=T(o)?Y.loading(o,n):Y.loading(o.render,(0,d.Z)((0,d.Z)({},n),o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=(0,d.Z)((0,d.Z)((0,d.Z)({type:e},i),n),{},{data:o}),s=T(t)?{render:t}:t;return r?Y.update(r,(0,d.Z)((0,d.Z)({},a),s)):Y(s.render,(0,d.Z)((0,d.Z)({},a),s)),o}Y.dismiss(r)},u=b(e)?e():e;return u.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",a,e)})),u},Y.success=G("success"),Y.info=G("info"),Y.error=G("error"),Y.warning=G("warning"),Y.warn=Y.warning,Y.dark=function(e,t){return V(e,U("default",(0,d.Z)({theme:"dark"},t)))},Y.dismiss=function(e){z.size>0?w.emit(1,e):q=q.filter((function(t){return null!=e&&t.options.toastId!==e}))},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},Y.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=z.get(n||S);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=(0,d.Z)((0,d.Z)((0,d.Z)({delay:100},r),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,V(s,a)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){S=e.containerId||e,z.set(S,e),q.forEach((function(e){w.emit(0,e.content,e.options)})),q=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&w.off(0).off(1).off(5)}));var W=n(184),X=function(){var e=(0,a.lr)(),t=(0,r.Z)(e,2),n=t[0],f=t[1],d=n.get("query"),p=(0,o.useState)([]),m=(0,r.Z)(p,2),v=m[0],h=m[1],g=(0,s.TH)();return(0,o.useEffect)((function(){d&&(0,i.bp)(d).then(h)}),[d,n,h]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==e.target.query.value?(f({query:e.target.query.value}),e.target.query.value=""):Y.error("Please enter a movie name")},className:c,children:[(0,W.jsx)("input",{type:"text",name:"query"}),(0,W.jsx)("button",{type:"submit",children:"Search a movie"})]}),(0,W.jsx)("hr",{}),(0,W.jsxs)(W.Fragment,{children:[" ",v.length?(0,W.jsx)("ul",{className:u,children:v.map((function(e){return(0,W.jsx)("li",{className:l,children:(0,W.jsxs)(a.rU,{state:{from:g},to:"/goit-react-hw-05-movies/movies/".concat(e.id),children:[(0,W.jsx)("img",{width:"400",height:"auto",src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://imageio.forbes.com/blogs-images/forbespr/files/2017/10/1010_forbes-400-trump-11-14-2017-cover_768x1005.jpg?format=jpg&width=1440",alt:e.name}),(0,W.jsx)("p",{children:e.title?e.title:e.name})]})},e.id)}))}):(0,W.jsx)("h3",{children:"Please, search a movie"})]})]})}}}]);
//# sourceMappingURL=879.4274c53f.chunk.js.map