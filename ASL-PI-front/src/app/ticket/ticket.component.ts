import { Component, Input, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit() {
    console.log(this.data)
  }
}
