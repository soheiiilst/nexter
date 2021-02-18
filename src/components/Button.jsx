import React from 'react';

function Button({text, cName}) {
  return <button className={`btn ${cName ? cName : ''}`}>{text}</button>;
}

export default Button;
