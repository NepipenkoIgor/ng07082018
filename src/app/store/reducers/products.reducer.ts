import {GET_PRODUCTS_SUCCESS} from '../actions/products.action';

export interface IProduct {
  _id: string;
  title: string;
  serial: number;
  author: string;
  price: number;
  src: string;
}

const initialState: IProduct[] = [];

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
