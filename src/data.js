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
        title: 'Assigning Footswitches ',
        description: 'Effects and Hold Functions',
      },
      {
        index: 2,
        label: 'Episode 2',
        icon: <FaYoutube />,
        videoId: 'vbaZjJfpr2M',
        image: 'https://img.youtube.com/vi/vbaZjJfpr2M/0.jpg',
        url: 'https://youtu.be/vbaZjJfpr2M',
        title: 'Assigning Footswitches',
        description: 'Scene and Toggle Functions   ',
      },
      {
        index: 3,
        label: 'Episode 3',
        icon: <FaYoutube />,
        videoId: 'gOeCtkBPb1g',
        image: 'https://img.youtube.com/vi/gOeCtkBPb1g/0.jpg',
        url: 'https://youtu.be/gOeCtkBPb1g',
        title: 'Assigning Footswitches',
        description: ' Tuner and Tap Functions',
      },
      {
        index: 4,
        label: 'Episode 4',
        icon: <FaYoutube />,
        videoId: 'qt4v6Euxdz0',
        image: 'https://img.youtube.com/vi/qt4v6Euxdz0/0.jpg',
        url: 'https://youtu.be/qt4v6Euxdz0',
        title: 'Assigning footswitches',
        description: 'Preset increment and decrement functions',
      },
      {
        index: 5,
        label: 'Episode 5',
        icon: <FaYoutube />,
        videoId: 'aYSSI0K8T60',
        image: 'https://img.youtube.com/vi/aYSSI0K8T60/0.jpg',
        url: 'https://youtu.be/aYSSI0K8T60',
        title: 'Assigning footswitches',
        description: 'Build a simple three button preset for live',
      },
      {
        index: 6,
        label: 'Episode 6',
        icon: <FaYoutube />,
        videoId: 'Z8AFOa_OSns',
        image: 'https://img.youtube.com/vi/Z8AFOa_OSns/0.jpg',
        url: 'https://youtu.be/Z8AFOa_OSns',
        title: 'Seamless Switching',
        description: 'Approaches and strategies to avoid audio gaps/dropouts',
      },
      {
        index: 7,
        label: 'Episode 7',
        icon: <FaYoutube />,
        videoId: 'Z8AFOa_OSns',
        image: 'https://img.youtube.com/vi/dSw6RjMw_9E/0.jpg',
        url: 'https://youtu.be/dSw6RjMw_9E',
        title: 'Views Basics',
        description:
          'Implementing the Views feature to expand beyond three buttons',
      },
      {
        index: 8,
        label: 'Episode 8',
        icon: <FaYoutube />,
        videoId: 'Z8AFOa_OSns',
        image: 'https://img.youtube.com/vi/xgTQWfoLb1g/0.jpg',
        url: 'https://youtu.be/xgTQWfoLb1g',
        title: 'Cabinet Selection',
        description: 'Strategies and tips to select the proper cabinet block',
      },
      {
        index: 9,
        label: 'Episode 9',
        icon: <FaYoutube />,
        videoId: 'Z8AFOa_OSns',
        image: 'https://img.youtube.com/vi/iRL5YUDpDZ0/0.jpg',
        url: 'https://youtu.be/iRL5YUDpDZ0',
        title: 'Preset Leveling',
        description:
          'Strategies to level out sounds and scenes within a preset',
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
