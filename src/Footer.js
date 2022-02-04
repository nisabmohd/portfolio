import React from 'react';
import lin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'
import mail from './assets/mail.svg'
export const Footer = () => {
  return <div className='footer' style={{position:'absolute',bottom:'0',width:'100%'}}>
       <div className="contactimgs">
            <a href="https://www.linkedin.com/in/mohd-nisab-alam-725148197/"><img style={{width:'35.7px',margin:'2vh 9px'}} src={lin} alt="" /></a>
            <a href="https://twitter.com/mohdnisab"><img style={{width:'35.7px',margin:'2vh 9px'}} src={twitter} alt="" /></a>
            <a href="mailto:nisabmohd@gmail.com"><img style={{width:'35.7px',margin:'2vh 9px'}} src={mail} alt="" /></a>
        </div>
  </div>;
};
