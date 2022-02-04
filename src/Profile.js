import React from 'react';
import './profile.css'
import logo from './assets/prf2.jpg'
import lin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'
import mail from './assets/mail.svg'
export const Profile = () => {
    return <div className='profilepage'>
        <img src={logo} alt="" />
        <p className="glitch namecustomprof">
            MOHD NISAB ALAM
        </p>
        <p className="glitch profilep">
        Hi, I'm Nisab, a 3rd year undergraduate. A Full-Stack Web Developer and a Competitive Programming Enthusiast , who is obsessed with the idea of improving himself and wants a platform to grow and excel .
        </p>
        <div className="contactimgs">
            <a href="https://www.linkedin.com/in/mohd-nisab-alam-725148197/"><img src={lin} alt="" /></a>
            <a href="https://twitter.com/mohdnisab"><img src={twitter} alt="" /></a>
            <a href="mailto:nisabmohd@gmail.com"><img src={mail} alt="" /></a>
        </div>
    </div>;
};
