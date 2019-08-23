import React from 'react';
import ReactDOM from 'react-dom';

import ModalRemove from '../components/Modal/ModalRemove'

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test('renders without crashing ModalRemove', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalRemove />, div);
    ReactDOM.unmountComponentAtNode(div);
});