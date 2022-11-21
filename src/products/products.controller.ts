import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './product.model';
@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}
  @Post('/')
  addProducts(
    @Body('title') prodTitle: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): any {
    const genereatedId = this.productsService.insertProduct(
      prodTitle,
      description,
      price,
    );
    return { id: genereatedId };
  }

  @Get('/allproducts')
  getAllProducts(): Product[] {
    return this.productsService.getProducts();
  }
}
