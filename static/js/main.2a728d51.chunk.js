(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),d=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={today:new Date},e.timeTimerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.setInterval((function(){e.setState({today:new Date})}),1e3),this.timeTimerId=window.setInterval((function(){console.info(e.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeTimerId)}},{key:"render",value:function(){var e=this.props.name,t=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);function u(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={hasClock:!0,clockName:"Clock-0"},e.nameTimerId=0,e.righClickHandler=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.leftClickHandler=function(){e.setState({hasClock:!0})},e.nameInteralHandler=function(){e.setState({clockName:u()})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("contextmenu",this.righClickHandler),window.addEventListener("click",this.leftClickHandler),this.nameTimerId=window.setInterval(this.nameInteralHandler,3300)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(m,{name:t})]})}}]),n}(l.Component);c.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2a728d51.chunk.js.map