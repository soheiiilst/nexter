import React from 'react';

function HeadingFour({ type, children }) {
  return <h4 className={`heading-4 heading-4--${type}`}>{children}</h4>;
}

export default HeadingFour;
