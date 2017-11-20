import { createStore } from 'redux';

const reducer = ( state, action ) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    console.log('ADD_TO_CART',state);
      return {
        ...state,
        cart : state.cart.concat(action.product).filter(element => element !== undefined)
      }
    case 'REMODE_FROM_CAR':
    console.log('REMODE_FROM_CAR',state);
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.product.id)
      }
    default:
  }
  return state;
};

export default createStore(reducer, { cart: [] });
