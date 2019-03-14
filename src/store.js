import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cart, products } from './reducers'

const logger = store => next => action => {
  let result
  result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(
  combineReducers({ cart, products }),
  composeWithDevTools(applyMiddleware(logger, thunk))
)
