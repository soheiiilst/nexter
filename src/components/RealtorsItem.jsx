import React from 'react';

import Aux from './Auxilliary';
import HeadingFour from './HeadingFour';

const RealtorsItem = ({name, sold, imgSrc, alt}) => (
  <Aux>
    <img src={imgSrc} alt={alt} className='realtors__img'/>
    <div className="realtors__details">
      <HeadingFour type='light'>{name}</HeadingFour>
      <p className='realtors__sold'>{sold} houses sold</p>
    </div>
  </Aux>
);

export default RealtorsItem;