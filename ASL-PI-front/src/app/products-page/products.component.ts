import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService} from '../services/products.service'

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent{
    newName: String = '';
    newPrice: Number = 0;
    newURL: String = '';
    newStock: Number = 0;

    producto: Product = {
        product_id: 0,
        product_name: '',
        product_price: 0,
        product_stock: 0,
        product_img: ''
    }

    public searchText = '';
    options: String[] = [
        'Nombre',
        'Precio',
        'Existencias'
    ]

    constructor(private productsService: ProductsService){

    }

    products: Product[] = [];
    Filteredproducts: Product[] = [];

    ngOnInit(){
        this.productsService.getProduct().subscribe(
            res => {
                this.products = res; 
                this.Filteredproducts = res; 
                //console.log(this.products);
            },
            err => console.log(err)
        )
    }

    active = false;

    toggleModal() {
        this.active = !this.active;
    }

    search(): void {

        this.products = this.Filteredproducts.filter(product => {
            if (product.product_name.toLowerCase().includes(this.searchText.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        })
    }
    

    filterBy(option: String) {
        if (option === "Nombre") {
            this.products.sort((a, b) => {
                if (a.product_name < b.product_name) { return -1; }
                if (a.product_name > b.product_name) { return 1; }
                return 0;
            });
        }
        else if (option === "Precio") {
            this.products.sort((a, b) => {
                if (a.product_price < b.product_price) { return -1; }
                if (a.product_price > b.product_price) { return 1; }
                return 0;
            });
        }
        else if (option === "Existencias") {
            this.products.sort((a, b) => {
                if (a.product_stock < b.product_stock) { return -1; }
                if (a.product_stock > b.product_stock) { return 1; }
                return 0;
            });
        }

    }

    
    newProduct() {
        delete this.producto.product_id;

        this.productsService.addProduct(this.producto)
        .subscribe(
            res =>{
                //console.log(res);
                this.toggleModal();
                this.ngOnInit();
            },
            err => console.log(err)
        )
    }

}