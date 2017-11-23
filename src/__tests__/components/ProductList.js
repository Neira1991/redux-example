import React from 'react';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, render } from 'enzyme';
import ConnectedProductList from '../../components/ProductList'

configure({ adapter: new Adapter() });
const middlewares = []
const mockStore = configureStore()

it(' renders no products when store is empty', () => {
  const store = mockStore({ products : [] });
  const wrapper = render(<ConnectedProductList store={store} />)
  expect(wrapper.find(".product").length).toBe(0);
})


it('renders products', () => {
  const store = mockStore({
    products : [{
      id:1,
      name: 'hola',
      price: 100,
      image: ""
    }]
  });
  const wrapper = render(<ConnectedProductList store={store} />)
  expect(wrapper.find(".product").length).toBe(1);
})

it('add a product to the shoping cart', () => {
  const store = mockStore({
    products : [{
      id:1,
      name: 'hola',
      price: 100,
      image: ""
    }]
  });
  const wrapper = mount(<ConnectedProductList store={store} />)
  wrapper.find("#product-1 button").simulate('click');

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe('ADD_TO_CART');
  expect(actions[0].product).not.toBeNull();
})
