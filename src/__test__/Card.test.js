import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../components/Card'

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test('renders without crashing Card', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});


/**
 * Para testar se a função de remover foi chamada
 * test('drinkEach drinks each drink', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus']);
  expect(drink).toHaveBeenCalledTimes(2);
}); */