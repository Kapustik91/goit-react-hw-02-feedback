(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,c){e.exports={list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),s=c.n(a),i=c(5),r=c.n(i),o=c(6),l=c(7),u=c(8),b=c(11),j=c(10);function d(e){var t=e.title,c=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t}),c]})}var h=c(4),O=c.n(h);function x(e){var t=e.options,c=e.onLeaveFeedback,a=e.getBtnName,s=Object.keys(t);return Object(n.jsx)("ul",{className:O.a.list,children:s.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("button",{onClick:function(){return c(e)},className:O.a.button,children:[a(e),""]})},e)}))})}var m=c(9),v=c.n(m);function f(e){var t=e.message;return Object(n.jsx)("p",{className:v.a.text,children:t})}var p=c(1),g=c.n(p);function k(e){var t=e.good,c=e.neutral,a=e.bad,s=e.total,i=e.positivePercentage;return Object(n.jsxs)("ul",{className:g.a.list,children:[Object(n.jsx)("li",{className:g.a.item,children:Object(n.jsxs)("p",{children:["Good: ",t]})}),Object(n.jsx)("li",{className:g.a.item,children:Object(n.jsxs)("p",{children:["Neutral: ",c]})}),Object(n.jsx)("li",{className:g.a.item,children:Object(n.jsxs)("p",{children:["Bad: ",a]})}),Object(n.jsx)("li",{className:g.a.item,children:Object(n.jsxs)("p",{children:["Total: ",s]})}),Object(n.jsx)("li",{className:g.a.item,children:Object(n.jsxs)("p",{children:["Positive feedback: ",i,"%"]})})]})}var N=function(e){Object(b.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.setActiveItem=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.getBtnName=function(e){return"".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1).toLowerCase())},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(u.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{title:"Please leave feedback :)",children:Object(n.jsx)(x,{options:this.state,onLeaveFeedback:this.setActiveItem,getBtnName:this.getBtnName})}),Object(n.jsx)(d,{title:"Statistics: ",children:0===this.countTotalFeedback()?Object(n.jsx)(f,{message:"No feedback given"}):Object(n.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),c}(a.Component);c(17);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))},4:function(e,t,c){e.exports={list:"FeedbackOptions_list__2lRUp",button:"FeedbackOptions_button__3n-hy"}},9:function(e,t,c){e.exports={text:"Notification_text__3WvWm"}}},[[18,1,2]]]);
//# sourceMappingURL=main.6ba5b51a.chunk.js.map