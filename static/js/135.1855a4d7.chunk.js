"use strict";(self.webpackChunkczicinema_movies=self.webpackChunkczicinema_movies||[]).push([[135],{713:function(e,r,t){t.d(r,{Jc:function(){return p},PY:function(){return u},VH:function(){return h},bp:function(){return o},dB:function(){return l},l$:function(){return v},ug:function(){return f},y:function(){return d}});var n=t(861),a=t(757),s=t.n(a),i={api_key:"38f484d9cc7856fa655e9ccb822c26af"},c=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:i}),u=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("\n/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/videos"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results.filter((function(e){return"Trailer"===e.type&&"YouTube"===e.site})));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/upcoming");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/videos"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},135:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(439),a=t(713),s=t(791),i=t(689),c=t(87),u="MovieDetails_divStyle__7lxSz",o="MovieDetails_goBack__C8OKE",l="MovieDetails_btn__7L5IF",v="MovieDetails_wrapper__YMWLn",f="MovieDetails_userScore__mU7Se",p="MovieDetails_descrWrapper__3Jlhh",d="MovieDetails_info__qv2SI",h="MovieDetails_link__U+v+7",m="MovieDetails_mediaContainer__3SQwj",x="MovieDetails_trailer__EZklF",_=t(184),w=function(){var e,r,t,w,j=(0,i.UO)().movieId,b=(0,i.TH)(),g=(0,i.s0)(),k=(0,s.useState)(null),y=(0,n.Z)(k,2),M=y[0],N=y[1],Z=(0,s.useState)(null),D=(0,n.Z)(Z,2),S=D[0],U=D[1];return(0,s.useEffect)((function(){(0,a.dB)(j).then(N),(0,a.VH)(j).then((function(e){var r=e.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site}));r&&U(r.key)}))}),[j]),(0,_.jsx)(_.Fragment,{children:M?(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("hr",{}),(0,_.jsx)("div",{className:o,children:(0,_.jsx)("button",{className:l,onClick:function(){var e,r;return g(null!==(e=null===b||void 0===b||null===(r=b.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/czicinema-movies/")},children:"Go back"})}),(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("div",{className:m,children:(0,_.jsx)("img",{width:"400",height:"auto",src:M.poster_path?"https://image.tmdb.org/t/p/w500".concat(M.poster_path):"https://imageio.forbes.com/blogs-images/forbespr/files/2017/10/1010_forbes-400-trump-11-14-2017-cover_768x1005.jpg?format=jpg&width=1440",alt:M.title})}),(0,_.jsxs)("div",{className:p,children:[(0,_.jsxs)("h2",{children:[M.title," (",M.release_date.slice(0,4),")"]}),(0,_.jsxs)("h3",{className:f,children:["User score:"," ",(0,_.jsx)("span",{style:{color:10*M.vote_average<50?"red":10*M.vote_average<75?"#bb9600":"green"},children:Math.ceil(10*Number(M.vote_average))+"%"})]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:M.overview}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("span",{children:M.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,_.jsx)("div",{children:S&&(0,_.jsx)("iframe",{className:x,src:"https://www.youtube.com/embed/".concat(S),title:"Movie Trailer",allowFullScreen:!0})}),(0,_.jsx)("hr",{}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("h3",{children:"Additional information"}),(0,_.jsx)(c.rU,{className:h,state:{from:null!==(e=null===b||void 0===b||null===(r=b.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"},to:"cast",children:"Cast"}),(0,_.jsx)("br",{}),(0,_.jsx)(c.rU,{className:h,state:{from:null!==(t=null===b||void 0===b||null===(w=b.state)||void 0===w?void 0:w.from)&&void 0!==t?t:"/"},to:"reviews",children:"Reviews"})]}),(0,_.jsx)(i.j3,{})]}):(0,_.jsx)("h3",{children:"Ooops, something went wrong..."})})}}}]);
//# sourceMappingURL=135.1855a4d7.chunk.js.map