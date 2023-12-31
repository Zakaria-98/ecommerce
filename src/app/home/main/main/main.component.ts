import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/@services/categories/categories.service';
import { ProductsService } from 'src/app/@services/products/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  allcategories:any;
  allproducts:any;
  productimg:any;
  cart_products:any=[];
  selectedcat:any=1;
  constructor(private categories:CategoriesService,private products:ProductsService,private router:Router) { 
    
  }

  ngOnInit(): void {

    JSON.parse(localStorage.getItem('cart')|| '[]').forEach((item: any) => { 
                 
      this.cart_products.push(item);
      
      

  });

  console.log(this.cart_products);


    this.categories.getcategories().subscribe({
      next: (res: any) => {
        console.log(res);
        
        this.allcategories=res;
        console.log(this.allcategories);
        
        
      },
      error: (error) => {
        // Handle errors here
      }
    });


    this.callcategory('all');
}

productpage(id:any){
  this.router.navigateByUrl("home/info/product/"+id)
  
}

addtocart(productid:any,producttitle:any,productprice:any,productimage:any){
  
  this.checkstorage();
        
  
      let finder:any;
      if(this.isadded(productid)){
         finder= this.cart_products.findIndex((prod: { productid: any; }) => prod.productid ===parseInt(productid))
        if(finder!== -1){
         this.cart_products.splice(finder,1);
          if(this.cart_products.length==0)
          {localStorage.removeItem("cart")}
          else{
         localStorage.setItem('cart',JSON.stringify(this.cart_products));}
    
  
      }}
      else{
        this.cart_products.push({productid:productid,
          productname:producttitle,
          productprice:productprice
          ,productimage:productimage,
          quantity:1});    
        localStorage.setItem('cart',JSON.stringify(this.cart_products));
    }
  
    }

    checkstorage(){
      if(localStorage.getItem('cart')==null){
        this.cart_products=[];
    
      }
    
    
    }
  
    isadded(productid:any){
      if(this.cart_products.findIndex((prod: { productid: any; }) => prod.productid === parseInt(productid)) !== -1){
        return true;
        
      }
      return false ;
    
    }

    changecat(catnumber:any){
      if(catnumber!=this.selectedcat)
      {
        if(catnumber==1)
        {
          this.selectedcat=1
          
          this.callcategory('all');
        
      
      }
      
        
        }
        if(catnumber==2)
        {this.selectedcat=2
          this.callcategory('electronics');
        
        }

        if(catnumber==3)
        {this.selectedcat=3
          this.callcategory('jewelery');
        
        }

        if(catnumber==4)
        {this.selectedcat=4
          this.callcategory("men's%20clothing");
        
        }

        if(catnumber==5)
        {this.selectedcat=5
          this.callcategory("women's%20clothing");
        
        }

      }

      callcategory(catname:any){
        if(catname=='all'){
          this.products.getproducts().subscribe({
            next: (res: any) => {
              console.log(res);
              this.allproducts=res;
      
           //   this.allcategories=this.categories;
              
            },
            error: (error) => {
              // Handle errors here
            }
          });
        
      

        }
        else{
        this.products.getproductbycat(catname).subscribe({
          next: (res: any) => {
            console.log(res);
            this.allproducts=res;
    
         //   this.allcategories=this.categories;
            
          },
          error: (error) => {
            // Handle errors here
          }
        });
      }
    }
    }
    
  
