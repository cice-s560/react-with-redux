(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){},23:function(e,t,n){e.exports=n(34)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(17),r=n.n(c),u=n(9),l=(n(32),n(6)),i=n(7),s=n(11),m=n(8),d=n(10),p=n(19),f=n.n(p),b=(n(33),"SUMA"),h="RESTA",E="SALUDO",v="DESPIDE",g=Object(u.b)(function(e){return{clicks:e.cice.counter,texto:e.comunicacion.message}},function(e){return{onSuma:function(t){e(function(e){return{type:b,payload:{amount:e}}}(t))},onResta:function(t){e(function(e){return{type:h,payload:{amount:e}}}(t))},onSaluda:function(){e({type:E})},onDespide:function(){e({type:v})},onWaste:function(){return console.log("Perdiendo tiempo")}}})(function(e){return o.a.createElement("div",null,o.a.createElement("p",null,e.texto," Clase. Hemos pulsado ",e.clicks," veces"),o.a.createElement("button",{onClick:function(){e.onSuma(1)}},"Suma"),o.a.createElement("button",{onClick:function(){e.onResta(1)}},"Resta"),o.a.createElement("button",{onClick:function(){e.onSaluda()}},"Saluda"),o.a.createElement("button",{onClick:function(){e.onDespide()}},"Despide"),o.a.createElement("button",{onClick:function(){e.onWaste()}},"Waste"))}),j=n(20),y=n.n(j),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={users:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:y.a.marius},o.a.createElement("p",null,"Lista de usuarios: "),o.a.createElement("ul",null,this.state.users&&this.state.users.map(function(e,t){return o.a.createElement("li",{key:"user_".concat(t)},"Usuario: ",e.name)})))}}]),t}(o.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null),o.a.createElement("div",{styles:"background: #444; color: #fafafa;"},o.a.createElement(O,null)),o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(1),S=n(3),A={counter:3,other:null};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(S.a)({},e,{counter:e.counter+t.payload.amount});case h:return Object(S.a)({},e,{counter:e.counter-t.payload.amount});default:return e}},D={message:"(inicio)"};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;switch((arguments.length>1?arguments[1]:void 0).type){case E:return Object(S.a)({},e,{message:"Hola"});case v:return Object(S.a)({},e,{message:"Adi\xf3s"});default:return e}},W=n(21),N=n.n(W),x=n(22),L=Object(w.combineReducers)({cice:C,comunicacion:R}),U=Object(w.applyMiddleware)(N.a),B=Object(x.composeWithDevTools)(U),H=Object(w.createStore)(L,B);r.a.render(o.a.createElement(function(){return o.a.createElement(u.a,{store:H},o.a.createElement(k,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.52758349.chunk.js.map