import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../models/product.model';


@Component({
    selector: "clickable-card",
    templateUrl: "./clickable-card.component.html",
    styleUrls: ["./clickable-card.component.css"]
})

export class ClickableCardComponent{
    

    @Input() product!: Product;
}