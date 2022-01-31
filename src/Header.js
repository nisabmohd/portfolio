import React from 'react';
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
export const Header = () => {
    const headerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:'65px',
        alignItems:'center',
        padding:'19px 49px'
    }
    function down(){
        window.scrollTo(0,document.body.scrollHeight);
    }
    return <>
        <div style={headerStyle} className="header">
            <p style={{ fontSize: '32px' }} class="glitch">
                NM
            </p>
            <div style={{ display: 'flex', flexDirection: 'row',}} className="connectpages">
                <p onClick={down} style={{ fontSize: '15px', margin: '0 9px',fontWeight:'lighter',letterSpacing:'1.8px',cursor:'pointer'  }} class="glitch">
                    about</p>
                <a style={{ textDecoration: 'none', color: 'white'}} href="https://drive.google.com/file/d/1AM5S54xfcepNgkmKDi3CGBppAKhr3BOY/view"><p style={{ fontSize: '15px', margin: '0 9px',fontWeight:'lighter',letterSpacing:'1.8px'  }} class="glitch">
                    resume</p>
                </a>
                <a style={{ textDecoration: 'none', color: 'white',fontWeight:'lighter',letterSpacing:'1.8px' }} href="http://www.github.com/nisabmohd">
                    <img style={{width:'38px',marginTop:'-5px',marginLeft:'9px'}} src={github} alt="" />
                </a>
            </div>
        </div>
    </>;
};
