"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[676],{7610:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(168),i=t(4313).ZP.button(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid var(--color);\n  font-size: 18px;\n  width: 200px;\n  height: 50px;\n  background-color: transparent;\n  color: var(--color);\n  margin-left: auto;\n  margin-right: auto;\n  transition: var(--transition);\n  cursor: pointer;\n  &:hover {\n    background: var(--color);\n    color: var(--hover-btn);\n  }\n  @media screen and (max-width: 768px) {\n    width: 150px;\n    height: 50px;\n  }\n"]))),o=t(3329),s=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i,{type:"button",children:"\u21e6 Go Back"})})}},5700:function(n,e,t){t.d(e,{Z:function(){return i}});var r="Container_container__WK87Y",a=t(3329),i=function(n){var e=n.children;return(0,a.jsx)("div",{className:r,children:e})}},4332:function(n,e,t){t.d(e,{Z:function(){return W}});var r,a,i,o,s,c,l,d,g,u,f,p,h,x,v=t(7689),m=t(1087),Z=t(168),b=t(4313),_=b.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"]))),j=b.ZP.div(a||(a=(0,Z.Z)(["\n  overflow: hidden;\n  margin-bottom: 5px;\n"]))),k=b.ZP.img(i||(i=(0,Z.Z)(["\n  max-width: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),w=b.ZP.h3(o||(o=(0,Z.Z)(["\n  max-width: 300px;\n  color: var(--color);\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: auto;\n"]))),P=b.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n"]))),y=b.ZP.span(c||(c=(0,Z.Z)(["\n  font-size: 10px;\n  color: gold;\n"]))),A=b.ZP.span(l||(l=(0,Z.Z)(["\n  font-size: 10px;\n  color: gray;\n"]))),C=b.ZP.p(d||(d=(0,Z.Z)(["\n  color: rgb(36, 35, 35);\n  font-size: 10px;\n"]))),N=b.ZP.span(g||(g=(0,Z.Z)(["\n  font-size: 8px;\n"]))),z=b.ZP.p(u||(u=(0,Z.Z)(["\n  color: red;\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: auto;\n"]))),L=(0,b.iv)(f||(f=(0,Z.Z)(["\n  background: #f85032;\n  background: -webkit-linear-gradient(to right, #e73827, #f85032);\n  background: linear-gradient(to right, #e73827, #f85032);\n"]))),F=(0,b.iv)(p||(p=(0,Z.Z)(["\n  background: #f7971e;\n  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);\n  background: linear-gradient(to right, #ffd200, #f7971e);\n  color: rgb(36, 35, 35);\n"]))),M=(0,b.iv)(h||(h=(0,Z.Z)(["\n  background: #000000;\n  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);\n  background: linear-gradient(to right, #0f9b0f, #000000);\n  color: #fff;\n"]))),S=b.ZP.div(x||(x=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 10px;\n  heigth: 10px;\n  padding: 5px;\n  font-weight: bold;\n  margin-left: 10px;\n  &.rating-red {\n    ","\n  }\n  &.rating-yellow {\n    ","\n  }\n  &.rating-green {\n    ","\n  }\n"])),L,F,M),B=t(3329);var D=function(n){var e=n.poster_path,t=n.title,r=n.vote_average,a=n.release_date,i=10*r,o=Math.floor(i/10),s=Array.from({length:10},(function(n,e){return e<o?(0,B.jsx)(y,{children:"\u2605"},"star-".concat(e)):(0,B.jsx)(A,{children:"\u2605"},"star-".concat(e))})),c=function(n){return n<=4?"red":n<7?"yellow":"green"}(r),l="rating-".concat(c);return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(_,{children:[(0,B.jsx)(j,{children:(0,B.jsx)(k,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://dummyimage.com/300x420/fff/aaa",alt:t,width:300})}),(0,B.jsx)(w,{children:t||"Movie without a title"}),(0,B.jsxs)(P,{children:[(0,B.jsx)(C,{children:r?s:"N/A"}),(0,B.jsx)(S,{className:l,children:(0,B.jsx)(N,{children:r?r.toFixed(1):"N/A"})}),(0,B.jsx)(z,{children:a?a.slice(0,4):"N/A"})]})]})})},H="MoviesList_movies__list__iWvbg",T="MoviesList_movies__item__QWC0f",W=function(n){var e=n.movies,t=(0,v.TH)();return(0,B.jsx)("ul",{className:H,children:e.map((function(n,e){var r=n.id,a=n.poster_path,i=n.title,o=n.vote_average,s=n.release_date;return(0,B.jsx)("li",{className:T,children:(0,B.jsx)(m.rU,{to:"/movies/".concat(r),state:{from:t},children:(0,B.jsx)(D,{id:r,poster_path:a,title:i,vote_average:o,release_date:s},r)})},"".concat(r,"-").concat(e))}))})}},8676:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a=t(9439),i=t(2791),o=t(7689),s=t(1087),c=t(6048),l=t.n(c),d=t(9085),g=t(8489),u=t(5700),f=t(4332),p=t(4701),h=t(7610),x=t(9625),v=t(168),m=t(4313).ZP.h2(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n  color: var(--color);\n  text-transform: uppercase;\n  margin-bottom: 30px;\n"]))),Z=t(1312),b=t(3329),_=function(){var n,e,t=(0,i.useState)([]),r=(0,a.Z)(t,2),c=r[0],v=r[1],_=(0,i.useState)(!0),j=(0,a.Z)(_,2),k=j[0],w=j[1],P=(0,i.useState)(null),y=(0,a.Z)(P,2),A=y[0],C=y[1],N=(0,i.useState)(1),z=(0,a.Z)(N,2),L=z[0],F=z[1],M=(0,i.useState)(0),S=(0,a.Z)(M,2),B=S[0],D=S[1],H=null!==(n=null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",T=(0,i.useContext)(x.A).selectedLanguage;if((0,i.useEffect)((function(){g.Z.fetchMoviesByRaiting(L,T.iso_639_1).then((function(n){var e=n.results,t=n.total_pages;v(e),D(Math.min(t,500)),0===e.length&&d.Am.error("sorry, that's all the actors we could find")})).catch((function(n){C(n)})).finally((function(){return w(!1)}))}),[L,T]),A)return(0,b.jsx)("p",{children:A.message});return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(m,{children:"Top rating movies"}),(0,b.jsx)(s.rU,{to:H,children:(0,b.jsx)(h.Z,{})}),k?(0,b.jsx)(p.Z,{}):(0,b.jsx)(f.Z,{movies:c}),(0,b.jsx)(l(),{pageCount:B,pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(n){var e=n.selected;e+1>B||F(e+1)},containerClassName:Z.Z.pagination,pageClassName:Z.Z.page,activeClassName:Z.Z.active,previousClassName:Z.Z.previous,nextClassName:Z.Z.next,disabledClassName:Z.Z.disabled,breakClassName:Z.Z.break,previousLabel:"previous",nextLabel:"next",breakLabel:"..."})]})})}},1312:function(n,e){e.Z={pagination:"ActorsPage_pagination__AJF69",page:"ActorsPage_page__IpdFI",active:"ActorsPage_active__wAtHB",previous:"ActorsPage_previous__OZpAL",next:"ActorsPage_next__lcDC2",disabled:"ActorsPage_disabled__aSJEb",icon:"ActorsPage_icon__estx4"}}}]);
//# sourceMappingURL=676.ce96b0fb.chunk.js.map