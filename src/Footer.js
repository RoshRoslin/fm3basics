import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <h4>
        <a href='mailto:roshroslin@gmail.com'>Rosh Roslin</a> / FM3Basics.com
        &copy; {new Date().getFullYear()}
      </h4>
    </div>
  );
};

export default Footer;
