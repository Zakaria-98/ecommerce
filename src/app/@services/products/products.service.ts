import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }




  getproducts():Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getproductbyid(id:any):Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/'+id);
  }


  getproductbycat(catname:any):Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/category/'+catname);
  }

}
