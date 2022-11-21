import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
@Injectable()
export class ProductService {
  products: Product[] = [];
  insertProduct(title: string, description: string, price: number): string {
    const prodId = (Math.random() * 1000).toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    console.log(this.products);
    return prodId;
  }
  getProducts(): Product[] {
    return [...this.products];
  }
}
