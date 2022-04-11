import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    public currentUrl: String = "";

    constructor(private router: Router) {}

    ngOnInit() {
        this.currentUrl = this.router.url;
    }
}