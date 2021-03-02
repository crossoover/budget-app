(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var a,r,c,s,i,b=t(0),o=t(24),l=t.n(o),j=t(17),u=t(2),d=t(7),h=t(8),O=Object(h.a)(a||(a=Object(d.a)(["\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody,\nul,\nol,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n\nul,\nol {\n  list-style: none;\n  padding: 0;\n}\n\ninput,\nbutton {\n  border: none;\n  outline: none;\n}\n\n"]))),x=h.b.div(r||(r=Object(d.a)(["\n     padding: 10px;\n     background: #eeeeee;\n"]))),p=h.b.ul(c||(c=Object(d.a)(["\n     display: flex;\n     padding: 20px 0 20px 20px;\n"]))),v=Object(h.b)(j.b)(s||(s=Object(d.a)(["\n     text-decoration: none;\n     color: black;\n     margin: 5px 10px;\n     background: #dbdbdb;\n     padding: 5px;\n     border-radius: 5px;\n"]))),f=t(18),m=t(10),g=t(11),k=t(13),y=t(12),S=t(1),C=function(e){var n=e.balance;return Object(S.jsxs)("div",{children:["Current balance: ",n," USD"]})},w=h.b.div(i||(i=Object(d.a)(["\n     background: ",";\n     font-family: 'Helvetica', sans-serif;\n     border: 3px solid #333333;\n     border-radius: 5px;\n     padding: 5px;\n     margin-bottom: 10px;\n     color: ",";\n"])),(function(e){var n=e.value;return n<0?"#797979":n>0?"#f2f2f2":"#ffff74"}),(function(e){return e.value<0?"white":"black"}));w.displayName="TransactionWrapper";var E=function(e){var n=e.transaction,t=n.value,a=n.label;return Object(S.jsxs)(w,{value:t,children:["Label: ",a,Object(S.jsx)("br",{}),"Value: ",t,Object(S.jsx)("br",{})]})};E.defaultProps={transaction:{label:"",value:0}};var H,N=E,D=function(e){var n=e.transactions,t=void 0===n?[]:n;return Object(S.jsx)("div",{children:t.map((function(e){return Object(S.jsx)(N,{transaction:e},e.id)}))})},A=function(e){Object(k.a)(t,e);var n=Object(y.a)(t);function t(){var e;return Object(m.a)(this,t),(e=n.call(this)).onSubmit=function(n){n.preventDefault(),e.props.onChange(e.state.value),e.setState({value:""})},e.onChange=function(n){var t=n.target.value;e.setState({value:+t})},e.state={value:""},e}return Object(g.a)(t,[{key:"render",value:function(){return Object(S.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(S.jsx)("input",{name:"balance",type:"number",placeholder:"Enter sum",onChange:this.onChange,value:this.state.value}),Object(S.jsx)("button",{children:"Save"})]})}}]),t}(b.Component),B=h.b.div(H||(H=Object(d.a)(["\n     padding: 10px;\n     background: #eeeeee;\n"]))),F=function(e){Object(k.a)(t,e);var n=Object(y.a)(t);function t(e){var a;return Object(m.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(g.a)(t,[{key:"componentDidCatch",value:function(e,n){console.error("error")}},{key:"render",value:function(){return this.state.hasError?Object(S.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(b.Component),I=0,J=function(e){Object(k.a)(t,e);var n=Object(y.a)(t);function t(){var e;return Object(m.a)(this,t),(e=n.call(this)).onChange=function(n){n>0?e.setState((function(e){return{balance:e.balance+Number(n),transactions:[{value:n,label:"plus",id:++I}].concat(Object(f.a)(e.transactions))}})):n<0?e.setState((function(e){return{balance:e.balance+Number(n),transactions:[{value:n,label:"minus",id:++I}].concat(Object(f.a)(e.transactions))}})):e.setState((function(e){return{balance:e.balance+Number(n),transactions:[{value:n,label:"error",id:++I}].concat(Object(f.a)(e.transactions))}}))},e.state={balance:0,transactions:[]},e}return Object(g.a)(t,[{key:"render",value:function(){return Object(S.jsx)(F,{children:Object(S.jsxs)(B,{children:[Object(S.jsx)("h1",{children:"Budget calculator"}),Object(S.jsx)("br",{}),Object(S.jsx)(C,{balance:this.state.balance}),Object(S.jsx)(A,{onChange:this.onChange}),Object(S.jsx)("hr",{}),Object(S.jsx)(D,{transactions:this.state.transactions})]})})}}]),t}(b.Component),z=function(){return Object(S.jsx)("h1",{children:"Here will be statistics page"})},L=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{children:"Instructions"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("p",{children:"Enter some number to add or enter some number with minus to subtract."}),Object(S.jsx)("br",{}),Object(S.jsxs)("p",{children:["All the operations are shown below the ",Object(S.jsx)("b",{children:"calculator."})]}),Object(S.jsx)("br",{}),Object(S.jsxs)("p",{children:[Object(S.jsx)("b",{children:"Notice:"})," all the operations will be deleted, once You refresh the page."]})]})},P=function(){return Object(S.jsx)(j.a,{children:Object(S.jsxs)(x,{children:[Object(S.jsx)(O,{}),Object(S.jsx)("nav",{children:Object(S.jsxs)(p,{children:[Object(S.jsx)("li",{children:Object(S.jsx)(v,{to:"/",children:"Home"})}),Object(S.jsx)("li",{children:Object(S.jsx)(v,{to:"/statistics",children:"Statistics"})}),Object(S.jsx)("li",{children:Object(S.jsx)(v,{to:"/about",children:"How to use?"})})]})}),Object(S.jsxs)(u.c,{children:[Object(S.jsx)(u.a,{path:"/statistics",children:Object(S.jsx)(z,{})}),Object(S.jsx)(u.a,{path:"/about",children:Object(S.jsx)(L,{})}),Object(S.jsx)(u.a,{path:"/",children:Object(S.jsx)(J,{})})]})]})})};l.a.render(Object(S.jsx)(P,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b771e4d7.chunk.js.map