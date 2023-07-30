import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({ placeholder, size, onPressEnter, ...props }) => {
  const handleKeyDown = (event) => {
    // Check if the "Enter" key is pressed (key code 13)
    if (event.keyCode === 13) {
      if (onPressEnter !== undefined) {
        onPressEnter(event);
      }
    }
  };

  return (
    <input
      className={`simplicity-input simplicity-input-${size}`} 
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
};

Input.propTypes = {
  /**
   * Specify the size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The text that is displayed before usage.
   */
  placeholder: PropTypes.string,
  /**
   * Detects when the input is changed.
   */
  onChange: PropTypes.func,
  /**
   * Detects when the enter key is pressed.
   */
  onPressEnter: PropTypes.func,
};

Input.defaultProps = {
  size: 'medium',
  placeholder: 'Default input box',
  onChange: undefined,
  onPressEnter: undefined,
};
