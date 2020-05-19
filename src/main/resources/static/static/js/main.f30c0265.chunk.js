(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),s=t.n(l),i=(t(78),t(63)),o=t(11),c=t(21),u=t(22),m=t(28),h=t(26),d=t(31),g=t.n(d),f="http://49.50.167.120:8080/users",p=new(function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"fetchUsers",value:function(){return g.a.get(f)}},{key:"fetchUserByID",value:function(e){return g.a.get(f+"/"+e)}},{key:"deleteUser",value:function(e){return g.a.delete(f+"/"+e)}},{key:"addUser",value:function(e){return g.a.post(f,e)}},{key:"editUser",value:function(e){return g.a.put(f+"/"+e.id,e)}}]),e}()),E=t(140),y=t(144),v=t(143),U=t(141),C=t(142),N=t(139),w=t(135),b=t(61),k=t.n(b),j=t(62),O=t.n(j),S=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).reloadUserList=function(){p.fetchUsers().then((function(e){n.setState({users:e.data})})).catch((function(e){console.log("reloadUserList() Error!",e)}))},n.deleteUser=function(e){p.deleteUser(e).then((function(a){n.setState({message:"User Deleted Successfully."}),n.setState({users:n.state.users.filter((function(a){return a.id!==e}))})})).catch((function(e){console.log("deleteUser() Error!",e)}))},n.editUser=function(e){window.localStorage.setItem("userID",e),n.props.history.push("/edit-user")},n.addUser=function(){window.localStorage.removeItem("userID"),n.props.history.push("/add-user")},n.state={users:[],message:null},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.reloadUserList()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w.a,{variant:"h4",style:W},"User List"),r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:this.addUser}," Add User "),r.a.createElement(E.a,null,r.a.createElement(U.a,null,r.a.createElement(C.a,null,r.a.createElement(v.a,null,"ID"),r.a.createElement(v.a,null,"FistName"),r.a.createElement(v.a,{align:"right"},"LastName"),r.a.createElement(v.a,{align:"right"},"UserName"),r.a.createElement(v.a,{align:"right"},"Age"),r.a.createElement(v.a,{align:"right"},"Salary"),r.a.createElement(v.a,{align:"right"},"Edit"),r.a.createElement(v.a,{align:"right"},"Delete"))),r.a.createElement(y.a,null,this.state.users.map((function(a){return r.a.createElement(C.a,{key:a.id},r.a.createElement(v.a,{component:"th",scope:"user"},a.id),r.a.createElement(v.a,{align:"right"},a.firstName),r.a.createElement(v.a,{align:"right"},a.lastName),r.a.createElement(v.a,{align:"right"},a.username),r.a.createElement(v.a,{align:"right"},a.age),r.a.createElement(v.a,{align:"right"},a.salary),r.a.createElement(v.a,{align:"right",onClick:function(){return e.editUser(a.id)}},r.a.createElement(k.a,null)),r.a.createElement(v.a,{align:"right",onClick:function(){return e.deleteUser(a.id)}},r.a.createElement(O.a,null)))})))))}}]),t}(n.Component),W={display:"flex",justifyContent:"center"},D=S,x=t(40),I=t(149),L=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChange=function(e){n.setState(Object(x.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();var a={username:n.state.username,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};p.addUser(a).then((function(e){n.setState({message:a.username+"\ub2d8\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),console.log(n.state.message),n.props.history.push("/users")})).catch((function(e){console.log("saveUser() \uc5d0\ub7ec",e)}))},n.state={username:"",password:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{variant:"h4",style:B},"Add User"),r.a.createElement("form",{style:A},r.a.createElement(I.a,{type:"text",placeholder:"please input your username",name:"username",fullWidth:!0,margin:"normal",value:this.state.username,onChange:this.onChange}),r.a.createElement(I.a,{type:"password",placeholder:"please input your password",name:"password",fullWidth:!0,margin:"normal",value:this.state.password,onChange:this.onChange}),r.a.createElement(I.a,{placeholder:"please input your first name",name:"firstName",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),r.a.createElement(I.a,{placeholder:"please input your last name",name:"lastName",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),r.a.createElement(I.a,{type:"number",placeholder:"please input your age",name:"age",fullWidth:!0,margin:"normal",value:this.state.age,onChange:this.onChange}),r.a.createElement(I.a,{type:"number",placeholder:"please input your salary",name:"salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:this.saveUser},"Save")))}}]),t}(n.Component),A={display:"flex",flexFlow:"row wrap"},B={display:"flex",justifyContent:"center"},M=L,F=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).loadUser=function(){p.fetchUserByID(window.localStorage.getItem("userID")).then((function(e){var a=e.data;n.setState({id:a.id,username:a.username,firstName:a.firstName,lastName:a.lastName,age:a.age,salary:a.salary})})).catch((function(e){console.log("loadUser() \uc5d0\ub7ec",e)}))},n.onChange=function(e){n.setState(Object(x.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();var a={id:n.state.id,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};p.editUser(a).then((function(e){n.setState({message:a.lastName+"\ub2d8 \uc815\ubcf4\uac00 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),n.props.history.push("/users")})).catch((function(e){console.log("saveUser() \uc5d0\ub7ec",e)}))},n.state={id:"",username:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{variant:"h4",style:J},"Edit User"),r.a.createElement("form",null,r.a.createElement(I.a,{type:"text",name:"username",readOnly:!0,fullWidth:!0,margin:"normal",value:this.state.username}),r.a.createElement(I.a,{placeholder:"Edit your first name",name:"firstName",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),r.a.createElement(I.a,{placeholder:"Edit your last name",name:"lastName",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),r.a.createElement(I.a,{type:"number",placeholder:"Edit your age",name:"age",fullWidth:!0,margin:"normal",value:this.state.age,onChange:this.onChange}),r.a.createElement(I.a,{type:"number",placeholder:"Edit your salary",name:"salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:this.saveUser},"Save")))}}]),t}(n.Component),J={display:"flex",justifyContent:"center"},G=F,R={marginTop:"20px"},T=function(){return r.a.createElement("div",{style:R},r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:D}),r.a.createElement(o.a,{path:"/users",component:D}),r.a.createElement(o.a,{path:"/edit-user",component:G}),r.a.createElement(o.a,{path:"/add-user",component:M}))))},$=t(145),q=t(146),z=t(147),H=t(64),K=t.n(H),P={flexGrow:1},Q=function(){return r.a.createElement("div",null,r.a.createElement($.a,{position:"static"},r.a.createElement(q.a,null,r.a.createElement(z.a,{edge:"start",color:"inherit","aria-label":"Menu"},r.a.createElement(K.a,null)),r.a.createElement(w.a,{variant:"h6",style:P},"React User Application"),r.a.createElement(N.a,{color:"inherit"},"Login"))))},V=t(148);var X=function(){return r.a.createElement("div",null,r.a.createElement(Q,null),r.a.createElement(V.a,null,r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){e.exports=t(102)},78:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.f30c0265.chunk.js.map