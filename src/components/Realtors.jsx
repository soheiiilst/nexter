import React from 'react';

import HeadingThree from './HeadingThree';

import REALTORS_DATA from '../data/Realtors.data';
import RealtorsItem from './RealtorsItem';

function Realtors() {
  const data = REALTORS_DATA;
  return (
    <div className='realtors'>
      <HeadingThree>Top 3 Realtors</HeadingThree>
      <div className='realtors__list'>
        {data.map(({ id, ...otherProps }) => (
          <RealtorsItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
}

export default Realtors;
