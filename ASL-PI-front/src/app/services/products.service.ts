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

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
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

  public getSales(): Observable<Sale[]>{
      return this.http.get<Sale[]>("http://localhost:3000/sales");
    }
  

  public getSalesProduct(id: Sale_id): Observable<Sale_id[]>{
    return this.http.post<Sale_id[]>("http://localhost:3000/salesProducts",id);
  }
  
}
