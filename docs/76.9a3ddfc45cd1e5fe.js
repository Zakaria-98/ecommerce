"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[76],{3076:(w,f,a)=>{a.r(f),a.d(f,{CardModule:()=>M});var s=a(6814),u=a(4581),i=a(6223),t=a(5879);let _=(()=>{class o{constructor(){}ValidateSelectInput(n){return 0==n.value?{SelectError:"\u0627\u0644\u0631\u062c\u0627\u0621 \u062a\u062d\u062f\u064a\u062f \u0648\u0627\u062d\u062f\u0629"}:null}ValidatePhoneNumber(n){let e=n.value.toString();if(console.log(e),""==e)return{PhoneError:"\u064a\u062c\u0628 \u0627\u0644\u0627 \u064a\u062d\u062a\u0648\u0649 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0639\u0644\u0649 \u0641\u0631\u0627\u063a"};if(!/^[0-9]+$/.test(e))return{PhoneError:"\u064a\u062c\u0628 \u0627\u0644\u0627 \u064a\u062d\u062a\u0648\u0649 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0639\u0644\u0649 \u062d\u0631\u0648\u0641"};if(e.length>=3){let r=e[0]+e[1]+e[2];if("092"!=r&&"091"!=r)return{PhoneError:"\u064a\u062c\u0628 \u0627\u0646 \u062a\u0643\u0648\u0646 \u0628\u062f\u0627\u064a\u0629 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 092 \u0627\u0648 091"};if(10!=e.length)return{PhoneError:"\u0637\u0648\u0631 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d"}}return null}static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var m=a(617);function b(o,l){1&o&&(t.TgZ(0,"div",17)(1,"p"),t._uU(2,"!empty cart"),t.qZA(),t._UZ(3,"img",18),t.qZA())}function C(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",20)(3,"button",21),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.removeproduct(c.productid))}),t.TgZ(4,"mat-icon"),t._uU(5,"clear"),t.qZA()(),t._UZ(6,"img",22),t.TgZ(7,"p"),t._uU(8),t.qZA()()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",23)(12,"button",24),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.removeone(c.productid))}),t.TgZ(13,"mat-icon"),t._uU(14,"remove"),t.qZA()(),t._UZ(15,"input",25),t.TgZ(16,"button",26),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.addone(c.productid))}),t.TgZ(17,"mat-icon"),t._uU(18,"add"),t.qZA()()(),t.TgZ(19,"td"),t._uU(20),t.qZA()()}if(2&o){const n=l.$implicit;t.xp6(6),t.s9C("src",n.productimage,t.LSH),t.xp6(2),t.hij("",n.productname," "),t.xp6(2),t.hij("",n.productprice," $"),t.xp6(5),t.s9C("placeholder",n.quantity),t.xp6(5),t.hij("",n.quantity*n.productprice," $")}}function x(o,l){if(1&o&&(t.TgZ(0,"table")(1,"thead")(2,"tr")(3,"td"),t._uU(4,"Product"),t.qZA(),t.TgZ(5,"td"),t._uU(6,"Price"),t.qZA(),t.TgZ(7,"td"),t._uU(8,"Quantity"),t.qZA(),t.TgZ(9,"td"),t._uU(10,"Total price"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,C,21,5,"tr",19),t.qZA()()),2&o){const n=t.oxw();t.xp6(12),t.Q6J("ngForOf",n.cart_products)}}const g=function(o){return{invalid:o}},y=function(o,l){return{disabledbtn:o,subbtn:l}},O=[{path:"",component:(()=>{class o{constructor(n,e){this.router=n,this.validation=e,this.cart_products=[],this.order=[],this.cartsum=0,this.orderform=new i.cw({name:new i.NI,phone:new i.NI("z",[this.validation.ValidatePhoneNumber]),address:new i.NI(""),city:new i.NI("")})}ngOnInit(){null!=localStorage.getItem("cart")&&(this.isemptycart=!1),null==localStorage.getItem("cart")&&(this.isemptycart=!0),JSON.parse(localStorage.getItem("cart")||"[]").forEach(n=>{this.cart_products.push(n)}),console.log(this.cart_products),this.calculatesum()}addone(n){const e=this.cart_products.findIndex(r=>r.productid===parseInt(n));-1!==e&&(this.cart_products[e].quantity++,localStorage.setItem("cart",JSON.stringify(this.cart_products)),this.calculatesum())}removeone(n){const e=this.cart_products.findIndex(r=>r.productid===parseInt(n));-1!==e&&(this.cart_products[e].quantity--,console.log(this.cart_products[e]),localStorage.setItem("cart",JSON.stringify(this.cart_products)),this.calculatesum())}removeproduct(n){console.log(n);const e=this.cart_products.findIndex(r=>r.productid===parseInt(n));-1!==e&&(this.cart_products.splice(e,1),0==this.cart_products.length?localStorage.removeItem("cart"):localStorage.setItem("cart",JSON.stringify(this.cart_products)),this.calculatesum())}calculatesum(){this.cartsum=0,this.pieces=0,JSON.parse(localStorage.getItem("cart")||"[]").forEach(n=>{this.cartsum+=n.productprice*n.quantity,this.pieces+=n.quantity})}onSubmit(){console.log("kjkk"),this.order.push({pieces:this.pieces,price:this.cartsum}),localStorage.setItem("order",JSON.stringify(this.order)),localStorage.setItem("details",JSON.stringify(this.cart_products)),localStorage.removeItem("cart"),this.router.navigateByUrl("home/orders")}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(u.F0),t.Y36(_))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-card"]],decls:39,vars:21,consts:[[1,"fullpage"],[1,"container"],[1,"card-table"],[1,"thetable"],["class","emptycart",4,"ngIf"],[4,"ngIf"],[1,"sumcard"],["disabled","",3,"value"],[1,"card-form"],[3,"formGroup","ngSubmit"],[1,"inputform"],["formControlName","name","required","",1,"valid",3,"ngClass"],["formControlName","phone","required","",1,"valid",3,"ngClass"],["formControlName","city","required","",1,"valid",3,"ngClass"],["formControlName","address","required","",1,"valid",3,"ngClass"],[1,"submitbtn"],["type","submit",3,"ngClass","disabled"],[1,"emptycart"],["src","assets/images/shop-bag_6474403.png"],[4,"ngFor","ngForOf"],[1,"firstchildcontainer"],[1,"clerabtn",3,"click"],[3,"src"],[1,"thirdchildcontainer"],[1,"removebtn",3,"click"],["type","number",1,"counterinput",3,"placeholder"],[1,"addbtn",3,"click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,b,4,0,"div",4),t.YNc(5,x,13,1,"table",5),t.qZA(),t.TgZ(6,"div",6)(7,"label"),t._uU(8," Total"),t.qZA(),t._UZ(9,"input",7),t.qZA()(),t.TgZ(10,"div",8)(11,"form",9),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(12,"div",10)(13,"label"),t._uU(14,"Name "),t.TgZ(15,"span"),t._uU(16,"*"),t.qZA()(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"div",10)(19,"label"),t._uU(20,"Phone number "),t.TgZ(21,"span"),t._uU(22,"*"),t.qZA()(),t._UZ(23,"input",12),t.qZA(),t.TgZ(24,"div",10)(25,"label"),t._uU(26,"City "),t.TgZ(27,"span"),t._uU(28,"*"),t.qZA()(),t._UZ(29,"input",13),t.qZA(),t.TgZ(30,"div",10)(31,"label"),t._uU(32,"Address "),t.TgZ(33,"span"),t._uU(34,"*"),t.qZA()(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"div",15)(37,"button",16),t._uU(38," Order "),t.qZA()()()()()()),2&e){let c,d,h,p;t.xp6(4),t.Q6J("ngIf",r.isemptycart),t.xp6(1),t.Q6J("ngIf",!r.isemptycart),t.xp6(4),t.s9C("value",r.cartsum),t.xp6(2),t.Q6J("formGroup",r.orderform),t.xp6(6),t.Q6J("ngClass",t.VKq(10,g,(null==(c=r.orderform.get("name"))?null:c.invalid)&&(null==(c=r.orderform.get("name"))?null:c.touched))),t.xp6(6),t.Q6J("ngClass",t.VKq(12,g,(null==(d=r.orderform.get("phone"))?null:d.invalid)&&(null==(d=r.orderform.get("phone"))?null:d.touched))),t.xp6(6),t.Q6J("ngClass",t.VKq(14,g,(null==(h=r.orderform.get("city"))?null:h.invalid)&&(null==(h=r.orderform.get("city"))?null:h.touched))),t.xp6(6),t.Q6J("ngClass",t.VKq(16,g,(null==(p=r.orderform.get("address"))?null:p.invalid)&&(null==(p=r.orderform.get("address"))?null:p.touched))),t.xp6(2),t.Q6J("ngClass",t.WLB(18,y,r.orderform.invalid,!r.orderform.invalid))("disabled",r.orderform.invalid)}},dependencies:[s.mk,s.sg,s.O5,m.Hw,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:["html[_ngcontent-%COMP%]{height:100%}label[_ngcontent-%COMP%]{font-family:cairo;font-size:larger}input[_ngcontent-%COMP%]{font-family:alexandria}.fullpage[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#f3f4f9;display:flex;flex-direction:row;justify-content:center;direction:rtl}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:cairo}td[_ngcontent-%COMP%]{font-family:alexandria}.container[_ngcontent-%COMP%]{width:85%;height:85%;margin-top:30px;margin-bottom:100px;display:flex;flex-direction:row;justify-content:space-around;align-items:center;background-color:#f3f4f9;border-radius:7px}.card-table[_ngcontent-%COMP%]{border-radius:5px;border-width:.5px;border-color:gray;width:70%;height:90%;display:flex;flex-direction:column;justify-content:space-between}.thetable[_ngcontent-%COMP%]{width:100%;height:90%;overflow-y:auto}.emptycart[_ngcontent-%COMP%]{height:80%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.emptycart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80%;width:50%}.emptycart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:x-large;color:#000;font-family:Montserrat}.card-form[_ngcontent-%COMP%]{border-style:solid;border-radius:5px;border-width:.5px;border-color:gray;width:25%;height:90%}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;background-color:#fff;direction:ltr}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#f5f5f5;color:#000;cursor:pointer}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;text-align:center}thead[_ngcontent-%COMP%]{background-color:#5166dd;font-family:cairo;color:#fff}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:.5px solid gray;height:30px}td[_ngcontent-%COMP%]:first-child{width:50%;height:100px}td[_ngcontent-%COMP%]:not(:first-child){width:15%;height:100px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{width:50%;height:85%}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{width:45%}.firstchildcontainer[_ngcontent-%COMP%], .thirdchildcontainer[_ngcontent-%COMP%]{width:100%;height:100px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.clerabtn[_ngcontent-%COMP%]{border:none;background:none}.addbtn[_ngcontent-%COMP%]{border-top-right-radius:7px;border-bottom-right-radius:7px;background-color:#fff}.removebtn[_ngcontent-%COMP%]{border-top-left-radius:7px;border-bottom-left-radius:7px;background-color:#fff}.removebtn[_ngcontent-%COMP%], .addbtn[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;border-color:#000;font-family:cairo;color:#ce2029;border-color:#4a2a2a;height:35px}.counterinput[_ngcontent-%COMP%]{width:40px;height:29px;text-align:center}.removebtn[_ngcontent-%COMP%]:hover, .addbtn[_ngcontent-%COMP%]:hover{background-color:#ce2029;color:#fff}.counterinput[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.sumcard[_ngcontent-%COMP%]{margin-top:20px;width:100%;display:flex;flex-direction:row-reverse;justify-content:flex-end;align-items:center;direction:rtl}.sumcard[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:10px}.sumcard[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#fff;padding-right:5px;border-radius:5px;border-width:.7px;height:30px;direction:ltr}.card-form[_ngcontent-%COMP%]{height:90%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.card-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;height:100%}.invalid[_ngcontent-%COMP%]{background-color:gray;color:#fff}.inputform[_ngcontent-%COMP%]{margin-left:10px;width:90%;height:20%;display:flex;flex-direction:column;justify-content:center;direction:ltr}.inputform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:25px;margin-bottom:10px;direction:ltr}.inputform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ce2029}.valid[_ngcontent-%COMP%]{padding-right:5px;border-radius:5px;border-width:.7px;height:30px;width:90%;background-color:#fff}.invalid[_ngcontent-%COMP%]{border-color:#ce2029;background-color:#ffcdcd;color:#000;padding-right:5px;border-radius:5px;border-width:.7px;height:30px;width:90%}.submitbtn[_ngcontent-%COMP%]{margin-left:10px;width:90%;height:20%;display:flex;flex-direction:column;justify-content:flex-start;direction:ltr}.subbtn[_ngcontent-%COMP%]{background-color:#000;color:#fff;border-style:solid;border-radius:5px;border-width:.7px;height:30px;width:90%;font-family:alexandria}.disabledbtn[_ngcontent-%COMP%]{background-color:gray;color:#fff;border-style:solid;border-radius:5px;border-width:.7px;height:30px;width:90%;font-family:alexandria}.subbtn[_ngcontent-%COMP%]:hover{background-color:#36373a}.subbtn[_ngcontent-%COMP%]:active{box-shadow:0 2px #666;transform:translateY(1px)}@media only screen and (max-width: 600px){.container[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;margin-top:10px;margin-bottom:100px;display:flex;flex-direction:column;justify-content:center;align-items:center}.card-table[_ngcontent-%COMP%]{border-radius:5px;border-width:.5px;border-color:gray;width:95%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.thetable[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content}.card-form[_ngcontent-%COMP%]{margin-top:50px;width:95%;height:500px}td[_ngcontent-%COMP%]:first-child{width:50%;height:100px}td[_ngcontent-%COMP%]:not(:first-child){width:15%;height:100px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{visibility:hidden}}@media only screen and (min-width: 600px){.container[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;margin-top:10px;margin-bottom:100px;display:flex;flex-direction:column;justify-content:center;align-items:center}.card-table[_ngcontent-%COMP%]{border-radius:5px;border-width:.5px;border-color:gray;width:95%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.thetable[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content}.card-form[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px;width:60%;height:500px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{visibility:hidden}}@media only screen and (min-width: 768px){.container[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;margin-top:10px;margin-bottom:100px;display:flex;flex-direction:column;justify-content:center;align-items:center}.card-table[_ngcontent-%COMP%]{border-radius:5px;border-width:.5px;border-color:gray;width:80%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.thetable[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content}.card-form[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px;width:50%;height:500px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{visibility:hidden}}@media only screen and (min-width: 992px){.container[_ngcontent-%COMP%]{width:95%;height:85%;margin-top:30px;margin-bottom:100px;display:flex;flex-direction:row;justify-content:space-around;align-items:center;background-color:#f3f4f9;border-radius:7px}.card-table[_ngcontent-%COMP%]{border-radius:5px;border-width:.5px;border-color:gray;width:60%;height:90%;display:flex;flex-direction:column;justify-content:space-between}.thetable[_ngcontent-%COMP%]{width:100%;height:90%}.card-form[_ngcontent-%COMP%]{border-style:solid;border-radius:5px;border-width:.5px;border-color:gray;width:40%;height:90%}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{visibility:hidden}}@media only screen and (min-width: 1200px){.container[_ngcontent-%COMP%]{width:95%;height:85%;margin-top:30px;margin-bottom:100px;display:flex;flex-direction:row;justify-content:space-around;align-items:center;background-color:#f3f4f9;border-radius:7px}.card-table[_ngcontent-%COMP%]{border-radius:5px;border-width:.5px;border-color:gray;width:60%;height:90%;display:flex;flex-direction:column;justify-content:space-between}.thetable[_ngcontent-%COMP%]{width:100%;height:90%}.card-form[_ngcontent-%COMP%]{border-style:solid;border-radius:5px;border-width:.5px;border-color:gray;width:25%;height:90%}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{visibility:visible}}"]})}return o})()}];let P=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(O),u.Bz]})}return o})(),M=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[s.ez,P,m.Ps,i.u5,i.UX]})}return o})()}}]);