import React from 'react'
import List from './style'
import Card from '../Card'

function CardList({
    tools = [], 
    handleShowRemove = () => {}
}) {


    return (
        <List data-testid='card-list'>
            {tools.map((tool) => (
                <Card data-testid='card' key={tool.id}
                  tool={tool}
                  showRemove={handleShowRemove} />
              ))}
        </List>
    )
}

export default CardList