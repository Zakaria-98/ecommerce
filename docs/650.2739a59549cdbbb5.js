"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[650],{4650:(M,g,c)=>{c.r(g),c.d(g,{ProductinfoModule:()=>x});var a=c(6814),s=c(4581),t=c(5879),p=c(2825),u=c(617),r=c(6223);function f(e,C){if(1&e){const n=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.addtocart())}),t._uU(1,"Add to cart "),t.TgZ(2,"mat-icon"),t._uU(3,"shopping_cart"),t.qZA()()}}function h(e,C){if(1&e){const n=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.addtocart())}),t._uU(1,"remove from cart "),t.TgZ(2,"mat-icon"),t._uU(3,"delete"),t.qZA()()}}const d=function(e){return{"product-rating-cancel":e}},m=[{path:"product/:id",component:(()=>{class e{constructor(n,i){this.products=n,this.route=i,this.cart_products=[],this.countervar=1,this.productid=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.products.getproductbyid(this.productid).subscribe({next:n=>{console.log(n),this.product=n},error:n=>{}}),null!=localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")||"[]").forEach(n=>{this.cart_products.push(n)})}addtocart(){let n;this.checkstorage(),this.isadded()?(n=this.cart_products.findIndex(i=>i.productid===parseInt(this.productid)),-1!==n&&(this.cart_products.splice(n,1),0==this.cart_products.length?localStorage.removeItem("cart"):localStorage.setItem("cart",JSON.stringify(this.cart_products)))):(this.cart_products.push({productid:this.product.id,productname:this.product.title,productprice:this.product.price,quantity:this.countervar}),localStorage.setItem("cart",JSON.stringify(this.cart_products)))}addone(){this.checkstorage(),this.countervar++;const n=this.cart_products.findIndex(i=>i.productid===parseInt(this.productid));-1!==n&&(this.cart_products[n].quantity=this.countervar,console.log(this.cart_products[n]),localStorage.setItem("cart",JSON.stringify(this.cart_products)))}removeone(){this.checkstorage(),this.countervar--;const n=this.cart_products.findIndex(i=>i.productid===parseInt(this.productid));-1!==n&&(this.cart_products[n].quantity=this.countervar,console.log(this.cart_products[n]),localStorage.setItem("cart",JSON.stringify(this.cart_products)))}checkstorage(){null==localStorage.getItem("cart")&&(this.cart_products=[])}isadded(){return-1!==this.cart_products.findIndex(n=>n.productid===parseInt(this.productid))}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(p.s),t.Y36(s.gz))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-productinfo"]],decls:47,vars:24,consts:[[1,"fullpage"],[1,"container"],[1,"productinfo"],[1,"product-image"],[3,"src"],[1,"product-details"],[1,"product-category"],[1,"product-title"],[1,"product-price"],[1,"product-rating"],[3,"ngClass"],[1,"product-status"],[1,"product-counter"],[1,"addbtn",3,"click"],["type","number",3,"ngModel","ngModelChange"],[1,"removebtn",3,"click"],["class","cardbtn",3,"click",4,"ngIf"],["class","cardbtn-cancel",3,"click",4,"ngIf"],[1,"product-desc"],[1,"cardbtn",3,"click"],[1,"cardbtn-cancel",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6)(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"div",7)(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"div",8)(13,"p"),t._uU(14),t.qZA()(),t.TgZ(15,"div",9)(16,"div")(17,"mat-icon",10),t._uU(18,"star"),t.qZA(),t.TgZ(19,"mat-icon",10),t._uU(20,"star"),t.qZA(),t.TgZ(21,"mat-icon",10),t._uU(22,"star"),t.qZA(),t.TgZ(23,"mat-icon",10),t._uU(24,"star"),t.qZA(),t.TgZ(25,"mat-icon",10),t._uU(26,"star"),t.qZA()(),t.TgZ(27,"p"),t._uU(28),t.qZA()(),t.TgZ(29,"div",11)(30,"mat-icon"),t._uU(31,"done_outline"),t.qZA(),t.TgZ(32,"p"),t._uU(33,"Available"),t.qZA()(),t.TgZ(34,"div",12)(35,"button",13),t.NdJ("click",function(){return o.addone()}),t.TgZ(36,"mat-icon"),t._uU(37,"add"),t.qZA()(),t.TgZ(38,"input",14),t.NdJ("ngModelChange",function(P){return o.countervar=P}),t.qZA(),t.TgZ(39,"button",15),t.NdJ("click",function(){return o.removeone()}),t.TgZ(40,"mat-icon"),t._uU(41,"remove"),t.qZA()(),t.YNc(42,f,4,0,"button",16),t.YNc(43,h,4,0,"button",17),t.qZA(),t.TgZ(44,"div",18)(45,"p"),t._uU(46),t.qZA()()()()()()),2&i&&(t.xp6(4),t.s9C("src",o.product.image,t.LSH),t.xp6(4),t.Oqu(o.product.category),t.xp6(3),t.Oqu(o.product.title),t.xp6(3),t.hij(" ",o.product.price," $"),t.xp6(3),t.Q6J("ngClass",t.VKq(14,d,o.product.rating.rate>1)),t.xp6(2),t.Q6J("ngClass",t.VKq(16,d,o.product.rating.rate>2)),t.xp6(2),t.Q6J("ngClass",t.VKq(18,d,o.product.rating.rate>3)),t.xp6(2),t.Q6J("ngClass",t.VKq(20,d,o.product.rating.rate>4)),t.xp6(2),t.Q6J("ngClass",t.VKq(22,d,o.product.rating.rate>5)),t.xp6(3),t.hij("( ",o.product.rating.count," )"),t.xp6(10),t.Q6J("ngModel",o.countervar),t.xp6(4),t.Q6J("ngIf",!o.isadded()),t.xp6(1),t.Q6J("ngIf",o.isadded()),t.xp6(3),t.Oqu(o.product.description))},dependencies:[a.mk,a.O5,u.Hw,r.Fj,r.wV,r.JJ,r.On],styles:[".fullpage[_ngcontent-%COMP%]{width:100%;min-height:100%;height:-moz-fit-content;height:fit-content;background-color:#f6f6f6;display:flex;flex-direction:column;justify-content:center;align-items:center;direction:rtl}.container[_ngcontent-%COMP%]{width:85%;height:-moz-fit-content;height:fit-content;min-height:85%;margin-top:100px;margin-bottom:100px;background-color:#fff}.product-image[_ngcontent-%COMP%]{width:40%;height:80%}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:10px;width:500px;height:500px}.productinfo[_ngcontent-%COMP%]{display:flex;flex-direction:row;direction:ltr}.product-details[_ngcontent-%COMP%]{height:85%;width:50%;display:flex;flex-direction:column;justify-content:flex-start}.product-category[_ngcontent-%COMP%]{width:80%;height:-moz-fit-content;height:fit-content;font-family:cairo}.product-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5px;width:-moz-fit-content;width:fit-content;background-color:#e5e3ff;border-radius:2.5rem}.product-title[_ngcontent-%COMP%]{width:80%;height:-moz-fit-content;height:fit-content;font-weight:700;font-size:xx-large;font-family:Montserrat;display:flex;flex-direction:column;justify-content:flex-end}.product-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.product-price[_ngcontent-%COMP%]{width:80%;height:-moz-fit-content;height:fit-content;font-family:cairo;font-weight:700;display:flex;flex-direction:column;justify-content:flex-end}.product-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.product-status[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:80%;height:40px;font-family:alexandria}.product-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:green}.product-rating[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:80%;height:40px;font-family:alexandria}.product-rating[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:5px}.product-rating-cancel[_ngcontent-%COMP%]{color:gold}.product-card[_ngcontent-%COMP%]{width:30%;height:50px}.cardbtn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:90%;background-color:#3f3d56;font-family:inconsolata;font-weight:700;text-transform:uppercase;color:#fff;border-radius:7px;border-color:#3f3d56;height:80%;font-size:large;margin-right:5px}.cardbtn-cancel[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:90%;background-color:#ce2029;font-family:inconsolata;font-weight:700;text-transform:uppercase;color:#fff;border-radius:7px;border-color:#ce2029;height:80%;font-size:large;margin-right:5px}.product-counter[_ngcontent-%COMP%]{width:50%;height:15%;display:flex;flex-direction:row-reverse;justify-content:flex-start;align-items:center;margin-top:5px}.product-counter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:40px;height:29px;text-align:center}.addbtn[_ngcontent-%COMP%]{border-top-right-radius:7px;border-bottom-right-radius:7px;background-color:#ce2029}.removebtn[_ngcontent-%COMP%]{border-top-left-radius:7px;border-bottom-left-radius:7px;background-color:#ce2029}.removebtn[_ngcontent-%COMP%], .addbtn[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;border-color:#000;font-family:cairo;color:#ce2029;border-color:#4a2a2a;height:35px}.product-counter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.product-desc[_ngcontent-%COMP%]{font-size:larger;width:75%;height:-moz-fit-content;height:fit-content;font-family:Montserrat}.removebtn[_ngcontent-%COMP%]:hover, .addbtn[_ngcontent-%COMP%]:hover{background-color:#ce2029;color:#fff}@media only screen and (max-width: 600px){.container[_ngcontent-%COMP%]{width:85%;height:-moz-fit-content;height:fit-content;margin-top:100px;margin-bottom:100px;background-color:#fff}.productinfo[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;direction:ltr}.product-image[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:center;align-items:center}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:10px;width:90%;height:200px}.product-details[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:center;align-items:center}.product-category[_ngcontent-%COMP%]{display:flex;flex-direction:row}.product-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:-moz-fit-content;height:fit-content}.product-counter[_ngcontent-%COMP%]{width:80%}}@media only screen and (min-width: 600px){.container[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;margin-top:100px;margin-bottom:100px;background-color:#fff}.productinfo[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;display:flex;flex-direction:row;direction:ltr}.product-image[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:center;align-items:center}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:10px;width:90%;height:400px}.product-details[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;justify-content:center;align-items:center}.product-category[_ngcontent-%COMP%]{display:flex;flex-direction:row}.product-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:-moz-fit-content;height:fit-content}.product-counter[_ngcontent-%COMP%]{width:80%}}@media only screen and (min-width: 768px){.container[_ngcontent-%COMP%]{width:85%;height:-moz-fit-content;height:fit-content;margin-top:100px;margin-bottom:100px;background-color:#fff}}"]})}return e})()}];let _=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(m),s.Bz]})}return e})(),x=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[a.ez,_,u.Ps,r.u5]})}return e})()}}]);