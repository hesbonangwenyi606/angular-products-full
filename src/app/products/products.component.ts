import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  newProductName = '';
  newProductPrice: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.products.push({
      name: this.newProductName,
      price: this.newProductPrice
    });
    this.newProductName = '';
    this.newProductPrice = 0;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}