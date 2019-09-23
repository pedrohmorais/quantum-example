import React from 'react';
import renderer from 'react-test-renderer';
import TesteSubComponent from './TesteSubComponent';

describe('<TesteSubComponent />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<TesteSubComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
