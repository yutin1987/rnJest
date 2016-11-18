import 'react-native';
import React from 'react';
import Intro from '../Intro';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(
    <Intro />
  );

  const tree = component.toJSON();

  expect(component.toJSON()).toMatchSnapshot();

  tree.props.onEnter();

  expect(component.toJSON()).toMatchSnapshot();
});
