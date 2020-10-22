import React from 'react';

import SVGIcon from './SVGIcon';
import HeadingFour from './HeadingFour';

function Feature({ header, text, icon }) {
  return (
    <div className='feature'>
      <SVGIcon cName='feature__icon' iconName={icon} />
      <HeadingFour>{header}</HeadingFour>
      <p className='feature__text'>{text}</p>
    </div>
  );
}

export default Feature;
