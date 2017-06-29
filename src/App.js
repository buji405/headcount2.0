import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import CardList from './CardList';
import kinderData from '../data/kindergartners_in_full_day_program';
import Input from './Input';

class App extends Component {
  constructor () {
    super()
    this.helper = new DistrictRepository(kinderData)
    this.state = {
      selectedCards: [],
      filteredCards: []
    };
  };

  submitSearch(searchInput) {
    const newState = this.helper.findAllMatches(searchInput)
    this.setState({filteredCards: newState})
  };

  selectCard(id) {
    // console.log(id)
    const newArray = this.state.selectedCards
    newArray.push(this.helper.findByName(id))
    // const newArray = this.helper.findAllMatches().map(obj => {
    //   obj.location = obj.location.toLowerCase()
    //   return obj
    // }).filter(obj => obj.location.includes(id.toLowerCase()) )
    // console.log(newArray)
    this.setState({
      selectedCards: newArray
    })
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="image-container">
            <div className="apple"></div>
            <div className="header">Headcount 2.0</div>
            <div className="bus"></div>
          </div>
          <div className="input-container">
            <Input helper={this.helper}
                   submitSearch={this.submitSearch}/>
          </div>
        </div>
        <CardList selectedCards={this.selectCard.bind(this)}
                  submitSearch={this.submitSearch.bind(this)}
                  filteredCards={this.state.filteredCards}
                  helper={this.helper}
                  id={Date.now()}/>
      </div>
    );
  }
}

export default App;
