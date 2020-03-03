import EventItem from '../../components/EventItem';
import React from 'react';
import renderer from 'react-test-renderer';

describe('EventList Component', () => {
  test('should render correctly', () => {
    const component = renderer.create(<EventItem />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
