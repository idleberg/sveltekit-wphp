import{K as Fe,S as _e,i as he,s as be,e as p,c,a as w,d as l,b as e,g as O,l as oe,k as V,t as C,L as Ee,m as S,h as B,M as ce,J as o,N as se,O as ae,P as Oe,n as fe,Q as Re,R as Ae,w as ve,T as De,j as We,p as le,q as Me,r as x,U as Le,V as He,o as Ue,x as je,y as ze,z as Ke,C as $e}from"../chunks/index-aa453c65.js";import{b as Ge}from"../chunks/paths-1c47712a.js";function Ce(i){console.log(i)}function Be(i=10,t=2e3){return Math.floor(Math.random()*(t-i+1)+i)}const Xe=()=>{const i=Fe("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session,updated:i.updated}},qe={subscribe(i){return Xe().page.subscribe(i)}};function Ye(i){let t;return{c(){t=p("meta"),this.h()},l(r){t=c(r,"META",{name:!0,content:!0}),this.h()},h(){e(t,"name","robots"),e(t,"content","max-image-preview:large, noindex, noarchive")},m(r,s){O(r,t,s)},d(r){r&&l(t)}}}function Ne(i){let t;return{c(){t=p("div"),this.h()},l(r){t=c(r,"DIV",{id:!0});var s=w(t);s.forEach(l),this.h()},h(){e(t,"id","login_error")},m(r,s){O(r,t,s),t.innerHTML=i[1]},p(r,s){s&2&&(t.innerHTML=r[1])},d(r){r&&l(t)}}}function Je(i){let t,r,s,n,m,u,a,d,_,k,I,g,h,y,E,P,R,D,A,z,b,L,K,q,j,N,f,T,ee,$,F,te,W,Y,J,Q,Z,de,me,ge;document.title="Log In \u2039 Demo Page \u2014 WordPress";let H={VITE_SITE_NAME:"Demo Page",VITE_WORDPRESS_VERSION:"6.0.0",VITE_CONNECTION_TIMEOUT:"2000",VITE_SVELTEKIT_APP_VERSION:"1661462111642",VITE_SVELTEKIT_APP_VERSION_FILE:"_app/version.json",VITE_SVELTEKIT_APP_VERSION_POLL_INTERVAL:"0",BASE_URL:"/sveltekit-wphp/_app/",MODE:"production",DEV:!1,PROD:!0}.VITE_NO_INDEX&&Ye(),M=i[0]&&Ne(i);return{c(){H&&H.c(),t=oe(),r=V(),M&&M.c(),s=V(),n=p("form"),m=p("p"),u=p("label"),a=C("Username or Email Address"),d=V(),_=p("input"),k=V(),I=p("div"),g=p("label"),h=C("Password"),y=V(),E=p("div"),P=p("input"),R=V(),D=p("button"),A=p("span"),z=V(),b=p("p"),L=p("input"),K=V(),q=p("label"),j=C("Remember Me"),N=V(),f=p("p"),T=p("input"),ee=V(),$=p("input"),te=V(),W=p("input"),J=V(),Q=p("p"),Z=p("a"),de=C("Lost your password?"),this.h()},l(v){const U=Ee('[data-svelte="svelte-140xt9r"]',document.head);H&&H.l(U),t=oe(),U.forEach(l),r=S(v),M&&M.l(v),s=S(v),n=c(v,"FORM",{name:!0,id:!0,action:!0,method:!0});var G=w(n);m=c(G,"P",{});var ie=w(m);u=c(ie,"LABEL",{for:!0});var we=w(u);a=B(we,"Username or Email Address"),we.forEach(l),d=S(ie),_=c(ie,"INPUT",{type:!0,name:!0,id:!0,class:!0,size:!0,autocapitalize:!0}),ie.forEach(l),k=S(G),I=c(G,"DIV",{class:!0});var ne=w(I);g=c(ne,"LABEL",{for:!0});var Ie=w(g);h=B(Ie,"Password"),Ie.forEach(l),y=S(ne),E=c(ne,"DIV",{class:!0});var ue=w(E);P=c(ue,"INPUT",{type:!0,name:!0,id:!0,class:!0,size:!0}),R=S(ue),D=c(ue,"BUTTON",{type:!0,class:!0,"data-toggle":!0,"aria-label":!0});var ye=w(D);A=c(ye,"SPAN",{class:!0,"aria-hidden":!0}),w(A).forEach(l),ye.forEach(l),ue.forEach(l),ne.forEach(l),z=S(G),b=c(G,"P",{class:!0});var pe=w(b);L=c(pe,"INPUT",{name:!0,type:!0,id:!0}),K=S(pe),q=c(pe,"LABEL",{for:!0});var Pe=w(q);j=B(Pe,"Remember Me"),Pe.forEach(l),pe.forEach(l),N=S(G),f=c(G,"P",{class:!0});var re=w(f);T=c(re,"INPUT",{type:!0,name:!0,id:!0,class:!0}),ee=S(re),$=c(re,"INPUT",{type:!0,name:!0}),te=S(re),W=c(re,"INPUT",{type:!0,name:!0}),re.forEach(l),G.forEach(l),J=S(v),Q=c(v,"P",{id:!0});var Te=w(Q);Z=c(Te,"A",{"sveltekit:reload":!0,href:!0});var ke=w(Z);de=B(ke,"Lost your password?"),ke.forEach(l),Te.forEach(l),this.h()},h(){e(u,"for","user_login"),e(_,"type","text"),e(_,"name","log"),e(_,"id","user_login"),e(_,"class","input"),e(_,"size","20"),e(_,"autocapitalize","off"),e(g,"for","user_pass"),e(P,"type","password"),e(P,"name","pwd"),e(P,"id","user_pass"),e(P,"class","input password-input"),e(P,"size","20"),e(A,"class","dashicons dashicons-visibility"),e(A,"aria-hidden","true"),e(D,"type","button"),e(D,"class","button button-secondary wp-hide-pw hide-if-no-js"),e(D,"data-toggle","0"),e(D,"aria-label","Show password"),e(E,"class","wp-pwd"),e(I,"class","user-pass-wrap"),e(L,"name","rememberme"),e(L,"type","checkbox"),e(L,"id","rememberme"),L.value="forever",e(q,"for","rememberme"),e(b,"class","forgetmenot"),e(T,"type","submit"),e(T,"name","wp-submit"),e(T,"id","wp-submit"),e(T,"class","button button-primary button-large"),T.value="Log In",e($,"type","hidden"),e($,"name","redirect_to"),$.value=F=i[5].url.origin+"/wp-admin/",e(W,"type","hidden"),e(W,"name","testcookie"),W.value="1",e(f,"class","submit"),e(n,"name","loginform"),e(n,"id","loginform"),e(n,"action",Y=i[5].url.origin+"/wp-login.php"),e(n,"method","post"),ce(n,"shake",i[0]),e(Z,"sveltekit:reload",""),e(Z,"href","wp-login.php?action=lostpassword"),e(Q,"id","nav")},m(v,U){H&&H.m(document.head,null),o(document.head,t),O(v,r,U),M&&M.m(v,U),O(v,s,U),O(v,n,U),o(n,m),o(m,u),o(u,a),o(m,d),o(m,_),se(_,i[3]),i[8](_),o(n,k),o(n,I),o(I,g),o(g,h),o(I,y),o(I,E),o(E,P),se(P,i[4]),o(E,R),o(E,D),o(D,A),o(n,z),o(n,b),o(b,L),o(b,K),o(b,q),o(q,j),o(n,N),o(n,f),o(f,T),o(f,ee),o(f,$),o(f,te),o(f,W),O(v,J,U),O(v,Q,U),o(Q,Z),o(Z,de),me||(ge=[ae(_,"input",i[7]),ae(P,"input",i[9]),ae(n,"submit",Oe(i[6]))],me=!0)},p(v,[U]){v[0]?M?M.p(v,U):(M=Ne(v),M.c(),M.m(s.parentNode,s)):M&&(M.d(1),M=null),U&8&&_.value!==v[3]&&se(_,v[3]),U&16&&P.value!==v[4]&&se(P,v[4]),U&32&&F!==(F=v[5].url.origin+"/wp-admin/")&&($.value=F),U&32&&Y!==(Y=v[5].url.origin+"/wp-login.php")&&e(n,"action",Y),U&1&&ce(n,"shake",v[0])},i:fe,o:fe,d(v){H&&H.d(v),l(t),v&&l(r),M&&M.d(v),v&&l(s),v&&l(n),i[8](null),v&&l(J),v&&l(Q),me=!1,Re(ge)}}}function Qe(i,t,r){let s;Ae(i,qe,h=>r(5,s=h));let n=!1,m="",u,a="",d="";ve(()=>{u.focus(),u.select()});const _=async()=>{setTimeout(()=>{!a.length||!d.length?(r(1,m=""),a.length||r(1,m+="<strong>Error</strong>: The username field is empty.<br />"),d.length||r(1,m+="<strong>Error</strong>: The password field is empty.<br />")):r(1,m=`<strong>Error</strong>: The username <strong>${a}</strong> is not registered on this site. If you are unsure of your username, try your email address instead.<br />`),r(0,n=!0)},Be()),Ce({form:"#loginform",user:a,password:d})};function k(){a=this.value,r(3,a)}function I(h){De[h?"unshift":"push"](()=>{u=h,r(2,u)})}function g(){d=this.value,r(4,d)}return[n,m,u,a,d,s,_,k,I,g]}class Ze extends _e{constructor(t){super(),he(this,t,Qe,Je,be,{})}}function xe(i){let t;return{c(){t=p("meta"),this.h()},l(r){t=c(r,"META",{name:!0,content:!0}),this.h()},h(){e(t,"name","robots"),e(t,"content","max-image-preview:large, noindex, noarchive")},m(r,s){O(r,t,s)},d(r){r&&l(t)}}}function Ve(i){let t,r,s,n,m,u;return{c(){t=p("div"),r=p("strong"),s=C("Error"),n=C(": "),m=C(i[1]),u=p("br"),this.h()},l(a){t=c(a,"DIV",{id:!0});var d=w(t);r=c(d,"STRONG",{});var _=w(r);s=B(_,"Error"),_.forEach(l),n=B(d,": "),m=B(d,i[1]),u=c(d,"BR",{}),d.forEach(l),this.h()},h(){e(t,"id","login_error")},m(a,d){O(a,t,d),o(t,r),o(r,s),o(t,n),o(t,m),o(t,u)},p(a,d){d&2&&We(m,a[1])},d(a){a&&l(t)}}}function et(i){let t,r,s,n,m,u,a,d,_,k,I,g,h,y,E,P,R,D,A,z,b,L,K,q;document.title="Lost Password \u2039 Demo Page \u2014 WordPress";let j={VITE_SITE_NAME:"Demo Page",VITE_WORDPRESS_VERSION:"6.0.0",VITE_CONNECTION_TIMEOUT:"2000",VITE_SVELTEKIT_APP_VERSION:"1661462111642",VITE_SVELTEKIT_APP_VERSION_FILE:"_app/version.json",VITE_SVELTEKIT_APP_VERSION_POLL_INTERVAL:"0",BASE_URL:"/sveltekit-wphp/_app/",MODE:"production",DEV:!1,PROD:!0}.VITE_NO_INDEX&&xe(),N=i[0]&&Ve(i);return{c(){j&&j.c(),t=oe(),r=V(),s=p("p"),n=C("Please enter your username or email address. You will receive an email message with instructions on how to reset your password."),m=V(),N&&N.c(),u=V(),a=p("form"),d=p("p"),_=p("label"),k=C("Username or Email Address"),I=V(),g=p("input"),h=V(),y=p("input"),E=V(),P=p("p"),R=p("input"),A=V(),z=p("p"),b=p("a"),L=C("Log in"),this.h()},l(f){const T=Ee('[data-svelte="svelte-tebl3z"]',document.head);j&&j.l(T),t=oe(),T.forEach(l),r=S(f),s=c(f,"P",{class:!0});var ee=w(s);n=B(ee,"Please enter your username or email address. You will receive an email message with instructions on how to reset your password."),ee.forEach(l),m=S(f),N&&N.l(f),u=S(f),a=c(f,"FORM",{name:!0,id:!0,action:!0,method:!0});var $=w(a);d=c($,"P",{});var F=w(d);_=c(F,"LABEL",{for:!0});var te=w(_);k=B(te,"Username or Email Address"),te.forEach(l),I=S(F),g=c(F,"INPUT",{type:!0,name:!0,id:!0,class:!0,size:!0,autocapitalize:!0}),F.forEach(l),h=S($),y=c($,"INPUT",{type:!0,name:!0}),E=S($),P=c($,"P",{class:!0});var W=w(P);R=c(W,"INPUT",{type:!0,name:!0,id:!0,class:!0}),W.forEach(l),$.forEach(l),A=S(f),z=c(f,"P",{id:!0});var Y=w(z);b=c(Y,"A",{"sveltekit:reload":!0,href:!0});var J=w(b);L=B(J,"Log in"),J.forEach(l),Y.forEach(l),this.h()},h(){e(s,"class","message"),e(_,"for","user_login"),e(g,"type","text"),e(g,"name","user_login"),e(g,"id","user_login"),e(g,"class","input"),e(g,"size","20"),e(g,"autocapitalize","off"),e(y,"type","hidden"),e(y,"name","redirect_to"),y.value="",e(R,"type","submit"),e(R,"name","wp-submit"),e(R,"id","wp-submit"),e(R,"class","button button-primary button-large"),R.value="Get New Password",e(P,"class","submit"),e(a,"name","lostpasswordform"),e(a,"id","lostpasswordform"),e(a,"action",D=i[4].url.origin+"/wp-login.php?action=lostpassword"),e(a,"method","post"),ce(a,"shake",i[0]),e(b,"sveltekit:reload",""),e(b,"href","wp-login.php"),e(z,"id","nav")},m(f,T){j&&j.m(document.head,null),o(document.head,t),O(f,r,T),O(f,s,T),o(s,n),O(f,m,T),N&&N.m(f,T),O(f,u,T),O(f,a,T),o(a,d),o(d,_),o(_,k),o(d,I),o(d,g),se(g,i[3]),i[7](g),o(a,h),o(a,y),o(a,E),o(a,P),o(P,R),O(f,A,T),O(f,z,T),o(z,b),o(b,L),K||(q=[ae(g,"input",i[6]),ae(a,"submit",Oe(i[5]))],K=!0)},p(f,[T]){f[0]?N?N.p(f,T):(N=Ve(f),N.c(),N.m(u.parentNode,u)):N&&(N.d(1),N=null),T&8&&g.value!==f[3]&&se(g,f[3]),T&16&&D!==(D=f[4].url.origin+"/wp-login.php?action=lostpassword")&&e(a,"action",D),T&1&&ce(a,"shake",f[0])},i:fe,o:fe,d(f){j&&j.d(f),l(t),f&&l(r),f&&l(s),f&&l(m),N&&N.d(f),f&&l(u),f&&l(a),i[7](null),f&&l(A),f&&l(z),K=!1,Re(q)}}}function tt(i,t,r){let s;Ae(i,qe,I=>r(4,s=I));let n=!1,m="",u,a="";ve(()=>{u.focus()});const d=()=>{setTimeout(()=>{a.length?r(1,m="There is no account with that username or email address."):r(1,m="Please enter a username or email address."),r(0,n=!0)},Be()),Ce({form:"#lostpasswordform",user:a})};function _(){a=this.value,r(3,a)}function k(I){De[I?"unshift":"push"](()=>{u=I,r(2,u)})}return[n,m,u,a,s,d,_,k]}class rt extends _e{constructor(t){super(),he(this,t,tt,et,be,{})}}const{document:X}=He;function Se(i){let t,r,s,n,m,u,a,d,_,k,I,g="Demo Page",h,y,E,P,R;const D=[ot,st],A=[];function z(b,L){return b[0]?0:1}return u=z(i),a=A[u]=D[u](i),{c(){t=p("div"),r=p("h1"),s=p("a"),n=C("Powered by WordPress"),m=V(),a.c(),d=V(),_=p("p"),k=p("a"),I=C("\u2190 Go to "),h=C(g),E=V(),P=p("div"),this.h()},l(b){t=c(b,"DIV",{id:!0});var L=w(t);r=c(L,"H1",{});var K=w(r);s=c(K,"A",{href:!0});var q=w(s);n=B(q,"Powered by WordPress"),q.forEach(l),K.forEach(l),m=S(L),a.l(L),d=S(L),_=c(L,"P",{id:!0});var j=w(_);k=c(j,"A",{href:!0});var N=w(k);I=B(N,"\u2190 Go to "),h=B(N,g),N.forEach(l),j.forEach(l),L.forEach(l),E=S(b),P=c(b,"DIV",{class:!0}),w(P).forEach(l),this.h()},h(){e(s,"href","https://wordpress.org/"),e(k,"href",y=Ge||"/"),e(_,"id","backtoblog"),e(t,"id","login"),e(P,"class","clear")},m(b,L){O(b,t,L),o(t,r),o(r,s),o(s,n),o(t,m),A[u].m(t,null),o(t,d),o(t,_),o(_,k),o(k,I),o(k,h),O(b,E,L),O(b,P,L),R=!0},p(b,L){let K=u;u=z(b),u!==K&&(Ue(),le(A[K],1,1,()=>{A[K]=null}),Me(),a=A[u],a||(a=A[u]=D[u](b),a.c()),x(a,1),a.m(t,d))},i(b){R||(x(a),R=!0)},o(b){le(a),R=!1},d(b){b&&l(t),A[u].d(),b&&l(E),b&&l(P)}}}function st(i){let t,r;return t=new rt({}),{c(){je(t.$$.fragment)},l(s){ze(t.$$.fragment,s)},m(s,n){Ke(t,s,n),r=!0},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){le(t.$$.fragment,s),r=!1},d(s){$e(t,s)}}}function ot(i){let t,r;return t=new Ze({}),{c(){je(t.$$.fragment)},l(s){ze(t.$$.fragment,s)},m(s,n){Ke(t,s,n),r=!0},i(s){r||(x(t.$$.fragment,s),r=!0)},o(s){le(t.$$.fragment,s),r=!1},d(s){$e(t,s)}}}function lt(i){let t,r,s,n,m,u,a,d,_,k,I,g,h=!i[1]&&Se(i);return{c(){t=p("link"),r=p("link"),s=p("link"),n=p("link"),m=p("link"),u=p("script"),d=p("script"),k=V(),h&&h.c(),I=oe(),this.h()},l(y){const E=Ee('[data-svelte="svelte-1cnwmh0"]',X.head);t=c(E,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),r=c(E,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),s=c(E,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),n=c(E,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),m=c(E,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),u=c(E,"SCRIPT",{id:!0,src:!0});var P=w(u);P.forEach(l),d=c(E,"SCRIPT",{id:!0,src:!0});var R=w(d);R.forEach(l),E.forEach(l),k=S(y),h&&h.l(y),I=oe(),this.h()},h(){e(t,"rel","stylesheet"),e(t,"id","dashicons-css"),e(t,"href","wp-includes/css/dashicons.min.css?ver=6.0.0"),e(t,"type","text/css"),e(t,"media","all"),e(r,"rel","stylesheet"),e(r,"id","buttons-css"),e(r,"href","wp-includes/css/buttons.min.css?ver=6.0.0"),e(r,"type","text/css"),e(r,"media","all"),e(s,"rel","stylesheet"),e(s,"id","forms-css"),e(s,"href","wp-admin/css/forms.min.css?ver=6.0.0"),e(s,"type","text/css"),e(s,"media","all"),e(n,"rel","stylesheet"),e(n,"id","l10n-css"),e(n,"href","wp-admin/css/l10n.min.css?ver=6.0.0"),e(n,"type","text/css"),e(n,"media","all"),e(m,"rel","stylesheet"),e(m,"id","login-css"),e(m,"href","wp-admin/css/login.min.css?ver=6.0.0"),e(m,"type","text/css"),e(m,"media","all"),e(u,"id","jquery-core-js"),u.defer=!0,Le(u.src,a="wp-includes/js/jquery/jquery.min.js")||e(u,"src",a),e(d,"id","user-profile-js"),d.defer=!0,Le(d.src,_="wp-admin/js/user-profile.min.js?ver=6.0.0")||e(d,"src",_)},m(y,E){o(X.head,t),o(X.head,r),o(X.head,s),o(X.head,n),o(X.head,m),o(X.head,u),o(X.head,d),O(y,k,E),h&&h.m(y,E),O(y,I,E),g=!0},p(y,[E]){y[1]?h&&(Ue(),le(h,1,1,()=>{h=null}),Me()):h?(h.p(y,E),E&2&&x(h,1)):(h=Se(y),h.c(),x(h,1),h.m(I.parentNode,I))},i(y){g||(x(h),g=!0)},o(y){le(h),g=!1},d(y){l(t),l(r),l(s),l(n),l(m),l(u),l(d),y&&l(k),h&&h.d(y),y&&l(I)}}}const ut=!0;function at(i,t,r){let s=!0,n=!0;return ve(async()=>{document.body.className=document.body.className.replace("no-js","js");const m=new URLSearchParams(window.location.search);r(0,s=!(m.has("action")&&m.get("action")==="lostpassword")),r(1,n=!1)}),[s,n]}class pt extends _e{constructor(t){super(),he(this,t,at,lt,be,{})}}export{pt as default,ut as prerender};
