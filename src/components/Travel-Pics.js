import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
// import Images from '../assets/images';

const numberOfPicture = [1, 2, 3, 4, 5, 6];

export default function ImageScroll() {
  return (
    <ScrollMenu
      arrowLeft={<div style={{ fontSize: '30px' }}>{' < '}</div>}
      arrowRight={<div style={{ fontSize: '30px' }}>{' > '}</div>}
      data={numberOfPicture.map((picture, index) => (
        <img
          style={{ height: '100px' }}
          alt="test"
          src="https://reactjs.org/logo-og.png"
        />
      ))}
    />
  );
}
