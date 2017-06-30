import React from 'react';
import { shallow, mount } from 'enzyme';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';

import CardList from './CardList';

describe('CardList', () => {
  
  const helper = new DistrictRepository(kinderData);
  const data = Object.keys(helper.data);

  it('has a card-list className', () => {
    const wrapper = shallow(<CardList filteredCards={data}
                                      data={helper.data}/>)

    expect(wrapper.find('.card-list')).toHaveLength(1)
  })

  it('has className of card', () => {
    const wrapper = mount(<CardList chosenCards={[]}
                                    filteredCards={data}
                                    data={helper.data}
                                    />)

    expect(wrapper.find('.card')).toHaveLength(181)
  })

})
