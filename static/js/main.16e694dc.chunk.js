(this["webpackJsonpwebmd-card-catalog"]=this["webpackJsonpwebmd-card-catalog"]||[]).push([[0],{10:function(e,a,t){e.exports=t(22)},15:function(e,a,t){},16:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),i=t.n(o),s=(t(15),t(16),t(3)),c=t(8),l=t.n(c),m=t(9);var d=function(e){var a=m[e.category.category].find((function(a){return e.colNum===a.id}));return n.a.createElement("div",{className:"card webmd-card mb-0"},n.a.createElement("div",{className:"webmd-card-body"},n.a.createElement("h3",null,a.label),n.a.createElement("p",null,a.description),n.a.createElement("div",{className:"row webmd-row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"progress webmd-progress"},n.a.createElement("div",{className:"progress-bar webmd-progress-bar",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}))),n.a.createElement("div",{className:"col-sm webmd-stats"},a.stars," ",n.a.createElement(s.a,{icon:"star"})),n.a.createElement("div",{className:"col-sm webmd-stats"},l()(a.id).format({output:"ordinal"})," ",n.a.createElement(s.a,{icon:"chart-bar"}))),n.a.createElement("button",{className:"btn btn-link webmd-button"},"Continue ",n.a.createElement(s.a,{icon:"angle-right"}))))};var u=function(e){var a=[1,2,3],t="mb-3";return"Computers"===e.category.category?e.row>1&&(a=[4],t="mb-5"):e.row>1&&(a=[4,5],t="mb-5"),n.a.createElement("div",{className:"card-deck webmd-card-deck ".concat(t," text-left")},a.map((function(a,t){return n.a.createElement(d,{key:a,colNum:a,category:e.category})})))};var h=function(e){return[1,2].map((function(a,t){return n.a.createElement(u,{key:t,row:a,category:e})}))};var b=function(){return n.a.createElement("nav",{className:"navbar webmd-navbar navbar-expand-lg"},"Logo")};var p=function(){return n.a.createElement("React-Fragment",null,n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"webmd-logo-label"},"Logo"),["Computers","Movies"].map((function(e,a){return n.a.createElement("React-Fragment",{key:a},n.a.createElement("h1",{className:"webmd-label"},e),n.a.createElement(h,{category:e}))}))),n.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=t(2),f=t(4);g.b.add(f.a,f.b,f.c),i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('{"Computers":[{"id":1,"label":"CPU: Central Processing Unit","description":"The CPU (Central Processing Unit) is the part of a computer system that\u2026","stars":1540},{"id":2,"label":"GPU: Graphics Processing Unit","description":"A graphics processing unit (GPU) is a specialized electronic circuit\u2026","stars":485},{"id":3,"label":"Hard Disk Drive","description":"A hybrid hard drive (HHD), sometimes known as a solid-state hybrid\u2026","stars":291},{"id":4,"label":"Motherboard and Main Memory","description":"Motherboard: Definition. A motherboard is one of the\u2026","stars":102}],"Movies":[{"id":1,"label":"Lord of the Rings: Return of the King","description":"The Lord of the Rings: The Return of the King is a 2003 epic fantasy\u2026","stars":3494},{"id":2,"label":"Close Encounters of the Third Kind","description":"Close Encounters of the Third Kind is a 1977 American science fiction film\u2026","stars":2843},{"id":3,"label":"Guardians of the Galaxy: Volume 2","description":"Guardians of the Galaxy Vol. 2 is a 2017 American superhero film\u2026","stars":1540},{"id":4,"label":"The man who knew too much","description":"The Man Who Knew Too Much is a 1956 American suspense thriller\u2026","stars":494},{"id":5,"label":"The Lord of the Rings: The Fellowship of the Ring","description":"The Fellowship of the Ring was released on 19 December 2001\u2026","stars":202}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.16e694dc.chunk.js.map