import React from 'react';
import PropTypes from 'prop-types';
import 'react-vis/dist/style.css';

function Button(props) {
  const {buttonContent, onClick} = props;
  return (
    <button className="Button" onClick={onClick}>
      {buttonContent}
    </button>
  );
}

Button.PropTypes = {
  buttonContent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;