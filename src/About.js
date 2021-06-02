import React from 'react';

import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='about' onMouseOver={closeSubmenu}>
      <div className='about-center'>
        <article className='about-info'>
          <h1>Hi, my name is Rosh</h1>
          <p>
            Welcome to AxeFX Basics. My name is Rosh and I have been programming
            Fractal Products for over 10 years. My clients include: Def Leppard,
            Melissa Etheridge, A Perfect Circle, Steve Vai, Dweezil Zappa, Bush,
            and more. I want to give back to the Fractal Community and show some
            approaches and techniques for programming the Fractal Audio FM3
          </p>
          <br></br>
          <p>
            I'll be posting tutorials for how to program the Fractal Audio FM3.
            If you have any requests for tutorials please feel free to reach
            out. I also do 1:1 consultations remotely and can help you maximize
            all the sounds and tones of your unit.
          </p>
        </article>
        <article className='about-images'></article>
      </div>
    </section>
  );
};

export default Hero;
