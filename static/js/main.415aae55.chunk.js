(this.webpackJsonpgmail=this.webpackJsonpgmail||[]).push([[0],{36:function(e,a,t){e.exports=t(48)},41:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),s=t.n(r),i=(t(41),t(19),t(2)),o=t(49),c=function(){return l.a.createElement("div",{className:m.logo},l.a.createElement(o.a,{variant:"h4",className:m.typography,style:{fontWeight:"bold"}},l.a.createElement("label",{className:m.G},"G"),l.a.createElement("label",{className:m.O},"O"),l.a.createElement("label",{className:m.J},"J"),l.a.createElement("img",{alt:"",className:m.image,src:"https://1.bp.blogspot.com/-YNmaVFHh3IQ/W64nZpR860I/AAAAAAAAEbA/BnSQt9Fnz7M4g6Z4AncopinWUWbvBMnzwCPcBGAYYCw/s1600/Google%2BMail.png"})))},m={typography:Object(i.a)({letterSpacing:"2px",padding:"15px 15px 15px 30px"}),image:Object(i.a)({height:"42px",margin:"-9px",paddingLeft:"10px"}),logo:Object(i.a)({flex:1}),G:Object(i.a)({color:"#2979FF"}),O:Object(i.a)({color:"red"}),J:Object(i.a)({color:"#FDD835"})},d=t(10),u=t(64),g=t(24),p=t.n(g),v=t(63),b=t(65),h=t(16),f=t(17),y=t.n(f),E=[{id:"1",name:"Inbox",type:"System",messagesUnread:3},{id:"2",name:"Snoozed",type:"System",messagesUnread:0},{id:"3",name:"Important",type:"System",messagesUnread:1},{id:"4",name:"Starred",type:"System",messagesUnread:0},{id:"5",name:"Sent",type:"System",messagesUnread:0},{id:"6",name:"Drafts",type:"System",messagesUnread:1},{id:"7",name:"Spam",type:"System",messagesUnread:1,color:{backgroundColor:"red"}},{id:"8",name:"Trash",type:"System",messagesUnread:30},{id:"9",name:"Salesforce",type:"User",messagesUnread:0,color:{backgroundColor:"red"}},{id:"10",name:"File Format",type:"User",messagesUnread:2,color:{backgroundColor:"green"}}],x=function(){return new Date(+new Date-Math.floor(1e10*Math.random())).toDateString()},j={1:[{id:"1",payload:{headers:[{name:"from",value:"author@gmail.com"},{name:"subject",value:"First Email"},{name:"date",value:x()}]}},{id:"2",payload:{headers:[{name:"from",value:"Kiah Jones"},{name:"subject",value:"Second Email with a longer name ya'llvgvggggggggg"},{name:"date",value:x()}]}},{id:"3",payload:{headers:[{name:"from",value:"Kiah Jones"},{name:"subject",value:"Second Email with a longer name ya'llvgvggggggggg"},{name:"date",value:x()}]}}],2:[],3:[{id:"4",payload:{headers:[{name:"from",value:"author@gmail.com"},{name:"subject",value:"First Email"},{name:"date",value:x()}]}}],4:[],5:[],6:[{id:"5",payload:{headers:[{name:"from",value:"Deep Badesha"},{name:"subject",value:"Third Email"},{name:"date",value:x()}]}}],7:[{id:"6",payload:{headers:[{name:"from",value:"Kiah Jones"},{name:"subject",value:"Second Email with a longer name ya'llvgvggggggggg"},{name:"date",value:x()}]}}],8:[{id:"7",payload:{headers:[{name:"from",value:"author@gmail.com"},{name:"subject",value:"First Email"},{name:"date",value:x()}]}},{id:"8",payload:{headers:[{name:"from",value:"Deep Badesha"},{name:"subject",value:"Third Email"},{name:"date",value:x()}]}},{id:"9",payload:{headers:[{name:"from",value:"Deep Badesha"},{name:"subject",value:"Third Email"},{name:"date",value:x()}]}},{id:"10",payload:{headers:[{name:"from",value:"author@gmail.com"},{name:"subject",value:"First Email"},{name:"date",value:x()}]}},{id:"11",payload:{headers:[{name:"from",value:"Deep Badesha"},{name:"subject",value:"Third Email"},{name:"date",value:x()}]}},{id:"12",payload:{headers:[{name:"from",value:"Kiah Jones"},{name:"subject",value:"Second Email with a longer name ya'llvgvggggggggg"},{name:"date",value:x()}]}},{id:"13",payload:{headers:[{name:"from",value:"author@gmail.com"},{name:"subject",value:"First Email"},{name:"date",value:x()}]}},{id:"14",payload:{headers:[{name:"from",value:"Kiah Jones"},{name:"subject",value:"Second Email with a longer name ya'llvgvggggggggg"},{name:"date",value:x()}]}},{id:"15",payload:{headers:[{name:"from",value:"Deep Badesha"},{name:"subject",value:"Third Email"},{name:"date",value:x()}]}},{id:"16",payload:{headers:[{name:"from",value:"author@gmail.com"},{name:"subject",value:"First Email"},{name:"date",value:x()}]}},{id:"17",payload:{headers:[{name:"from",value:"Kiah Jones"},{name:"subject",value:"Second Email with a longer name ya'llvgvggggggggg"},{name:"date",value:x()}]}}],9:[],10:[{id:"18",payload:{headers:[{name:"from",value:"Deep Badesha"},{name:"subject",value:"Third Email"},{name:"date",value:x()}]}},{id:"19",payload:{headers:[{name:"from",value:"author@gmail.com"},{name:"subject",value:"First Email"},{name:"date",value:x()}]}}]},O=function(e){return new Promise((function(a,t){a(j[e])}))},S=function(e,a){var t;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.awrap(O(a.id));case 2:t=n.sent,e({type:"SET_MESSAGES",payload:t});case 4:case"end":return n.stop()}}))},F=function(e,a){switch(a.type){case"SET_LABEL":return Object(h.a)({},e,{selectedLabel:a.payload});case"SET_MESSAGE":return Object(h.a)({},e,{selectedMessage:a.payload});case"SET_MESSAGES":return Object(h.a)({},e,{messages:a.payload});default:return e}},w={labels:[{id:"1",name:"Inbox",type:"System",messagesUnread:3},{id:"2",name:"Snoozed",type:"System",messagesUnread:0}],messages:[],selectedMessage:{},selectedLabel:{id:"1",name:"Inbox",type:"System",messagesUnread:3}},B=Object(n.createContext)({state:w}),k=function(e){var a=Object(n.useReducer)(F,w),t=Object(d.a)(a,2),r=t[0],s=t[1];return l.a.createElement(B.Provider,{value:{state:r,dispatch:s}},e.children)},I=B.Consumer,A={header:Object(i.a)({display:"flex",position:"relative",boxShadow:"0 2px 7px 0 rgba(0, 0, 0, 0.1), 0 6px 28px 0 rgba(0, 0, 0, -0.81)"}),headerRight:Object(i.a)({paddingRight:"30px",alignItems:"center",display:"flex"}),headerLeft:Object(i.a)({flex:1}),avatar:Object(i.a)({marginLeft:"auto",alignItems:"center",background:"green !important",cursor:"pointer"}),toolbar:Object(i.a)({height:"80px",display:"flex",alignItems:"center",padding:"0 30px 0",backgroundColor:"#FCFCFA",color:"#2962FF",borderBottom:"2px solid #F4F4F4"}),panelContainer:Object(i.a)({height:"calc(100vh - 155px)",display:"flex",padding:"0 30px 0"}),messagePanel:Object(i.a)({flex:"0 400px",overflowY:"auto",borderLeft:"1px solid #F4F4F4"})},N=function(){var e=Object(n.useContext)(B),a=e.state,t=e.dispatch,r=Object(n.useState)([]),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){0===i.length&&(new Promise((function(e,a){e(E)})).then((function(e){return o(e)})),S(t,a.selectedLabel))}),[i,t,a.selectedLabel]),l.a.createElement(I,null,(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:A.header},l.a.createElement(c,null),l.a.createElement("div",{className:A.headerRight},l.a.createElement(b.a,{className:A.avatar},"SM"))),l.a.createElement("div",{className:A.toolbar},l.a.createElement(u.a,{id:"standard-adornment-amount",startAdornment:l.a.createElement(v.a,{position:"start"},l.a.createElement(p.a,{style:{color:"#2979FF"}}))})),l.a.createElement("div",{className:A.panelContainer},l.a.createElement(se,{labels:i}),l.a.createElement("div",{className:A.messagePanel},e.state.messages.map((function(e,a){return l.a.createElement(M,{key:a,index:a,message:e})}))),l.a.createElement(me,{sender:"Kiah Jones",recipients:["Madhu Rawat","Deep Badesha"],subject:"First Email",body:""})))}))},C=t(12),U=t(25),D=t.n(U),L="subject",q="from",T="date",M=function(e){var a=e.index,t=e.message,r=Object(n.useState)(!1),s=Object(d.a)(r,2),c=s[0],m=s[1],u=Object(n.useState)(""),g=Object(d.a)(u,2),p=g[0],v=g[1],b=Object(n.useState)(""),h=Object(d.a)(b,2),f=h[0],y=h[1],E=Object(n.useState)(""),x=Object(d.a)(E,2),j=x[0],O=x[1];return Object(n.useEffect)((function(){if(t.payload){var e=t.payload.headers,a=function(a){if(e){var t=e.find((function(e){return e.name===a}));if(t)return t.value}},n=a(L),l=a(q),r=a(T);n&&v(n),l&&y(l),r&&O(r)}}),[t.payload]),l.a.createElement("div",{className:Object(i.b)(J.message,Object(C.a)({},J.altBackground,a%2===0)),onClick:function(){return m(!c)}},l.a.createElement("div",{className:Object(i.b)(J.leftSide,Object(C.a)({},J.selected,c))}),l.a.createElement("div",{className:J.contents},l.a.createElement("div",{style:{flex:1}},l.a.createElement("label",{className:J.subject},p),l.a.createElement(o.a,{variant:"caption",display:"block",style:J.sender,gutterBottom:!0},f)),l.a.createElement("div",{className:J.rightSide},l.a.createElement(D.a,null),l.a.createElement(o.a,{variant:"caption",display:"block",style:J.sender,gutterBottom:!0},j))))},J={message:Object(i.a)({display:"flex",cursor:"pointer",backgroundColor:"#F9F9F8",":hover":{backgroundColor:"#BBDEFB"}}),altBackground:Object(i.a)({backgroundColor:"#F1F1F1"}),contents:Object(i.a)({flex:1,display:"flex",padding:"20px 20px 10px 20px",color:"#585858"}),subject:Object(i.a)({padding:"10px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"232px",display:"block",cursor:"pointer"}),sender:{padding:"10px 10px 10px 12px"},leftSide:Object(i.a)({flex:"0 3px"}),rightSide:Object(i.a)({flex:"0 90px",alignItems:"center",display:"flex",margin:"auto",flexDirection:"column",textAlign:"center"}),selected:Object(i.a)({backgroundColor:"#FDD835"})},P=function(e){var a=e.label,t=e.children,r=Object(n.useContext)(B),s=r.state,c=r.dispatch,m=a.name,d=a.messagesUnread,u=s.selectedLabel.name===m;return Object(n.useEffect)((function(){var e="GOJ Mail";s.selectedLabel.messagesUnread&&(e+=" (".concat(s.selectedLabel.messagesUnread,")")),window.document.title=e}),[s.selectedLabel]),l.a.createElement("div",{className:Object(i.b)(G.label,Object(C.a)({},G.selected,u)),onClick:function(){!function(e,a){e({type:"SET_LABEL",payload:a})}(c,a),S(c,a)}},t,l.a.createElement(o.a,{variant:"subtitle2",style:{margin:"2px auto 0 4px",display:"flex",width:"100%"},gutterBottom:!0},l.a.createElement("div",{style:{flex:1}},m),0!==d&&l.a.createElement("div",{style:{marginRight:"10px"}},d)))},G={label:Object(i.a)({display:"flex",alignItems:"center",color:"darkgray",padding:"5px 0",":hover":{color:"#2979FF",cursor:"pointer"}}),selected:Object(i.a)({color:"#2979FF",fontWeight:"bold"})},W=t(27),K=t.n(W),R=t(28),z=t.n(R),_=t(29),Y=t.n(_),Q=t(30),V=t.n(Q),Z=t(31),H=t.n(Z),$=t(32),X=t.n($),ee=t(33),ae=t.n(ee),te=t(34),ne=t.n(te),le=t(26),re=t.n(le),se=function(e){var a=e.labels,t=a.filter((function(e){return"System"===e.type})),n=a.filter((function(e){return"User"===e.type}));return l.a.createElement("div",{className:ie.labelPanel},l.a.createElement(o.a,{variant:"h5",gutterBottom:!0},"Mail"),t.map((function(e,a){return l.a.createElement(P,{key:a,label:e},oe[e.name])})),l.a.createElement("div",{className:ie.buffer}),l.a.createElement(o.a,{variant:"h5"},"Folders"),n.map((function(e,a){var t=e.color?e.color.backgroundColor:"gray";return l.a.createElement(P,{key:a,label:e},l.a.createElement(re.a,{style:{height:"10px",color:t}}))})))},ie={labelPanel:Object(i.a)({flex:"0 0 165px",padding:"20px 0",color:"#585858"}),label:Object(i.a)({display:"flex",alignItems:"center",color:"darkgray",padding:"5px 0"}),standardIcon:{height:"16px"},buffer:Object(i.a)({paddingTop:"10px"})},oe={Inbox:l.a.createElement(K.a,{style:ie.standardIcon}),Snoozed:l.a.createElement(z.a,{style:ie.standardIcon}),Important:l.a.createElement(Y.a,{style:ie.standardIcon}),Starred:l.a.createElement(V.a,null),Sent:l.a.createElement(H.a,{style:ie.standardIcon}),Drafts:l.a.createElement(X.a,{style:ie.standardIcon}),Spam:l.a.createElement(ae.a,{style:ie.standardIcon}),Trash:l.a.createElement(ne.a,{style:ie.standardIcon})},ce=function(e){var a=e.height;return l.a.createElement("div",{style:{paddingTop:"".concat(a,"px")}})},me=function(e){var a=e.sender,t=e.recipients,n=e.subject;e.body;return l.a.createElement("div",{className:de.previewPanel},l.a.createElement(o.a,{variant:"subtitle2",gutterBottom:!0},a),l.a.createElement(o.a,{variant:"subtitle2",gutterBottom:!0},t.map((function(e,a){return l.a.createElement("span",{key:a},e,"; ")}))),l.a.createElement(ce,{height:20}),l.a.createElement(o.a,{variant:"h5",gutterBottom:!0},n),l.a.createElement(ce,{height:20}),l.a.createElement(o.a,{variant:"body2",gutterBottom:!0},l.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. A diam sollicitudin tempor id eu. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Aliquam nulla facilisi cras fermentum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Nam libero justo laoreet sit. Et netus et malesuada fames. Pellentesque habitant morbi tristique senectus et netus et malesuada. Massa vitae tortor condimentum lacinia quis vel eros donec. Arcu ac tortor dignissim convallis aenean et tortor at risus. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Odio tempor orci dapibus ultrices in iaculis nunc. Auctor elit sed vulputate mi sit amet. Varius vel pharetra vel turpis nunc eget lorem. Duis convallis convallis tellus id interdum velit laoreet id donec."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"Interdum velit euismod in pellentesque massa placerat. Cras ornare arcu dui vivamus. Id velit ut tortor pretium viverra suspendisse potenti nullam. Eget egestas purus viverra accumsan in. A lacus vestibulum sed arcu non. Felis eget velit aliquet sagittis id consectetur purus. Orci eu lobortis elementum nibh tellus molestie. Libero justo laoreet sit amet cursus sit amet dictum. Semper auctor neque vitae tempus quam pellentesque nec. Augue neque gravida in fermentum et sollicitudin ac. Leo duis ut diam quam nulla porttitor massa. In ornare quam viverra orci sagittis. Sodales ut eu sem integer. Ultrices tincidunt arcu non sodales.")))},de={previewPanel:Object(i.a)({flex:1,borderLeft:"2px solid #F4F4F4",color:"#585858",padding:"20px 30px"})};var ue=function(){return l.a.createElement(k,null,l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.415aae55.chunk.js.map