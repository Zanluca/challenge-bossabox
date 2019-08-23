import React from 'react';
import ReactDOM from 'react-dom';

import { InputText } from '../components/InputText'

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test('renders without crashing InputText', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputText />, div);
    ReactDOM.unmountComponentAtNode(div);
});