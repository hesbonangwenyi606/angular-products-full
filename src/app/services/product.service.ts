import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() {
    return [
      { name: 'Laptop', price: 1200 },
      { name: 'Phone', price: 600 }
    ];
  }
}