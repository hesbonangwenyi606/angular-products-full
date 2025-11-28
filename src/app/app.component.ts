// src/app/app.component.ts
import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],  // import your component
  template: '<app-products></app-products>',
})
export class AppComponent {}
