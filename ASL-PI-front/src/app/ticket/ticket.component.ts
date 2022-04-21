import { Component, Input, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  productos: any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit() {
    var products = this.data['products'];
                
    for(let i=0; i<products.length; i++){
      this.productos.push(products[i]);
    }
    //console.log(this.productos)
  }

  
}
