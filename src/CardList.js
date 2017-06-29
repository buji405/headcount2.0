import React from 'react'
import Card from './Card'
import './CardList.css'
// import DistrictRepository from './helper';


const CardList = ({selectedCards, filteredCards, helper, submitSearch}) => {
  let cardsToRender = filteredCards
  if (cardsToRender.length === 0) cardsToRender = helper.data

  const renderVal = Object.keys(cardsToRender).map((school, index) => {
    return (
      <div>
        <Card schoolNames={school}
              helper={helper}
              id={index}
              key={Math.round(Date.now() * Math.random())}
              selectedCards={selectedCards}/>
      </div>
    )
  })

  return (
    <section>

      <div className="card-list">
        {renderVal}
      </div>
    </section>
  )
  // if (!filteredCards.length) {
  //   return(
  //   )
  // } else {
  //   return(
  //     <div className="card-list">
  //       {filteredCards.map((school, index) => {
  //
  //         return(
  //           <Card schoolNames={school}
  //                 helper={helper}
  //                 id={index}
  //                 key={index}
  //                 selectedCards={selectedCards}/>
  //         )
  //       })}
  //     </div>
  //   )
  // }
}

export default CardList;
