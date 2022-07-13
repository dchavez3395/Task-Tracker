(function(){"use strict";var t={3873:function(t,e,n){var r=n(9242),a=n(3396);const o={class:"container"};function s(t,e,n,s,d,i){const l=(0,a.up)("Header"),u=(0,a.up)("AddTask"),c=(0,a.up)("Tasks");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(l,{onToggleAddTask:i.toggleAddTask,title:"Task Tracker",showAddTask:d.showAddTask},null,8,["onToggleAddTask","showAddTask"]),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(u,{onAddTask:i.addTask},null,8,["onAddTask"])],512),[[r.F8,d.showAddTask]]),(0,a.Wm)(c,{onToggleReminder:i.toggleReminder,onDeleteTask:i.deleteTask,tasks:d.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var d=n(7139);function i(t,e,n,r,o,s){const i=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("h1",null,(0,d.zw)(n.title),1),(0,a.Wm)(i,{onBtnClick:e[0]||(e[0]=e=>t.$emit("toggle-add-task")),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])])}function l(t,e,n,r,o,s){return(0,a.wg)(),(0,a.iD)("button",{onClick:e[0]||(e[0]=t=>s.onClick()),style:(0,d.j5)({background:n.color}),class:"btn"},(0,d.zw)(n.text),5)}var u={name:"Button",props:{text:String,color:String},methods:{onClick(){this.$emit("btn-click")}}},c=n(89);const k=(0,c.Z)(u,[["render",l]]);var m=k,p={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:m}};const f=(0,c.Z)(p,[["render",i]]);var h=f;function g(t,e,n,r,o,s){const d=(0,a.up)("Task");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tasks,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(d,{onToggleReminder:n=>t.$emit("toggle-reminder",e.id),onDeleteTask:n=>t.$emit("delete-task",e.id),task:e},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function T(t,e,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div",{onDblclick:e[1]||(e[1]=e=>t.$emit("toggle-reminder",n.task.id)),class:(0,d.C_)([n.task.reminder?"reminder":"","task"])},[(0,a._)("h3",null,[(0,a.Uk)((0,d.zw)(n.task.text)+" ",1),(0,a._)("i",{onClick:e[0]||(e[0]=e=>t.$emit("delete-task",n.task.id)),class:"fas fa-times"})]),(0,a._)("p",null,(0,d.zw)(n.task.day),1)],34)}var v={name:"Task",props:{task:Object}};const w=(0,c.Z)(v,[["render",T]]);var y=w,b={name:"Tasks",props:{tasks:Array},components:{Task:y},emits:["delete-task","toggle-reminder"]};const A=(0,c.Z)(b,[["render",g]]);var x=A;const _=t=>((0,a.dD)("data-v-552d4d8a"),t=t(),(0,a.Cn)(),t),D={class:"form-control"},O=_((()=>(0,a._)("label",null,"Task",-1))),C={class:"form-control"},S=_((()=>(0,a._)("label",null,"Day & Time",-1))),j={class:"form-control form-control-check"},R=_((()=>(0,a._)("label",null,"Set Reminder",-1))),$=_((()=>(0,a._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function M(t,e,n,o,s,d){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[3]||(e[3]=(...t)=>d.onSubmit&&d.onSubmit(...t)),class:"add-form"},[(0,a._)("div",D,[O,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>s.text=t),name:"text",placeholder:"Add Task"},null,512),[[r.nr,s.text]])]),(0,a._)("div",C,[S,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>s.day=t),name:"day",placeholder:"Add Day & Time"},null,512),[[r.nr,s.day]])]),(0,a._)("div",j,[R,(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>s.reminder=t),name:"reminder"},null,512),[[r.e8,s.reminder]])]),$],32)}var Z={name:"AddTask",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(t){if(t.preventDefault(),!this.text)return void alert("Please add a task");const e={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=!1}}};const B=(0,c.Z)(Z,[["render",M],["__scopeId","data-v-552d4d8a"]]);var W=B,z={name:"App",components:{Header:h,Tasks:x,AddTask:W},data(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask(){this.showAddTask=!this.showAddTask},addTask(t){this.tasks=[...this.tasks,t]},deleteTask(t){confirm("Are you sure?")&&(this.tasks=this.tasks.filter((e=>e.id!==t)))},toggleReminder(t){this.tasks=this.tasks.map((e=>e.id===t?{...e,reminder:!e.reminder}:e))}},created(){this.tasks=[{id:1,text:"Doctors Appointment",day:"March 1st at 2:30pm",reminder:!0},{id:2,text:"Pet Appointment",day:"March 3rd at 1:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"March 3rd at 11:00am",reminder:!1}]}};const H=(0,c.Z)(z,[["render",s]]);var P=H;(0,r.ri)(P).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var d=!0,i=0;i<r.length;i++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[i])}))?r.splice(i--,1):(d=!1,o<s&&(s=o));if(d){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,s=r[0],d=r[1],i=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(a in d)n.o(d,a)&&(n.m[a]=d[a]);if(i)var u=i(n)}for(e&&e(r);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunktask_tracker"]=self["webpackChunktask_tracker"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3873)}));r=n.O(r)})();
//# sourceMappingURL=app.b5b8d4c7.js.map