import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ProductComponent} from './product.component';
import {ICartProduct} from '../../../store/reducers/cart.reducer';

const testProduct: ICartProduct = {
  _id: '1',
  title: 'Product 1',
  serial: 12,
  author: 'Adidas',
  price: 1234,
  src: 'img.png',
  count: 1
};

describe('Product Component', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent
      ]
    });

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = testProduct;

    spyOn(component, 'decrementProduct').and.callThrough();
    spyOn(component, 'removeProduct').and.callThrough();
    spyOn(component, 'incrementProduct').and.callThrough();
    spyOn(component.remove, 'emit').and.callThrough();
    spyOn(component.decrement, 'emit').and.callThrough();
    spyOn(component.increment, 'emit').and.callThrough();

    fixture.detectChanges();
  });

  it('should increment', () => {
    const incrementProduct = fixture.debugElement.query(By.css('.count__increase'));
    incrementProduct.triggerEventHandler('click', null);
    expect(component.incrementProduct).toHaveBeenCalledWith(component.product);
    expect(component.increment.emit).toHaveBeenCalledWith(component.product);
  });

  it('should decrement', () => {
    const product = {...testProduct, count: 2};
    component.product = product;
    const decrementProduct = fixture.debugElement.query(By.css('.count__decrease'));
    decrementProduct.triggerEventHandler('click', null);
    expect(component.decrementProduct).toHaveBeenCalledWith(component.product);
    expect(component.decrement.emit).toHaveBeenCalledWith(component.product);
    expect(component.remove.emit).not.toHaveBeenCalled();
  });

  it('should decrement', () => {
    const decrementProduct = fixture.debugElement.query(By.css('.count__decrease'));
    decrementProduct.triggerEventHandler('click', null);
    expect(component.decrementProduct).toHaveBeenCalledWith(component.product);
    expect(component.decrement.emit).not.toHaveBeenCalled();
    expect(component.remove.emit).toHaveBeenCalledWith(component.product);
  });
});
