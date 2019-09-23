import React from 'react';
import PropTypes from 'prop-types';

// For components used only in the Teste Component,
// use the folder 'sub-components' to store them
import TesteSubComponent from './sub-components/TesteSubComponent';

const Teste = ({ name }) => (
  <React.Fragment>
    Hello {name}!
  </React.Fragment>
);

// We recommend the use of PropTypes.
// You can find more details here: https://reactjs.org/docs/typechecking-with-proptypes.html
Teste.propTypes = {
  name: PropTypes.string,
};

// To keep consistency, we set the default props
// using the same way we set the props
Teste.defaultProps = {
  name: 'Teste',
};

export default Teste;
