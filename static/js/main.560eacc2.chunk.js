(this["webpackJsonpbus-res-app"]=this["webpackJsonpbus-res-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(14),a(1)),u=a(3),i=(a(15),a(5)),s=a(6);var m=function(e){var t=e.rows,a=e.setNewValues,r=e.deleteRow,c=e.addMode,o=Object(n.useState)({key:null,value:{}}),m=Object(u.a)(o,2),d=m[0],v=m[1],f=Object(n.useState)(!1),E=Object(u.a)(f,2),p=E[0],h=E[1],g=function(e){var n=d.value,l=n.name,r=n.dept,c=n.skills;if(void 0!==l&&0!==l.length&&void 0!==r&&0!==r.length&&void 0!==c&&0!==c.length){var o=t;o.splice(d.key,1,d.value),a(o),v({key:null,value:{}}),h(!1)}else alert("Please add values to save")},k=function(){var e=t;p||(e.pop(),a(e)),v({key:null,value:{}}),h(!1)},b=function(e,a,n){return l.a.createElement("input",{placeholder:e,value:d.value[n]!==t[a][n]?d.value[n]:t[a][n],onChange:function(e){return function(e,t,a){var n=d.value,l=Object(s.a)(Object(s.a)({},n),{},Object(i.a)({},a,e.target.value));v({key:t,value:l})}(e,a,n)}})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{border:"1",className:"center"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Department"),l.a.createElement("th",null,"Skills"),l.a.createElement("th",null,"Action")),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement(l.a.Fragment,null,p&&t===d.key?l.a.createElement("tr",null,l.a.createElement("td",null,b("Name",t,"name")),l.a.createElement("td",null," ",b("Department",t,"dept")),l.a.createElement("td",null,b("Skills",t,"skills")),l.a.createElement("td",null,l.a.createElement("a",{href:"#",onClick:function(){return g(0)}},"Save"),l.a.createElement("br",null),l.a.createElement("a",{href:"#",onClick:function(e){return k()}},"Cancel"))):l.a.createElement("tr",null,l.a.createElement("td",null,""===e.name?b("Name",t,"name"):e.name),l.a.createElement("td",null,""===e.dept?b("Department",t,"dept"):e.dept),l.a.createElement("td",null,""===e.skills?b("Skills",t,"skills"):e.skills),""!==e.name?l.a.createElement("td",null,l.a.createElement("a",{href:"#",onClick:function(a){return function(e,t,a){null===d.key&&void 0===c?(h(!0),v({key:a,value:t})):alert("Please cancel/save to edit other employee details")}(0,e,t)}},"Edit"),l.a.createElement("br",null),l.a.createElement("a",{href:"#",onClick:function(t){r(e)}},"Delete")):l.a.createElement("td",null,l.a.createElement("a",{href:"#",onClick:function(){return g(0)}},"Save"),l.a.createElement("br",null),l.a.createElement("a",{href:"#",onClick:function(e){return k()}},"Cancel"))))})))))};var d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{placeholder:"Search",onChange:e.onSearch}))};var v=function(){var e=Object(n.useState)([{name:"Praveen",dept:"Development",skills:"C# ,Javascript"}]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return localStorage.setItem("rows",JSON.stringify(a)),function(){return localStorage.removeItem("rows")}}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Welcome To HR System"),l.a.createElement(d,{onSearch:function(e){if(e.target.value.length>0){var t=a.filter((function(t){return t.name.includes(e.target.value)||t.dept.includes(e.target.value)||t.skills.includes(e.target.value)}));t.length>0?r(Object(o.a)(t)):r(JSON.parse(localStorage.getItem("rows")))}else r(JSON.parse(localStorage.getItem("rows")))}}),l.a.createElement("br",null),l.a.createElement("br",null),a.length>0?l.a.createElement(m,{rows:a,setRows:r,setNewValues:function(e){var t=e;r(Object(o.a)(t)),localStorage.setItem("rows",JSON.stringify(t))},deleteRow:function(e){var t=Object(o.a)(a),n=t.indexOf(e);t.splice(n,1),localStorage.setItem("rows",JSON.stringify(t)),r(Object(o.a)(t))},addMode:a.find((function(e){return""===e.name||""===e.dept||""===e.skills}))}):l.a.createElement(l.a.Fragment,null,"No Values in the table, please add new employees"),l.a.createElement("br",null),l.a.createElement("a",{href:"#",onClick:function(e){var t=a;r([].concat(Object(o.a)(t),[{name:"",dept:"",skills:""}]))}},"Add Employee"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.560eacc2.chunk.js.map