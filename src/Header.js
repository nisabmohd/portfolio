import React from 'react';
import github from './assets/github.png'
import './header.css'
export const Header = () => {
    const headerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:'65px',
        alignItems:'center',
        padding:'19px 49px'
    }
    return <>
        <div style={headerStyle} className="header">
            <p style={{ fontSize: '27px',fontWeight:'bold' }} class="glitch">
                Nisab Mohd <span style={{fontSize:'27px'}}>&#169;</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'row',}} className="connectpages">
                {/* <a href="/" style={{ fontSize: '15px', margin: '0 9px',fontWeight:'bold',letterSpacing:'1.8px',cursor:'pointer',textDecoration: 'none', color: 'white'}} class="glitch">
                    about</a> */}
                <a style={{ textDecoration: 'none', color: 'white'}} href="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/pdf%2FnisabResume.pdf?alt=media&token=af4bb111-3d5f-4f48-a159-08adfdb930df"><p style={{ fontSize: '15px', margin: '0 9px',fontWeight:'bold',letterSpacing:'1.8px'  }} class="glitch">
                    resume</p>
                </a>
                <a style={{ textDecoration: 'none', color: 'white',fontWeight:'lighter',letterSpacing:'1.8px' }} href="http://www.github.com/nisabmohd">
                    <img style={{width:'38px',marginTop:'-9px',marginLeft:'9px'}} src={github} alt="" />
                </a>
            </div>
        </div>
    </>;
};
