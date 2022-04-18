import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService} from '../services/products.service'

@Component({
    selector: "product-card",
    templateUrl: "./product-card.component.html",
    styleUrls: ["./product-card.component.css"]
})

export class ProductCardComponent{
    producto: Product = {
        product_id: 0,
        product_name: '',
        product_price: 0,
        product_stock: 0,
        product_img: ''
    }

@Input() product!: Product;
constructor(private productsService: ProductsService){
}


    modify = false;

    toggleModal() {
        this.modify = !this.modify;
    }

    editProduct() {
        this.toggleModal()
    }
    
    updateProduct(){
        console.log()
        this.productsService.updateProduct(this.product.product_id! , this.product)
        .subscribe(
            res => {
                console.log(res);
                this.toggleModal();
            },
            err => console.log(err)
        )
    }
}

