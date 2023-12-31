import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { findIndex } from 'rxjs';
import { ProductsService } from 'src/app/@services/products/products.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent {
productid:any;
product:any;
cart_products:any=[];
isaddedvar:any;


countervar:any=1;
  constructor(private products:ProductsService,  private route:ActivatedRoute ) { 
    this.productid=this.route.snapshot.paramMap.get('id');
    //this.cart_products=null;
    

  }

  ngOnInit(): void {
    this.products.getproductbyid(this.productid).subscribe({
      next: (res: any) => {
        console.log(res);
        this.product=res;

      },
      error: (error) => {
        // Handle errors here
      }
    });

    if(localStorage.getItem('cart')!=null)
      
    { 
        JSON.parse(localStorage.getItem('cart')|| '[]').forEach((item: any) => {        
      this.cart_products.push(item);
                });
  
  }
  }

  addtocart(){
  
this.checkstorage();
      

    let finder:any;
    if(this.isadded()){
       finder= this.cart_products.findIndex((prod: { productid: any; }) => prod.productid ===parseInt(this.productid))
      if(finder!== -1){
       this.cart_products.splice(finder,1);
        if(this.cart_products.length==0)
        {localStorage.removeItem("cart")}
        else{
       localStorage.setItem('cart',JSON.stringify(this.cart_products));}
  

    }}
    else{
      this.cart_products.push({productid:this.product.id,
        productname:this.product.title,
        productprice:this.product.price,
        quantity:this.countervar});    
      localStorage.setItem('cart',JSON.stringify(this.cart_products));
  }

  }
  
  addone(){
    this.checkstorage();
    this.countervar++;
   const finder= this.cart_products.findIndex((prod: { productid: any; }) => prod.productid === parseInt(this.productid))
   if(finder!== -1){
    this.cart_products[finder].quantity=this.countervar;
    console.log(this.cart_products[finder]);
    localStorage.setItem('cart',JSON.stringify(this.cart_products));

   }

  }

  removeone(){
    this.checkstorage();
    this.countervar--;
    const finder= this.cart_products.findIndex((prod: { productid: any; }) => prod.productid ===parseInt(this.productid))
    if(finder!== -1){
     this.cart_products[finder].quantity=this.countervar;
     console.log(this.cart_products[finder]);
     localStorage.setItem('cart',JSON.stringify(this.cart_products));

    
  }

}

checkstorage(){
  if(localStorage.getItem('cart')==null){
    this.cart_products=[];

  }


}

isadded(){
  if(this.cart_products.findIndex((prod: { productid: any; }) => prod.productid === parseInt(this.productid)) !== -1){
    return true;
    
  }
  return false ;

}



}
