(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(6),r=n.n(o),s=(n(12),n(7)),i=n(5),a=n(0),j=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"ListItem",children:[Object(a.jsx)("button",{className:"cross",onClick:function(){e.onCross(e.id)},children:"X"}),Object(a.jsx)("li",{children:e.item})]})})},l=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),d=l[0],u=l[1],b=function(e){u((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mainContainer",children:[Object(a.jsx)("h1",{className:"heading",children:"Todo List"}),Object(a.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;o(t)},placeholder:"Add an item",value:n}),Object(a.jsx)("button",{onClick:function(e){u((function(e){return[].concat(Object(s.a)(e),[n])})),o("")},className:"add",children:"+"}),Object(a.jsx)("ol",{children:d.map((function(e,t){return Object(a.jsx)(j,{id:t,item:e,onCross:b},t)}))})]})})};var d=function(){return Object(a.jsx)(l,{})},u=(new Date).getHours(),b="",h={};u>=1&&u<12?(b="  Good Morning...",h.color="green"):u>=12&&u<20?(b="  Good Afternoon...",h.color="pink"):(b="  Good Night.........",h.color="yellow"),r.a.render(Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["Hello Sir!",Object(a.jsx)("span",{style:h,children:b})]}),Object(a.jsx)(d,{})]}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0714faf1.chunk.js.map