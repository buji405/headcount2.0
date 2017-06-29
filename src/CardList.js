import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({selectedCards, filteredCards, helper, submitSearch}) => {
  let cardsToRender = filteredCards
  if (cardsToRender.length === 0) cardsToRender = helper.data
  const renderVal = cardsToRender.map((school, index) => {
    return(
      <Card className='selected'
            schoolNames={school}
            helper={helper}
            id={index}
            key={Math.round(Date.now() * Math.random())}
            selectedCards={selectedCards}/>
    )
  })

  return (
    <div className="card-list">
      {renderVal}
    </div>
  )
}

export default CardList;
