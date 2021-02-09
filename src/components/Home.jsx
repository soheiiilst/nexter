import React from 'react';

import SVGIcon from './SVGIcon';

function Home({ name, imgSrc, alt, location, rooms, area, price }) {
  return (
    <div className='home'>
      <img src={imgSrc} alt={alt} className='home__img' />
      <SVGIcon cName='home__like' iconName='icon-heart-full' />
      <h5 className='home__name'>{name}</h5>

      <div className='home__location'>
        <SVGIcon iconName='icon-map-pin' />
        <p>{location}</p>
      </div>

      <div className='home__rooms'>
        <SVGIcon iconName='icon-profile-male' />
        <p>{rooms} rooms</p>
      </div>

      <div className='home__area'>
        <SVGIcon iconName='icon-expand' />
        <p>
          {area} m<sup>2</sup>
        </p>
      </div>

      <div className='home__price'>
        <SVGIcon iconName='icon-key' />
        <p>${price}</p>
      </div>

      <button className='btn home__btn'>Contact realtor</button>
    </div>
  );
}

export default Home;
