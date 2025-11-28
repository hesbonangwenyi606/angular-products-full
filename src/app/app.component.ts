import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,          // MUST be standalone
  imports: [ProductsComponent],  // import your ProductsComponent
  template: '<app-products></app-products>',
})
export class AppComponent {}
