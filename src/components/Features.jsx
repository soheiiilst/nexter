import React from 'react';

import Feature from './Feature';

import FEATURES_DATA from '../data/Features.data';

function Features() {
  const data = FEATURES_DATA;
  let cKey = 0;

  return (
    <section className='features'>
      {data.map(({ header, text, icon }) => (
        <Feature key={++cKey} header={header} text={text} icon={icon} />
      ))}
    </section>
  );
}

export default Features;
