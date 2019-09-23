import React from 'react';
import PropTypes from 'prop-types';

// For components used only in the Header Component,
// use the folder 'sub-components' to store them
import HeaderSubComponent from './sub-components/HeaderSubComponent';

const Header = ({ name }) => (
  <React.Fragment>
    Hello {name}!
  </React.Fragment>
);

// We recommend the use of PropTypes.
// You can find more details here: https://reactjs.org/docs/typechecking-with-proptypes.html
Header.propTypes = {
  name: PropTypes.string,
};

// To keep consistency, we set the default props
// using the same way we set the props
Header.defaultProps = {
  name: 'Header',
};

export default Header;
