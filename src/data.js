import { FaYoutube, FaInstagramSquare, FaGuitar } from 'react-icons/fa';
import React from 'react';

const sublinks = [
  {
    page: 'Tutorials',
    links: [
      {
        index: 1,
        label: 'Episode 1',
        icon: <FaYoutube />,
        videoId: 'lcX6FIBYtz0',
        image: 'https://img.youtube.com/vi/lcX6FIBYtz0/0.jpg',
        url: 'https://youtu.be/lcX6FIBYtz0',
        description: 'Assigning Footswitches - Effects and Hold Functions',
      },
      {
        index: 2,
        label: 'Episode 2',
        icon: <FaYoutube />,
        videoId: 'vbaZjJfpr2M',
        image: 'https://img.youtube.com/vi/vbaZjJfpr2M/0.jpg',
        url: 'https://youtu.be/vbaZjJfpr2M',
        description: 'Assigning Footswitches - Scenes and Toggle Functions',
      },
      {
        index: 3,
        label: 'Episode 3',
        icon: <FaYoutube />,
        videoId: 'gOeCtkBPb1g',
        image: 'https://img.youtube.com/vi/gOeCtkBPb1g/0.jpg',
        url: 'https://youtu.be/gOeCtkBPb1g',
        description: 'Assigning Footswitches - Tuner and Tap Tempo',
      },
      {
        index: 4,
        label: 'Episode 4',
        icon: <FaYoutube />,
        videoId: 'qt4v6Euxdz0',
        image: 'https://img.youtube.com/vi/qt4v6Euxdz0/0.jpg',
        url: 'https://youtu.be/qt4v6Euxdz0',
        description: 'Assigning footswitches - Preset Increment / Decrement',
      },
      {
        index: 5,
        label: 'Video 5',
        icon: <FaYoutube />,
        videoId: 'oYrOk-eO5d0',
        image: 'https://img.youtube.com/vi/oYrOk-eO5d0/0.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nulla autem voluptatum repudiandae tempore commodi dolorum optio possimus illum ratione!',
      },
      {
        index: 6,
        label: 'Video 6',
        icon: <FaYoutube />,
        videoId: 'oYrOk-eO5d0',
        image: 'https://img.youtube.com/vi/oYrOk-eO5d0/0.jpg',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque similique ad nisi architecto fugiat consequuntur minus, deserunt nam corrupti iusto?',
      },
    ],
  },
  {
    page: 'Social Media',
    links: [
      {
        label: 'Youtube',
        icon: <FaYoutube />,
        url: 'http://www.youtube.com/roshroslin',
      },
      {
        label: 'Instagram',
        icon: <FaInstagramSquare />,
        url: 'http://www.instagram.com/roshroslin',
      },
      {
        label: 'RoshRoslin.com',
        icon: <FaGuitar />,
        url: 'http://www.roshroslin.com',
      },
      {
        label: 'AxeFXBasics.com',
        icon: <FaGuitar />,
        url: 'http://axeFxBasics.com',
      },
    ],
  },
];

export default sublinks;
