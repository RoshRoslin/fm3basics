import React, { useState } from 'react';

import 'react-modal-video/scss/modal-video.scss';

import ModalVideo from 'react-modal-video';

const VideoModal = ({
  label,
  icon,
  videoId,
  image,
  index,
  description,
  title,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className='tutorial-click-div' onClick={() => setOpen(true)}>
        <h3>{label}</h3>

        <img
          src={image}
          className='tutorial-img'
          alt='tutorial thumbnail'
        ></img>
        <p>{title}</p>
        <p>{description}</p>
        <button className='btn' onClick={() => setOpen(true)}>
          Play Tutorial
        </button>
      </div>
    </React.Fragment>
  );
};

export default VideoModal;
