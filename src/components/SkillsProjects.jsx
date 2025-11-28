import React, { Component } from 'react';
import "./SkillsProjects.css";
import graphicdesign from "../images/garphic design.png"; // or "graphic design.png" if renamed
import arrow from "../images/arrow.svg";
import ui from "../images/ui.png"; // or "graphic design.png" if renamed
import webprogramming from "../images/web programming.png"; // or "graphic design.png" if renamed
import photography from "../images/photgraphy.png"; // or "graphic design.png" if renamed
import motiongraphics from "../images/motion graphics.png"; // or "graphic design.png" if renamed



const SkillsProjects = ( ) => {
  return (
    <div className="scroll-container">

<div className='sss'>
    <div className='project-card'>
<img src={graphicdesign} alt="graphic design" />
<div className='fieldss'>
<h3 className='namee'>Graphic design</h3>
<img className='arrow' src={arrow} alt="star" />
</div>
    </div>



    <div className='project-card'>
<img src={ui} alt="graphic design" />
<div className='fieldss'>
<h3 className='namee'>ux/ui design </h3>
<img className='arrow' src={arrow} alt="star" />
</div>
    </div>



        <div className='project-card'>
<img src={webprogramming} alt="graphic design" />
<div className='fieldss'>
<h3 className='namee'>Web programming</h3>
<img className='arrow' src={arrow} alt="star" />
</div>
    </div>


    <div className='project-card'>
<img src={photography} alt="graphic design" />
<div className='fieldss'>
<h3 className='namee'>Photography</h3>
<img className='arrow' src={arrow} alt="star" />
</div>
    </div>


    <div className='project-card'>
<img src={motiongraphics} alt="graphic design" />
<div className='fieldss'>
<h3 className='namee'>Motion graphics</h3>
<img className='arrow' src={arrow} alt="star" />
</div>
    </div>


 </div>
 </div>
  );
};

export default SkillsProjects;
