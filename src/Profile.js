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
            I've always been a great problem solver, an ambivert, and a technophile obsessed with the latest techs.
            I’m familiar with a variety of programming languages including C, Java, JavaScript, Python and various web dev skills such as HTML, CSS, Nodejs, Reactjs, Expressjs. But I’m always adding new skills to my repertoire.
        </p>
        <div className="contactimgs">
            <a href="https://www.linkedin.com/in/mohd-nisab-alam-725148197/"><img src={lin} alt="" /></a>
            <a href="https://twitter.com/mohdnisab"><img src={twitter} alt="" /></a>
            <a href="mailto:nisabmohd@gmail.com"><img src={mail} alt="" /></a>
        </div>
    </div>;
};
