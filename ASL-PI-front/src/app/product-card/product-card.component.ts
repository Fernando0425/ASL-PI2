import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
    selector: "product-card",
    templateUrl: "./product-card.component.html",
    styleUrls: ["./product-card.component.css"]
})

export class ProductCardComponent{

@Input() product!: Product;

    modify = false;

    toggleModal() {
        this.modify = !this.modify;
    }

    editProduct() {
        this.toggleModal()
        console.log(this.product.product_id)
    }
    
}

