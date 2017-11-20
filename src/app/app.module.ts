import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceDropdownComponent } from './price-dropdown/price-dropdown.component';
import { ProductDropdownComponent } from './product-dropdown/product-dropdown.component';
import { SupportDropdownComponent } from './support-dropdown/support-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceDropdownComponent,
    ProductDropdownComponent,
    SupportDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
