import { Component } from "@angular/core";
import { ProductsService} from '../services/products.service'
import { Product } from "../models/product.model";
import { Sale } from "../models/sale.model";
import { Product_sale } from "../models/product_sale";
import { Sale_id } from "../models/Sale_id";
import Swal from 'sweetalert2';

@Component({
    selector: "new-sale-page",
    templateUrl: "./new-sale-page.component.html",
    styleUrls: ["new-sale-page.component.css"]
})

export class NewSalePage {
    basket: Product[] = [];
    quantities: Number[] = [];
    totals: Number[] = [];
    finalTotal = 0;
    searchText = '';
    id: Sale_id={
        sale_id: 0
    };
    product_sale: Product_sale={
        total: 0,
        products_id: [],
        quantity: []
    };
    active = false;

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

    search(): void {
        this.products = this.Filteredproducts.filter(product => {
            if (product.product_name.toLowerCase().includes(this.searchText.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        })
    }

    addBasket(product: Product) {
        if(!this.basket.includes(product) && product.product_stock > 0) {
            this.basket.push(product);
            this.quantities.push(1);
            this.totals.push(product.product_price);
            const idx = this.products.findIndex(myProduct => myProduct.product_id == product.product_id);
            const newStock = Number(product.product_stock)  - 1;
            this.products[idx].product_stock = newStock;
            this.finalTotal = Number(this.totals.reduce((partial_sum, a) => Number(partial_sum) + Number(a),0)); 
        }
    }

    incrementQuantity(product: Product) {
        // Find index of product
        const idx = this.basket.findIndex(myProduct => myProduct.product_id == product.product_id);
        const idx_product = this.products.findIndex(myProduct => myProduct.product_id == product.product_id);
        if(this.products[idx_product].product_stock > 0) {
            this.products[idx_product].product_stock = Number(product.product_stock) - 1
            this.quantities[idx] = Number(this.quantities[idx]) + 1; 
            this.totals[idx] = Number(this.quantities[idx]) * Number(product.product_price);
            this.finalTotal = Number(this.totals.reduce((partial_sum, a) => Number(partial_sum) + Number(a),0))
        }
        
    }

    decrementQuantity(product: Product) {
        const idx = this.basket.findIndex(myProduct => myProduct.product_id == product.product_id);
        if(this.quantities[idx] > 1) {
            const idx_product = this.products.findIndex(myProduct => myProduct.product_id == product.product_id);
            this.products[idx_product].product_stock = Number(product.product_stock) + 1
            this.quantities[idx] = Number(this.quantities[idx]) - 1; 
            this.totals[idx] = Number(this.quantities[idx]) * Number(product.product_price);
            this.finalTotal = Number(this.totals.reduce((partial_sum, a) => Number(partial_sum) + Number(a),0))
        }
        
    }

    eraseOneProduct(product: Product) {
        const idx = this.basket.findIndex(myProduct => myProduct.product_id == product.product_id);
        const idx_product = this.products.findIndex(myProduct => myProduct.product_id == product.product_id);
        this.products[idx_product].product_stock = Number(product.product_stock) + Number(this.quantities[idx]);
        let filterBasket = this.basket.filter(myProduct => myProduct.product_id != product.product_id);
        this.quantities[idx] = 1;
        this.basket = filterBasket;
        this.totals.splice(idx,1);
        this.finalTotal = Number(this.totals.reduce((partial_sum, a) => Number(partial_sum) + Number(a),0))
    }

    eraseProducts() {
        this.basket.forEach(product => {
            let idx_product= this.products.findIndex(myProduct => myProduct.product_id == product.product_id);
            const idx = this.basket.findIndex(myProduct => myProduct.product_id == product.product_id);
            let q = this.quantities[idx];
            this.products[idx_product].product_stock = Number(product.product_stock) + Number(q);
        } );
        this.basket = [];
        this.quantities = [];
        this.totals = [];
        this.finalTotal = Number(this.totals.reduce((partial_sum, a) => Number(partial_sum) + Number(a),0))
    }

    newSale(){
        let idx_product: Number[] = [];
        this.basket.forEach(product => {
            idx_product.push(this.products.findIndex(myProduct => myProduct.product_id == product.product_id) +1 );
        } );

       this.product_sale= {
            total: this.finalTotal, //Quantity     
            products_id:idx_product , //Total
            quantity:this.totals//Productos
       }
       //console.log(this.product_sale);
       
            this.productsService.addProductSale(this.product_sale)
        .subscribe(
            res =>{
                console.log(res);
                this.confirm(res);
            },
            err => console.log(err)
        )
    }

    confirm(res: Object){

        Swal.fire({
            title: 'Exito',
            text: 'Venta realizada con exito',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Imprimir',
            cancelButtonText: 'Continuar',
          }).then((result) => {
      
            if (result.isConfirmed) {
             /* this.productsService.getSalesProduct(res)
                .subscribe(
            res =>{
                console.log(res);
            },
            err => console.log(err)
        )*/
      
            } else if (result.isDismissed) {
      
              console.log('Clicked No, File is safe!');
      
            }
          })
    }
}