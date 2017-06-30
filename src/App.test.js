import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App.js';

describe('App', () => {

  const wrapper = shallow(<App />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders App with a className of app', () => {

    expect(wrapper.find('.app')).toHaveLength(1)
  })

  it('has an initial state of an empty array on selectedCards', () => {

    expect(wrapper.state('selectedCards')).toEqual([])
  })

  it('has an initial state of an array with all of the datas keys on filteredCards', () => {

    expect(wrapper.state('filteredCards').length).toEqual(181)
  })

  it('having 2 filteredCards in state should render 2 cards', () => {
    const wrapper = mount(<App />)

    wrapper.setState({filteredCards: ['COLORADO', 'ACADEMY 20']})

    expect(wrapper.find('.card')).toHaveLength(2)
  })

  it('user can select a card and its added to state', () => {
    const mockedFn = jest.fn()
    const wrapper = mount(<App selectedCards={mockedFn}/>)

    const expectedState = [{annualData:
                            { 2004: 0.24,
                              2005: 0.278,
                              2006: 0.337,
                              2007: 0.395,
                              2008: 0.536,
                              2009: 0.598,
                              2010: 0.64,
                              2011: 0.672,
                              2012: 0.695,
                              2013: 0.703,
                              2014: 0.741 },
                              location: 'COLORADO'
                            }
                          ]

    wrapper.find('.card').first().simulate('click')

    expect(wrapper.state('selectedCards')).toEqual(expectedState)
    expect(wrapper.find('.card-selected')).toHaveLength(1)
  })

  it('user should be able to enter location in to search and filter cards', () => {
    const mockedFn = jest.fn()
    const wrapper = mount(<App submitSearch={mockedFn}/>)

    const expectedState = ['COLORADO SPRINGS 11']

    const searchInput = wrapper.find('input')
    searchInput.simulate('change', {target: {value: 'colorado springs'}})

    wrapper.find('button').simulate('click')

    expect(wrapper.state('filteredCards')).toEqual(expectedState)
    expect(wrapper.find('.card')).toHaveLength(1)
  })

})
