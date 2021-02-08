import React from 'react';

function HeadingTwo({ type, children }) {
  return <h2 className={`heading-2 heading-2--${type} mb-md`}>{children}</h2>;
}

export default HeadingTwo;
