import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import CardList from './CardList';
import Input from './Input';
import kinderData from '../data/kindergartners_in_full_day_program';



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
    newArray.push(this.helper.findByName(id))

    if (newArray.length < 3) {
      this.setState({
        selectedCards: newArray
      })
      event.target.classList.toggle('selected');
    }
  }

  compareCards(obj1, obj2) {
    return this.helper.compareDistrictAverages(obj1, obj2)
  }

  resetState() {
    this.setState({
      selectedCards: []
    })
  }

  render() {
    return (
      <div>
        <Input helper={this.helper}
               submitSearch={this.submitSearch.bind(this)}/>
        <CardList selectedCards={this.selectCard.bind(this)}
                  filteredCards={this.state.filteredCards}
                  helper={this.helper}/>
      </div>
    );
  }
}

export default App;
