(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),o=n.n(s),r=n(0),b=function(t){var e,n=t.tabs,c=t.selectedTabId,i=t.onTabSelected,a=function(t){return o()({"is-active":n.some((function(t){return t.id===c}))&&t.id===c||t.id===n[0].id&&n.every((function(t){return t.id!==c}))})};return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:n.map((function(t){return Object(r.jsx)("li",{className:a(t),"data-cy":"Tab",children:Object(r.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==c&&i(t)}(t)},children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=n.find((function(t){return t.id===c})))||void 0===e?void 0:e.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t,e=Object(d.useState)(l[0].id),n=Object(a.a)(e,2),c=n[0],i=n[1];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(null===(t=l.find((function(t){return t.id===c})))||void 0===t?void 0:t.title)}),Object(r.jsx)(b,{tabs:l,selectedTabId:c,onTabSelected:function(t){l.some((function(t){return t.id===c}))?i(t.id):i(l[0].id)}})]})};i.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.42f6dfa4.chunk.js.map