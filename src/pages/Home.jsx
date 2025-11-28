import React, { Component } from 'react';

import './Home.css';
import Nav from '../components/Nav';
import myimg from '../images/myimg.png';
import starline from '../images/starlinesvg.svg' ;
import star from '../images/star.svg' ;
import Title from '../components/Titles';
import SkillsCards from '../components/SkillsCards' ;
import SkillsProjects from '../components/SkillsProjects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';






const Home = () => { 
    return ( 
        <>
<Nav />
     
     <div className='hero'>

        <div  className="right-secc">
<h1 className='portfolio'>PORT <br></br>FOLIO</h1>
<h4 className='see'>See more _____ WELCOME TO MY WEBSITE</h4>
<div className='profux'>
<h1 className='prof'>Professional</h1>
<h3 className='ux'>UX/UI DESIGNER</h3>
</div>
        </div>
<img src={myimg} alt="myimg" />
     </div>


<div className='sec-2'>

<div className='rectangle'>
<h1 className='table'>Table of content</h1>


<div className='content'>
<div className='detail'>
     
     <div className='col'>

  
    <div className='st'>
<img src={starline} alt="starline" />
<h2 className='ho'>Home</h2>
    </div>

   <div className='st'>
<img src={starline} alt="starline" />
<h2 className='ho'>About me</h2>
    </div>

    
   <div className='st'>
<img src={star} alt="starline" />
<h2 className='ho'>Categories</h2>
    </div>


</div>

   </div>


<div className='detail'>
     
     <div className='col'>

  
    <div className='st'>
<img src={starline} alt="starline" />
<h2 className='ho'>Gallery</h2>
    </div>

   <div className='st'>
<img src={starline} alt="starline" />
<h2 className='ho'>Article</h2>
    </div>

    
   <div className='st'>
<img src={star} alt="starline" />
<h2 className='ho'>Contact</h2>
    </div>


</div>

   </div>



</div>



</div>

<div className='rr'>
<h1 className='table'>Education</h1>


<div className='col'>

<div className='study'>
<img src={starline} alt="starline" />
<div className='names'>
    <h1 className='date'>2008 - 2022</h1>
    <h3 className='edu'>Saint Fatima language school - IGCSE</h3>
</div>
</div>


<div className='study'>
<img src={starline} alt="starline" />
<div className='names'>
    <h1 className='date'>2022 - 2026</h1>
    <h3 className='edu'>Egypt University of informatics - <br></br>Digital arts and designs</h3>
</div>
</div>

</div>

</div>
</div>


<div className='title-line'>
    <Title title="Skills" />
    </div>


<SkillsCards />


 
<div className='line-skill'>
    <h1 className='skill-type'>Websites</h1>
    <h1 className='skill-type'>Apps</h1>
    <h1 className='skill-type'>Graphic design</h1>
    <h1 className='skill-type'>Front-end developer</h1>
    <h1 className='skill-type'>Branding</h1>
    <h1 className='skill-type'>Video editing</h1>
</div>


<hr className='hrr'></hr>


<SkillsProjects />


<h1 className='contact'>Contact</h1>

<Contact />


<Footer />
    
        
        </>
     );
}
 
export default Home;