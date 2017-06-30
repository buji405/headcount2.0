import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';

describe('CardList', () => {

const helper = new DistrictRepository(kinderData);
const data = Object.keys(helper.data)

  it('should exist', () => {
    const wrapper = shallow (
      <CardList filteredCards={data}
                data={helper.data}/>
    )
    expect(wrapper.find('.card-list').exists()).toBe(true);
  })
  it('should render 181 cards', () => {
    const wrapper = shallow (
      <CardList filteredCards={data}
                data={helper.data}/>
    )
    const cards = wrapper.find('.card')
    expect(cards.length).toEqual(181)
  })

})
