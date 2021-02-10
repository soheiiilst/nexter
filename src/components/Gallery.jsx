import React from 'react';

import GalleryItem from './GalleryItem';

import GALLERY_DATA from '../data/Gallery.data';

function Gallery() {
  const data = GALLERY_DATA;
  return (
    <section className='gallery'>
      {data.map(({ id, ...otherProps }) => (
        <GalleryItem key={id} {...otherProps} />
      ))}
    </section>
  );
}

export default Gallery;
