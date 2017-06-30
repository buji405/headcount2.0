import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('should exist', () => {
    const wrapper = shallow (
      <Input />
    )
    expect(wrapper.find('.input-field').exists()).toBe(true);
  })
  it('has a oneinput field', () => {
    const wrapper = shallow(
      <Input />
    )
    expect(wrapper.find('input').length).toBe(1);
  });
  it('fires onChange state & input field', () => {
  const wrapper = mount(
    <Input />
  )
  const input = wrapper.find('.input-field');

  input.simulate('change', {target: { value: 'color' }});

  const expectedState = {
    searchInput: 'color'
  }
  expect(wrapper.state()).toEqual(expectedState);
  expect(input.node.value).toEqual('color');
  });
  it('fires submitIdea function with the state object while confirming that input fields go back to empty strings', () => {
    const mockedFn = jest.fn();

    const wrapper = mount (
      <Input submitSearch={mockedFn} />
    )

    const card =   {searchInput: 'col'};

    wrapper.setState(card);
    const button = wrapper.find('.submit');
    button.simulate('click');

    const expectedState = {
      searchInput: ''
    }
    expect(wrapper.state()).toEqual(expectedState);
    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
})
