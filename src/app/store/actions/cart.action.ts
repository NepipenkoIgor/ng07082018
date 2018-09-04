export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export class AddProductToCart {
  public type = ADD_PRODUCT_TO_CART;

  public constructor(public payload: IProduct) {
  }
}

export class RemoveProductFromCart {
  public type = REMOVE_PRODUCT_FROM_CART;

  public constructor(public payload: ICartProduct) {
  }
}
