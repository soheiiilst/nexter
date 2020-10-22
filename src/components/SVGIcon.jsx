import React from 'react'

import sprite from '../assets/sprite.svg';

function SVGIcon({iconName, cName}) {
  return (
    <svg className={`${cName}`}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </svg>
  )
}

export default SVGIcon
