import React, { useState, useEffect, Fragment } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getTool, addTool, deleteTool } from '../../service/serviceTools'
import useDebounce from '../../utils/use-debounce'

import { Container, AppContent, GlobalStyle, Grid } from './style'
import { Button } from '../Button/'
import { InputText } from '../InputText'
import Card from '../../components/Card'
import CardList from '../../components/CardList'
import ModalRemove from '../../components/Modal/ModalRemove'
import ModalAddTool from '../../components/Modal/ModalAddTool'

library.add(fab, faPlus, faTimes)

function App() {
  const [listTools, setListTools] = useState([])
  const [showRemove, setShowRemove] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [selectedTool, setSelectedTool] = useState(null)
  const [searchString, setSearchString] = useState('')
  const [isSearchOnlyTags, setIsSearchOnlyTags] = useState(false)
  const debounceSearchTerm = useDebounce(searchString, 500)

  useEffect(() => {
    document.title = 'Teste'
    async function getData() {
      const tools = await getTool()
      if (tools)
        setListTools(tools)
    }
    getData()

  }, [])

  useEffect(() => {
    async function getData() {
      let tools

      if (isSearchOnlyTags)
        tools = await getTool(
          {queryTag : debounceSearchTerm}
        )
      else
        tools = await getTool(
          {queryString : debounceSearchTerm}
        )    
      if (tools)
        setListTools(tools)
    }
    if ((debounceSearchTerm) && (debounceSearchTerm.trim() !== ''))
      getData()

  }, [debounceSearchTerm, isSearchOnlyTags])

  function handleShowRemove(tool) {
    const body = document.body
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
    setShowRemove(true)
    setSelectedTool(tool)
  }

  function handleCloseRemove() {
    setShowRemove(false)
    setSelectedTool(null)
    const body = document.body
    body.style.overflowY = 'auto';
  }

  async function handleRemoveTool() {
    const deletedOK = await deleteTool(selectedTool.id)
    setShowRemove(false)
    setSelectedTool(null)
    const body = document.body
    body.style.overflowY = 'auto';
    if (deletedOK)
      setListTools(listTools.filter(tool => tool.id !== selectedTool.id))
  }

  async function handleAddTool(tool) {
    const data = await addTool(tool)
    const body = document.body
    body.style.overflowY = 'auto';
    setShowAdd(false)
    if (data)
      setListTools([...listTools, data])
  }

  function handleCloseAddTool() {
    setShowAdd(false)
  }

  function handleShowAddTool() {
    setShowAdd(true)
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <AppContent>
          <h1>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
          <Grid>
            <InputText value={searchString} type='text' placeholder='&#xF002; search' onChange={e => setSearchString(e.target.value)} />
            <span>
              <input id='search-by-tag' type='checkbox' defaultChecked={isSearchOnlyTags} onChange={e => setIsSearchOnlyTags(e.target.checked)} />
              <label htmlFor='search-by-tag'>search in tags only</label>
            </span>
            <Button primary neutral onClick={handleShowAddTool}><FontAwesomeIcon icon='plus' /> Add</Button>
          </Grid>
          <CardList>
            {
              listTools.map((tool) => (
                <Card key={tool.id}
                  tool={tool}
                  showRemove={handleShowRemove} />
              ))
            }
          </CardList>
        </AppContent>
        {selectedTool &&
          <ModalRemove
            show={showRemove}
            close={handleCloseRemove}
            name={selectedTool.title}
            remove={handleRemoveTool}
          />
        }
        <ModalAddTool show={showAdd} addTool={handleAddTool} close={handleCloseAddTool} />
      </Container>
    </Fragment>

  );
}

export default App;
