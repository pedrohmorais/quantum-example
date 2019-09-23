import React from 'react';
import renderer from 'react-test-renderer';
import HeaderSubComponent from './HeaderSubComponent';

describe('<HeaderSubComponent />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<HeaderSubComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
