import React from 'react';

function HeadingOne({ type, children }) {
  return <h1 className={`heading-1 heading-1--${type}`}>{children}</h1>;
}

export default HeadingOne;
