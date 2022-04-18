import { Component } from '@angular/core';
/*import { salesOriginal } from '../controllers/sale.controller';*/

@Component({
    selector: 'sales-component',
    templateUrl: './sales.component.html', 
    styleUrls: ['./sales.component.css']
})

export class SalesComponent {
    sales = [];
    displayedColumns: string[] = ['id', 'date', 'day', 'month', 'year', 'total', 'articles']
    days = ['Domingo', 'Lunes','Martes', 'Miercoles','Jueves', 'Viernes', 'Sabado']
    months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio', 'Agosto','Septiembre','Octubre','Noviembre', 'Diciembre']

    dateFormat(date: string) {
        const newDate = new Date(date);
        let dateString = '';
        dateString += newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear();
        return dateString 
    }
}