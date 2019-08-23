import React from 'react';
import ReactDOM from 'react-dom';

import ModalAddTool from '../components/Modal/ModalAddTool'

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test('renders without crashing ModalAddTool', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalAddTool />, div);
    ReactDOM.unmountComponentAtNode(div);
});