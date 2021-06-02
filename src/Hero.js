import React from 'react';

import fm3 from './images/axefxfm3.jpg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>FM3 Basics</h1>
          <p>
            Tutorials, presets, and community for Fractal Audio's FM3 - The
            industry leading amp and cab modeling unit, in a powerful foot
            controller.
          </p>
        </article>
        <article className='hero-images'>
          <img src={fm3} alt='fm3' className='fm3-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
