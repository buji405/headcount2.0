import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';

describe('card', () => {
  const school = 'COLORADO'
  const helper = new DistrictRepository(kinderData);
  const data = Object.keys(helper.data)

  it('should exist', () => {
    const wrapper = mount(
      <Card chosenCards={[]}
            schoolNames={''}
            data={helper.data[school].annualData} />
          )
    expect(wrapper.find('.card').exists()).toBe(true);
  })

  it('if clicked, card should fire the selectedCards func and add class of cardSelected', () => {
    const mockedFn = jest.fn()
    const wrapper = mount(<Card chosenCards={[]}
                                schoolNames={''}
                                data={helper.data[school].annualData}
                                selectedCards={mockedFn} />)

    const card = wrapper.find('.card')

    card.simulate('click')

    expect(mockedFn).toHaveBeenCalledTimes(1);
    expect(wrapper.find('.cardSelected').length).toEqual(1)
    console.log(wrapper.debug());
  })

})
