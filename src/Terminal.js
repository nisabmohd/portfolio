import React from 'react';
import './terminal.css'
export const Terminal = () => {
    return <div className='terminal'>
        <div className="nameandstuff">
            <div className="threedots">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
            <div className="name">
               <p style={{fontSize:'20px'}}>class Person &#123;</p>
               <p style={{fontSize:'18px'}}> &#160;&#160;constructor() &#123;</p>
               <p style={{fontSize:'15px'}}>&#160;&#160;&#160;&#160;this.name = "Mohd NIsab";</p>
               <p style={{fontSize:'15px'}}>&#160;&#160;&#160;&#160;this.traits = ["CODE", "DEV"];</p>
               <p style={{fontSize:'15px'}}>&#160;&#160;&#160;&#160;this.age = new Date().getYear() - 2001;</p>
               <p style={{fontSize:'15px'}}>&#160;&#160;	&#125;</p>
               <p style={{fontSize:'15px'}}>	&#125;</p>
            </div>

        </div>
        
    </div>;
};
