import{S as pe,i as me,s as he,e as f,c as d,a as w,d as o,b as e,g as A,l as re,k as I,t as W,K as _e,m as N,h as B,L as ue,J as l,M as te,N as le,O as Te,n as fe,P as Ae,w as be,Q as Ue,j as Be,p as se,q as Me,r as X,R as De,o as $e,x as ze,y as Ke,z as Re,C as Se}from"../chunks/index-a8e38ae1.js";function He(c){console.log(c)}function We(c=10,t=2e3){return Math.floor(Math.random()*(t-c+1)+c)}function Ve(c){let t;return{c(){t=f("meta"),this.h()},l(r){t=d(r,"META",{name:!0,content:!0}),this.h()},h(){e(t,"name","robots"),e(t,"content","max-image-preview:large, noindex, noarchive")},m(r,s){A(r,t,s)},d(r){r&&o(t)}}}function Le(c){let t;return{c(){t=f("div"),this.h()},l(r){t=d(r,"DIV",{id:!0});var s=w(t);s.forEach(o),this.h()},h(){e(t,"id","login_error")},m(r,s){A(r,t,s),t.innerHTML=c[1]},p(r,s){s&2&&(t.innerHTML=r[1])},d(r){r&&o(t)}}}function je(c){let t,r,s,a,p,u,i,_,n,h,b,g,D,R,U,P,S,T,z,v,k,M,G,$,L,m,E,V,O,j,Z,q,J,F,Q,de,ce,ve;document.title="Log In \u2039 SvelteKit WordPress Honeypot \u2014 WordPress";let C=Ve(),K=c[0]&&Le(c);return{c(){C&&C.c(),t=re(),r=I(),K&&K.c(),s=I(),a=f("form"),p=f("p"),u=f("label"),i=W("Username or Email Address"),_=I(),n=f("input"),h=I(),b=f("div"),g=f("label"),D=W("Password"),R=I(),U=f("div"),P=f("input"),S=I(),T=f("button"),z=f("span"),v=I(),k=f("p"),M=f("input"),G=I(),$=f("label"),L=W("Remember Me"),m=I(),E=f("p"),V=f("input"),O=I(),j=f("input"),Z=I(),q=f("input"),J=I(),F=f("p"),Q=f("a"),de=W("Lost your password?"),this.h()},l(y){const H=_e('[data-svelte="svelte-yb82v4"]',document.head);C&&C.l(H),t=re(),H.forEach(o),r=N(y),K&&K.l(y),s=N(y),a=d(y,"FORM",{name:!0,id:!0,action:!0,method:!0});var Y=w(a);p=d(Y,"P",{});var oe=w(p);u=d(oe,"LABEL",{for:!0});var ye=w(u);i=B(ye,"Username or Email Address"),ye.forEach(o),_=N(oe),n=d(oe,"INPUT",{type:!0,name:!0,id:!0,class:!0,size:!0,autocapitalize:!0}),oe.forEach(o),h=N(Y),b=d(Y,"DIV",{class:!0});var ae=w(b);g=d(ae,"LABEL",{for:!0});var we=w(g);D=B(we,"Password"),we.forEach(o),R=N(ae),U=d(ae,"DIV",{class:!0});var ie=w(U);P=d(ie,"INPUT",{type:!0,name:!0,id:!0,class:!0,size:!0}),S=N(ie),T=d(ie,"BUTTON",{type:!0,class:!0,"data-toggle":!0,"aria-label":!0});var ge=w(T);z=d(ge,"SPAN",{class:!0,"aria-hidden":!0}),w(z).forEach(o),ge.forEach(o),ie.forEach(o),ae.forEach(o),v=N(Y),k=d(Y,"P",{class:!0});var ne=w(k);M=d(ne,"INPUT",{name:!0,type:!0,id:!0}),G=N(ne),$=d(ne,"LABEL",{for:!0});var Ee=w($);L=B(Ee,"Remember Me"),Ee.forEach(o),ne.forEach(o),m=N(Y),E=d(Y,"P",{class:!0});var x=w(E);V=d(x,"INPUT",{type:!0,name:!0,id:!0,class:!0}),O=N(x),j=d(x,"INPUT",{type:!0,name:!0}),Z=N(x),q=d(x,"INPUT",{type:!0,name:!0}),x.forEach(o),Y.forEach(o),J=N(y),F=d(y,"P",{id:!0});var ke=w(F);Q=d(ke,"A",{"sveltekit:reload":!0,href:!0});var Pe=w(Q);de=B(Pe,"Lost your password?"),Pe.forEach(o),ke.forEach(o),this.h()},h(){e(u,"for","user_login"),e(n,"type","text"),e(n,"name","log"),e(n,"id","user_login"),e(n,"class","input"),e(n,"size","20"),e(n,"autocapitalize","off"),e(g,"for","user_pass"),e(P,"type","password"),e(P,"name","pwd"),e(P,"id","user_pass"),e(P,"class","input password-input"),e(P,"size","20"),e(z,"class","dashicons dashicons-visibility"),e(z,"aria-hidden","true"),e(T,"type","button"),e(T,"class","button button-secondary wp-hide-pw hide-if-no-js"),e(T,"data-toggle","0"),e(T,"aria-label","Show password"),e(U,"class","wp-pwd"),e(b,"class","user-pass-wrap"),e(M,"name","rememberme"),e(M,"type","checkbox"),e(M,"id","rememberme"),M.value="forever",e($,"for","rememberme"),e(k,"class","forgetmenot"),e(V,"type","submit"),e(V,"name","wp-submit"),e(V,"id","wp-submit"),e(V,"class","button button-primary button-large"),V.value="Log In",e(j,"type","hidden"),e(j,"name","redirect_to"),j.value="wp-admin/",e(q,"type","hidden"),e(q,"name","testcookie"),q.value="1",e(E,"class","submit"),e(a,"name","loginform"),e(a,"id","loginform"),e(a,"action","wp-login.php"),e(a,"method","post"),ue(a,"shake",c[0]),e(Q,"sveltekit:reload",""),e(Q,"href","wp-login.php?action=lostpassword"),e(F,"id","nav")},m(y,H){C&&C.m(document.head,null),l(document.head,t),A(y,r,H),K&&K.m(y,H),A(y,s,H),A(y,a,H),l(a,p),l(p,u),l(u,i),l(p,_),l(p,n),te(n,c[3]),c[7](n),l(a,h),l(a,b),l(b,g),l(g,D),l(b,R),l(b,U),l(U,P),te(P,c[4]),l(U,S),l(U,T),l(T,z),l(a,v),l(a,k),l(k,M),l(k,G),l(k,$),l($,L),l(a,m),l(a,E),l(E,V),l(E,O),l(E,j),l(E,Z),l(E,q),A(y,J,H),A(y,F,H),l(F,Q),l(Q,de),ce||(ve=[le(n,"input",c[6]),le(P,"input",c[8]),le(a,"submit",Te(c[5]))],ce=!0)},p(y,[H]){y[0]?K?K.p(y,H):(K=Le(y),K.c(),K.m(s.parentNode,s)):K&&(K.d(1),K=null),H&8&&n.value!==y[3]&&te(n,y[3]),H&16&&P.value!==y[4]&&te(P,y[4]),H&1&&ue(a,"shake",y[0])},i:fe,o:fe,d(y){C&&C.d(y),o(t),y&&o(r),K&&K.d(y),y&&o(s),y&&o(a),c[7](null),y&&o(J),y&&o(F),ce=!1,Ae(ve)}}}function Oe(c,t,r){let s=!1,a="",p,u="",i="";be(()=>{p.focus(),p.select()});const _=async()=>{setTimeout(()=>{!u.length||!i.length?(r(1,a=""),u.length||r(1,a+="<strong>Error</strong>: The username field is empty.<br />"),i.length||r(1,a+="<strong>Error</strong>: The password field is empty.<br />")):r(1,a=`<strong>Error</strong>: The username <strong>${u}</strong> is not registered on this site. If you are unsure of your username, try your email address instead.<br />`),r(0,s=!0)},We()),He({form:"#loginform",user:u,password:i})};function n(){u=this.value,r(3,u)}function h(g){Ue[g?"unshift":"push"](()=>{p=g,r(2,p)})}function b(){i=this.value,r(4,i)}return[s,a,p,u,i,_,n,h,b]}class Fe extends pe{constructor(t){super(),me(this,t,Oe,je,he,{})}}function Ge(c){let t;return{c(){t=f("meta"),this.h()},l(r){t=d(r,"META",{name:!0,content:!0}),this.h()},h(){e(t,"name","robots"),e(t,"content","max-image-preview:large, noindex, noarchive")},m(r,s){A(r,t,s)},d(r){r&&o(t)}}}function Ie(c){let t,r,s,a,p,u;return{c(){t=f("div"),r=f("strong"),s=W("Error"),a=W(": "),p=W(c[1]),u=f("br"),this.h()},l(i){t=d(i,"DIV",{id:!0});var _=w(t);r=d(_,"STRONG",{});var n=w(r);s=B(n,"Error"),n.forEach(o),a=B(_,": "),p=B(_,c[1]),u=d(_,"BR",{}),_.forEach(o),this.h()},h(){e(t,"id","login_error")},m(i,_){A(i,t,_),l(t,r),l(r,s),l(t,a),l(t,p),l(t,u)},p(i,_){_&2&&Be(p,i[1])},d(i){i&&o(t)}}}function qe(c){let t,r,s,a,p,u,i,_,n,h,b,g,D,R,U,P,S,T,z,v,k,M,G;document.title="Lost Password \u2039 SvelteKit WordPress Honeypot \u2014 WordPress";let $=Ge(),L=c[0]&&Ie(c);return{c(){$&&$.c(),t=re(),r=I(),s=f("p"),a=W("Please enter your username or email address. You will receive an email message with instructions on how to reset your password."),p=I(),L&&L.c(),u=I(),i=f("form"),_=f("p"),n=f("label"),h=W("Username or Email Address"),b=I(),g=f("input"),D=I(),R=f("input"),U=I(),P=f("p"),S=f("input"),T=I(),z=f("p"),v=f("a"),k=W("Log in"),this.h()},l(m){const E=_e('[data-svelte="svelte-8tfa4m"]',document.head);$&&$.l(E),t=re(),E.forEach(o),r=N(m),s=d(m,"P",{class:!0});var V=w(s);a=B(V,"Please enter your username or email address. You will receive an email message with instructions on how to reset your password."),V.forEach(o),p=N(m),L&&L.l(m),u=N(m),i=d(m,"FORM",{name:!0,id:!0,action:!0,method:!0});var O=w(i);_=d(O,"P",{});var j=w(_);n=d(j,"LABEL",{for:!0});var Z=w(n);h=B(Z,"Username or Email Address"),Z.forEach(o),b=N(j),g=d(j,"INPUT",{type:!0,name:!0,id:!0,class:!0,size:!0,autocapitalize:!0}),j.forEach(o),D=N(O),R=d(O,"INPUT",{type:!0,name:!0}),U=N(O),P=d(O,"P",{class:!0});var q=w(P);S=d(q,"INPUT",{type:!0,name:!0,id:!0,class:!0}),q.forEach(o),O.forEach(o),T=N(m),z=d(m,"P",{id:!0});var J=w(z);v=d(J,"A",{"sveltekit:reload":!0,href:!0});var F=w(v);k=B(F,"Log in"),F.forEach(o),J.forEach(o),this.h()},h(){e(s,"class","message"),e(n,"for","user_login"),e(g,"type","text"),e(g,"name","user_login"),e(g,"id","user_login"),e(g,"class","input"),e(g,"size","20"),e(g,"autocapitalize","off"),e(R,"type","hidden"),e(R,"name","redirect_to"),R.value="",e(S,"type","submit"),e(S,"name","wp-submit"),e(S,"id","wp-submit"),e(S,"class","button button-primary button-large"),S.value="Get New Password",e(P,"class","submit"),e(i,"name","lostpasswordform"),e(i,"id","lostpasswordform"),e(i,"action","wp-login.php?action=lostpassword"),e(i,"method","post"),ue(i,"shake",c[0]),e(v,"sveltekit:reload",""),e(v,"href","wp-login.php"),e(z,"id","nav")},m(m,E){$&&$.m(document.head,null),l(document.head,t),A(m,r,E),A(m,s,E),l(s,a),A(m,p,E),L&&L.m(m,E),A(m,u,E),A(m,i,E),l(i,_),l(_,n),l(n,h),l(_,b),l(_,g),te(g,c[3]),c[6](g),l(i,D),l(i,R),l(i,U),l(i,P),l(P,S),A(m,T,E),A(m,z,E),l(z,v),l(v,k),M||(G=[le(g,"input",c[5]),le(i,"submit",Te(c[4]))],M=!0)},p(m,[E]){m[0]?L?L.p(m,E):(L=Ie(m),L.c(),L.m(u.parentNode,u)):L&&(L.d(1),L=null),E&8&&g.value!==m[3]&&te(g,m[3]),E&1&&ue(i,"shake",m[0])},i:fe,o:fe,d(m){$&&$.d(m),o(t),m&&o(r),m&&o(s),m&&o(p),L&&L.d(m),m&&o(u),m&&o(i),c[6](null),m&&o(T),m&&o(z),M=!1,Ae(G)}}}function Ce(c,t,r){let s=!1,a="",p,u="";be(()=>{p.focus()});const i=()=>{setTimeout(()=>{u.length?r(1,a="There is no account with that username or email address."):r(1,a="Please enter a username or email address."),r(0,s=!0)},We()),He({form:"#lostpasswordform",user:u})};function _(){u=this.value,r(3,u)}function n(h){Ue[h?"unshift":"push"](()=>{p=h,r(2,p)})}return[s,a,p,u,i,_,n]}class Ye extends pe{constructor(t){super(),me(this,t,Ce,qe,he,{})}}const{document:ee}=De;function Ne(c){let t,r,s,a,p,u,i,_,n,h,b,g="SvelteKit WordPress Honeypot",D,R,U,P;const S=[Qe,Je],T=[];function z(v,k){return v[0]?0:1}return u=z(c),i=T[u]=S[u](c),{c(){t=f("div"),r=f("h1"),s=f("a"),a=W("Powered by WordPress"),p=I(),i.c(),_=I(),n=f("p"),h=f("a"),b=W("\u2190 Go to "),D=W(g),R=I(),U=f("div"),this.h()},l(v){t=d(v,"DIV",{id:!0});var k=w(t);r=d(k,"H1",{});var M=w(r);s=d(M,"A",{href:!0});var G=w(s);a=B(G,"Powered by WordPress"),G.forEach(o),M.forEach(o),p=N(k),i.l(k),_=N(k),n=d(k,"P",{id:!0});var $=w(n);h=d($,"A",{href:!0});var L=w(h);b=B(L,"\u2190 Go to "),D=B(L,g),L.forEach(o),$.forEach(o),k.forEach(o),R=N(v),U=d(v,"DIV",{class:!0}),w(U).forEach(o),this.h()},h(){e(s,"href","https://wordpress.org/"),e(h,"href","/"),e(n,"id","backtoblog"),e(t,"id","login"),e(U,"class","clear")},m(v,k){A(v,t,k),l(t,r),l(r,s),l(s,a),l(t,p),T[u].m(t,null),l(t,_),l(t,n),l(n,h),l(h,b),l(h,D),A(v,R,k),A(v,U,k),P=!0},p(v,k){let M=u;u=z(v),u!==M&&($e(),se(T[M],1,1,()=>{T[M]=null}),Me(),i=T[u],i||(i=T[u]=S[u](v),i.c()),X(i,1),i.m(t,_))},i(v){P||(X(i),P=!0)},o(v){se(i),P=!1},d(v){v&&o(t),T[u].d(),v&&o(R),v&&o(U)}}}function Je(c){let t,r;return t=new Ye({}),{c(){ze(t.$$.fragment)},l(s){Ke(t.$$.fragment,s)},m(s,a){Re(t,s,a),r=!0},i(s){r||(X(t.$$.fragment,s),r=!0)},o(s){se(t.$$.fragment,s),r=!1},d(s){Se(t,s)}}}function Qe(c){let t,r;return t=new Fe({}),{c(){ze(t.$$.fragment)},l(s){Ke(t.$$.fragment,s)},m(s,a){Re(t,s,a),r=!0},i(s){r||(X(t.$$.fragment,s),r=!0)},o(s){se(t.$$.fragment,s),r=!1},d(s){Se(t,s)}}}function Xe(c){let t,r,s,a,p,u,i,_,n=!c[1]&&Ne(c);return{c(){t=f("link"),r=f("link"),s=f("link"),a=f("link"),p=f("link"),u=I(),n&&n.c(),i=re(),this.h()},l(h){const b=_e('[data-svelte="svelte-14ffjaa"]',ee.head);t=d(b,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),r=d(b,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),s=d(b,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),a=d(b,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),p=d(b,"LINK",{rel:!0,id:!0,href:!0,type:!0,media:!0}),b.forEach(o),u=N(h),n&&n.l(h),i=re(),this.h()},h(){e(t,"rel","stylesheet"),e(t,"id","dashicons-css"),e(t,"href","wp-includes/css/dashicons.min.css?ver=6.0.0"),e(t,"type","text/css"),e(t,"media","all"),e(r,"rel","stylesheet"),e(r,"id","buttons-css"),e(r,"href","wp-includes/css/buttons.min.css?ver=6.0.0"),e(r,"type","text/css"),e(r,"media","all"),e(s,"rel","stylesheet"),e(s,"id","forms-css"),e(s,"href","wp-admin/css/forms.min.css?ver=6.0.0"),e(s,"type","text/css"),e(s,"media","all"),e(a,"rel","stylesheet"),e(a,"id","l10n-css"),e(a,"href","wp-admin/css/l10n.min.css?ver=6.0.0"),e(a,"type","text/css"),e(a,"media","all"),e(p,"rel","stylesheet"),e(p,"id","login-css"),e(p,"href","wp-admin/css/login.min.css?ver=6.0.0"),e(p,"type","text/css"),e(p,"media","all")},m(h,b){l(ee.head,t),l(ee.head,r),l(ee.head,s),l(ee.head,a),l(ee.head,p),A(h,u,b),n&&n.m(h,b),A(h,i,b),_=!0},p(h,[b]){h[1]?n&&($e(),se(n,1,1,()=>{n=null}),Me()):n?(n.p(h,b),b&2&&X(n,1)):(n=Ne(h),n.c(),X(n,1),n.m(i.parentNode,i))},i(h){_||(X(n),_=!0)},o(h){se(n),_=!1},d(h){o(t),o(r),o(s),o(a),o(p),h&&o(u),n&&n.d(h),h&&o(i)}}}const et=!0;function Ze(c,t,r){let s=!0,a=!0;return be(async()=>{document.body.className=document.body.className.replace("no-js","js");const p=new URLSearchParams(window.location.search);r(0,s=!(p.has("action")&&p.get("action")==="lostpassword")),r(1,a=!1)}),[s,a]}class tt extends pe{constructor(t){super(),me(this,t,Ze,Xe,he,{})}}export{tt as default,et as prerender};
