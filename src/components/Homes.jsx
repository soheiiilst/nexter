import React from 'react';
import Home from './Home';
import HOME_DATA from '../data/Home.data';

function Homes() {
  const data = HOME_DATA;
  return (
    <section className='homes'>
      {data.map(({ id, ...otherProps }) => (
        <Home key={id} {...otherProps} />
      ))}
    </section>
  );
}

export default Homes;
