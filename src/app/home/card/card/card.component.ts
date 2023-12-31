import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from 'src/app/@services/validations.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  cart_products:any=[];
  order:any=[];

  countervar:any;
  cartsum:any=0;
  pieces:any;
  isemptycart:boolean | undefined;
  orderform:any;

    constructor( private router:Router,private validation:ValidationsService ) {
      this.orderform=new FormGroup({
        name:new FormControl(),
        phone:new FormControl('z',[ this.validation.ValidatePhoneNumber]),
        address:new FormControl(''),
        city:new FormControl(''),

      })
      
  
    }
  
    ngOnInit(): void {
      if(localStorage.getItem('cart')!=null)
        this.isemptycart=false
        if(localStorage.getItem('cart')==null)
        this.isemptycart=true
        JSON.parse(localStorage.getItem('cart')|| '[]').forEach((item: any) => { 
                 
            this.cart_products.push(item);
            

        });
        console.log(this.cart_products);
        this.calculatesum();
        

  
    }

    addone(productid:any){
      
     const finder= this.cart_products.findIndex((prod: { productid: any; }) => prod.productid === parseInt(productid))
     if(finder!== -1){
      this.cart_products[finder].quantity++;
      localStorage.setItem('cart',JSON.stringify(this.cart_products));
      this.calculatesum();

  
     }
  
    }
  
    removeone(productid:any){

      const finder= this.cart_products.findIndex((prod: { productid: any; }) => prod.productid ===parseInt(productid))
      if(finder!== -1){
       this.cart_products[finder].quantity--;
       console.log(this.cart_products[finder]);
       localStorage.setItem('cart',JSON.stringify(this.cart_products));
       this.calculatesum();

  
      
    }
  
  }

  removeproduct(productid:any){
    console.log(productid);
    
    const finder= this.cart_products.findIndex((prod: { productid: any; }) => prod.productid ===parseInt(productid))
    if(finder!== -1){
     this.cart_products.splice(finder,1);
      if(this.cart_products.length==0)
      {localStorage.removeItem("cart")}
      else{
     localStorage.setItem('cart',JSON.stringify(this.cart_products));}
     this.calculatesum();





  }


  }

  calculatesum(){
    this.cartsum=0;
    this.pieces=0;
    JSON.parse(localStorage.getItem('cart')|| '[]').forEach((item: any) => { 
      this.cartsum+=item.productprice*item.quantity;
      this.pieces+=item.quantity;
      

  });


  }

  onSubmit(){
    console.log("kjkk");
    
   // localStorage.removeItem('cart');


        
    this.order.push({
      pieces:this.pieces,
      price:this.cartsum

    });    
    localStorage.setItem('order',JSON.stringify(this.order));
    localStorage.setItem('details',JSON.stringify(this.cart_products));
    localStorage.removeItem('cart');


    this.router.navigateByUrl('home/orders')


  }
  
  }
  
