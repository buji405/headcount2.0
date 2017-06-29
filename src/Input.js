import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(searchInput) {
    this.props.submitSearch(searchInput)
    this.setState({
      searchInput: ''
    })
  }

  render() {
    return(
      <div>
        <input className="input-field" value={this.state.searchInput}
               onChange={(e) => this.setState({searchInput: e.target.value})}/>
             <button className="submit" onClick={() => {this.handleSubmit(this.state.searchInput)}}>Search</button>
      </div>
    )
  }
}

export default Input;
