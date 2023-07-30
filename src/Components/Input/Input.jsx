import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import searchIconWhite from '../Assets/simplicity-search-icon-white.svg'
import searchIconGray from '../Assets/simplicity-search-icon-gray.svg'

export const Input = ({ placeholder, size, search, onPressEnter, onSearch, ...props }) => {  
  const handleKeyDown = (event) => {
    // Check if the "Enter" key is pressed (key code 13)
    if (event.keyCode === 13) {
      if (onPressEnter !== undefined) {
        onPressEnter(event);
      }
    }
  };

  const handleSearchPressed = (event) => {
    if (onSearch !== undefined) {
      onSearch(event);
    }
  };

  return (
    <div className='simplicity-search-container'>
      <span className={`simplicity-span-input simplicity-span-input-${size} simplicity-span-input-${search}`}>
        <input
          className={`simplicity-input simplicity-input-${size}`} 
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </span>
      {search != undefined ? 
        <img className={`simplicity-input-search-button simplicity-input-${search} simplicity-input-search-button-${size}`}
        src={search === 'search-primary' ? searchIconWhite : searchIconGray}
        onClick={handleSearchPressed}/>
        : <></>}
    </div>
  );
};

Input.propTypes = {
  /**
   * Specify the size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Specify if the input is a search input. This adds a search button on the right side of the input box.
   */
  search: PropTypes.oneOf(['search-primary', 'search-secondary']),
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
  /**
   * Detects when the search button is clicked.
   */
  onSearch: PropTypes.func,
};

Input.defaultProps = {
  size: 'medium',
  search: undefined,
  placeholder: 'Default input box',
  onChange: undefined,
  onPressEnter: undefined,
  onSearch: undefined,
};
