(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n(3),s=n(4),c=n(6),l=n(5),u=n(7),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={filter:"",lessons:[]},n.onChangeFilter=function(e){n.setState({filter:e.target.value},n.fetchLessons)},n.fetchLessons=function(){clearTimeout(n.timer),n.timer=setTimeout(function(){var e=n.state.filter;fetch("/api/lessons?filter=".concat(e)).then(function(e){return e.json()}).then(function(e){return n.setState({lessons:e})})},1e3)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchLessons()}},{key:"render",value:function(){var e=this.state.lessons;return a.a.createElement("div",null,a.a.createElement("input",{type:"text",onChange:this.onChangeFilter}),a.a.createElement("ul",null,e.map(function(e){return a.a.createElement("li",{key:e.id},e.title)})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cd56aace.chunk.js.map