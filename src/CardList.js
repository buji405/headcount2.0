import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types';
import './CardList.css'

const CardList = ({chosenCards, selectedCards, filteredCards, data, submitSearch}) => {
  let cardsToRender = filteredCards
  if (cardsToRender.length === 0) cardsToRender = data
  const renderVal = cardsToRender.map((school, index) => {
    return(
      <Card className="card"
            schoolNames={school}
            data={data[school].annualData}
            id={index}
            chosenCards={chosenCards}
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

CardList.propTypes = {
  chosenCards: PropTypes.array,
  selectedCards: PropTypes.func,
  filteredCards: PropTypes.array,
  data: PropTypes.object,
  submitSearch: PropTypes.func
}

export default CardList;
