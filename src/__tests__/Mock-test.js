jest.useFakeTimers();

import 'react-native';
import React from 'react';
import Mock from '../Mock';
import Data from '../Data';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Mock />);

  jest.runAllTimers();

  console.log(setTimeout.mock.calls[0]);
});
