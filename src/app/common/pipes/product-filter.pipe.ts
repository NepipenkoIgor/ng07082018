import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../../store/reducers/products.reducer';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string): IProduct[] {
    if (!searchTerm) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.author}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

  }

}
