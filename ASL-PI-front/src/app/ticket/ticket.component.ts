import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() sale!: any;
  constructor() { }

  ngOnInit() {
  }

  active = false;

    toggleModal() {
        this.active = !this.active;
    }

}
