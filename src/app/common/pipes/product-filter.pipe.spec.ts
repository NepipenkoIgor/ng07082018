import {IProduct} from '../../store/reducers/products.reducer';
import {ProductFilterPipe} from './product-filter.pipe';

const products: IProduct[] = [
  {
    _id: '1',
    title: 'Product 1',
    serial: 12,
    author: 'Adidas',
    price: 1234,
    src: 'img.png'
  },
  {
    _id: '2',
    title: 'Product 2',
    serial: 12,
    author: 'Puma',
    price: 2321,
    src: 'img.png'
  }
];

describe('Product filter', () => {
  let pipe: ProductFilterPipe;

  beforeEach(() => {
    pipe = new ProductFilterPipe();
  });

  it('should filter products', () => {
    expect(pipe.transform(products, 'pu').length).toBe(1);
    expect(pipe.transform(products, 'Pu').length).toBe(1);
    expect(pipe.transform(products, 'Puasdasd').length).toBe(0);
  });
});
