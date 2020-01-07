import React from 'react';
import ReactDOM from 'react-dom';

import '@testing-library/jest-dom/extend-expect'
import {
  render,
  fireEvent,
  cleanup,
  within,
  waitForElement,
} from "@testing-library/react";

import App from '../components/App/App';

import axiosMock from 'axios'
import result from './data/sample-data.json'
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

test('renders without crashing App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('fetches and display data (cards)', async () => {
  axiosMock.get.mockResolvedValueOnce({
    status: 200,
    data: result,
  })

  await act(async () => {
    const { getByTestId } = render(<App />)

    const cardList = getByTestId('card-list')

    const cards = await waitForElement(() =>
      within(cardList).getAllByTestId('card')
    )

    expect(cards.length).toBe(6)
  })
})

test('add new tool', async () => {  
  axiosMock.get.mockResolvedValueOnce({
    status: 200,
    data: result,
  })
  
  const newTool = {
    description: 'Promise based HTTP client for the browser and node.js',
    link: 'https://github.com/axios/axios',
    tags: ['node', 'http', 'promisse'],
    title: 'axios',
    id: 9999
  }
  axiosMock.post.mockResolvedValueOnce({
    status: 201,
    data: newTool
  })

  await act(async () => {
    const { getByTestId } = render(<App />)

    const btnAddNewTool = getByTestId('button-add')

    fireEvent.click(btnAddNewTool)

    const modalAdd = await waitForElement(() => getByTestId('modal-add'))

    expect(modalAdd).toHaveStyle('display : flex')

    const inputName = within(modalAdd).getByLabelText('tool-name')
    fireEvent.change(inputName, { target: { value: newTool.title } })

    const inputLink = within(modalAdd).getByLabelText('tool-link')
    fireEvent.change(inputLink, { target: { value: newTool.link } })

    const inputDescription = within(modalAdd).getByLabelText('tool-description')
    fireEvent.change(inputDescription, { target: { value: newTool.description } })

    const inputTags = within(modalAdd).getByLabelText('tool-tags')
    const tagsStr = newTool.tags.reduce(((tags, tag) => `${tags} ${tag}`))
    fireEvent.change(inputTags, { target: { value: tagsStr } })

    const btnAddTool = within(modalAdd).getByLabelText('button-add-tool')
    fireEvent.click(btnAddTool)

    const cardList = await waitForElement(() =>
      getByTestId('card-list'))

    const cards = await waitForElement(() =>
      within(cardList).getAllByLabelText('tool-name')
    )
    const allNames = cards.map(name => name.textContent)

    expect(allNames).toContain(newTool.title)
  })
})

test('remove tool', async () => {
  axiosMock.get.mockResolvedValueOnce({
    status: 200,
    data: result,
  })

  await act(async () => {
    const { getByTestId } = render(<App />)
    const cardList = getByTestId('card-list')

    const cards = await waitForElement(() =>
      within(cardList).getAllByTestId('card')
    )

    const nameTool = within(cards[0]).getByLabelText('tool-name')
    const removeButton = within(cards[0]).getByLabelText('button-remove')
    fireEvent.click(removeButton)

    const modalRemove = await waitForElement(() =>
      getByTestId('modal-remove')
    )
    expect(modalRemove).toHaveStyle('display : flex')

    const btnRemove = within(modalRemove).getByLabelText('button-yes-remove')
    fireEvent.click(btnRemove)

    const modalRemoveAfterRemove = await waitForElement(() =>
      getByTestId('modal-remove')
    )
    expect(modalRemoveAfterRemove).toHaveStyle('display : none')

    const cardListNew = await waitForElement(() =>
      getByTestId('card-list')
    )
    const cardsNames = await waitForElement(() =>
      within(cardListNew).getAllByLabelText('tool-name')
    )

    const allNames = cardsNames.map(name => name.textContent)
    expect(allNames).not.toContain(nameTool.textContent)
  })
})

test('cancel remove tool ', async () => {
  axiosMock.get.mockResolvedValueOnce({
    status: 200,
    data: result,
  })

  await act(async () => {
    const { getByTestId, queryByText } = render(<App />)
    const cardList = getByTestId('card-list')
    
    const cards = await waitForElement(() =>
      within(cardList).getAllByTestId('card')
    )

    const cardsNames = await waitForElement(() =>
      within(cardList).getAllByLabelText('tool-name')
    )

    const allNames = cardsNames.map(name => name.textContent)

    const removeButton = within(cards[0]).getByLabelText('button-remove')
    fireEvent.click(removeButton)

    const modalRemove = await waitForElement(() =>
      getByTestId('modal-remove')
    )
    expect(modalRemove).toHaveStyle('display : flex')

    const btnCancelRemove = within(modalRemove).getByLabelText('button-cancel-remove')
    fireEvent.click(btnCancelRemove)
    
    expect(queryByText('Remove tool')).not.toBeInTheDocument()

    const cardListNew = await waitForElement(() =>
      getByTestId('card-list')
    )
    const cardsNamesNew = await waitForElement(() =>
      within(cardListNew).getAllByLabelText('tool-name')
    )

    const allNamesNew = cardsNamesNew.map(name => name.textContent)
    expect(allNames).toEqual(allNamesNew)
  })
})