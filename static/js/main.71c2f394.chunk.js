(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(13),s=t.n(l),c=(t(93),t(95),t(97),t(99),t(14)),o=t(15),m=t(17),i=t(16),u=t(18),d=t(154),E=t(146),f=t(153),h=t(155),p=t(2),g=t(82),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-12 d-flex justify-content-center"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-fw fa-3x text-primary"})),r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("p",null,"Loading...")))},b="http://localhost:3002/";var v=function(e){if(e.isLoading)return r.a.createElement("div",{className:"conatiner"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null)));if(e.errMess)return r.a.createElement("div",{className:"conatiner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 "},r.a.createElement("h4",{className:"text-center"},e.errMess))));var a=e.dishes.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-6 mt-2 mb-2"},r.a.createElement(g.a,{to:"/menu/".concat(e.id)},r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.g,{width:"100%",src:b+e.image,alt:e.name})),r.a.createElement(p.h,null,r.a.createElement(p.k,null,e.name)))))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(g.a,{to:"/home"},"Home")),r.a.createElement(p.b,{active:!0},"Menu")))),r.a.createElement("div",{className:"row"},a))},y=t(26),O=t(5),w=t(12),M=function(e,a,t,n,r,l,s){var c={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,message:s,date:(new Date).toISOString()};fetch(b+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;throw new Error("Error ".concat(e.status," : ").concat(e.statusText))}).then(function(e){return e.json()}).then(function(e){return alert(JSON.stringify(e))}).catch(function(e){return console.log(e)||alert(e)})},L=function(e){return{type:"ADDING_LEADERS",payload:e}},k=function(){return{type:"LOADING_LEADERS"}},j=function(e){return{type:"FAILD_LEADERS",payload:e}},S=function(e){return{type:"ADD_COMMENTS",payload:e}},D=function(e){return{type:"FAILD_COMMENTS",payload:e}},x=function(){return{type:"LOADING_DISHES"}},F=function(e){return{type:"LOADING_FAILD",payload:e}},C=function(e){return{type:"ADD_DISHES",payload:e}},A=function(e){return{type:"ADD_PROMOS",payload:e}},I=function(){return{type:"LOADING_PROMOS"}},T=function(e){return{type:"PROMOS_FAILD",payload:e}},R=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={isModalOpen:!1},t.toggleModal=t.toggleModal.bind(Object(y.a)(Object(y.a)(t))),t.submitHandle=t.submitHandle.bind(Object(y.a)(Object(y.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"submitHandle",value:function(e){var a,t,n,r;this.props.dispatch((a=this.props.dishId,t=e.name,n=e.rating,r=e.comment,function(e){var l={dishId:a,author:t,rating:n,comment:r};l.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}).then(function(e){if(e.ok)return e;throw new Error("Error ".concat(e.status," : ").concat(e.statusText))}).then(function(e){return e.json()}).then(function(a){return e({type:"ADD_COMMENT",payload:a})}).catch(function(e){return console.log(e)})})),this.toggleModal()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(p.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(p.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(p.u,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(O.LocalForm,{onSubmit:this.submitHandle},r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"rating"},"Rating"),r.a.createElement(O.Control.select,{id:"rating",model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"name"},"Your Name"),r.a.createElement(O.Control.text,{model:".name",id:"name",name:"name",className:"form-control",validators:{minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:function(e){return function(a){return!a||a.length<=e}}(15)}}),r.a.createElement(O.Errors,{model:".name",show:"touched",className:"text-danger",messages:{minLength:"The name should be greater than 3 characters",maxLength:"The name should be less than 15 characters"}})),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{htmlFor:"comment"},"Comment"),r.a.createElement(O.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})),r.a.createElement(p.B,null,r.a.createElement(p.c,{type:"submit",color:"primary"},"Submit"))))))))),r.a.createElement(p.c,{outline:!0,color:"dark",onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-edit fa-lg"}),r.a.createElement("span",null,"Submit Comment")));var e}}]),a}(r.a.Component),_=Object(w.connect)()(R),H=t(21);var P=function(e){return e.isLoading?r.a.createElement("div",{className:"conatiner"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.errMess?r.a.createElement("div",{className:"conatiner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 "},r.a.createElement("h4",null,e.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(g.a,{to:"/home"},"Home")),r.a.createElement(p.b,null,r.a.createElement(g.a,{to:"/menu"},"Menu")),r.a.createElement(p.b,{active:!0},e.dish.name)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(H.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(p.d,null,r.a.createElement(p.g,{width:"100%",src:b+e.dish.image,alt:e.dish.name}),r.a.createElement(p.e,null,r.a.createElement(p.k,null,e.dish.name),r.a.createElement(p.j,null,e.dish.description))))),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Comments"),r.a.createElement(H.Stagger,{in:!0},e.comments.map(function(e){return r.a.createElement(H.Fade,{in:!0,key:e.id},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,e.comment),r.a.createElement("li",null,"-- ",e.author," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}),r.a.createElement(_,{dishId:e.dish.id})))))},B=t(151),G=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).toggleNav=function(){t.setState({isNavOpen:!t.state.isNavOpen})},t.toggleModal=function(){t.setState({isModalOpen:!t.state.isModalOpen})},t.handleLogin=function(e){t.toggleModal(),alert("Username : ".concat(t.username.value," password : ").concat(t.password.value," Remember me : ").concat(t.remember.checked)),e.preventDefault()},t.state={isNavOpen:!1,isModalOpen:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(p.A,{onClick:this.toggleNav}),r.a.createElement(p.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",alt:"Restoran Con Fusion",height:"30",width:"41"})),r.a.createElement(p.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(p.w,{navbar:!0},r.a.createElement(p.x,null,r.a.createElement(B.a,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(p.x,null,r.a.createElement(B.a,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(p.x,null,r.a.createElement(B.a,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(p.x,null,r.a.createElement(B.a,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(p.w,{className:"ml-auto",navbar:!0},r.a.createElement(p.x,null,r.a.createElement(p.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}),r.a.createElement("span",null,"Login"))))))),r.a.createElement(p.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(p.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(p.v,{toggle:this.toggleModal},"Login"),r.a.createElement(p.u,null,r.a.createElement(p.n,{onSubmit:this.handleLogin},r.a.createElement(p.o,null,r.a.createElement(p.r,{htmlFor:"username"},"Username"),r.a.createElement(p.p,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(p.o,null,r.a.createElement(p.r,{htmlFor:"password"},"Password"),r.a.createElement(p.p,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(p.o,{check:!0},r.a.createElement(p.r,{check:!0},r.a.createElement(p.p,{type:"checkbox",id:"remember",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember")),r.a.createElement(p.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var q=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.a,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function U(e){return e.isLoading?r.a.createElement(N,null):e.errMess?r.a.createElement("div",null,r.a.createElement("h4",null,e.errMess)):r.a.createElement(H.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(p.d,null,r.a.createElement(p.g,{src:b+e.item.image,alt:e.item.name}),r.a.createElement(p.e,null,r.a.createElement(p.k,null,e.item.name),e.item.designation?r.a.createElement(p.i,null,e.item.designation):null,r.a.createElement(p.j,null,e.item.description))))}var W=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(U,{item:e.dish,isLoading:e.dishesIsLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(U,{item:e.promotion,isLoading:e.promosIsLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(U,{item:e.leader,isLoading:e.leadersIsLoading,errMess:e.leadersErrMess}))))},Y=function(e){return e&&e.length},K=function(e){return function(a){return!a||a.length<=e}},z=function(e){return function(a){return a&&a.length>=e}},J=function(e){return!isNaN(Number(e))&&e&&11===e.length},Z=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},$=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){M(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),t.props.resetFeedbackForm()},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(g.a,{to:"/home"},"Home")),r.a.createElement(p.b,{active:!0},"Contact Us")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",href:"/",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(O.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{md:2,htmlFor:"firstname"},"First Name"),r.a.createElement(p.l,{md:10},r.a.createElement(O.Control.text,{model:".firstname",max:3,name:"firstname",placeholder:"First Name",className:"form-control",id:"firstname",validators:{required:Y,maxLength:K(15),minLength:z(3)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"This field is required",maxLength:"lastname should be or less than 15 characters",minLength:"firstname should be or greater than 3 characters"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{md:2,htmlFor:"lastname"},"First Name"),r.a.createElement(p.l,{md:10},r.a.createElement(O.Control.text,{model:".lastname",name:"lastname",placeholder:"Last Name",className:"form-control",id:"lastname",validators:{required:Y,minLength:z(3),maxLength:K(15)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"This field is required",minLenght:"firstname should be or greater than 3 characters",maxLength:"lastname should be or less than 15 characters"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{md:2,htmlFor:"telnum"},"Contact Tel."),r.a.createElement(p.l,{md:10},r.a.createElement(O.Control.text,{model:".telnum",name:"telnum",placeholder:"Tel.",className:"form-control",id:"telnum",validators:{isNumber:J}}),r.a.createElement(O.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{isNumber:"Please enter valid number"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{md:2,htmlFor:"email"},"Email"),r.a.createElement(p.l,{md:10},r.a.createElement(O.Control.text,{model:".email",name:"email",placeholder:"Email",className:"form-control",id:"email",validators:{required:Y,validEmail:Z}}),r.a.createElement(O.Errors,{className:"text-danger",model:".email",show:"touched",messages:{validEmail:"Please enter valid email address"}}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(p.r,{check:!0},r.a.createElement(O.Control.checkbox,{model:".agree",name:"agree",placeholder:"Last Name",className:"form-check-input"}),r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(p.l,{md:{size:3,offset:1}},r.a.createElement(O.Control.select,{model:".contactType",className:"form-control",name:"contactType"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.r,{md:2,htmlFor:"message"},"Message"),r.a.createElement(p.l,{md:10},r.a.createElement(O.Control.textarea,{model:".message",rows:"12",name:"message",className:"form-control",id:"message"}))),r.a.createElement(p.B,{className:"form-group"},r.a.createElement(p.l,{md:{size:10,offset:2}},r.a.createElement(p.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(r.a.Component);var Q=function(e){var a=e.props;return a.isLoading?r.a.createElement(N,null):a.errMess?r.a.createElement("div",null,r.a.createElement("h4",{className:"text-center"},a.errMess),r.a.createElement("img",{src:"assets/buffet.png",alt:"buffet"})):r.a.createElement(H.Stagger,{in:!0},a.leaders.map(function(e){return r.a.createElement(H.Fade,{in:!0,key:e.id},r.a.createElement(V,{leader:e}))}))},V=function(e){return r.a.createElement(p.s,null,r.a.createElement(p.s,{left:!0,className:"mr-4"},r.a.createElement(p.s,{object:!0,src:b+e.leader.image,alt:e.leader.name})),r.a.createElement(p.s,{body:!0},r.a.createElement(p.s,{heading:!0},e.leader.name),r.a.createElement("h6",null,e.leader.designation),r.a.createElement("p",null,e.leader.description)))},X=function(e){return console.log(e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(p.b,null,r.a.createElement(g.a,{to:"/home"},"Home")),r.a.createElement(p.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(p.d,null,r.a.createElement(p.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(p.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(p.d,null,r.a.createElement(p.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(Q,{props:e}))))},ee=t(48),ae=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchPromos(),this.props.fetchComments(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(ee.TransitionGroup,null,r.a.createElement(ee.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/home",component:function(){return r.a.createElement(W,{dish:e.props.dishes.dishes.filter(function(e){return e.featured})[0],dishesIsLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promosIsLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,promotion:e.props.promotions.promos.filter(function(e){return e.featured})[0],leader:e.props.leaders.leaders.filter(function(e){return e.featured})[0],leadersIsLoading:e.props.leaders.loading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(E.a,{exact:!0,path:"/menu",component:function(){return r.a.createElement(v,{dishes:e.props.dishes.dishes,isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess})}}),r.a.createElement(E.a,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(P,{dish:e.props.dishes.dishes.filter(function(e){return e.id===parseInt(t.params.dishId)})[0],comments:e.props.comments.comments.filter(function(e){return e.dishId===parseInt(t.params.dishId)}),isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess})}}),r.a.createElement(E.a,{exact:!0,path:"/contactus",component:function(){return r.a.createElement($,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(E.a,{path:"/aboutus",component:function(){return r.a.createElement(X,{leaders:e.props.leaders.leaders,isLoading:e.props.leaders.loading,errMess:e.props.leaders.errMess})}}),r.a.createElement(f.a,{to:"/home"})))),r.a.createElement(q,null))}}]),a}(n.Component),te=Object(h.a)(Object(w.connect)(function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}},function(e){return{fetchDishes:function(){return e(function(e){return e(x()),fetch(b+"dishes").then(function(e){if(e.ok)return e;throw new Error("Error  ".concat(e.status," : ").concat(e.statusText))}).then(function(e){return e.json()}).then(function(a){return e(C(a))}).catch(function(a){return e(F(a.message))})})},resetFeedbackForm:function(){return e(O.actions.reset("feedback"))},fetchPromos:function(){return e(function(e){e(I()),fetch(b+"promotions").then(function(e){if(e.ok)return e;throw new Error("Error ".concat(e.status," : ").concat(e.statusText))}).then(function(e){return e.json()}).then(function(a){return e(A(a))}).catch(function(a){return e(T(a.message))})})},fetchComments:function(){return e(function(e){fetch(b+"comments").then(function(e){if(e.ok)return e;throw new Error("Error ".concat(e.status," : ").concat(e.statusText))}).then(function(e){return e.json()}).then(function(a){return e(S(a))}).catch(function(a){return e(D(a.message))})})},fetchLeaders:function(){return e(function(e){e(k()),fetch(b+"leaders").then(function(e){if(e.ok)return e;throw new Error("Error ".concat(e.status," : ").concat(e.statusText))}).then(function(e){return e.json()}).then(function(a){return e(L(a))}).catch(function(a){return e(j(a.message))})})}}})(ae)),ne=t(152),re=t(7),le=t(20),se={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel",message:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,comments:[],errMess:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENT":var t=a.payload;return Object(re.a)({},e,{isLoading:!1,errMess:null,comments:e.comments.concat(t)});case"ADD_COMMENTS":return Object(re.a)({},e,{isLoading:!1,comments:a.payload,errMess:null});case"FAILD_COMMENTS":return Object(re.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING_DISHES":return Object(re.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"LOADING_FAILD":return Object(re.a)({},e,{isLoading:!1,dishes:[],errMess:a.payload});case"ADD_DISHES":return Object(re.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,leaders:[],errMess:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING_LEADERS":return Object(re.a)({},e,{loading:!0,leaders:[],errMess:null});case"FAILD_LEADERS":return Object(re.a)({},e,{loading:!1,leaders:[],errMess:a.payload});case"ADDING_LEADERS":return Object(re.a)({},e,{loading:!1,leaders:a.payload,errMess:null});default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,promos:[],errMess:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(re.a)({},e,{isLoading:!1,promos:a.payload,errMess:null});case"LOADING_PROMOS":return Object(re.a)({},e,{isLoading:!0,promos:[],errMess:null});case"PROMOS_FAILD":return Object(re.a)({},e,{isLoading:!1,promos:[],errMess:a.payload});default:return e}},ue=t(86),de=(t(148),Object(le.createStore)(Object(le.combineReducers)(Object(re.a)({comments:ce,dishes:oe,leaders:me,promotions:ie},Object(O.createForms)({feedback:se}))),Object(le.applyMiddleware)(ue.a))),Ee=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(ne.a,null,r.a.createElement(w.Provider,{store:de},r.a.createElement("div",null,r.a.createElement(te,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,a,t){e.exports=t(150)},99:function(e,a,t){}},[[88,2,1]]]);
//# sourceMappingURL=main.71c2f394.chunk.js.map