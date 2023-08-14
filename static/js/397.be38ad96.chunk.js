"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[397],{7610:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(168),i=t(4313).ZP.button(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid var(--color);\n  font-size: 18px;\n  width: 200px;\n  height: 50px;\n  background-color: transparent;\n  color: var(--color);\n  margin-left: auto;\n  margin-right: auto;\n  transition: var(--transition);\n  cursor: pointer;\n  &:hover {\n    background: var(--color);\n    color: var(--hover-btn);\n  }\n  @media screen and (max-width: 768px) {\n    width: 150px;\n    height: 50px;\n  }\n"]))),o=t(3329),s=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i,{type:"button",children:"\u21e6 Go Back"})})}},5700:function(n,e,t){t.d(e,{Z:function(){return i}});var r="Container_container__WK87Y",a=t(3329),i=function(n){var e=n.children;return(0,a.jsx)("div",{className:r,children:e})}},4332:function(n,e,t){t.d(e,{Z:function(){return B}});var r,a,i,o,s,c,l,d,g,u,f,p,h,x,m=t(7689),v=t(1087),Z=t(168),_=t(4313),b=_.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"]))),j=_.ZP.div(a||(a=(0,Z.Z)(["\n  overflow: hidden;\n  margin-bottom: 5px;\n"]))),k=_.ZP.img(i||(i=(0,Z.Z)(["\n  max-width: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),P=_.ZP.h3(o||(o=(0,Z.Z)(["\n  max-width: 300px;\n  color: var(--color);\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: auto;\n"]))),w=_.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n"]))),y=_.ZP.span(c||(c=(0,Z.Z)(["\n  font-size: 10px;\n  color: gold;\n"]))),A=_.ZP.span(l||(l=(0,Z.Z)(["\n  font-size: 10px;\n  color: gray;\n"]))),C=_.ZP.p(d||(d=(0,Z.Z)(["\n  color: rgb(36, 35, 35);\n  font-size: 10px;\n"]))),N=_.ZP.span(g||(g=(0,Z.Z)(["\n  font-size: 8px;\n"]))),z=_.ZP.p(u||(u=(0,Z.Z)(["\n  color: red;\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: auto;\n"]))),F=(0,_.iv)(f||(f=(0,Z.Z)(["\n  background: #f85032;\n  background: -webkit-linear-gradient(to right, #e73827, #f85032);\n  background: linear-gradient(to right, #e73827, #f85032);\n"]))),L=(0,_.iv)(p||(p=(0,Z.Z)(["\n  background: #f7971e;\n  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);\n  background: linear-gradient(to right, #ffd200, #f7971e);\n  color: rgb(36, 35, 35);\n"]))),M=(0,_.iv)(h||(h=(0,Z.Z)(["\n  background: #000000;\n  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);\n  background: linear-gradient(to right, #0f9b0f, #000000);\n  color: #fff;\n"]))),S=_.ZP.div(x||(x=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 10px;\n  heigth: 10px;\n  padding: 5px;\n  font-weight: bold;\n  margin-left: 10px;\n  &.rating-red {\n    ","\n  }\n  &.rating-yellow {\n    ","\n  }\n  &.rating-green {\n    ","\n  }\n"])),F,L,M),W=t(3329);var D=function(n){var e=n.poster_path,t=n.title,r=n.vote_average,a=n.release_date,i=10*r,o=Math.floor(i/10),s=Array.from({length:10},(function(n,e){return e<o?(0,W.jsx)(y,{children:"\u2605"},"star-".concat(e)):(0,W.jsx)(A,{children:"\u2605"},"star-".concat(e))})),c=function(n){return n<=4?"red":n<7?"yellow":"green"}(r),l="rating-".concat(c);return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(b,{children:[(0,W.jsx)(j,{children:(0,W.jsx)(k,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://dummyimage.com/300x420/fff/aaa",alt:t,width:300})}),(0,W.jsx)(P,{children:t||"Movie without a title"}),(0,W.jsxs)(w,{children:[(0,W.jsx)(C,{children:r?s:"N/A"}),(0,W.jsx)(S,{className:l,children:(0,W.jsx)(N,{children:r?r.toFixed(1):"N/A"})}),(0,W.jsx)(z,{children:a?a.slice(0,4):"N/A"})]})]})})},E="MoviesList_movies__list__iWvbg",H="MoviesList_movies__item__QWC0f",B=function(n){var e=n.movies,t=(0,m.TH)();return(0,W.jsx)("ul",{className:E,children:e.map((function(n,e){var r=n.id,a=n.poster_path,i=n.title,o=n.vote_average,s=n.release_date;return(0,W.jsx)("li",{className:H,children:(0,W.jsx)(v.rU,{to:"/movies/".concat(r),state:{from:t},children:(0,W.jsx)(D,{id:r,poster_path:a,title:i,vote_average:o,release_date:s},r)})},"".concat(r,"-").concat(e))}))})}},3397:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i=t(9439),o=t(2791),s=t(7689),c=t(1087),l=t(9085),d=t(6048),g=t.n(d),u=t(8489),f=t(4701),p=t(5700),h=t(7610),x=t(4332),m=t(9625),v=t(168),Z=t(4313),_=Z.ZP.h1(r||(r=(0,v.Z)(["\n  margin-top: 100px;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  color: var(--color);\n  font-size: 24px;\n"]))),b=Z.ZP.h1(a||(a=(0,v.Z)(["\n  margin-bottom: 30px;\n"]))),j=t(1312),k=t(3329),P=function(){var n,e,t=(0,o.useState)([]),r=(0,i.Z)(t,2),a=r[0],d=r[1],v=(0,o.useState)(!0),Z=(0,i.Z)(v,2),P=Z[0],w=Z[1],y=(0,o.useState)(null),A=(0,i.Z)(y,2),C=A[0],N=A[1],z=(0,o.useState)(1),F=(0,i.Z)(z,2),L=F[0],M=F[1],S=(0,o.useState)(0),W=(0,i.Z)(S,2),D=W[0],E=W[1],H=null!==(n=null===(e=(0,s.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",B=(0,o.useContext)(m.A).selectedLanguage;if((0,o.useEffect)((function(){u.Z.fetchWaitingForMovies(L,B.iso_639_1).then((function(n){var e=n.results,t=n.total_pages;d(e),E(Math.min(t,500)),0===e.length&&l.Am.error("sorry, that's all the actors we could find")})).catch((function(n){N(n)})).finally((function(){return w(!1)}))}),[L,B.iso_639_1]),C)return(0,k.jsx)("p",{children:C.message});return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(p.Z,{children:[(0,k.jsx)(_,{children:"Expected Movies"}),(0,k.jsx)(b,{children:(0,k.jsx)(c.rU,{to:H,children:(0,k.jsx)(h.Z,{})})}),P?(0,k.jsx)(f.Z,{}):(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(x.Z,{movies:a})}),(0,k.jsx)(g(),{pageCount:D,pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(n){var e=n.selected;e+1>D||M(e+1)},containerClassName:j.Z.pagination,pageClassName:j.Z.page,activeClassName:j.Z.active,previousClassName:j.Z.previous,nextClassName:j.Z.next,disabledClassName:j.Z.disabled,breakClassName:j.Z.break,previousLabel:"previous",nextLabel:"next",breakLabel:"..."})]})})}},1312:function(n,e){e.Z={pagination:"ActorsPage_pagination__AJF69",page:"ActorsPage_page__IpdFI",active:"ActorsPage_active__wAtHB",previous:"ActorsPage_previous__OZpAL",next:"ActorsPage_next__lcDC2",disabled:"ActorsPage_disabled__aSJEb",icon:"ActorsPage_icon__estx4"}}}]);
//# sourceMappingURL=397.be38ad96.chunk.js.map