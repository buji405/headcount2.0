import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import CardList from './CardList';
import kinderData from '../data/kindergartners_in_full_day_program';
import Input from './Input';
// import ComparisonCard from './ComparisonCard';

class App extends Component {
  constructor () {
    super()
    this.helper = new DistrictRepository(kinderData)
    this.state = {
      selectedCards: [],
      filteredCards: Object.keys(this.helper.data)
    };
  };

  submitSearch(searchInput) {
    const newState = this.helper.findAllMatches(searchInput)
    this.setState({filteredCards: newState})
  };

  selectCard(id) {
    const newArray = this.state.selectedCards
    console.log(newArray);
    const index = newArray.map(e => e.location)
                          .indexOf(id)
    if (index !== -1) {
      newArray.splice(index, 1)
    } else {
      if (newArray.length === 2) {
        newArray.shift()
      }
      newArray.push(this.helper.findByName(id))
    }

    this.setState({
      selectedCards: newArray
    })
  }

  compareCards(obj1, obj2) {
    return this.helper.compareDistrictAverages(obj1, obj2)
  }

  render() {
    return (
      <div className='app'>
        <div className="header-container">
          <div className="image-container">
            <div className="apple"></div>
            <div className="header">Headcount 2.0</div>
            <div className="bus"></div>
          </div>
          <div className="input-container">
            <Input helper={this.helper}
                   submitSearch={this.submitSearch.bind(this)}/>
          </div>
        </div>

        <CardList selectedCards={this.selectCard.bind(this)}
                  chosenCards={this.state.selectedCards}
                  submitSearch={this.submitSearch.bind(this)}
                  filteredCards={this.state.filteredCards}
                  data={this.helper.data}/>
      </div>
    );
  }
}

export default App;
