import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,       // <-- standalone component imported here
    ProductsComponent    // <-- standalone component imported here
  ],
  bootstrap: [AppComponent] // bootstrap your app
})
export class AppModule { }
