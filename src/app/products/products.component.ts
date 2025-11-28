// src/app/products/products.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: { name: string; price: number }[] = [
    { name: 'Apple', price: 100 },
    { name: 'Banana', price: 50 },
  ];

  newProductName = '';
  newProductPrice: number | null = null;

  addProduct() {
    if (this.newProductName && this.newProductPrice !== null) {
      this.products.push({ name: this.newProductName, price: this.newProductPrice });
      this.newProductName = '';
      this.newProductPrice = null;
    }
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
