import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ImageViewer.css';

export const ImageViewer = ({ children }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  // const []
  useEffect(() => {
    console.log(children)
  }, [])
  return (
    <div
    className='simplicity-image-viewer'
    onClick={() => setIsImageOpen((current) => !current)}
    >
      {isImageOpen ? 
      <>
        <div className='simplicity-image-preview-container'>
        </div>
        <img className='simplicity-image-preview-image' 
        src={children.props.src}
        style={{height: ``}}/>
      </>
      : <></>}
      {children}
    </div>
  );
};

ImageViewer.propTypes = {
  /**
   * Insert your image as a child element of ImageViewer.
   */
  children: PropTypes.element.isRequired,
  /**
   * Detects when the image is opened.
   */
  // onClick: PropTypes.func,
};

ImageViewer.defaultProps = {
  children: undefined,
  onClick: undefined,
};
