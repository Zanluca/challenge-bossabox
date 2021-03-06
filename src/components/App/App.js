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

  /** 
   * Responsável por fazer a busca da lista de ferramentas quando a página é carregada.
   */
  useEffect(() => {
    async function getData() {
      const tools = await getTool()
      if (tools)
        setListTools(tools)
    }
    getData()

  }, [])

  /** 
   * Responsável por fazer a busca da lista de ferramentas filtrada somente pelo texto ou pelas tags. 
   */
  useEffect(() => {
    async function getData() {
      let tools
      if ((isSearchOnlyTags) && (debounceSearchTerm.trim() !== ''))
        tools = await getTool(
          {queryTag : debounceSearchTerm}
        )
      else if (debounceSearchTerm.trim() !== '')
        tools = await getTool(
          {queryString : debounceSearchTerm}        
        )  
      else
        tools = await getTool()   
      if (tools)
        setListTools(tools)
    }

    getData()

  }, [debounceSearchTerm, isSearchOnlyTags])

  function handleShowRemove(tool) {
    setShowRemove(true)
    setSelectedTool(tool)
  }

  function handleCloseRemove() {
    setShowRemove(false)
    setSelectedTool(null)
  }

  async function handleRemoveTool() {
    setShowRemove(false)
    const deletedOK = await deleteTool(selectedTool.id)
    setSelectedTool(null)
    if (deletedOK)
      setListTools(listTools.filter(tool => tool.id !== selectedTool.id))
  }

  async function handleAddTool(tool) {
    const data = await addTool(tool)
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
          <h1 data-testid='title'>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
          <Grid>
            <InputText value={searchString} type='text' placeholder='&#xF002; search' onChange={e => setSearchString(e.target.value)} />
            <span>
              <input id='search-by-tag' type='checkbox' defaultChecked={isSearchOnlyTags} onChange={e => setIsSearchOnlyTags(e.target.checked)} />
              <label htmlFor='search-by-tag'>search in tags only</label>
            </span>
            <Button data-testid='button-add' primary neutral onClick={handleShowAddTool}><FontAwesomeIcon icon='plus' /> Add</Button>
          </Grid>
          <CardList tools={listTools} handleShowRemove={handleShowRemove} highlight = {debounceSearchTerm} />
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
