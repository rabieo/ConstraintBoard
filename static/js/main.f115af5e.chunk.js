(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var c,i,r,o,s,a,l,d,b,j,u=t(0),x=t.n(u),p=t(12),m=t.n(p),f=(t(20),t(4)),O=t(2),h=t(7),g=t(3),C=(t(21),t(1));var v=function(){var n=Object(u.useState)([]),e=Object(h.a)(n,2),t=e[0],x=e[1],p=Object(u.useState)([]),m=Object(h.a)(p,2),v=m[0],N=m[1],S=Object(u.useState)([]),w=Object(h.a)(S,2),k=w[0],A=w[1],y=g.a.div(c||(c=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  "]))),E=g.a.h1(i||(i=Object(O.a)(["\n  flex: 0 0 100%;\n  color: blue;\n  text-align: center;\n  "]))),P=g.a.div(r||(r=Object(O.a)(["\n  flex: 0 0 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  "]))),D=g.a.h3(o||(o=Object(O.a)(["\n  flex: 0 0 100%;\n  color: black;\n  text-align: center;\n  margin: 0px;\n  "]))),F=g.a.h4(s||(s=Object(O.a)(["\n  flex: 0 0 100%;\n  color: black;\n  margin: 10px 30px;\n  "]))),B=g.a.div(a||(a=Object(O.a)(["\n  flex: 0 0 100%;\n  color: black;\n  margin: 8px 50px;\n  "]))),z=g.a.div(l||(l=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 450px;\n  color: white;\n  border: 2px solid black;\n  "]))),T=(g.a.button(d||(d=Object(O.a)(["\n  padding: 4px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  background-color: white; \n  color: black; \n  border: 2px solid #4CAF50;\n  &:hover {\n    background-color: #4CAF50;\n    color: white;\n  }\n  "]))),g.a.input(b||(b=Object(O.a)(["\n  width: 90%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid blue;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin: 10px 5%;\n  "])))),I=g.a.input(j||(j=Object(O.a)(["\n  width: 90%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid red;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin: 10px 5%;\n  "]))),J=function(n,e){console.log(e),"Design"==e?x((function(e){return[].concat(Object(f.a)(e),[{sectionsName:"".concat(n.target.firstElementChild.value),list:[]}])})):"Preconstruction"==e?N((function(e){return[].concat(Object(f.a)(e),[{sectionsName:"".concat(n.target.firstElementChild.value),list:[]}])})):"Construction"==e&&A((function(e){return[].concat(Object(f.a)(e),[{sectionsName:"".concat(n.target.firstElementChild.value),list:[]}])}))},L=function(n,e,c){if(console.log(c),"Design"==e){var i=Object(f.a)(t);i=i.map((function(e){return e.sectionsName==c?{sectionsName:e.sectionsName,list:[].concat(Object(f.a)(e.list),[n.target.firstElementChild.value])}:e})),x(i)}else if("Preconstruction"==e){var r=Object(f.a)(v);r=r.map((function(e){return e.sectionsName==c?{sectionsName:e.sectionsName,list:[].concat(Object(f.a)(e.list),[n.target.firstElementChild.value])}:e})),N(r)}else if("Construction"==e){var o=Object(f.a)(k);o=o.map((function(e){return e.sectionsName==c?{sectionsName:e.sectionsName,list:[].concat(Object(f.a)(e.list),[n.target.firstElementChild.value])}:e})),A(o)}};return Object(C.jsxs)(y,{children:[Object(C.jsx)(E,{children:"BCA2 + TRBC Constraint Board"}),Object(C.jsxs)(P,{children:[Object(C.jsxs)(z,{children:[Object(C.jsx)(D,{children:"Design"}),t.map((function(n){return Object(C.jsxs)("div",{children:[Object(C.jsx)(F,{children:n.sectionsName}),n.list.map((function(n){return Object(C.jsx)(B,{children:n})})),Object(C.jsx)("form",{onSubmit:function(e){L(e,"Design",n.sectionsName)},children:Object(C.jsx)(I,{placeholder:"Add Constrant"})})]})})),Object(C.jsx)("form",{onSubmit:function(n){J(n,"Design")},children:Object(C.jsx)(T,{placeholder:"Add Section"})})]}),Object(C.jsxs)(z,{children:[Object(C.jsx)(D,{children:"Preconstruction"}),v.map((function(n){return Object(C.jsxs)("div",{children:[Object(C.jsx)(F,{children:n.sectionsName}),n.list.map((function(n){return Object(C.jsx)(B,{children:n})})),Object(C.jsx)("form",{onSubmit:function(e){L(e,"Preconstruction",n.sectionsName)},children:Object(C.jsx)(I,{placeholder:"Add Constrant"})})]})})),Object(C.jsx)("form",{onSubmit:function(n){J(n,"Preconstruction")},children:Object(C.jsx)(T,{placeholder:"Add Section"})})]}),Object(C.jsxs)(z,{children:[Object(C.jsx)(D,{children:"Construction"}),k.map((function(n){return Object(C.jsxs)("div",{children:[Object(C.jsx)(F,{children:n.sectionsName}),n.list.map((function(n){return Object(C.jsx)(B,{children:n})})),Object(C.jsx)("form",{onSubmit:function(e){L(e,"Construction",n.sectionsName)},children:Object(C.jsx)(I,{placeholder:"Add Constrant"})})]})})),Object(C.jsx)("form",{onSubmit:function(n){J(n,"Construction")},children:Object(C.jsx)(T,{placeholder:"Add Section"})})]})]})]})},N=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),c(n),i(n),r(n),o(n)}))};m.a.render(Object(C.jsx)(x.a.StrictMode,{children:Object(C.jsx)(v,{})}),document.getElementById("root")),N()}},[[27,1,2]]]);
//# sourceMappingURL=main.f115af5e.chunk.js.map