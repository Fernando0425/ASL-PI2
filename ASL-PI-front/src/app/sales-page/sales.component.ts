import { Component } from '@angular/core';
import {Sale} from '../models/sale.model'
import { ProductsService} from '../services/products.service'
import {MatDialog, MatDialogConfig} from "@angular/material/dialog"
import { TicketComponent } from "../ticket/ticket.component";
import { Sale_id } from '../models/Sale_id';

@Component({
    selector: 'sales-component',
    templateUrl: './sales.component.html', 
    styleUrls: ['./sales.component.css']
})

export class SalesComponent {
    productos: any = [];
    id: Sale_id={
        sale_id: 0,
    };
    constructor(private productsService: ProductsService,private dialog: MatDialog){

    }
    sales: Sale[] = [];
    ngOnInit(){
        this.productsService.getSales().subscribe(
            res => {
                this.sales = res; 
                //this.Filteredproducts = res; 
                //console.log(this.sales);
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

    findID($event){
        //console.log($event);

        this.id={
            sale_id:$event['sale_id'] ,
        };
        //console.log(this.id)
        this.productsService.getSalesProduct(this.id)
            .subscribe(
                res =>{
                    var aux = Object.values(res);
                    this.productos = aux[0];
                    //console.log(this.productos);
                    this.Dialog();
                        },
                err => console.log(err)
                )

    }
    Dialog(){
            this.dialog.open(TicketComponent,{width: '250px',height:'auto',data: this.productos});
    }
}