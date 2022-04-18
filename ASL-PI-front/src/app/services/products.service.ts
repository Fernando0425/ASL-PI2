import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {   }

  public getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public addProduct(product: Product){
    return this.http.post("http://localhost:3000/products", product);
  }
  
  public updateProduct(id: Number,updateProduct: Product){
    return this.http.put('http://localhost:3000/products',updateProduct);
  }
}
