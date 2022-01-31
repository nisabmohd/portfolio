import React from 'react';
import './terminal.css'
import down from './assets/down.png'
import wave from './assets/wave.svg'
export const Terminal = () => {
    return <div className='terminal'>
        <div className="nameandstuff">
            <div className="threedots">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
            <div className="name">
                <p class="glitch">
                    NISAB MOHD
                </p>
            </div>
            <div>
                <p class="glitch webdev">
                    Hi, I'm Nisab, a 3rd year undergraduate.

                    A Full-Stack Web Developer and a Competitive Programming Enthusiast , who is obsessed with the idea of improving himself and wants a platform to grow and excel .
                </p>
            </div>

            <div className="genre" >
                <p class="glitch mgcustom1">
                    react
                </p>
                <p class="glitch mgcustom1">
                    nodejs
                </p>
                <p class="glitch mgcustom1">
                    express
                </p>
                <p class="glitch mgcustom1">
                    mongodb
                </p>
                <p class="glitch mgcustom1">
                    java
                </p>
            </div>
        </div>
            <div className="movenext">
                <img src={down} alt="" />
            </div>
            <div className="projectsheader glitch">
                <p style={{letterSpacing:'1.5px',marginBottom:'-19px',fontSize:'25px'}}>projects</p>
            </div>
            <div className="wave">
                <img style={{marginTop:'115px'}} src={wave} alt="" />
            </div>
    </div>;
};
