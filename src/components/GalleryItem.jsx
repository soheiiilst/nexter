import React from 'react'

function GalleryItem({imgSrc, alt, num}) {
  return (
    <figure className={`gallery__item gallery__item--${num}`}>
      <img src={imgSrc} alt={alt} className='gallery__img' />
    </figure>
  )
}

export default GalleryItem
