(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(10),s=a(13),u=(a(76),a(21)),i=a(65),m=a(4),d="[UI] Open Modal",p="[UI] Close Modal",f="[EVENT] Add new",v="[EVENT] Set active",b="[EVENT] Clear active event",E="[EVENT] Event updated",h="[EVENT] Event deleted",g="[EVENT] Events loaded",O="[AUTH] Finish checking login state",j="[AUTH] Login",y="[AUTH] Logout",N={modalOpen:!1},w=a(55),k={events:[],activeEvent:null},x={checking:!0},S=Object(u.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!0});case p:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)(Object(m.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case v:return Object(m.a)(Object(m.a)({},e),{},{activeEvent:t.payload});case b:return Object(m.a)(Object(m.a)({},e),{},{activeEvent:null});case E:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.filter((function(e){return e.id!==t.payload})),activeEvent:null});case g:return Object(m.a)(Object(m.a)({},e),{},{events:Object(w.a)(t.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(m.a)(Object(m.a)({},e),{},{checking:!1},t.payload);case O:return Object(m.a)(Object(m.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,T=Object(u.e)(S,C(Object(u.a)(i.a))),D=a(36),I=a(8),P=a(14),A=(a(77),a(24)),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(P.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(m.a)(Object(m.a)({},r),{},Object(A.a)({},t.name,t.value)))};return[r,l,o]},L=a(11),H=a.n(L),U=a(20),_="https://mern-app-calendar.herokuapp.com/api",M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(_,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},R=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(_,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},F=function(){return{type:O}},G=function(e){return{type:j,payload:e}},J=function(){return{type:y}};function B(){var e=Object(l.b)(),t=V({lEmail:"",lPassword:""}),a=Object(P.a)(t,2),n=a[0],c=a[1],o=V({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),u=Object(P.a)(o,2),i=u[0],m=u[1],d=n.lEmail,p=n.lPassword,f=i.rName,v=i.rEmail,b=i.rPassword1,E=i.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=d,n=p,function(){var e=Object(U.a)(H.a.mark((function e(t){var r,c,o,l,u;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(o=c.token,l=c.uid,u=c.name,localStorage.setItem("token",o),localStorage.setItem("token-init-date",(new Date).getTime()),t(G({uid:l,name:u}))):s.b.error("\u26a0 ".concat(c.msg));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:p,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),b!==E)return s.b.error(" \u26a0\ufe0f Las contrase\xf1as deben de ser iguales");var a,n,r;e((a=v,n=b,r=f,function(){var e=Object(U.a)(H.a.mark((function e(t){var c,o,l,u,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/new",{name:r,email:a,password:n},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(l=o.token,u=o.uid,i=o.name,localStorage.setItem("token",l),localStorage.setItem("token-init-date",(new Date).getTime()),t(G({uid:u,name:i}))):s.b.error("\u26a0 ".concat(o.msg));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:f,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:v,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:b,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:E,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}var X=a(54),q=a(17),z=a.n(q),K=(a(80),a(81),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),Q=function(){return{type:d}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{end:z()(e.end).toDate(),start:z()(e.start).toDate()})}))},Y=function(e){return{type:f,payload:e}},Z=function(){return{type:b}},$=function(e){return{type:E,payload:e}},ee=function(e){return{type:h,payload:e}},te=function(e){return{type:g,payload:e}};function ae(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(J())}))}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))}function ne(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name))}var re=a(49),ce=a.n(re),oe=a(50),le=a.n(oe),se={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ce.a.setAppElement("#root");var ue={title:"",notes:"",start:"",end:""};function ie(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).modalOpen,a=Object(l.c)((function(e){return e.calendar})).activeEvent,c=Object(n.useState)(""),o=Object(P.a)(c,2),u=o[0],i=o[1],d=Object(n.useState)(""),f=Object(P.a)(d,2),v=f[0],b=f[1],E=Object(n.useState)(!1),h=Object(P.a)(E,2),g=h[0],O=h[1],j=Object(n.useState)(ue),y=Object(P.a)(j,2),N=y[0],w=y[1],k=N.title,x=N.notes;Object(n.useEffect)((function(){a?(w(a),i(new Date(a.start)),b(new Date(a.end))):(w(ue),i(""),b(""))}),[a,w]);var S=function(e){var t=e.target;w(Object(m.a)(Object(m.a)({},N),{},Object(A.a)({},t.name,t.value)))},C=function(){e({type:p}),e(Z()),w(ue),i(""),b(""),O(!1)};return r.a.createElement(ce.a,{isOpen:t,style:se,onRequestClose:C,closeTimeoutMS:200,contentLabel:"Example Modal",className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null," ",a?"Editar evento":"Nuevo evento")),r.a.createElement("hr",null),r.a.createElement("form",{className:"container"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(le.a,{onChange:function(e){i(e),w(Object(m.a)(Object(m.a)({},N),{},{start:e}))},value:u,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(le.a,{onChange:function(e){b(e),w(Object(m.a)(Object(m.a)({},N),{},{end:e}))},value:v,minDate:new Date(u),className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(g&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:S}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:x,onChange:S}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-block",onClick:function(){e(function(){var e=Object(U.a)(H.a.mark((function e(t,a){var n,r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,R("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(ee(n)):s.b.error(" \u26a0\ufe0f  ".concat(c.msg)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),C()}},r.a.createElement("i",{className:"far fa-trash-alt"}),r.a.createElement("span",null," Eliminar"))),r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-block",onClick:function(t){t.preventDefault();var n,r=N.title,c=N.start,o=N.end,l=z()(c),u=z()(o);return l.isSameOrAfter(u)?s.b.error(" \u26a0 La fecha final debe ser mayor a la fecha de inicio"):r.trim().length<2?O(!0):(e(a?(n=N,function(){var e=Object(U.a)(H.a.mark((function e(t){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t($(n)):s.b.error(" \u26a0\ufe0f  ".concat(r.msg)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(U.a)(H.a.mark((function t(a,n){var r,c,o,l,s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,R("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.evento.id,e.user={_id:c,name:o},a(Y(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(N)),O(!1),void C())}},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar")))))))}function me(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(Q())}},r.a.createElement("i",{className:"fas fa-plus"}))}z.a.locale("es");var de=Object(X.b)(z.a);function pe(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})).events,a=Object(n.useState)(localStorage.getItem("lastView")||"month"),c=Object(P.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){e(function(){var e=Object(U.a)(H.a.mark((function e(t){var a,n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=W(n.eventos),t(te(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(ae,null),r.a.createElement("div",{className:"calendar-main"},r.a.createElement(X.a,{localizer:de,events:t,startAccessor:"start",endAccessor:"end",messages:K,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#367CF7",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onSelectEvent:function(t){e(function(e){return{type:v,payload:e}}(t)),e(Q())},onSelectSlot:function(){e(Z())},selectable:!0,onView:function(e){s(e),localStorage.setItem("lastView",e)},view:o,components:{event:ne}}),r.a.createElement(me,null)),r.a.createElement(ie,null))}a(115);function fe(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"}))}var ve=a(40);function be(e){var t=e.isAuthenticated,a=e.component,n=Object(ve.a)(e,["isAuthenticated","component"]);return t?r.a.createElement(I.a,{to:"/"}):r.a.createElement(I.b,Object.assign({},n,{component:a}))}function Ee(e){var t=e.isAuthenticated,a=e.component,n=Object(ve.a)(e,["isAuthenticated","component"]);return t?r.a.createElement(I.b,Object.assign({},n,{component:a})):r.a.createElement(I.a,{to:"/login"})}function he(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(U.a)(H.a.mark((function e(t){var a,n,r,c,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(r=n.token,c=n.uid,o=n.name,localStorage.setItem("token",r),localStorage.setItem("token-init-date",(new Date).getTime()),t(G({uid:c,name:o}))):t(F());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement(fe,null):r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement(I.d,null,r.a.createElement(be,{exact:!0,path:"/login",component:B,isAuthenticated:!!c}),r.a.createElement(Ee,{exact:!0,path:"/",component:pe,isAuthenticated:!!c}),r.a.createElement(I.a,{to:"/"}))))}function ge(){return r.a.createElement(l.a,{store:T},r.a.createElement(he,null),r.a.createElement(s.a,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!0}))}a(117);o.a.render(r.a.createElement(ge,null),document.getElementById("root"))},68:function(e,t,a){e.exports=a(119)},77:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.353b0891.chunk.js.map