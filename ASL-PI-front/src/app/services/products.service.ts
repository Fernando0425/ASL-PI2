import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Product_sale } from '../models/product_sale';
import { Sale_id } from "../models/Sale_id";
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { 
    }

  public getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public addProduct(product: Product){
    return this.http.post("http://localhost:3000/products", product);
  }
  
  public updateProduct(id: Number,updateProduct: Product){
    return this.http.put('http://localhost:3000/products',updateProduct);
  }

  public addProductSale(product: Product_sale){
    return this.http.post("http://localhost:3000/sales", product);
  }

  public getSalesProduct(id : Product_sale){
    return this.http.get("http://localhost:3000/sales/products");
  }
  
}
