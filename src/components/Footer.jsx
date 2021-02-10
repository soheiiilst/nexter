import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <ul className='nav'>
        <li className='nav__item'>
          <span className='nav__link'>Find your dream home</span>
        </li>
        <li className='nav__item'>
          <span className='nav__link'>Request proposal</span>
        </li>
        <li className='nav__item'>
          <span className='nav__link'>Download home planner</span>
        </li>
        <li className='nav__item'>
          <span className='nav__link'>Contact us</span>
        </li>
        <li className='nav__item'>
          <span className='nav__link'>Submit your property</span>
        </li>
        <li className='nav__item'>
          <span className='nav__link'>Come work with us!</span>
        </li>
      </ul>
      <p className="copyright">
        &copy; Copyright {new Date().getFullYear()} by Nexter company.
      </p>
    </footer>
  );
}

export default Footer;
