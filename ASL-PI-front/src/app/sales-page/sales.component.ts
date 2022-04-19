import { Component } from '@angular/core';
import { salesOriginal } from '../controllers/sale.controller';
import {Sale} from '../models/sale.model'
import { ProductsService} from '../services/products.service'

@Component({
    selector: 'sales-component',
    templateUrl: './sales.component.html', 
    styleUrls: ['./sales.component.css']
})

export class SalesComponent {

    constructor(private productsService: ProductsService){

    }
    sales: Sale[] = [];
    ngOnInit(){
        this.productsService.getSales().subscribe(
            res => {
                this.sales = res; 
                //this.Filteredproducts = res; 
                console.log(this.sales);
            },
            err => console.log(err)
        )
    }

    
    displayedColumns: string[] = ['id', 'date', 'total']
    days = ['Domingo', 'Lunes','Martes', 'Miercoles','Jueves', 'Viernes', 'Sabado']
    months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio', 'Agosto','Septiembre','Octubre','Noviembre', 'Diciembre']

    dateFormat(date: string) {
        const newDate = new Date(date);
        let dateString = '';
        dateString += newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear();
        return dateString 
    }
}