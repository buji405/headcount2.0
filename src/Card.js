import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({chosenCards, schoolNames, selectedCards, data}) => {
  let cardClass = 'card'
  const cardData = Object.keys(data).map(year => {
    let listClass = data[year] <= 0.5 ? 'less-than data' : "greater-than data"
    return (
        <li key={Math.round(Date.now() * Math.random())}>
          <p className={listClass}>{year}: {data[year]}</p>
        </li>
      )
  })
if (chosenCards.map(e => e.location).indexOf(schoolNames) !== -1) {
  cardClass = 'card-selected'
}
  return (
    <div className={cardClass} onClick={() => selectedCards(schoolNames)}>
      <h1>{schoolNames.toUpperCase()}</h1>
      <ul>
        {cardData}
      </ul>
    </div>
  )
}

Card.propTypes = {
  chosenCards: PropTypes.array,
  schoolNames: PropTypes.string,
  selectedCards: PropTypes.func,
  data: PropTypes.object
}

export default Card;
