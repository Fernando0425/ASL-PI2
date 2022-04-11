import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Material imports
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import {MatRippleModule} from '@angular/material/core'; 
import { MatInputModule } from "@angular/material/input"

// Component imports
import { HomeComponent } from './home-page/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products-page/products.component';
import { SalesComponent } from './sales-page/sales.component';
import { ContactComponent } from './contact-page/contact.component';
import { SettingsComponent } from './settings-page/settings.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NewSalePage } from './new-sale-page/new-sale-page.component';
import { ClickableCardComponent } from './clickable-card/clickable-card.component';
import { BasketCardComponent } from './basket-card/basket-card.component';

import {ProductsService} from './services/products.service'
import { ObjToArrayPipe } from './objToArray.pipe';
import { FilterPipe } from './filter.pipe';


// Routes declaration
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'products', component: ProductsComponent},
  {path: 'sales', component: SalesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'settings', component: SettingsComponent },
  {path: 'sales/new-sale', component: NewSalePage}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    SalesComponent,
    ContactComponent,
    SettingsComponent,
    ProductCardComponent,
    NewSalePage,
    ClickableCardComponent,
    BasketCardComponent,
    ObjToArrayPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, 
    [RouterModule.forRoot(routes), BrowserAnimationsModule],
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [
    [RouterModule],
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
