import React from 'react';
import './Card.css';


const Card = ({chosenCards, schoolNames, selectedCards, data, id}) => {
  let cardClass = 'card'
  const cardData = Object.keys(data).map(year => {
    let listClass = data[year] <= 0.5 ? 'less-than data' : "greater-than data"
    return (
        <li key={Math.round(Date.now() * Math.random())}><p className={listClass}>{year}: {data[year]}</p></li>
      )
  })
if (chosenCards.map(e => e.location).indexOf(schoolNames) !== -1) {
  cardClass = 'cardSelected'
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

export default Card;
