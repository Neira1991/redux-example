export const products = (state = [], action) => {
  switch (action.type) {
    case 'REPLACE_PRODUCTS':
      return action.products
    default:
  }
  return state
}

export const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', state)
      return state
        .concat(action.product)
        .filter(element => element !== undefined)
    case 'REMODE_FROM_CAR':
      console.log('REMODE_FROM_CAR', state)
      return state.filter(product => product.id !== action.product.id)
    default:
  }
  return state
}
