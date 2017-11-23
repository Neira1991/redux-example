import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const reducer = ( state, action ) => {
  switch (action.type) {
    case 'REPLACE_PRODUCTS':
      return {
        ...state,
        products: action.products
      };
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

const logger = store => next => action => {
  let result;
  result = next(action)
   console.log('next state', store.getState())
   return result
}

export default createStore(reducer, { cart: [], product: [],products: []}, applyMiddleware(logger, thunk));
