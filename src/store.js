import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

const products = ( state=[], action ) => {
  switch (action.type) {
    case 'REPLACE_PRODUCTS':
      return action.products
    default:
  }
  return state;
};

const cart = ( state=[], action ) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    console.log('ADD_TO_CART',state);
      return state.concat(action.product).filter(element => element !== undefined)
    case 'REMODE_FROM_CAR':
    console.log('REMODE_FROM_CAR',state);
      return state.filter(product => product.id !== action.product.id)
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

export default createStore(combineReducers({ cart, products}), applyMiddleware(logger, thunk));
