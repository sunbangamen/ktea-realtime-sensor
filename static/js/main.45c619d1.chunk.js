(this.webpackJsonpktea_fb_0=this.webpackJsonpktea_fb_0||[]).push([[0],{303:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),i=a.n(r),o=a(20),s=a(33),l=a(71),u=a(28),d=a(82);a(185),a(305);d.a.initializeApp({apiKey:"AIzaSyDQEAjmgV1EUMZ76At6Y2Nh8S1PI77KpxM",authDomain:"ktea-realtime-sensor.firebaseapp.com",projectId:"ktea-realtime-sensor",storageBucket:"ktea-realtime-sensor.appspot.com",messagingSenderId:"381247391082",appId:"1:381247391082:web:9c40afd255af7b47e09113",databaseURL:"https://ktea-realtime-sensor-default-rtdb.firebaseio.com"});d.a;var j=d.a.auth(),b=d.a.database(),h=a(1),p=a.n(h),m=a(5),O=b.ref("/chart"),x=function(e){return b.ref("chart").push({place:e.place,value:e.value,timestamp:e.timestamp,uid:e.uid})},f=function(){return O},g=a(8),v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),s=(i[0],i[1]),l=function(){var e=function(){var e=[];return b.ref("chat").on("value",(function(t){t.forEach((function(t){e.push(t.val())}))})),e}();s(e)},u=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,n={message:a,timestamp:Date.now(),uid:j.currentUser.uid},b.ref("chats").push({message:n.message,timestamp:n.timestamp,uid:n.uid});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}var n}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){try{b.ref("chats").on("child_added",l),b.ref("chats").on("child_changed",l),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"auto"})}catch(e){console.log(e)}}),[]),Object(g.jsxs)("div",{className:"chat-container",children:[Object(g.jsx)("div",{className:"chat-top",children:"\ud5e4\ub354"}),Object(g.jsxs)("div",{className:"chat-middle",children:[Object(g.jsxs)("li",{className:"chat-bubble send",children:[Object(g.jsx)("p",{children:"\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~ \ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~ \ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~\ud558\uc774\ub8fd~"}),Object(g.jsx)("span",{children:"13:30PM"})]}),Object(g.jsxs)("li",{className:"chat-bubble receive",children:[Object(g.jsx)("p",{children:"\ubc29\uac00\ubc29\uac00!!"}),Object(g.jsx)("span",{children:"13:31PM"})]})]}),Object(g.jsx)("div",{className:"chat-bottom",children:Object(g.jsxs)("form",{onSubmit:u,children:[Object(g.jsx)("input",{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",value:a,onChange:function(e){c(e.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"\uc804\uc1a1"})]})})]})},w=a(106),y=["component","authenticated"];var S=function(e){var t=e.component,a=e.authenticated,n=Object(w.a)(e,y);return Object(g.jsx)(u.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){return!1===a?Object(g.jsx)(t,Object(s.a)({},e)):Object(g.jsx)(u.a,{to:"/dashboard"})}}))},C=["component","authenticated"];var k=function(e){var t=e.component,a=e.authenticated,n=Object(w.a)(e,C);return Object(g.jsx)(u.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){return!0===a?Object(g.jsx)(t,Object(s.a)({},e)):Object(g.jsx)(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},N=a(23),E=a(105),M=function(e,t){return j.createUserWithEmailAndPassword(e,t)},I=function(e,t){return j.signInWithEmailAndPassword(e,t)},A=function(){return j.signOut()},B=a(39),T=a(83);function W(e){return Object(g.jsx)(T.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}var D=function(){Object(B.a)();var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),l=s[0],u=s[1],d=Object(n.useState)([]),b=Object(o.a)(d,2),h=b[0],O=b[1],v=Object(n.useState)(!1),w=Object(o.a)(v,2),y=w[0],S=w[1],C=Object(n.useState)(!1),k=Object(o.a)(C,2),M=k[0],I=k[1],T={labels:["5","10","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100"],datasets:[{label:"# sensor",data:l,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"},{label:"# sensor1",data:h,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 0.2)"}]},D=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,x({place:a,value:0,timestamp:Date.now(),uid:j.currentUser.uid});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){f().on("child_changed",(function(e){u((function(t){return Object(N.a)(t.concat(Math.floor(e.val().value)))})),console.log("change : ",e.val().value)})),f().on("child_changed",(function(e){O((function(t){return Object(N.a)(t.concat(Math.floor(e.val().value1)))})),console.log("change1 : ",e.val().value1)}))}),[]),console.log("loaded : ",y);var P=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length};console.log("average \ucd1d\ubc30\uc5f4 : ",l),console.log("average1 \ucd1d\ubc30\uc5f4 : ",h),console.log("\ud3c9\uade0\uac12 : ",P(l)),console.log("\ud3c9\uade0\uac12 : ",P(h));var F=P(l)+5,_=P(l)-5,U=P(h)+5,q=P(h)-5,L=l[l.length-1],R=h[h.length-1],G="sensor",V="sensor1",z=function(e){I(!0),alert("".concat(e,"\uc704\uce58\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."))};_>L?M?console.log("\ubb38\uc81c\ubc1c\uc0dd"):z(G):F<L?(console.log("\ubb38\uc81c \ubc1c\uc0dd"),M?console.log("\ubb38\uc81c\ubc1c\uc0dd"):z(G)):console.log("\uc815\uc0c1\uce21\uc815"),q>R?M?console.log("\ubb38\uc81c\ubc1c\uc0dd"):z(V):U<R?(console.log("\ubb38\uc81c \ubc1c\uc0dd"),M?console.log("\ubb38\uc81c\ubc1c\uc0dd"):z(V)):console.log("\uc815\uc0c1\uce21\uc815");return l[19]&&u((function(e){return Object(N.a)(e.slice(18))})),h[19]&&O((function(e){return Object(N.a)(e.slice(18))})),Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(W,{children:"Today"}),Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("button",{onClick:A,children:"\ub85c\uadf8\uc544\uc6c3"}),Object(g.jsxs)("form",{onSubmit:D,children:[Object(g.jsx)("input",{placeholder:"\ud604\uc7a5\uba85\uc744 \uc785\ub825\ud558\uc138\uc694.",value:a,onChange:function(e){r(e.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"\uc804\uc1a1"})]}),Object(g.jsx)("h1",{className:"title",children:"Line Chart"})]}),y?Object(g.jsx)("button",{onClick:function(){S(!1),u([]),O([])},children:"\ucd08\uae30\ud654"}):Object(g.jsx)("button",{onClick:function(){S(!0),I(!1),u(l.filter((function(e){return e===l}))),O(h.filter((function(e){return e===h})))},children:"\uce21\uc815\uc2dc\uc791"}),Object(g.jsx)(E.a,{data:T,options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},P=a(381),F=a(362),_=a(360),U=a(377),q=a(357),L=a(363),R=a(378),G=a(102),V=a.n(G),z=a(358),H=a(359);function Y(){return Object(g.jsxs)(T.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(q.a,{color:"inherit",href:"#",children:"(\uc0ac)\uc548\uc804\uc7ac\ud574\ud658\uacbd\ub300\ucc45\ubcf8\ubd80"})," ",(new Date).getFullYear(),"."]})}var J=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function K(){var e=J(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1],d=function(e){var t=e.target.name;"email"===t?r(e.target.value):"password"===t&&u(e.target.value)},j=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===c||""===l){e.next=10;break}return e.prev=2,e.next=5,I(c,l).then((function(e){return console.log(e)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(H.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(_.a,{}),Object(g.jsxs)("div",{className:e.paper,children:[Object(g.jsx)(P.a,{className:e.avatar,children:Object(g.jsx)(V.a,{})}),Object(g.jsx)(T.a,{component:"h1",variant:"h5",children:"\uc2e4\uc2dc\uac04 \uad00\uc81c \uc2dc\uc2a4\ud15c"}),Object(g.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:j,children:[Object(g.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:d}),Object(g.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:d}),Object(g.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"\ub85c\uadf8\uc778"}),Object(g.jsx)(L.a,{container:!0,children:Object(g.jsx)(L.a,{item:!0,children:Object(g.jsx)(q.a,{href:"/signup",variant:"body2",children:"\uacc4\uc815\uc774 \uc5c6\uc2b5\ub2c8\uae4c? \ud68c\uc6d0\uac00\uc785"})})})]})]}),Object(g.jsx)(R.a,{mt:8,children:Object(g.jsx)(Y,{})})]})}function X(){return Object(g.jsxs)(T.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(q.a,{color:"inherit",href:"#",children:"(\uc0ac)\uc548\uc804\uc7ac\ud574\ud658\uacbd\ub300\ucc45\ubcf8\ubd80"})," ",(new Date).getFullYear(),"."]})}var Z=Object(z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Q(){var e=Z(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1],d=function(e){var t=e.target.name;"email"===t?r(e.target.value):"password"===t&&u(e.target.value)},j=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===c||""===l){e.next=10;break}return e.prev=2,e.next=5,M(c,l);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(H.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(_.a,{}),Object(g.jsxs)("div",{className:e.paper,children:[Object(g.jsx)(P.a,{className:e.avatar,children:Object(g.jsx)(V.a,{})}),Object(g.jsx)(T.a,{component:"h1",variant:"h5",children:"\ud68c\uc6d0 \uac00\uc785"}),Object(g.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:j,children:[Object(g.jsxs)(L.a,{container:!0,spacing:2,children:[Object(g.jsx)(L.a,{item:!0,xs:12,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,name:"company",label:"\ud68c\uc0ac\uba85",id:"company",autoComplete:"company"})}),Object(g.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"\uc774\ub984",name:"lastName",autoComplete:"lname"})}),Object(g.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{autoComplete:"phone",name:"phone",variant:"outlined",required:!0,fullWidth:!0,id:"phone",label:"\uc5f0\ub77d\ucc98",autoFocus:!0})}),Object(g.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{autoComplete:"phone1",name:"phone1",variant:"outlined",required:!0,fullWidth:!0,id:"phone1",label:"\ud68c\uc0ac\uc5f0\ub77d\ucc98",autoFocus:!0})}),Object(g.jsx)(L.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(U.a,{autoComplete:"position",name:"position",variant:"outlined",required:!0,fullWidth:!0,id:"position",label:"\ud574\ub2f9\ubd80\uc11c",autoFocus:!0})}),Object(g.jsx)(L.a,{item:!0,xs:12,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:d})}),Object(g.jsx)(L.a,{item:!0,xs:12,children:Object(g.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:d})})]}),Object(g.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up(\ud68c\uc6d0\uac00\uc785)"}),Object(g.jsx)(L.a,{container:!0,justifyContent:"flex-end",children:Object(g.jsx)(L.a,{item:!0,children:Object(g.jsx)(q.a,{href:"/login",variant:"body2",children:"(\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc2b5\ub2c8\uae4c? \ub85c\uadf8\uc778)"})})})]})]}),Object(g.jsx)(R.a,{mt:5,children:Object(g.jsx)(X,{})})]})}var $=a(7),ee=a(10),te=a(380),ae=a(373),ne=a(374),ce=a(361),re=a(376),ie=a(375),oe=a(307),se=a(165),le=a.n(se),ue=a(167),de=a.n(ue),je=a(166),be=a.n(je),he=a(364),pe=a(365),me=a(366),Oe=a(367),xe=a(163),fe=a.n(xe),ge=a(164),ve=a.n(ge),we=Object(g.jsxs)("div",{children:[Object(g.jsxs)(he.a,{button:!0,children:[Object(g.jsx)(pe.a,{children:Object(g.jsx)(l.b,{to:"/dashboard",children:Object(g.jsx)(fe.a,{})})}),Object(g.jsx)(me.a,{primary:"\ud648"})]}),Object(g.jsxs)(he.a,{button:!0,children:[Object(g.jsx)(pe.a,{children:Object(g.jsx)(ve.a,{})}),Object(g.jsx)(me.a,{primary:"Orders"})]})]}),ye=Object(g.jsx)("div",{children:Object(g.jsx)(Oe.a,{inset:!0,children:"Saved reports"})});Object(z.a)({depositContext:{flex:1}});a(368),a(372),a(371),a(369),a(370);function Se(e,t,a,n,c,r){return{id:e,date:t,name:a,shipTo:n,paymentMethod:c,amount:r}}Se(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),Se(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),Se(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),Se(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),Se(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79);Object(z.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function Ce(){return Object(g.jsxs)(T.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(g.jsx)(q.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ke=Object(z.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object($.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function Ne(){var e=ke(),t=c.a.useState(!0),a=Object(o.a)(t,2),n=a[0],r=a[1];Object(ee.a)(e.paper,e.fixedHeight);return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)(_.a,{}),Object(g.jsx)(ae.a,{position:"absolute",className:Object(ee.a)(e.appBar,n&&e.appBarShift),children:Object(g.jsxs)(ne.a,{className:e.toolbar,children:[Object(g.jsx)(ie.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},className:Object(ee.a)(e.menuButton,n&&e.menuButtonHidden),children:Object(g.jsx)(le.a,{})}),Object(g.jsx)(T.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"DATA CONTROL"}),Object(g.jsx)(ie.a,{onClick:A,color:"inherit",children:Object(g.jsx)(be.a,{})})]})}),Object(g.jsxs)(te.a,{variant:"permanent",classes:{paper:Object(ee.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n,children:[Object(g.jsx)("div",{className:e.toolbarIcon,children:Object(g.jsx)(ie.a,{onClick:function(){r(!1)},children:Object(g.jsx)(de.a,{})})}),Object(g.jsx)(re.a,{}),Object(g.jsx)(ce.a,{children:we}),Object(g.jsx)(re.a,{}),Object(g.jsx)(ce.a,{children:ye})]}),Object(g.jsxs)("main",{className:e.content,children:[Object(g.jsx)("div",{className:e.appBarSpacer}),Object(g.jsxs)(H.a,{maxWidth:"lg",className:e.container,children:[Object(g.jsx)(L.a,{container:!0,spacing:3,children:Object(g.jsx)(L.a,{item:!0,xs:12,md:12,lg:9,children:Object(g.jsx)(oe.a,{className:e.paper,children:Object(g.jsx)(D,{})})})}),Object(g.jsx)(R.a,{pt:4,children:Object(g.jsx)(Ce,{})})]})]})]})}var Ee={authenticated:!1,loading:!0};function Me(e,t){switch(t.type){case"GET_USER":return Object(s.a)(Object(s.a)({},e),{},{authenticated:t.result});default:return e}}var Ie=function(){var e=Object(n.useReducer)(Me,Ee),t=Object(o.a)(e,2),a=t[0],c=t[1],r=a.authenticated;return Object(n.useEffect)((function(){j.onAuthStateChanged((function(e){c(e?{type:"GET_USER",result:!0}:{type:"GET_USER",result:!1})}))}),[]),Object(g.jsx)(l.a,{children:Object(g.jsxs)(u.d,{children:[Object(g.jsx)(k,{path:"/dashboard",authenticated:r,component:Ne}),Object(g.jsx)(k,{path:"/chat",authenticated:r,component:v}),Object(g.jsx)(k,{path:"/chart",authenticated:r,component:D}),Object(g.jsx)(S,{path:"/signup",authenticated:r,component:Q}),Object(g.jsx)(S,{path:["/","/login"],authenticated:r,component:K})]})})},Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,384)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(Ie,{})}),document.getElementById("root")),Ae()}},[[303,1,2]]]);
//# sourceMappingURL=main.45c619d1.chunk.js.map