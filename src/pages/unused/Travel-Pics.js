import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Barcelona from '../assets/images/Barcelona.jpeg';

const travelPics = [Barcelona];

export default function ImageScroll() {
  return (
    <ScrollMenu
      arrowLeft={<div style={{ fontSize: '30px' }}>{' < '}</div>}
      arrowRight={<div style={{ fontSize: '30px' }}>{' > '}</div>}
      data={travelPics.map((picture, index) => (
        <img
          style={{ height: '100px' }}
          alt="test"
          src={Barcelona}
        />
      ))}
    />
  );
}
