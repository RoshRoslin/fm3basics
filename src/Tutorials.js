import React, { Component } from 'react';

import { useGlobalContext } from './context';
import data from './data';
import VideoModal from './VideoModal';

import 'react-modal-video/scss/modal-video.scss';

const TutorialsComponent = () => {
  const tutorials = data[0].links;

  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='tutorial' onMouseOver={closeSubmenu}>
      <div className='tutorial-center'>
        <article className='tutorial-info'>
          <h1 className='tutorial-h1'>FM3 Tutorials</h1>

          {tutorials.map((video) => {
            const { label, icon, videoId, image, index, description } = video;

            return (
              <div className={`tutorial-div video${index}`} key={index}>
                <h3>{label}</h3>

                <img
                  src={image}
                  className='tutorial-img'
                  alt='tutorial thumbnail'
                ></img>

                <p>{description}</p>
                <VideoModal videoId={videoId}></VideoModal>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default TutorialsComponent;
