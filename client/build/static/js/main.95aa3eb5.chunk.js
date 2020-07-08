(this.webpackJsonplivescore=this.webpackJsonplivescore||[]).push([[0],{109:function(n,e,t){"use strict";t.r(e);var a={};t.r(a),t.d(a,"todaysLeagueData",(function(){return b})),t.d(a,"favMatchReducer",(function(){return y}));var r=t(0),l=t.n(r),i=t(22),c=t.n(i),o=t(12),u=t(14),p=t(17),f=t(51),m=t(32),d=t.n(m),s=function(n){return{type:"SET_TODAYS_LEAGUE_DATA",payload:n}},x=function(n){var e=n.dispatch;return function(n){return function(t){if(n(t),"API"===t.type){var a=t.payload,r=a.url,l=a.onSuccess,i=a.onFailure,c=a.label,o=a.headers;d.a.defaults.headers.common["Content-Type"]="application/json",c&&e(function(n){return{type:"API_START",payload:n}}(c)),d.a.request({url:r,method:"GET",headers:o}).then((function(n){var t=n.data;e(l(t))})).catch((function(n){e(function(n){return{type:"API_ERROR",error:n}}(n)),e(i(n)),n.response&&403===n.response.status&&e(function(n){return{type:"ACCESS_DENIED",payload:{url:n}}}(window.location.pathname))})).finally((function(){c&&e(function(n){return{type:"API_END",payload:n}}(c))}))}}}},g=t(19),v={count:0,filters:null,matches:[]},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TODAYS_LEAGUE_DATA":return Object(g.a)(Object(g.a)({},n),e.payload);default:return n}},h=t(62),E=[],y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_FAV_MATCH":return n.some((function(n){return n.id===e.payload.id}))?n:[].concat(Object(h.a)(n),[e.payload]);case"DELETE_FAV_MATCH":return n.filter((function(n){return n.id!==e.payload.id}));default:return n}},w=Object(p.c)(a),j="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):p.d,O=Object(p.e)(w,j(Object(p.a)(x,f.a))),A=(t(89),t(1)),I=t(2);function S(){var n=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n  min-height: 60px;\n"]);return S=function(){return n},n}var k=I.a.div(S()),M=function(){return l.a.createElement(k,null)},D=t(6),z=t.n(D);function Zs(){var n=Object(A.a)(["\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);return Z=function(){return n},n}function N(){var n=Object(A.a)(["\n  display: flex;\n  width: 100%;\n  padding: 4px 0px;\n  align-items: center;\n  cursor: pointer;\n  & img {\n    width: 16px;\n    height: auto;\n  }\n  & span {\n    color: #557086;\n    font-size: 14px;\n    font-weight: 500;\n    margin: 0px 0px 0px 8px;\n  }\n"]);return N=function(){return n},n}function C(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 10px 0px;\n  & span:hover {\n    transform: translateX(5px);\n    transition: transform 200ms ease-in-out 0s;\n  }\n"]);return C=function(){return n},n}function Y(){var n=Object(A.a)(["\n  width: 100%;\n  margin: 0px 0px 7px 0px;\n  & span {\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n"]);return Y=function(){return n},n}function R(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  padding: 10px 0px 10px 0px;\n"]);return R=function(){return n},n}var L=I.a.div(R()),W=I.a.div(Y()),T=I.a.div(C()),F=I.a.div(N()),G=Object(I.a)(o.b)(Z()),H=function(){return l.a.createElement(L,null,l.a.createElement(W,null,l.a.createElement("span",null,"Most Popular")),l.a.createElement(T,null,l.a.createElement(F,null,l.a.createElement(G,{to:"/premier"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Premiere League"))),l.a.createElement(F,null,l.a.createElement(G,{to:"/ligueone"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Ligue 1"))),l.a.createElement(F,null,l.a.createElement(G,{to:"/bundesliga"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Bundesliga"))),l.a.createElement(F,null,l.a.createElement(G,{to:"/seriea"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Serie A"))),l.a.createElement(F,null,l.a.createElement(G,{to:"/eredivisie"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Eredivisie"))),l.a.createElement(F,null,l.a.createElement(G,{to:"/laliga"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"LaLiga"))),l.a.createElement(F,null,l.a.createElement(G,{to:"/champions"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Champions League"))),l.a.createElement(F,null,l.a.createElement(G,{to:"/europa"},l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Europa League")))))};function V(){var n=Object(A.a)(["\n  display: flex;\n  width: 100%;\n  padding: 4px 0px;\n  cursor: pointer;\n  & img {\n    width: 16px;\n    height: auto;\n  }\n  & span {\n    color: #557086;\n    font-size: 14px;\n    font-weight: 500;\n    margin: 0px 0px 0px 8px;\n  }\n"]);return V=function(){return n},n}function Q(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 10px 0px;\n  & span:hover {\n    transform: translateX(5px);\n    transition: transform 200ms ease-in-out 0s;\n  }\n"]);return Q=function(){return n},n}function J(){var n=Object(A.a)(["\n  width: 100%;\n  margin: 0px 0px 7px 0px;\n  & span {\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n"]);return J=function(){return n},n}function U(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  padding: 10px 0px 10px 0px;\n"]);return U=function(){return n},n}var P=I.a.div(U()),B=I.a.div(J()),X=I.a.div(Q()),K=I.a.div(V()),q=function(){return l.a.createElement(P,null,l.a.createElement(B,null,l.a.createElement("span",null,"Other Leagues")),l.a.createElement(X,null,l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Premiere League")),l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Ligue 1")),l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Bundesliga")),l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Serie A")),l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Eredivisie")),l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"LaLiga")),l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Champions League")),l.a.createElement(K,null,l.a.createElement("img",{src:z.a,alt:"Champions"}),l.a.createElement("span",null,"Europa League"))))},_="375px",$="425px",nn="767px",en="1024px",tn="1440px",an="2560px",rn={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(_,")"),mobileL:"(max-width: ".concat($,")"),tablet:"(max-width: ".concat(nn,")"),laptop:"(max-width: ".concat(en,")"),laptopL:"(max-width: ".concat(tn,")"),desktop:"(max-width: ".concat(an,")"),desktopL:"(max-width: ".concat(an,")")};function ln(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  flex-shrink: 0;\n  height: 100vh;\n  padding: 0px 25px;\n  z-index: 900;\n  background-color: #0f212e;\n  @media "," {\n    display: none;\n  }\n"]);return ln=function(){return n},n}var cn=I.a.div(ln(),rn.tablet),on=function(){return l.a.createElement(cn,null,l.a.createElement(M,null),l.a.createElement(H,null),l.a.createElement(q,null))},un=t(18),pn=t(54),fn=t.n(pn),mn=t(55),dn=t.n(mn),sn=t(37),xn=t.n(sn);function gn(){var n=Object(A.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  & input {\n    color: rgba(255, 255, 255, 0.7);\n    padding: 5px 5px;\n    justify-content: flex-end;\n    background-color: #213743;\n    border-radius: 3px;\n    width: 50%;\n    min-width: 170px;\n    outline-style: none;\n    border-color: transparent;\n    & :hover {\n      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);\n    }\n  }\n"]);return gn=function(){return n},n}var vn=I.a.div(gn()),bn=function(){var n=Object(r.useState)("Search..."),e=Object(un.a)(n,2),t=e[0],a=e[1];return l.a.createElement(vn,null,l.a.createElement("input",{type:"text",onChange:function(n){a(n.target.value)},value:t,placeholder:"Search..."}))};function hn(){var n=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  & form {\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    & span {\n      margin: 5px 0px;\n    }\n    & input {\n      color: #fff;\n      font-size: 14px;\n      background: #0f212e;\n      box-shadow: none;\n      outline-style: none;\n      border-color: transparent;\n      border-radius: 3px;\n      padding: 3px;\n      margin: 6px 0px;\n    }\n  }\n"]);return hn=function(){return n},n}function En(){var n=Object(A.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);return En=function(){return n},n}function yn(){var n=Object(A.a)(["\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);return yn=function(){return n},n}function wn(){var n=Object(A.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 33%;\n  & button {\n    display: flex;\n    font-weight: 500;\n    font-size: 14px;\n    outline: none;\n    box-shadow: none;\n    color: #fff;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    background: none;\n    cursor: pointer;\n  }\n"]);return wn=function(){return n},n}function jn(){var n=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  width: 34%;\n"]);return jn=function(){return n},n}function On(){var n=Object(A.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 33%;\n"]);return On=function(){return n},n}function An(){var n=Object(A.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #192c38;\n  padding: 0 3vw;\n  min-height: 60px;\n  @media "," {\n    padding: 0 5vw;\n  }\n"]);return An=function(){return n},n}var In=I.a.header(An(),rn.tablet),Sn=I.a.div(On()),kn=I.a.div(jn()),Mn=I.a.div(wn()),Dn=Object(I.a)(o.b)(yn()),zn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",width:"90vw",maxWidth:"560px",borderRadius:"5px",transform:"translate(-50%, -50%)",color:"#fff",background:"#1A2C38",border:"none",padding:"8px",zIndex:"999"},overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(14, 18, 36, 0.7)",zIndex:"998"}},Zn=I.a.div(En()),Nn=I.a.div(hn()),Cn=function(){var n=Object(r.useState)(!1),e=Object(un.a)(n,2),t=e[0],a=e[1];xn.a.setAppElement("#webapp");var i=function(){a(!1)};return l.a.createElement(In,null,l.a.createElement(Sn,null,l.a.createElement(Dn,{to:"/"},l.a.createElement("img",{src:fn.a,alt:"Logo"}))),l.a.createElement(kn,null,l.a.createElement(bn,null)),l.a.createElement(Mn,null,l.a.createElement("button",{onClick:function(){a(!0)}},"Login")),l.a.createElement(xn.a,{isOpen:t,onRequestClose:i,style:zn},l.a.createElement(Zn,null,l.a.createElement(dn.a,{style:{cursor:"pointer"},color:"rgba(255, 255, 255, 0.6)",fontSize:"18px",onClick:i})),l.a.createElement(Nn,null,l.a.createElement("form",null,l.a.createElement("span",null,"Email"),l.a.createElement("input",{type:"text"}),l.a.createElement("span",null,"Password"),l.a.createElement("input",{type:"password"})))))},Yn=t(5),Rn=t(57),Ln=t.n(Rn),Wn=function(n){switch(n){case"Nottingham Forest FC":return"Nottingham";case"Fulham FC":return"Fulham";case"Reading FC":return"Reading";case"Huddersfield Town AFC":return"Huddersfield";case"SC Corinthians Paulista":return"Corinthians";case"West Bromwich Albion FC":return"Bromwich";case"Brighton & Hove Albion FC":return"Brighton";case"Sheffield Wednesday FC":return"Sheffield";case"RCD Espanyol de Barcelona":return"Espanyol";case"Wolverhampton Wanderers FC":return"Wolverhampton";case"Queens Park Rangers FC":return"QP Rangers";default:return n}},Tn=t(58),Fn=t.n(Tn),Gn=t(59),Hn=t.n(Gn);function Vn(){var n=Object(A.a)(["\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 14px;\n  justify-self: start;\n  align-self: center;\n"]);return Vn=function(){return n},n}function Qn(){var n=Object(A.a)(["\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 14px;\n  justify-self: end;\n  align-self: center;\n"]);return Qn=function(){return n},n}function Jn(){var n=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-self: center;\n  align-self: center;\n  font-weight: 500;\n  background-color: rgba(25, 44, 56, 0.4);\n  min-width: 40px;\n  padding: 3px 3px;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 13px;\n"]);return Jn=function(){return n},n}function Un(){var n=Object(A.a)(["\n  justify-self: start;\n  align-self: center;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13.5px;\n"]);return Un=function(){return n},n}function Pn(){var n=Object(A.a)(["\n  display: grid;\n  grid-template-columns: 60px 1fr 60px 1fr 60px;\n  width: 100%;\n  border-radius: 3px;\n  margin: 1px 0px;\n  padding: 2px 5px;\n  &:hover {\n    background-color: rgba(25, 44, 56, 0.8);\n  }\n  @media "," {\n    grid-template-columns: 55px auto 60px auto 20px;\n  }\n"]);return Pn=function(){return n},n}var Bn=I.a.div(Pn(),rn.tablet),Xn=I.a.span(Un()),Kn=I.a.span(Jn()),qn=I.a.span(Qn()),_n=I.a.span(Vn()),$n=function(n){var e=n.time,t=n.id,a=n.hometeam,r=n.awayteam,i=n.status,c=n.winner,o=n.homescore,p=n.awayscore,f=Object(u.b)(),m=Object(u.c)((function(n){return n.favMatchReducer}));return l.a.createElement(Bn,null,l.a.createElement(Xn,null,"SCHEDULED"===i?e.slice(11,-4):i),l.a.createElement(qn,{style:{fontWeight:"HOME_TEAM"===c&&"FINISHED"===i?"500":""}},Wn(a)),l.a.createElement(Kn,{style:{color:"IN_PLAY"===i?"red":null}},o," - ",p),l.a.createElement(_n,{style:{fontWeight:"AWAY_TEAM"===c&&"FINISHED"===i?"500":""}},Wn(r)),m.some((function(n){return n.id===t}))?l.a.createElement(Hn.a,{style:{cursor:"pointer",justifySelf:"end",alignSelf:"center"},color:"#F4E122",fontSize:"18px",onClick:function(){var n;f((n={time:e,id:t,hometeam:a,awayteam:r,status:i,winner:c,homescore:o,awayscore:p},{type:"DELETE_FAV_MATCH",payload:Object(g.a)({},n)}))}}):l.a.createElement(Fn.a,{style:{cursor:"pointer",justifySelf:"end",alignSelf:"center"},color:"#F4E122",fontSize:"18px",onClick:function(){var n;f((n={id:t,time:e,hometeam:a,awayteam:r,status:i,homescore:o,awayscore:p},{type:"SET_FAV_MATCH",payload:Object(g.a)({},n)}))}}))};function ne(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  align-self: center;\n  padding: 2px 5px;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 500;\n  margin: 0px 8px;\n  background-color: #eb2c2d;\n  border-radius: 4px;\n  animation: live 1.6s infinite;\n  @keyframes live {\n    0% {\n      box-shadow: 0 0 0 0 rgba(235, 44, 45, 0.7);\n    }\n\n    70% {\n      box-shadow: 0 0 0 6px rgba(235, 44, 45, 0);\n    }\n\n    100% {\n      box-shadow: 0 0 0 0 rgba(235, 44, 45, 0);\n    }\n  }\n"]);return ne=function(){return n},n}var ee=I.a.div(ne()),te=function(){return l.a.createElement(ee,null,"LIVE")};function ae(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-self: start;\n  align-self: center;\n  color: #fff;\n  font-size: 14px;\n  & img {\n    height: auto;\n    width: 19px;\n    margin-right: 6px;\n  }\n"]);return ae=function(){return n},n}function re(){var n=Object(A.a)(["\n  display: grid;\n  grid-template-columns: 80% 20%;\n  padding: 1px 5px 0px;\n  width: 100%;\n  margin: 4px 0px 6px;\n"]);return re=function(){return n},n}function le(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return le=function(){return n},n}function ie(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 5px 0px;\n  padding: 5px 10px;\n  background-color: #213743;\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);\n  @media "," {\n    padding: 5px 10px;\n  }\n"]);return ie=function(){return n},n}var ce=I.a.div(ie(),rn.mobileM),oe=I.a.div(le()),ue=I.a.div(re()),pe=I.a.div(ae()),fe=function(n){var e=Object(r.useState)((function(){var e=sessionStorage.getItem("".concat(n.name,"OpenLocal"));return null==e||JSON.parse(e)})),t=Object(un.a)(e,2),a=t[0],i=t[1],c=Object(u.c)((function(n){return n.todaysLeagueData}));return Object(r.useEffect)((function(){sessionStorage.setItem("".concat(n.name,"OpenLocal"),a)}),[a,n.name]),l.a.createElement(ce,null,l.a.createElement(ue,null,l.a.createElement(pe,null,l.a.createElement("img",{src:n.logo,alt:""}),l.a.createElement("span",null,n.name),c.matches.some((function(e){return e.competition.name===n.name&&"IN_PLAY"===e.status}))?l.a.createElement(te,null):null),l.a.createElement(Ln.a,{style:{cursor:"pointer",justifySelf:"end",alignSelf:"center"},color:"#FFF",fontSize:"18px",onClick:function(){return i(!a)}})),a?l.a.createElement(oe,null,c.matches.map((function(e,t){return e.competition.name===n.name?l.a.createElement($n,{key:t,id:e.id,time:e.utcDate,status:e.status,hometeam:e.homeTeam.name,awayteam:e.awayTeam.name,winner:e.score.winner,homescore:e.score.fullTime.homeTeam,awayscore:e.score.fullTime.awayTeam}):null}))):null)},me=t(60),de=function(n){return l.a.createElement(me.a,Object.assign({speed:2,width:1080,height:172,viewBox:"0 0 100% 100%",backgroundColor:"#192C38",foregroundColor:"#213743"},n),l.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"100%",height:"93"}),l.a.createElement("rect",{x:"0",y:"104",rx:"3",ry:"3",width:"100%",height:"66"}),l.a.createElement("rect",{x:"0",y:"180",rx:"3",ry:"3",width:"100%",height:"66"}),l.a.createElement("rect",{x:"0",y:"256",rx:"3",ry:"3",width:"100%",height:"66"}),l.a.createElement("rect",{x:"0",y:"332",rx:"3",ry:"3",width:"100%",height:"93"}))};function se(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 15px 2vw;\n  align-items: center;\n  position: relative;\n  @media "," {\n    padding: 10px 2vw;\n  }\n"]);return se=function(){return n},n}var xe=I.a.div(se(),rn.mobileL),ge=function(){var n=Object(u.b)();Object(r.useEffect)((function(){n(function(n){var e=n.url,t=void 0===e?"":e,a=n.onSuccess,r=void 0===a?function(){}:a,l=n.onFailure,i=void 0===l?function(){}:l,c=n.headers,o=void 0===c?{"X-Auth-Token":"f252ebb82e064258af98f1d258c4d5fa"}:c,u=n.label;return{type:"API",payload:{url:t,onSuccess:r,onFailure:i,headers:o,label:void 0===u?"":u}}}({url:"http://api.football-data.org/v2/matches",onSuccess:s,onFailure:function(){console.log("Error occured loading articles")}}))}),[n]);var e=Object(u.c)((function(n){return n.todaysLeagueData}));console.log(e);var t=e.matches.map((function(n){return[n.competition.name,n.competition.id,n.competition.area.ensignUrl]})),a=Array.from(new Set(t.map(JSON.stringify)),JSON.parse);return l.a.createElement(xe,null,e.count<1?l.a.createElement(de,{style:{width:"100%",height:"100%",margin:"5px 0px"}}):a.map((function(n){return l.a.createElement(fe,{key:n[1],name:n[0],logo:n[2]})})))},ve=t(61),be=t.n(ve);function he(){var n=Object(A.a)(["\n  display: flex;\n  cursor: pointer;\n  & span {\n    color: #fff;\n    margin-left: 5px;\n    font-size: 14px;\n  }\n  margin-bottom: 12px;\n"]);return he=function(){return n},n}function Ee(){var n=Object(A.a)(["\n  display: flex;\n  color: #fff;\n  align-items: center;\n"]);return Ee=function(){return n},n}var ye=I.a.div(Ee()),we=I.a.div(he()),je=function(){var n=Object(Yn.f)();return l.a.createElement(ye,null,n.length>2?l.a.createElement(we,{onClick:function(){return n.goBack()}},l.a.createElement(be.a,{color:"#FFF",fontSize:"18px"}),l.a.createElement("span",null,"Go Back")):null)};function Oe(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Oe=function(){return n},n}function Ae(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ae=function(){return n},n}function Ie(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ie=function(){return n},n}function Se(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Se=function(){return n},n}function ke(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return ke=function(){return n},n}function Me(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Me=function(){return n},n}function De(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return De=function(){return n},n}function ze(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return ze=function(){return n},n}function Ze(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ze=function(){return n},n}function Ne(){var n=Object(A.a)(["\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;\n  justify-items: center;\n  margin: 0px 0px 5px 0px;\n  width: 100%;\n  height: 23px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return Ne=function(){return n},n}var Ce=I.a.div(Ne()),Ye=I.a.div(Ze()),Re=I.a.div(ze()),Le=I.a.div(De()),We=I.a.div(Me()),Te=I.a.div(ke()),Fe=I.a.div(Se()),Ge=I.a.div(Ie()),He=I.a.div(Ae()),Ve=I.a.div(Oe()),Qe=function(){return l.a.createElement(Ce,null,l.a.createElement(Ye,null,l.a.createElement("span",null,"#")),l.a.createElement(Re,null,"Team"),l.a.createElement(Le,null,"Matches"),l.a.createElement(We,null,"Wins"),l.a.createElement(Te,null,"Losses"),l.a.createElement(Fe,null,"Draws"),l.a.createElement(Ge,null,"Ratio"),l.a.createElement(He,null,"Goals"),l.a.createElement(Ve,null,"Form"))};function Je(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Je=function(){return n},n}function Ue(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ue=function(){return n},n}function Pe(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Pe=function(){return n},n}function Be(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Be=function(){return n},n}function Xe(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Xe=function(){return n},n}function Ke(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ke=function(){return n},n}function qe(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return qe=function(){return n},n}function _e(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return _e=function(){return n},n}function $e(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return $e=function(){return n},n}function nt(){var n=Object(A.a)(["\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;\n  justify-items: center;\n  width: 100%;\n  height: 23px;\n  font-size: 14px;\n"]);return nt=function(){return n},n}var et=I.a.div(nt()),tt=I.a.div($e()),at=I.a.div(_e()),rt=I.a.div(qe()),lt=I.a.div(Ke()),it=I.a.div(Xe()),ct=I.a.div(Be()),ot=I.a.div(Pe()),ut=I.a.div(Ue()),pt=I.a.div(Je()),ft=function(){return l.a.createElement(et,null,l.a.createElement(tt,null,l.a.createElement("span",null,"1")),l.a.createElement(at,null,"Sporting CP"),l.a.createElement(rt,null,"27"),l.a.createElement(lt,null,"15"),l.a.createElement(it,null,"7"),l.a.createElement(ct,null,"5"),l.a.createElement(ot,null,"31:13"),l.a.createElement(ut,null,"41"),l.a.createElement(pt,null,"V V D D V"))};function mt(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  padding: 10px 15px;\n  margin: 5px 0px;\n  width: 100%;\n  background-color: #213743;\n  color: #fff;\n  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);\n"]);return mt=function(){return n},n}function dt(){var n=Object(A.a)(["\n  padding: 15px 2vw;\n  align-items: center;\n  @media "," {\n    padding: 10px 2vw;\n  }\n"]);return dt=function(){return n},n}var st=I.a.div(dt(),rn.mobileL),xt=I.a.div(mt()),gt=function(n){return console.log(n),l.a.createElement(st,null,l.a.createElement(je,null),l.a.createElement(xt,null,l.a.createElement(Qe,null),l.a.createElement(ft,null),l.a.createElement(ft,null),l.a.createElement(ft,null)))};function vt(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding: 30px 3vw;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  @media "," {\n    padding: 15px 2vw;\n  }\n"]);return vt=function(){return n},n}var bt=I.a.div(vt(),rn.mobileL),ht=function(){return l.a.createElement(bt,null,l.a.createElement(Yn.c,null,l.a.createElement(Yn.a,{exact:!0,path:"/",component:ge}),l.a.createElement(Yn.a,{path:"/premier",component:gt})))};function Et(){var n=Object(A.a)(["\n  display: flex;\n  width: 100%;\n  height: 10px;\n"]);return Et=function(){return n},n}var yt=I.a.footer(Et()),wt=function(){return l.a.createElement(yt,null)};function jt(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  background-color: #192c38;\n"]);return jt=function(){return n},n}var Ot=I.a.div(jt()),At=function(){return l.a.createElement(Ot,null,l.a.createElement(Cn,null),l.a.createElement(ht,null),l.a.createElement(wt,null))};function It(){var n=Object(A.a)(["\n  display: inline-flex;\n  font-size: 14px;\n  margin-left: 7px;\n  font-weight: 500;\n  color: #fff;\n"]);return It=function(){return n},n}function St(){var n=Object(A.a)(["\n  background: rgb(18, 196, 2);\n  border-radius: 50%;\n  height: 7px;\n  width: 7px;\n  margin: 0;\n  box-shadow: 0 0 0 rgb(18, 196, 2);\n  animation: pulse 1.6s infinite;\n  @keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 rgba(18, 196, 2, 0.7);\n    }\n\n    70% {\n      box-shadow: 0 0 0 6px rgba(18, 196, 2, 0);\n    }\n\n    100% {\n      box-shadow: 0 0 0 0 rgba(18, 196, 2, 0);\n    }\n  }\n"]);return St=function(){return n},n}function kt(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]);return kt=function(){return n},n}function Mt(){var n=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: auto;\n  font-size: 15px;\n  font-weight: 500;\n  color: #fff;\n"]);return Mt=function(){return n},n}function Dt(){var n=Object(A.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 20px;\n  min-height: 60px;\n"]);return Dt=function(){return n},n}var zt=I.a.div(Dt()),Zt=I.a.span(Mt()),Nt=I.a.div(kt()),Ct=I.a.span(St()),Yt=I.a.span(It()),Rt=function(){return l.a.createElement(zt,null,l.a.createElement(Zt,null,"Chat"),l.a.createElement(Nt,null,l.a.createElement(Ct,null),l.a.createElement(Yt,null,"2458")))};function Lt(){var n=Object(A.a)(["\n  color: #fff;\n  width: 100%;\n  font-size: 14px;\n  padding: 8px 8px;\n  margin: 3px 0px;\n  background-color: #253742;\n  border-radius: 4px;\n"]);return Lt=function(){return n},n}function Wt(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding: 20px 17px 0px 17px;\n"]);return Wt=function(){return n},n}function Tt(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n"]);return Tt=function(){return n},n}var Ft=I.a.div(Tt()),Gt=I.a.div(Wt()),Ht=I.a.div(Lt()),Vt=function(){return l.a.createElement(Ft,null,l.a.createElement(Gt,null,l.a.createElement(Ht,null,l.a.createElement("p",null,"Ol\xe1, tudo bem?")),l.a.createElement(Ht,null,l.a.createElement("p",null,"Sim e contigo?")),l.a.createElement(Ht,null,l.a.createElement("p",null,"Tamb\xe9m, obrigado.")),l.a.createElement(Ht,null,l.a.createElement("p",null,"Venho j\xe1")),l.a.createElement(Ht,null,l.a.createElement("p",null,"Okay, at\xe9 j\xe1."))))};function Qt(){var n=Object(A.a)(["\n  display: flex;\n  margin-top: 15px;\n  & button {\n    height: 35px;\n    width: 35px;\n    margin: 0px 6px 0px 0px;\n    color: rgb(85, 112, 134);\n    background-color: #0f212e;\n    border: none;\n    border: 1px solid rgb(85, 112, 134);\n    border-radius: 5px;\n    cursor: pointer;\n    &:hover {\n      color: rgb(139, 163, 182);\n      border: 1px solid rgb(139, 163, 182);\n    }\n  }\n"]);return Qt=function(){return n},n}function Jt(){var n=Object(A.a)(["\n  display: flex;\n  position: relative;\n  & input {\n    color: #fff;\n    padding: 0px 22% 0px 7px;\n    width: 100%;\n    height: 35px;\n    border: none;\n    box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.75);\n    border-radius: 4px 0px 0px 4px;\n    background-color: rgb(33, 55, 67);\n    &:focus {\n      outline: none;\n    }\n  }\n  & button {\n    position: absolute;\n    right: 0;\n    height: 35px;\n    color: #013e01;\n    background-color: #1fff20;\n    font-size: 14px;\n    font-weight: 500;\n    border-radius: 4px;\n    width: 20%;\n    cursor: pointer;\n    outline: none;\n    border: none;\n  }\n"]);return Jt=function(){return n},n}function Ut(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 18px 20px;\n  width: 100%;\n  color: rgb(255, 255, 255);\n"]);return Ut=function(){return n},n}var Pt=I.a.div(Ut()),Bt=I.a.div(Jt()),Xt=I.a.div(Qt()),Kt=function(){return l.a.createElement(Pt,null,l.a.createElement(Bt,null,l.a.createElement("input",{type:"text",placeholder:"Send a message"}),l.a.createElement("button",{type:"button"},"Send")),l.a.createElement(Xt,null,l.a.createElement("button",{type:"button"},l.a.createElement("i",{className:"fas fa-user-friends"})),l.a.createElement("button",{type:"button"},l.a.createElement("i",{className:"fas fa-envelope"})),l.a.createElement("button",{type:"button"},l.a.createElement("i",{className:"fas fa-tag"}))))};function qt(){var n=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n  flex-shrink: 0;\n  height: 100vh;\n  z-index: 900;\n  background-color: #0f212e;\n  @media "," {\n    display: none;\n  }\n"]);return qt=function(){return n},n}var _t=I.a.div(qt(),rn.laptop),$t=function(){return l.a.createElement(_t,null,l.a.createElement(Rt,null),l.a.createElement(Vt,null),l.a.createElement(Kt,null))};function na(){var n=Object(A.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n"]);return na=function(){return n},n}var ea=I.a.div(na()),ta=function(){return l.a.createElement(o.a,null,l.a.createElement(ea,null,l.a.createElement(on,null),l.a.createElement(At,null),l.a.createElement($t,null)))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{store:O},l.a.createElement(ta,null)))),document.getElementById("webapp"))},54:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAeCAYAAAA1mdDNAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAXSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAxLTIxVDE1OjU3OjEzWiIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDQtMTdUMDM6Mzg6NDIrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDQtMTdUMDM6Mzg6NDIrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozM2M1YmIyNi0xMTY2LTYxNDctYjcwNS0xNGNiNTg3YTA1OWQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZDM0MDdkYmQtMDQ4Yy04NDQzLWEwMjMtN2Y0NWFhZDQ4MzIxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDM0MDdkYmQtMDQ4Yy04NDQzLWEwMjMtN2Y0NWFhZDQ4MzIxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMzQwN2RiZC0wNDhjLTg0NDMtYTAyMy03ZjQ1YWFkNDgzMjEiIHN0RXZ0OndoZW49IjIwMjAtMDEtMjFUMTU6NTc6MTNaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozM2M1YmIyNi0xMTY2LTYxNDctYjcwNS0xNGNiNTg3YTA1OWQiIHN0RXZ0OndoZW49IjIwMjAtMDQtMTdUMDM6Mzg6NDIrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3ht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"},6:function(n,e,t){n.exports=t.p+"static/media/Champions.a110cc63.svg"},64:function(n,e,t){n.exports=t(109)},89:function(n,e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.95aa3eb5.chunk.js.map