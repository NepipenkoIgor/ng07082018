import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} from '../actions/cart.action';

const initialState: ICartProduct[] = [];

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const index = state.findIndex((product: ICartProduct) => {
        return product._id === action.payload._id;
      });
      if (index === -1) {
        return [...state, {...action.payload, count: 1}];
      }
      state[index].count++;
      return [...state];
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const index = state.findIndex((product: ICartProduct) => {
        return product._id === action.payload._id;
      });
      state.splice(index, 1);
      return [...state];
    }
    default:
      return state;
  }
}
