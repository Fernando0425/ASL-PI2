import { Component, Input } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
    selector: "basket-card",
    templateUrl: "./basket-card.component.html",
    styleUrls: ["./basket-card.component.css"]
})

export class BasketCardComponent {
    @Input() product!: Product;
    quantity: Number[] = [];
}