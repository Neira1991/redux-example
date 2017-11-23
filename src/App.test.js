import React from 'react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
);
});

//shallow no renderiza los componentes hijos
