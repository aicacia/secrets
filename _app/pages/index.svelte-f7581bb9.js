import{R as Dt,K as Be,C as at,L as St,S as le,i as ne,s as re,D as Ce,M as ut,e as v,k as N,j as q,c as E,a as k,d as p,n as U,m as W,b as d,N as Z,f as O,F as m,o as J,O as M,G as je,H as Re,I as Me,x as C,u as R,v as F,P as X,Q as Ge,r as ze,w as He,T as ve,U as Pt,V as Ot,W as Ee,X as $e,Y as ke,Z as Nt,_ as Ut,$ as Vt,t as G,g as z,h as ge,l as Ie,J as ie,a0 as qe,a1 as Lt,a2 as Tt,a3 as We,a4 as Je,a5 as it,a6 as Fe,a7 as Bt,A as Ct,a8 as Xe,a9 as Ke,aa as jt,ab as Rt}from"../chunks/vendor-94822eda.js";import{_ as Mt}from"../chunks/preload-helper-04e99934.js";function ft(s){try{const{protocol:e,host:t,pathname:l,hash:n,search:r}=new URL(s);let o=`${e}//${t}${l}`;return n&&(o+=`#${n}`),r&&(o+=`?${r}`),o}catch{return s.trim()}}const Gt="v21wdidfxjapm8b",zt="399181883347-3dfijgbemptplmueu01bsfga9jpkks6j.apps.googleusercontent.com",pe=new Dt;pe.setApiKeys({dropbox:Gt,googledrive:zt});pe.access.claim("passwords","rw");pe.caching.enable("/passwords/");const Ye=pe.scope("/passwords/");Ye.declareType("passwords",{type:"object",properties:{".*":{type:"object",properties:{id:{type:"string",format:"uuid"},url:{type:"string",format:"uri"},username:{type:"string"},password:{type:"string"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time"}},required:["id","url","username","password","createdAt","updatedAt"]}}});const fe=at({});Be(fe,s=>Object.values(s));const Ht=Be(fe,s=>s),qt=Be(fe,s=>Object.values(s).reduce((e,t)=>((e[t.url]||(e[t.url]=[])).push(t),e),{}));function Wt(s,e,t){const n={id:St(),url:ft(s),username:e,password:t,createdAt:new Date,updatedAt:new Date};fe.update(r=>(r[n.id]=n,Qe(r),r))}function Jt(s,e,t,l){fe.update(n=>{const r=n[s];return r&&(r.url=ft(e),r.username=t,r.password=l,r.updatedAt=new Date,Qe(n)),n})}function Ft(s){fe.update(e=>(delete e[s],Qe(e),e))}function Xt(s){return{id:s.id,url:s.url,username:s.username,password:s.password,createdAt:s.createdAt.toJSON(),updatedAt:s.updatedAt.toJSON()}}function Kt(s){return{id:s.id,url:s.url,username:s.username,password:s.password,createdAt:new Date(s.createdAt),updatedAt:new Date(s.updatedAt)}}function Qe(s){Ye.storeObject("passwords","passwords.json",Object.values(s).reduce((e,t)=>(e[t.id]=Xt(t),e),{}))}function Yt(){Ye.getObject("passwords.json",!1).then(s=>{s&&(delete s["@context"],fe.update(e=>(Object.values(s).forEach(t=>{const l=e[t.id],n=Kt(t);(!l||l.updatedAt<n.updatedAt)&&(e[t.id]=n)}),e)))})}pe.on("sync-done",Yt);const Qt=s=>({}),ct=s=>({});function Zt(s){let e,t,l,n,r,o,u,f,c,h,a,_,i,I,P,D;const y=s[4].title,b=Ce(y,s,s[3],ct);c=new ut({});const V=s[4].default,T=Ce(V,s,s[3],null);return{c(){e=v("div"),t=v("div"),l=v("div"),n=v("div"),r=v("div"),b&&b.c(),o=N(),u=v("button"),f=v("div"),q(c.$$.fragment),h=N(),a=v("div"),T&&T.c(),_=N(),i=v("div"),this.h()},l($){e=E($,"DIV",{class:!0});var A=k(e);t=E(A,"DIV",{class:!0});var K=k(t);l=E(K,"DIV",{class:!0});var g=k(l);n=E(g,"DIV",{class:!0});var S=k(n);r=E(S,"DIV",{class:!0});var j=k(r);b&&b.l(j),j.forEach(p),o=U(S),u=E(S,"BUTTON",{class:!0});var Y=k(u);f=E(Y,"DIV",{class:!0});var L=k(f);W(c.$$.fragment,L),L.forEach(p),Y.forEach(p),S.forEach(p),h=U(g),a=E(g,"DIV",{class:!0});var oe=k(a);T&&T.l(oe),oe.forEach(p),g.forEach(p),K.forEach(p),A.forEach(p),_=U($),i=E($,"DIV",{class:!0}),k(i).forEach(p),this.h()},h(){d(r,"class","flex-grow"),d(f,"class","w-8 h-8"),d(u,"class","bg-transparent border-0 text-black outline-none focus:outline-none"),d(n,"class","flex items-start justify-between px-4 pt-4"),d(a,"class","relative p-4 flex-auto"),d(l,"class","border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"),d(t,"class","relative my-4 w-96 md:w-1/3 mx-auto"),d(e,"class","overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"),Z(e,"hidden",!s[0]),d(i,"class","opacity-25 fixed inset-0 z-40 bg-black"),Z(i,"hidden",!s[0])},m($,A){O($,e,A),m(e,t),m(t,l),m(l,n),m(n,r),b&&b.m(r,null),m(n,o),m(n,u),m(u,f),J(c,f,null),m(l,h),m(l,a),T&&T.m(a,null),O($,_,A),O($,i,A),I=!0,P||(D=M(u,"click",s[1]),P=!0)},p($,[A]){b&&b.p&&(!I||A&8)&&je(b,y,$,$[3],I?Me(y,$[3],A,Qt):Re($[3]),ct),T&&T.p&&(!I||A&8)&&je(T,V,$,$[3],I?Me(V,$[3],A,null):Re($[3]),null),A&1&&Z(e,"hidden",!$[0]),A&1&&Z(i,"hidden",!$[0])},i($){I||(C(b,$),C(c.$$.fragment,$),C(T,$),I=!0)},o($){R(b,$),R(c.$$.fragment,$),R(T,$),I=!1},d($){$&&p(e),b&&b.d($),F(c),T&&T.d($),$&&p(_),$&&p(i),P=!1,D()}}}function xt(s,e,t){let{$$slots:l={},$$scope:n}=e,{onClose:r=()=>{}}=e,{open:o=!1}=e;function u(){t(0,o=!1),r()}return s.$$set=f=>{"onClose"in f&&t(2,r=f.onClose),"open"in f&&t(0,o=f.open),"$$scope"in f&&t(3,n=f.$$scope)},[o,u,r,n,l]}class dt extends le{constructor(e){super();ne(this,e,xt,Zt,re,{onClose:2,open:0})}}function es(s){let e,t;return e=new Pt({}),{c(){q(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function ts(s){let e,t;return e=new Ot({}),{c(){q(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function ss(s){let e,t,l,n,r,o,u,f,c,h,a,_;const i=[ts,es],I=[];function P(D,y){return D[1]?0:1}return f=P(s),c=I[f]=i[f](s),{c(){e=v("div"),t=v("input"),l=N(),n=v("input"),r=N(),o=v("button"),u=v("div"),c.c(),this.h()},l(D){e=E(D,"DIV",{class:!0});var y=k(e);t=E(y,"INPUT",{class:!0,type:!0,placeholder:!0}),l=U(y),n=E(y,"INPUT",{class:!0,type:!0,placeholder:!0}),r=U(y),o=E(y,"BUTTON",{class:!0});var b=k(o);u=E(b,"DIV",{class:!0});var V=k(u);c.l(V),V.forEach(p),b.forEach(p),y.forEach(p),this.h()},h(){d(t,"class","input"),d(t,"type","text"),d(t,"placeholder","Password"),Z(t,"hidden",!s[1]),d(n,"class","input"),d(n,"type","password"),d(n,"placeholder","Password"),Z(n,"hidden",s[1]),d(u,"class","w-6 h-6"),d(o,"class","text-black absolute top-0 bottom-0 right-2"),d(e,"class","relative")},m(D,y){O(D,e,y),m(e,t),X(t,s[0]),m(e,l),m(e,n),X(n,s[0]),m(e,r),m(e,o),m(o,u),I[f].m(u,null),h=!0,a||(_=[M(t,"input",s[3]),M(t,"input",function(){Ge(s[2])&&s[2].apply(this,arguments)}),M(n,"input",s[4]),M(n,"input",function(){Ge(s[2])&&s[2].apply(this,arguments)}),M(o,"click",s[5])],a=!0)},p(D,[y]){s=D,y&1&&t.value!==s[0]&&X(t,s[0]),y&2&&Z(t,"hidden",!s[1]),y&1&&n.value!==s[0]&&X(n,s[0]),y&2&&Z(n,"hidden",s[1]);let b=f;f=P(s),f!==b&&(ze(),R(I[b],1,1,()=>{I[b]=null}),He(),c=I[f],c||(c=I[f]=i[f](s),c.c()),C(c,1),c.m(u,null))},i(D){h||(C(c),h=!0)},o(D){R(c),h=!1},d(D){D&&p(e),I[f].d(),a=!1,ve(_)}}}function ls(s,e,t){let{password:l}=e,{onInput:n=()=>{}}=e,{show:r=!1}=e;function o(){l=this.value,t(0,l)}function u(){l=this.value,t(0,l)}const f=()=>t(1,r=!r);return s.$$set=c=>{"password"in c&&t(0,l=c.password),"onInput"in c&&t(2,n=c.onInput),"show"in c&&t(1,r=c.show)},[l,r,n,o,u,f]}class pt extends le{constructor(e){super();ne(this,e,ls,ss,re,{password:0,onInput:2,show:1})}}function ns(s){let e,t,l,n,r,o,u,f,c,h,a,_,i,I,P;function D(b){s[8](b)}let y={password:s[2],onInput:s[5]};return s[4]!==void 0&&(y.show=s[4]),o=new pt({props:y}),Ee.push(()=>$e(o,"show",D)),_=new ut({}),{c(){e=v("div"),t=v("input"),l=N(),n=v("div"),r=v("div"),q(o.$$.fragment),f=N(),c=v("div"),h=v("button"),a=v("div"),q(_.$$.fragment),this.h()},l(b){e=E(b,"DIV",{class:!0});var V=k(e);t=E(V,"INPUT",{class:!0,type:!0,placeholder:!0}),l=U(V),n=E(V,"DIV",{class:!0});var T=k(n);r=E(T,"DIV",{class:!0});var $=k(r);W(o.$$.fragment,$),$.forEach(p),f=U(T),c=E(T,"DIV",{class:!0});var A=k(c);h=E(A,"BUTTON",{class:!0});var K=k(h);a=E(K,"DIV",{class:!0});var g=k(a);W(_.$$.fragment,g),g.forEach(p),K.forEach(p),A.forEach(p),T.forEach(p),V.forEach(p),this.h()},h(){d(t,"class","input"),d(t,"type","text"),d(t,"placeholder","Username"),d(r,"class","flex-1"),d(a,"class","w-4 h-4"),d(h,"class","btn danger h-full px-3"),d(c,"class","flex-grow-0"),d(n,"class","flex"),d(e,"class","grid grid-cols-1 sm:grid-cols-2 gap-2")},m(b,V){O(b,e,V),m(e,t),X(t,s[0]),m(e,l),m(e,n),m(n,r),J(o,r,null),m(n,f),m(n,c),m(c,h),m(h,a),J(_,a,null),i=!0,I||(P=[M(t,"input",s[7]),M(t,"input",s[5]),M(h,"click",s[9])],I=!0)},p(b,[V]){V&1&&t.value!==b[0]&&X(t,b[0]);const T={};V&4&&(T.password=b[2]),!u&&V&16&&(u=!0,T.show=b[4],ke(()=>u=!1)),o.$set(T)},i(b){i||(C(o.$$.fragment,b),C(_.$$.fragment,b),i=!0)},o(b){R(o.$$.fragment,b),R(_.$$.fragment,b),i=!1},d(b){b&&p(e),F(o),F(_),I=!1,ve(P)}}}function rs(s,e,t){let{id:l}=e,{url:n}=e,{username:r}=e,{password:o}=e,{onDelete:u=()=>{}}=e,f=!1;const c=Nt(()=>{n&&r&&o&&Jt(l,n,r,o)},500);function h(){r=this.value,t(0,r)}function a(i){f=i,t(4,f)}const _=()=>u(l);return s.$$set=i=>{"id"in i&&t(1,l=i.id),"url"in i&&t(6,n=i.url),"username"in i&&t(0,r=i.username),"password"in i&&t(2,o=i.password),"onDelete"in i&&t(3,u=i.onDelete)},[r,l,o,u,f,c,n,h,a,_]}class os extends le{constructor(e){super();ne(this,e,rs,ns,re,{id:1,url:6,username:0,password:2,onDelete:3})}}const Ae={length:16,includeSymbols:!0,excludeSimilarCharacters:!1,excludeAmbiguousCharacters:!1};function as(s={}){const e=Math.max(6,s.length||Ae.length),t=s.includeSymbols!=null?s.includeSymbols:Ae.includeSymbols,l=s.excludeSimilarCharacters!=null?s.excludeSimilarCharacters:Ae.excludeSimilarCharacters,n=s.excludeAmbiguousCharacters!=null?s.excludeAmbiguousCharacters:Ae.excludeAmbiguousCharacters,r=Vt.fromSeed(Math.random()*Date.now());return Ut(0,e).iter().map(()=>Ze(r,t,l,n)).join("")}const us="il1Lo0O".split(""),is="{}[]()/\\'\"`~,;:.<>".split("");function Ze(s,e,t,l){let n=e&&s.nextFloat()>.75?cs(s):ps(s);return t&&us.includes(n)&&(n=Ze(s,e,t,l)),l&&is.includes(n)&&(n=Ze(s,e,t,l)),n}const fs="`~!@#$%^&*()-_+={}[]|:;<>,.\\/?".split("").sort(()=>Math.random()>.5?-1:1);function cs(s){return s.fromArray(fs).unwrap()}const ds="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("").sort(()=>Math.random()>.5?-1:1);function ps(s){return s.fromArray(ds).unwrap()}function ht(s,e,t){const l=s.slice();return l[1]=e[t],l}function mt(s){let e,t=s[1]+"",l;return{c(){e=v("span"),l=G(t),this.h()},l(n){e=E(n,"SPAN",{class:!0});var r=k(e);l=z(r,t),r.forEach(p),this.h()},h(){d(e,"class","text-red-500")},m(n,r){O(n,e,r),m(e,l)},p(n,r){r&1&&t!==(t=n[1]+"")&&ge(l,t)},d(n){n&&p(e)}}}function hs(s){let e,t=s[0],l=[];for(let n=0;n<t.length;n+=1)l[n]=mt(ht(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=Ie()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=Ie()},m(n,r){for(let o=0;o<l.length;o+=1)l[o].m(n,r);O(n,e,r)},p(n,[r]){if(r&1){t=n[0];let o;for(o=0;o<t.length;o+=1){const u=ht(n,t,o);l[o]?l[o].p(u,r):(l[o]=mt(u),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},i:ie,o:ie,d(n){qe(l,n),n&&p(e)}}}function ms(s,e,t){let{messages:l=[]}=e;return s.$$set=n=>{"messages"in n&&t(0,l=n.messages)},[l]}class xe extends le{constructor(e){super();ne(this,e,ms,hs,re,{messages:0})}}function _s(s){let e,t,l,n,r,o,u,f,c,h,a,_,i,I,P,D,y,b,V,T,$,A,K,g,S,j,Y,L,oe,ce,ye,De,ee,Se,de,Pe,Oe,te,Ne,ae,Q,Ue,ue,Ve,we,se,Le,he,Te,et;n=new xe({props:{messages:s[1].getErrors("url")}}),a=new xe({props:{messages:s[1].getErrors("username")}}),V=new xe({props:{messages:s[1].getErrors("password")}});function yt(w){s[18](w)}let tt={show:!0,onInput:s[17]};return s[3]!==void 0&&(tt.password=s[3]),$=new pt({props:tt}),Ee.push(()=>$e($,"password",yt)),{c(){e=v("label"),t=G("Application/URL"),l=N(),q(n.$$.fragment),r=N(),o=v("input"),u=N(),f=v("label"),c=G("Username"),h=N(),q(a.$$.fragment),_=N(),i=v("input"),I=N(),P=v("div"),D=v("label"),y=G("Password"),b=N(),q(V.$$.fragment),T=N(),q($.$$.fragment),K=N(),g=v("div"),S=v("label"),j=G("Symbols?"),Y=N(),L=v("input"),oe=N(),ce=v("label"),ye=G("Exclude Similar?"),De=N(),ee=v("input"),Se=N(),de=v("label"),Pe=G("Exclude Ambiguous?"),Oe=N(),te=v("input"),Ne=N(),ae=v("div"),Q=v("input"),Ue=N(),ue=v("button"),Ve=G("Generate"),we=N(),se=v("button"),Le=G("Add"),this.h()},l(w){e=E(w,"LABEL",{for:!0});var B=k(e);t=z(B,"Application/URL"),B.forEach(p),l=U(w),W(n.$$.fragment,w),r=U(w),o=E(w,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),u=U(w),f=E(w,"LABEL",{for:!0});var me=k(f);c=z(me,"Username"),me.forEach(p),h=U(w),W(a.$$.fragment,w),_=U(w),i=E(w,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),I=U(w),P=E(w,"DIV",{});var x=k(P);D=E(x,"LABEL",{for:!0});var _e=k(D);y=z(_e,"Password"),_e.forEach(p),b=U(x),W(V.$$.fragment,x),T=U(x),W($.$$.fragment,x),K=U(x),g=E(x,"DIV",{});var H=k(g);S=E(H,"LABEL",{for:!0});var st=k(S);j=z(st,"Symbols?"),st.forEach(p),Y=U(H),L=E(H,"INPUT",{id:!0,type:!0,class:!0,placeholder:!0}),oe=U(H),ce=E(H,"LABEL",{for:!0});var lt=k(ce);ye=z(lt,"Exclude Similar?"),lt.forEach(p),De=U(H),ee=E(H,"INPUT",{id:!0,type:!0,class:!0,placeholder:!0}),Se=U(H),de=E(H,"LABEL",{for:!0});var nt=k(de);Pe=z(nt,"Exclude Ambiguous?"),nt.forEach(p),Oe=U(H),te=E(H,"INPUT",{id:!0,type:!0,class:!0,placeholder:!0}),Ne=U(H),ae=E(H,"DIV",{class:!0});var be=k(ae);Q=E(be,"INPUT",{id:!0,class:!0,type:!0,minlength:!0,placeholder:!0}),Ue=U(be),ue=E(be,"BUTTON",{class:!0});var rt=k(ue);Ve=z(rt,"Generate"),rt.forEach(p),be.forEach(p),H.forEach(p),x.forEach(p),we=U(w),se=E(w,"BUTTON",{class:!0});var ot=k(se);Le=z(ot,"Add"),ot.forEach(p),this.h()},h(){d(e,"for","application"),d(o,"id","application"),d(o,"class","input"),d(o,"type","text"),d(o,"placeholder","Application/URL"),d(f,"for","username"),d(i,"id","username"),d(i,"class","input"),d(i,"type","text"),d(i,"placeholder","Username"),d(D,"for","password"),d(S,"for","includeSymbols"),d(L,"id","includeSymbols"),d(L,"type","checkbox"),d(L,"class","checkbox"),d(L,"placeholder","Length"),d(ce,"for","excludeSimilarCharacters"),d(ee,"id","excludeSimilarCharacters"),d(ee,"type","checkbox"),d(ee,"class","checkbox"),d(ee,"placeholder","Length"),d(de,"for","excludeAmbiguousCharacters"),d(te,"id","excludeAmbiguousCharacters"),d(te,"type","checkbox"),d(te,"class","checkbox"),d(te,"placeholder","Length"),d(Q,"id","length"),d(Q,"class","input"),d(Q,"type","number"),d(Q,"minlength","6"),d(Q,"placeholder","Length"),d(ue,"class","btn primary"),d(ae,"class","flex"),d(se,"class","btn primary mt-6"),se.disabled=s[8]},m(w,B){O(w,e,B),m(e,t),O(w,l,B),J(n,w,B),O(w,r,B),O(w,o,B),X(o,s[0]),O(w,u,B),O(w,f,B),m(f,c),O(w,h,B),J(a,w,B),O(w,_,B),O(w,i,B),X(i,s[2]),O(w,I,B),O(w,P,B),m(P,D),m(D,y),m(P,b),J(V,P,null),m(P,T),J($,P,null),m(P,K),m(P,g),m(g,S),m(S,j),m(g,Y),m(g,L),L.checked=s[5],m(g,oe),m(g,ce),m(ce,ye),m(g,De),m(g,ee),ee.checked=s[6],m(g,Se),m(g,de),m(de,Pe),m(g,Oe),m(g,te),te.checked=s[7],m(g,Ne),m(g,ae),m(ae,Q),X(Q,s[4]),m(ae,Ue),m(ae,ue),m(ue,Ve),O(w,we,B),O(w,se,B),m(se,Le),he=!0,Te||(et=[M(o,"input",s[13]),M(o,"input",s[14]),M(i,"input",s[15]),M(i,"input",s[16]),M(L,"change",s[19]),M(ee,"change",s[20]),M(te,"change",s[21]),M(Q,"input",s[22]),M(ue,"click",s[10]),M(se,"click",s[9])],Te=!0)},p(w,[B]){const me={};B&2&&(me.messages=w[1].getErrors("url")),n.$set(me),B&1&&o.value!==w[0]&&X(o,w[0]);const x={};B&2&&(x.messages=w[1].getErrors("username")),a.$set(x),B&4&&i.value!==w[2]&&X(i,w[2]);const _e={};B&2&&(_e.messages=w[1].getErrors("password")),V.$set(_e);const H={};!A&&B&8&&(A=!0,H.password=w[3],ke(()=>A=!1)),$.$set(H),B&32&&(L.checked=w[5]),B&64&&(ee.checked=w[6]),B&128&&(te.checked=w[7]),B&16&&it(Q.value)!==w[4]&&X(Q,w[4]),(!he||B&256)&&(se.disabled=w[8])},i(w){he||(C(n.$$.fragment,w),C(a.$$.fragment,w),C(V.$$.fragment,w),C($.$$.fragment,w),he=!0)},o(w){R(n.$$.fragment,w),R(a.$$.fragment,w),R(V.$$.fragment,w),R($.$$.fragment,w),he=!1},d(w){w&&p(e),w&&p(l),F(n,w),w&&p(r),w&&p(o),w&&p(u),w&&p(f),w&&p(h),F(a,w),w&&p(_),w&&p(i),w&&p(I),w&&p(P),F(V),F($),w&&p(we),w&&p(se),Te=!1,ve(et)}}}const _t=Lt((s={},e)=>{Tt(e),We("url","Application is required",()=>{Je(s.url).isNotBlank()}),We("username","Username is required",()=>{Je(s.username).isNotBlank()}),We("password","Password is required",()=>{Je(s.password).isNotBlank()})});function gs(s,e,t){let l,{url:n=""}=e,{onAdd:r=()=>{}}=e,o,u;function f(){Wt(n,o,u),r()}let c=16,h=!0,a=!1,_=!1;function i(){t(3,u=as({length:c,includeSymbols:h,excludeSimilarCharacters:a,excludeAmbiguousCharacters:_}))}let I=_t.get();const P=j=>{t(1,I=_t({url:n,username:o,password:u},j))};function D(){n=this.value,t(0,n)}const y=()=>P("url");function b(){o=this.value,t(2,o)}const V=()=>P("username"),T=()=>P("password");function $(j){u=j,t(3,u)}function A(){h=this.checked,t(5,h)}function K(){a=this.checked,t(6,a)}function g(){_=this.checked,t(7,_)}function S(){c=it(this.value),t(4,c)}return s.$$set=j=>{"url"in j&&t(0,n=j.url),"onAdd"in j&&t(12,r=j.onAdd)},s.$$.update=()=>{s.$$.dirty&2&&t(8,l=!I.isValid())},[n,I,o,u,c,h,a,_,l,f,i,P,r,D,y,b,V,T,$,A,K,g,S]}class ws extends le{constructor(e){super();ne(this,e,gs,_s,re,{url:0,onAdd:12})}}function gt(s,e,t){const l=s.slice();return l[15]=e[t][0],l[16]=e[t][1],l}function wt(s,e,t){const l=s.slice();return l[19]=e[t],l}function bs(s){let e,t;return e=new ws({props:{onAdd:s[9]}}),{c(){q(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},p(l,n){const r={};n&2&&(r.onAdd=l[9]),e.$set(r)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function vs(s){let e,t;return{c(){e=v("h3"),t=G("Add Password"),this.h()},l(l){e=E(l,"H3",{slot:!0});var n=k(e);t=z(n,"Add Password"),n.forEach(p),this.h()},h(){d(e,"slot","title")},m(l,n){O(l,e,n),m(e,t)},d(l){l&&p(e)}}}function Es(s){var I,P;let e,t,l=((I=s[5])==null?void 0:I.url)+"",n,r,o=((P=s[5])==null?void 0:P.username)+"",u,f,c,h,a,_,i;return{c(){e=v("p"),t=G("Delete "),n=G(l),r=N(),u=G(o),f=G(" Password?"),c=N(),h=v("button"),a=G("Delete"),this.h()},l(D){e=E(D,"P",{class:!0});var y=k(e);t=z(y,"Delete "),n=z(y,l),r=U(y),u=z(y,o),f=z(y," Password?"),y.forEach(p),c=U(D),h=E(D,"BUTTON",{class:!0});var b=k(h);a=z(b,"Delete"),b.forEach(p),this.h()},h(){d(e,"class","mb-2"),d(h,"class","btn danger")},m(D,y){O(D,e,y),m(e,t),m(e,n),m(e,r),m(e,u),m(e,f),O(D,c,y),O(D,h,y),m(h,a),_||(i=M(h,"click",function(){Ge(s[3])&&s[3].apply(this,arguments)}),_=!0)},p(D,y){var b,V;s=D,y&32&&l!==(l=((b=s[5])==null?void 0:b.url)+"")&&ge(n,l),y&32&&o!==(o=((V=s[5])==null?void 0:V.username)+"")&&ge(u,o)},d(D){D&&p(e),D&&p(c),D&&p(h),_=!1,i()}}}function $s(s){let e,t;return{c(){e=v("h3"),t=G("Deleting Password"),this.h()},l(l){e=E(l,"H3",{slot:!0});var n=k(e);t=z(n,"Deleting Password"),n.forEach(p),this.h()},h(){d(e,"slot","title")},m(l,n){O(l,e,n),m(e,t)},d(l){l&&p(e)}}}function bt(s){let e,t;return e=new os({props:{id:s[19].id,url:s[15],username:s[19].username,password:s[19].password,onDelete:s[4]}}),{c(){q(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},p(l,n){const r={};n&65&&(r.id=l[19].id),n&64&&(r.url=l[15]),n&65&&(r.username=l[19].username),n&65&&(r.password=l[19].password),n&16&&(r.onDelete=l[4]),e.$set(r)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function vt(s){let e,t,l=s[15]+"",n,r,o,u,f=s[16].filter(s[14]),c=[];for(let a=0;a<f.length;a+=1)c[a]=bt(wt(s,f,a));const h=a=>R(c[a],1,1,()=>{c[a]=null});return{c(){e=v("h2"),t=G("Application: "),n=G(l),r=N();for(let a=0;a<c.length;a+=1)c[a].c();o=Ie(),this.h()},l(a){e=E(a,"H2",{class:!0});var _=k(e);t=z(_,"Application: "),n=z(_,l),_.forEach(p),r=U(a);for(let i=0;i<c.length;i+=1)c[i].l(a);o=Ie(),this.h()},h(){d(e,"class","mt-2")},m(a,_){O(a,e,_),m(e,t),m(e,n),O(a,r,_);for(let i=0;i<c.length;i+=1)c[i].m(a,_);O(a,o,_),u=!0},p(a,_){if((!u||_&64)&&l!==(l=a[15]+"")&&ge(n,l),_&81){f=a[16].filter(a[14]);let i;for(i=0;i<f.length;i+=1){const I=wt(a,f,i);c[i]?(c[i].p(I,_),C(c[i],1)):(c[i]=bt(I),c[i].c(),C(c[i],1),c[i].m(o.parentNode,o))}for(ze(),i=f.length;i<c.length;i+=1)h(i);He()}},i(a){if(!u){for(let _=0;_<f.length;_+=1)C(c[_]);u=!0}},o(a){c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)R(c[_]);u=!1},d(a){a&&p(e),a&&p(r),qe(c,a),a&&p(o)}}}function ks(s){let e,t,l,n,r,o,u,f,c,h,a,_,i,I,P,D;function y(g){s[10](g)}let b={$$slots:{title:[vs],default:[bs]},$$scope:{ctx:s}};s[1]!==void 0&&(b.open=s[1]),e=new dt({props:b}),Ee.push(()=>$e(e,"open",y));function V(g){s[11](g)}let T={$$slots:{title:[$s],default:[Es]},$$scope:{ctx:s}};s[2]!==void 0&&(T.open=s[2]),n=new dt({props:T}),Ee.push(()=>$e(n,"open",V));let $=Object.entries(s[6]),A=[];for(let g=0;g<$.length;g+=1)A[g]=vt(gt(s,$,g));const K=g=>R(A[g],1,1,()=>{A[g]=null});return{c(){q(e.$$.fragment),l=N(),q(n.$$.fragment),o=N(),u=v("div"),f=v("button"),c=G("Add Password"),h=N(),a=v("input"),_=N(),i=v("div");for(let g=0;g<A.length;g+=1)A[g].c();this.h()},l(g){W(e.$$.fragment,g),l=U(g),W(n.$$.fragment,g),o=U(g),u=E(g,"DIV",{class:!0});var S=k(u);f=E(S,"BUTTON",{class:!0});var j=k(f);c=z(j,"Add Password"),j.forEach(p),h=U(S),a=E(S,"INPUT",{class:!0,type:!0,placeholder:!0}),_=U(S),i=E(S,"DIV",{});var Y=k(i);for(let L=0;L<A.length;L+=1)A[L].l(Y);Y.forEach(p),S.forEach(p),this.h()},h(){d(f,"class","btn primary"),d(a,"class","input my-2"),d(a,"type","text"),d(a,"placeholder","Search..."),d(u,"class","container mx-auto p-4 mt-4 mb-8 bg-white")},m(g,S){J(e,g,S),O(g,l,S),J(n,g,S),O(g,o,S),O(g,u,S),m(u,f),m(f,c),m(u,h),m(u,a),X(a,s[0]),m(u,_),m(u,i);for(let j=0;j<A.length;j+=1)A[j].m(i,null);I=!0,P||(D=[M(f,"click",s[12]),M(a,"input",s[13])],P=!0)},p(g,[S]){const j={};S&4194306&&(j.$$scope={dirty:S,ctx:g}),!t&&S&2&&(t=!0,j.open=g[1],ke(()=>t=!1)),e.$set(j);const Y={};if(S&4194344&&(Y.$$scope={dirty:S,ctx:g}),!r&&S&4&&(r=!0,Y.open=g[2],ke(()=>r=!1)),n.$set(Y),S&1&&a.value!==g[0]&&X(a,g[0]),S&81){$=Object.entries(g[6]);let L;for(L=0;L<$.length;L+=1){const oe=gt(g,$,L);A[L]?(A[L].p(oe,S),C(A[L],1)):(A[L]=vt(oe),A[L].c(),C(A[L],1),A[L].m(i,null))}for(ze(),L=$.length;L<A.length;L+=1)K(L);He()}},i(g){if(!I){C(e.$$.fragment,g),C(n.$$.fragment,g);for(let S=0;S<$.length;S+=1)C(A[S]);I=!0}},o(g){R(e.$$.fragment,g),R(n.$$.fragment,g),A=A.filter(Boolean);for(let S=0;S<A.length;S+=1)R(A[S]);I=!1},d(g){F(e,g),g&&p(l),F(n,g),g&&p(o),g&&p(u),qe(A,g),P=!1,ve(D)}}}function Is(s,e,t){let l,n,r,o,u;Fe(s,Ht,b=>t(8,o=b)),Fe(s,qt,b=>t(6,u=b));let f="",c=!1,h,a=!1;const _=()=>t(1,c=!1);function i(b){c=b,t(1,c)}function I(b){a=b,t(2,a),t(7,h)}const P=()=>t(1,c=!c);function D(){f=this.value,t(0,f)}const y=b=>f?Bt(f,b.username):!0;return s.$$.update=()=>{s.$$.dirty&128&&t(3,r=()=>{Ft(h),t(7,h=void 0),t(2,a=!1)}),s.$$.dirty&384&&t(5,l=o[h])},t(4,n=b=>{t(7,h=b),t(2,a=!0)}),[f,c,a,r,n,l,u,h,o,_,i,I,P,D,y]}class As extends le{constructor(e){super();ne(this,e,Is,ks,re,{})}}function ys(s){let e;return{c(){e=v("div"),this.h()},l(t){e=E(t,"DIV",{id:!0}),k(e).forEach(p),this.h()},h(){d(e,"id","remote-storage-widget")},m(t,l){O(t,e,l)},p:ie,i:ie,o:ie,d(t){t&&p(e)}}}function Ds(s,e,t){let{element:l=void 0}=e,{widget:n=void 0}=e;return Ct(()=>{Mt(()=>import("../chunks/widget-3e963cc8.js").then(function(r){return r.w}),[]).then(({default:r})=>{const o=new r(pe);o.attach("remote-storage-widget"),function u(){o.rsWidget?(t(1,n=o),t(0,l=o.rsWidget)):setTimeout(u,1e3)}()})}),s.$$set=r=>{"element"in r&&t(0,l=r.element),"widget"in r&&t(1,n=r.widget)},[l,n]}class Ss extends le{constructor(e){super();ne(this,e,Ds,ys,re,{element:0,widget:1})}}var Et;(function(s){s.Success="success",s.Error="error",s.Info="info",s.Warning="warning"})(Et||(Et={}));const $t=at([]),Ps=$t;function Os(s){$t.update(e=>{const t=e.findIndex(l=>l.id===s);return t===-1||e.splice(t,1),e})}function kt(s,e,t){const l=s.slice();return l[2]=e[t],l}function It(s){let e,t,l,n;return{c(){e=v("div"),t=Xe("svg"),l=Xe("path"),n=Xe("path"),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=k(e);t=Ke(o,"svg",{width:!0,height:!0,viewBox:!0,class:!0,fill:!0,xmlns:!0});var u=k(t);l=Ke(u,"path",{"fill-rule":!0,d:!0}),k(l).forEach(p),n=Ke(u,"path",{"fill-rule":!0,d:!0}),k(n).forEach(p),u.forEach(p),o.forEach(p),this.h()},h(){d(l,"fill-rule","evenodd"),d(l,"d","M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"),d(n,"fill-rule","evenodd"),d(n,"d","M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"),d(t,"width","1.8em"),d(t,"height","1.8em"),d(t,"viewBox","0 0 16 16"),d(t,"class","bi bi-x"),d(t,"fill","currentColor"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","text-red-500 rounded-full bg-white mr-3")},m(r,o){O(r,e,o),m(e,t),m(t,l),m(t,n)},d(r){r&&p(e)}}}function At(s,e){let t,l,n,r=e[2].message+"",o,u,f,c,h=e[2].type==="error"&&It();function a(){return e[1](e[2])}return{key:s,first:null,c(){t=v("div"),h&&h.c(),l=N(),n=v("div"),o=G(r),u=N(),this.h()},l(_){t=E(_,"DIV",{class:!0});var i=k(t);h&&h.l(i),l=U(i),n=E(i,"DIV",{class:!0});var I=k(n);o=z(I,r),I.forEach(p),u=U(i),i.forEach(p),this.h()},h(){d(n,"class","text-white max-w-xs "),d(t,"class","flex items-center py-2 px-3 shadow-md mb-2 cursor-pointer"),Z(t,"bg-green-500",e[2].type==="success"),Z(t,"bg-red-500",e[2].type==="error"),this.first=t},m(_,i){O(_,t,i),h&&h.m(t,null),m(t,l),m(t,n),m(n,o),m(t,u),f||(c=M(t,"click",a),f=!0)},p(_,i){e=_,e[2].type==="error"?h||(h=It(),h.c(),h.m(t,l)):h&&(h.d(1),h=null),i&1&&r!==(r=e[2].message+"")&&ge(o,r),i&1&&Z(t,"bg-green-500",e[2].type==="success"),i&1&&Z(t,"bg-red-500",e[2].type==="error")},d(_){_&&p(t),h&&h.d(),f=!1,c()}}}function Ns(s){let e,t=[],l=new Map,n=s[0];const r=o=>o[2].id.toString();for(let o=0;o<n.length;o+=1){let u=kt(s,n,o),f=r(u);l.set(f,t[o]=At(f,u))}return{c(){e=v("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var u=k(e);for(let f=0;f<t.length;f+=1)t[f].l(u);u.forEach(p),this.h()},h(){d(e,"class","p-2 absolute bottom-0 w-full")},m(o,u){O(o,e,u);for(let f=0;f<t.length;f+=1)t[f].m(e,null)},p(o,[u]){u&1&&(n=o[0],t=jt(t,u,r,1,o,n,l,e,Rt,At,null,kt))},i:ie,o:ie,d(o){o&&p(e);for(let u=0;u<t.length;u+=1)t[u].d()}}}function Us(s,e,t){let l;return Fe(s,Ps,r=>t(0,l=r)),[l,r=>Os(r.id)]}class Vs extends le{constructor(e){super();ne(this,e,Us,Ns,re,{})}}function Ls(s){let e,t,l,n,r,o,u,f;const c=s[1].default,h=Ce(c,s,s[0],null);return r=new Ss({}),u=new Vs({}),{c(){e=v("div"),t=v("div"),h&&h.c(),l=N(),n=v("div"),q(r.$$.fragment),o=N(),q(u.$$.fragment),this.h()},l(a){e=E(a,"DIV",{class:!0});var _=k(e);t=E(_,"DIV",{class:!0});var i=k(t);h&&h.l(i),i.forEach(p),l=U(_),n=E(_,"DIV",{class:!0});var I=k(n);W(r.$$.fragment,I),I.forEach(p),o=U(_),W(u.$$.fragment,_),_.forEach(p),this.h()},h(){d(t,"class","flex flex-col flex-grow"),d(n,"class","absolute left-0 bottom-0 z-20"),d(e,"class","h-screen w-screen bg-gray-200 flex")},m(a,_){O(a,e,_),m(e,t),h&&h.m(t,null),m(e,l),m(e,n),J(r,n,null),m(e,o),J(u,e,null),f=!0},p(a,[_]){h&&h.p&&(!f||_&1)&&je(h,c,a,a[0],f?Me(c,a[0],_,null):Re(a[0]),null)},i(a){f||(C(h,a),C(r.$$.fragment,a),C(u.$$.fragment,a),f=!0)},o(a){R(h,a),R(r.$$.fragment,a),R(u.$$.fragment,a),f=!1},d(a){a&&p(e),h&&h.d(a),F(r),F(u)}}}function Ts(s,e,t){let{$$slots:l={},$$scope:n}=e;return s.$$set=r=>{"$$scope"in r&&t(0,n=r.$$scope)},[n,l]}class Bs extends le{constructor(e){super();ne(this,e,Ts,Ls,re,{})}}function Cs(s){let e,t;return e=new As({}),{c(){q(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function js(s){let e,t;return e=new Bs({props:{$$slots:{default:[Cs]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},p(l,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}class Gs extends le{constructor(e){super();ne(this,e,null,js,re,{})}}export{Gs as default};