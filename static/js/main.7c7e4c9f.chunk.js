(this.webpackJsonpgmail=this.webpackJsonpgmail||[]).push([[0],{36:function(e,a,t){e.exports=t(48)},41:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),s=t.n(l),i=(t(41),t(19),t(2)),c=t(49),o=function(){return r.a.createElement("div",{className:d.logo},r.a.createElement(c.a,{variant:"h4",className:d.typography,style:{fontWeight:"bold"}},r.a.createElement("label",{className:d.G},"G"),r.a.createElement("label",{className:d.O},"O"),r.a.createElement("label",{className:d.J},"J")))},d={typography:Object(i.a)({letterSpacing:"2px",padding:"15px 15px 15px 30px"}),logo:Object(i.a)({flex:1}),G:Object(i.a)({color:"#2979FF"}),O:Object(i.a)({color:"red"}),J:Object(i.a)({color:"#FDD835"})},m=t(12),u=t(64),p=t(24),b=t.n(p),g=t(63),E=t(65),f=t(15),y=t(17),v=t.n(y),x=[{id:"1",name:"Inbox",type:"System",messagesUnread:3},{id:"2",name:"Snoozed",type:"System",messagesUnread:0},{id:"3",name:"Important",type:"System",messagesUnread:1},{id:"4",name:"Starred",type:"System",messagesUnread:0},{id:"5",name:"Sent",type:"System",messagesUnread:0},{id:"6",name:"Drafts",type:"System",messagesUnread:1},{id:"7",name:"Spam",type:"System",messagesUnread:1,color:{backgroundColor:"red"}},{id:"8",name:"Trash",type:"System",messagesUnread:30},{id:"9",name:"Salesforce",type:"User",messagesUnread:0,color:{backgroundColor:"red"}},{id:"10",name:"File Format",type:"User",messagesUnread:2,color:{backgroundColor:"green"}}],h={1:[{id:"1"},{id:"2"},{id:"3"}],2:[],3:[{id:"4"}],4:[],5:[],6:[{id:"5"}],7:[{id:"6"}],8:[{id:"7"},{id:"8"},{id:"9"},{id:"10"},{id:"11"},{id:"12"},{id:"13"},{id:"14"},{id:"15"},{id:"16"},{id:"17"}],9:[],10:[{id:"18"},{id:"19"}]},j=function(e){return new Promise((function(a,t){a(h[e])}))},O=function(e,a){switch(a.type){case"SET_LABEL":return Object(f.a)({},e,{selectedLabel:a.payload});case"SET_LABELS":return Object(f.a)({},e,{labels:a.payload});case"SET_EMAIL":return Object(f.a)({},e,{selectedEmail:a.payload});case"SET_EMAILS":return Object(f.a)({},e,{emails:a.payload});default:return e}},S={labels:[{id:"1",name:"Inbox",type:"System",messagesUnread:3},{id:"2",name:"Snoozed",type:"System",messagesUnread:0}],emails:[{id:"1"},{id:"2"}],selectedEmail:{id:"1"},selectedLabel:{id:"1",name:"Inbox",type:"System",messagesUnread:3}},F=Object(n.createContext)({state:S}),k=function(e){var a=Object(n.useReducer)(O,S),t=Object(m.a)(a,2),l=t[0],s=t[1];return r.a.createElement(F.Provider,{value:{state:l,dispatch:s}},e.children)},I=F.Consumer,w={header:Object(i.a)({display:"flex"}),headerRight:Object(i.a)({paddingRight:"30px",alignItems:"center",display:"flex"}),headerLeft:Object(i.a)({flex:1}),avatar:Object(i.a)({marginLeft:"auto",alignItems:"center",background:"green !important",cursor:"pointer"}),toolbar:Object(i.a)({height:"80px",display:"flex",alignItems:"center",padding:"0 30px 0",backgroundColor:"#FCFCFA",color:"#2962FF",border:"2px solid #F4F4F4"}),panelContainer:Object(i.a)({height:"calc(100vh - 155px)",display:"flex",padding:"0 30px 0"}),emailPanel:Object(i.a)({flex:"0 400px",borderLeft:"1px solid #F4F4F4"})},L=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){0===t.length&&new Promise((function(e,a){e(x)})).then((function(e){return l(e)}))}),[t]),r.a.createElement(I,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:w.header},r.a.createElement(o,null),r.a.createElement("div",{className:w.headerRight},r.a.createElement(E.a,{className:w.avatar},"SM"))),r.a.createElement("div",{className:w.toolbar},r.a.createElement(u.a,{id:"standard-adornment-amount",startAdornment:r.a.createElement(g.a,{position:"start"},r.a.createElement(b.a,{style:{color:"#2979FF"}}))})),r.a.createElement("div",{className:w.panelContainer},r.a.createElement(ae,{labels:t}),r.a.createElement("div",{className:w.emailPanel},e.state.emails.map((function(e,a){return r.a.createElement(C,{key:a,index:a,subject:"Email: ".concat(e.id),sender:"author@gmail.com",sent:"Fri 3:20 PM"})}))),r.a.createElement(le,{sender:"Kiah Jones",recipients:["Madhu Rawat","Deep Badesha"],subject:"First Email",body:""})))}))},N=t(11),U=t(25),B=t.n(U),C=function(e){var a=e.index,t=e.subject,l=e.sender,s=e.sent,o=e.selected,d=Object(n.useState)(o),u=Object(m.a)(d,2),p=u[0],b=u[1];return r.a.createElement("div",{className:Object(i.b)(q.tab,Object(N.a)({},q.altBackground,a%2===0)),onClick:function(){return b(!p)}},r.a.createElement("div",{className:Object(i.b)(q.leftSide,Object(N.a)({},q.selected,p))}),r.a.createElement("div",{className:q.contents},r.a.createElement("div",{style:{flex:1}},r.a.createElement("label",{className:q.subject},t),r.a.createElement(c.a,{variant:"caption",display:"block",style:q.sender,gutterBottom:!0},l)),r.a.createElement("div",{className:q.rightSide},r.a.createElement(B.a,null),r.a.createElement(c.a,{variant:"caption",display:"block",style:q.sender,gutterBottom:!0},s))))},q={tab:Object(i.a)({display:"flex",cursor:"pointer",backgroundColor:"#F9F9F8",":hover":{backgroundColor:"#BBDEFB"}}),altBackground:Object(i.a)({backgroundColor:"#F1F1F1"}),contents:Object(i.a)({flex:1,display:"flex",padding:"20px 20px 10px 20px",color:"#585858"}),subject:Object(i.a)({padding:"10px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"285px",display:"block",cursor:"pointer"}),sender:{padding:"10px 10px 10px 12px"},leftSide:Object(i.a)({flex:"0 3px"}),rightSide:Object(i.a)({flex:"0 90px",alignItems:"center",display:"flex",margin:"auto",flexDirection:"column"}),selected:Object(i.a)({backgroundColor:"#FDD835"})},A=function(e){var a=e.label,t=e.children,l=Object(n.useContext)(F),s=l.state,o=l.dispatch,d=a.name,m=a.messagesUnread,u=s.selectedLabel.name===d;return Object(n.useEffect)((function(){var e="GOJ Mail";s.selectedLabel.messagesUnread&&(e+=" (".concat(s.selectedLabel.messagesUnread,")")),window.document.title=e}),[s.selectedLabel]),r.a.createElement("div",{className:Object(i.b)(D.label,Object(N.a)({},D.selected,u)),onClick:function(){!function(e,a){e({type:"SET_LABEL",payload:a})}(o,a),function(e,a){var t;v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(j(a.id));case 2:t=n.sent,e({type:"SET_EMAILS",payload:t});case 4:case"end":return n.stop()}}))}(o,a)}},t,r.a.createElement(c.a,{variant:"subtitle2",style:{margin:"2px auto 0 4px",display:"flex",width:"100%"},gutterBottom:!0},r.a.createElement("div",{style:{flex:1}},d),0!==m&&r.a.createElement("div",{style:{marginRight:"10px"}},m)))},D={label:Object(i.a)({display:"flex",alignItems:"center",color:"darkgray",padding:"5px 0",":hover":{color:"#2979FF",cursor:"pointer"}}),selected:Object(i.a)({color:"#2979FF",fontWeight:"bold"})},P=t(27),T=t.n(P),M=t(28),J=t.n(M),R=t(29),_=t.n(R),W=t(30),G=t.n(W),z=t(31),K=t.n(z),V=t(32),$=t.n(V),H=t(33),Q=t.n(H),X=t(34),Y=t.n(X),Z=t(26),ee=t.n(Z),ae=function(e){var a=e.labels,t=a.filter((function(e){return"System"===e.type})),n=a.filter((function(e){return"User"===e.type}));return r.a.createElement("div",{className:te.labelPanel},r.a.createElement(c.a,{variant:"h5",gutterBottom:!0},"Mail"),t.map((function(e,a){return r.a.createElement(A,{key:a,label:e},ne[e.name])})),r.a.createElement("div",{className:te.buffer}),r.a.createElement(c.a,{variant:"h5"},"Folders"),n.map((function(e,a){var t=e.color?e.color.backgroundColor:"gray";return r.a.createElement(A,{key:a,label:e},r.a.createElement(ee.a,{style:{height:"10px",color:t}}))})))},te={labelPanel:Object(i.a)({flex:"0 0 165px",padding:"20px 0",color:"#585858"}),label:Object(i.a)({display:"flex",alignItems:"center",color:"darkgray",padding:"5px 0"}),standardIcon:{height:"16px"},buffer:Object(i.a)({paddingTop:"10px"})},ne={Inbox:r.a.createElement(T.a,{style:te.standardIcon}),Snoozed:r.a.createElement(J.a,{style:te.standardIcon}),Important:r.a.createElement(_.a,{style:te.standardIcon}),Starred:r.a.createElement(G.a,null),Sent:r.a.createElement(K.a,{style:te.standardIcon}),Drafts:r.a.createElement($.a,{style:te.standardIcon}),Spam:r.a.createElement(Q.a,{style:te.standardIcon}),Trash:r.a.createElement(Y.a,{style:te.standardIcon})},re=function(e){var a=e.height;return r.a.createElement("div",{style:{paddingTop:"".concat(a,"px")}})},le=function(e){var a=e.sender,t=e.recipients,n=e.subject;e.body;return r.a.createElement("div",{className:se.previewPanel},r.a.createElement(c.a,{variant:"subtitle2",gutterBottom:!0},a),r.a.createElement(c.a,{variant:"subtitle2",gutterBottom:!0},t.map((function(e,a){return r.a.createElement("span",{key:a},e,"; ")}))),r.a.createElement(re,{height:20}),r.a.createElement(c.a,{variant:"h5",gutterBottom:!0},n),r.a.createElement(re,{height:20}),r.a.createElement(c.a,{variant:"body2",gutterBottom:!0},r.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. A diam sollicitudin tempor id eu. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Aliquam nulla facilisi cras fermentum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Nam libero justo laoreet sit. Et netus et malesuada fames. Pellentesque habitant morbi tristique senectus et netus et malesuada. Massa vitae tortor condimentum lacinia quis vel eros donec. Arcu ac tortor dignissim convallis aenean et tortor at risus. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Odio tempor orci dapibus ultrices in iaculis nunc. Auctor elit sed vulputate mi sit amet. Varius vel pharetra vel turpis nunc eget lorem. Duis convallis convallis tellus id interdum velit laoreet id donec."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"Interdum velit euismod in pellentesque massa placerat. Cras ornare arcu dui vivamus. Id velit ut tortor pretium viverra suspendisse potenti nullam. Eget egestas purus viverra accumsan in. A lacus vestibulum sed arcu non. Felis eget velit aliquet sagittis id consectetur purus. Orci eu lobortis elementum nibh tellus molestie. Libero justo laoreet sit amet cursus sit amet dictum. Semper auctor neque vitae tempus quam pellentesque nec. Augue neque gravida in fermentum et sollicitudin ac. Leo duis ut diam quam nulla porttitor massa. In ornare quam viverra orci sagittis. Sodales ut eu sem integer. Ultrices tincidunt arcu non sodales.")))},se={previewPanel:Object(i.a)({flex:1,borderLeft:"2px solid #F4F4F4",color:"#585858",padding:"20px 30px"})};var ie=function(){return r.a.createElement(k,null,r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.7c7e4c9f.chunk.js.map