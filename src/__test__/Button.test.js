import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../components/Button'

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test('renders without crashing Button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
});