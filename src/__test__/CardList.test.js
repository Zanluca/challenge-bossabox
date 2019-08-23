import React from 'react';
import ReactDOM from 'react-dom';

import CardList from '../components/CardList'

import { cleanup, render, within} from "@testing-library/react";

import tools from './data/sample-data.json'

afterEach(cleanup);

test('renders without crashing CardList', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders with list', () => {
    const {getByTestId, getAllByTestId, getAllByLabelText} = render(<CardList tools={tools} />)

    const cards = getAllByTestId('card')

    const cardsName = getAllByLabelText('tool-name').map(el => el.textContent)
    const toolsName = tools.map(tool => tool.title)

    expect(cardsName).toEqual(toolsName)
})