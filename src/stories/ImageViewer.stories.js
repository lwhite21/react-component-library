import { ImageViewer } from '../Components/Image Viewer/ImageViewer'
import React from 'react';
import sunsetImage from '../Components/Assets/sunset-image.jpg';

export default {
  title: 'Components/ImageViewer',
  component: ImageViewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
    args: {
      children: React.createElement('img', {
        src: sunsetImage,
        style: {
          width: '200px',
          height: '150px',
        },
      }),
    },
  };