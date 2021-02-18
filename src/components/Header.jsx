import React from 'react'

import HeadingOne from './HeadingOne';
import HeadingThree from './HeadingThree';
import Button from './Button';

function Header() {
  return (
    <header className='header'>
      <img src="img/logo-2.png" alt="Nexter logo" className='header__logo'/>
      <HeadingThree>Your own home:</HeadingThree>
      <HeadingOne>The ultimate personal freedom</HeadingOne>
      <Button cName='header__btn' text='View our properties'/>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src="img/logo-bbc.png" alt="Seen on logo 1"/>
        <img src="img/logo-forbes.png" alt="Seen on logo 2"/>
        <img src="img/logo-techcrunch.png" alt="Seen on logo 3"/>
        <img src="img/logo-bi.png" alt="Seen on logo 4"/>
      </div>
    </header>
  )
}

export default Header
