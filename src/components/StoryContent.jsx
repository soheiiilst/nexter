import React from 'react';

import HeadingThree from './HeadingThree';
import HeadingTwo from './HeadingTwo';
import Button from './Button';


function StoryContent() {
  return (
    <div className='story__content'>
      <HeadingThree>Happy Customers</HeadingThree>
      <HeadingTwo type='dark'>&ldquo;The best decision of our lives&rdquo;</HeadingTwo>
      <p className="story__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit, similique voluptatibus reiciendis enim mollitia, nulla explicabo nostrum ex amet eligendi voluptas numquam quam, ullam non? Tenetur, magnam reiciendis. Ab.
      </p>
      <Button text='Find your own home' />
    </div>
  )
}

export default StoryContent
