import App from '../../App';
import React from 'react';
import renderer from 'react-test-renderer';

test('should render correctly', () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});
