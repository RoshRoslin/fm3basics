import React, { useState } from 'react';

import 'react-modal-video/scss/modal-video.scss';

import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';

const VideoModal = ({ videoId }) => {
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

      <button className='btn' onClick={() => setOpen(true)}>
        Play Tutorial
      </button>
    </React.Fragment>
  );
};

export default VideoModal;
