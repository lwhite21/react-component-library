import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ variant, size, ...props }) => {
  return (
    <button
      type="button"
      className={`simplicity-button simplicity-button-${variant} simplicity-button-${size}`}
      {...props}
    />
  );
};

Button.propTypes = {
  /**
   * Use the variant property to change the styling of your button.
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Specify the size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Name your button by using child text.
   */
  children: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
};
