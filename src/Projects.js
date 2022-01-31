import React from 'react';
import './projects.css'
import img1 from './assets/tmdb.png'
import img2 from './assets/3.png'
import img3 from './assets/news.png'
import wave from './assets/wave2.svg'
import tl from './assets/tl.png'
export const Projects = () => {
    return <div className='projects'>
        <div className="projectscontainer">
            <div className="projectbox">
                <div className="terminalwindowsmall">
                    <div className="threedots1">
                        <div className="red1"></div>
                        <div className="yellow1"></div>
                        <div className="green1"></div>
                    </div>
                    <img style={{ width: '150px', height: '162px' }} src={img1} alt="" />
                </div>
                <div className="nameofproject"><p className='glitch'>Movies DB</p></div>
            </div>
            <div className="projectbox">
                <div className="terminalwindowsmall">
                    <div className="threedots1">
                        <div className="red1"></div>
                        <div className="yellow1"></div>
                        <div className="green1"></div>
                    </div>
                    <img src={img3} alt="" />
                </div>
                <div className="nameofproject"><p className='glitch'>News Webapp</p></div>
            </div>
            <div className="projectbox">
                <div className="terminalwindowsmall">
                    <div className="threedots1">
                        <div className="red1"></div>
                        <div className="yellow1"></div>
                        <div className="green1"></div>
                    </div>
                    <img style={{ width: '229px', height: '72px' }} src={img2} alt="" />
                </div>
                <div className="nameofproject"><p className='glitch'>Spotify Clone</p></div>
            </div>
            <div className="projectbox">
                <div className="terminalwindowsmall">
                    <div className="threedots1">
                        <div className="red1"></div>
                        <div className="yellow1"></div>
                        <div className="green1"></div>
                    </div>
                    <img style={{ width: '139px', height: '88px' }} src={tl} alt="" />
                </div>
                <div className="nameofproject"><p className='glitch'>Twitter Clone</p></div>
            </div>
        </div>
        <div className="moreongtihub">
            <a style={{textDecoration:'none',color:'white'}} href="http://www.github.com/nisabmohd"><p className="glitch moreon">
                More on GitHub &#8594;
            </p></a>
        </div>
        <img style={{ marginTop: '139px' }} src={wave} alt="" />
    </div>;
};
