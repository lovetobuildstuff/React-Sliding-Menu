(this.webpackJsonpslidingmenu=this.webpackJsonpslidingmenu||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(7),i=t.n(o),u=(t(13),t(1)),r=t(2),c=t(5),s=t(4),h=t(3),m=(t(14),function(e){Object(s.a)(t,e);var n=Object(h.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return console.log("Rendering: MenuButton"),l.a.createElement("button",{id:"roundButton",onMouseDown:this.props.handleMouseDown})}}]),t}(a.PureComponent)),d=(t(15),function(e){Object(s.a)(t,e);var n=Object(h.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){console.log("Rendering: Menu");var e="hide";return this.props.menuVisibility&&(e="show"),l.a.createElement("div",{id:"flyoutMenu",onMouseDown:this.props.handleMouseDown,className:e},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://github.com/lovetobuildstuff"},"Home")),l.a.createElement("h2",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/jalake/"},"About")),l.a.createElement("h2",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/jalake/"},"Contact")),l.a.createElement("h2",null,l.a.createElement("a",{href:"https://github.com/lovetobuildstuff"},"Search")))}}]),t}(a.Component)),b=function(e){Object(s.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).state={visible:!1},a.handleMouseDown=a.handleMouseDown.bind(Object(c.a)(a)),a.toggleMenu=a.toggleMenu.bind(Object(c.a)(a)),a}return Object(r.a)(t,[{key:"handleMouseDown",value:function(e){this.toggleMenu(),console.log("clicked"),e.stopPropagation()}},{key:"toggleMenu",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){return console.log("Rendering: MenuContainer"),l.a.createElement("div",null,l.a.createElement(m,{handleMouseDown:this.handleMouseDown}),l.a.createElement(d,{handleMouseDown:this.handleMouseDown,menuVisibility:this.state.visible}),l.a.createElement("div",null,l.a.createElement("p",null,"Spot the item that doesn't fit with the rest of this list"),l.a.createElement("ul",null,l.a.createElement("li",null,"Amazon EC2"),l.a.createElement("li",null,"Amazon S3"),l.a.createElement("li",null,"Amazon Aurora"),l.a.createElement("li",null,"Amazon DynamoDB"),l.a.createElement("li",null,"Amazon IoT"),l.a.createElement("li",null,"Amazon VPC"),l.a.createElement("li",null,"Indigenous tribes of the Amazon rainforest"),l.a.createElement("li",null,"Amazon Lightsail"),l.a.createElement("li",null,"Amazon SageMaker"))))}}]),t}(a.Component),f=document.querySelector("#container");i.a.render(l.a.createElement(b,null),f)}],[[8,1,2]]]);
//# sourceMappingURL=main.c42fb75c.chunk.js.map