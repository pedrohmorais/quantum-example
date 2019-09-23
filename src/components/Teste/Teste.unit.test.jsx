import React from 'react';
import renderer from 'react-test-renderer';
import Teste from './Teste';

describe('<Teste />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Teste />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
