import React, { Component } from 'react';
import Nav from '../components/Nav';
import aboutimg from '../images/aboutimg.png' ;
import '../pages/About.css';
import icon1 from '../images/icon 1.svg';
import icon2 from '../images/icon 2.svg';
import icon3 from '../images/icon 3.svg';
import Footer from '../components/Footer';

const About = ( ) => {
    return ( <>
<Nav />

<img className='aboutimg' src={aboutimg} alt="" />

<div className='myname'>
    <h1 className='nametitle'>I'm partinia</h1>
    <h3 className='namedis'>I’’m passionate in ux/ui designer which makes me being in the <br></br>happiest mood , since i was young i wanted to be a designer and <br></br>grow deep more into my the field . Being a designer isn’t easy but <br></br>for me is so passionate of doing it. Started my field of ux/ui <br></br>designer when i was 18 years old when i was too young that <br></br>makes me more exited to get more deeper into it.</h3>
</div>

<hr className='hrr'></hr>


<div className='iconsec'>
<div className='iconeone'>
    <img src={icon1} alt="icon1" />
    <div className='numsd'>
        <h1 className='rakm'>+4</h1>
        <h3 className='titledi'>Years of experience</h3>
    </div>
</div>

<div className='iconeone'>
    <img src={icon2} alt="icon2" />
    <div className='numsd'>
        <h1 className='rakm'>+50</h1>
        <h3 className='titledi'>Completed projects</h3>
    </div>
</div>

<div className='iconeone'>
    <img src={icon3} alt="icon3" />
    <div className='numsd'>
        <h1 className='rakm'>+50</h1>
        <h3 className='titledi'>Happy customer</h3>
    </div>
</div>
</div>


<h1 className='services'>Services</h1>
<h5 className='mydesign'>My design services</h5>


<div class="services-container">

  <div class="service-card">
    <h3>Logo design</h3>
    <p>Craft distinctive and memorable logos that effectively capture the essence of your brand, leaving a lasting impression on your audience.</p>
  </div>

  <div class="service-card">
    <h3>Identity design</h3>
    <p>Craft distinctive and memorable logos that effectively capture the essence of your brand, leaving a lasting impression on your audience.</p>
  </div>

  <div class="service-card">
    <h3>Packaging design</h3>
    <p>Craft distinctive and memorable logos that effectively capture the essence of your brand, leaving a lasting impression on your audience.</p>
  </div>

  <div class="service-card">
    <h3>Product design</h3>
    <p>Craft distinctive and memorable logos that effectively capture the essence of your brand, leaving a lasting impression on your audience.</p>
  </div>

</div>

<Footer />




    </> );
}
 
export default About;