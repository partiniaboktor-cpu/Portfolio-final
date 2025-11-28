import React, { Component } from 'react';
import './Article.css' ;
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';
import Nav from '../components/Nav';

const Article = () => {
    return ( <>
    
    
    <Nav />

<div className='mid-title'>
<PageTitle  title="Article"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>
    
    
    <h1 className='thes'>The ultimate guide for being an
 UX/UI Designer</h1>
    
<div className='block1'>
    <h2 className='hh'>1- Case study reflections</h2>
    <p className='hhh'>Every project I design begins with understanding the problem from a user’s perspective. My case studies highlight the full journey — from initial research and wireframing to final interface design and testing. I focus on uncovering user pain points, transforming them into intuitive digital experiences that balance functionality with beauty. Each reflection showcases how thoughtful design decisions, guided by empathy and strategy, can create meaningful impact. Through these projects, I aim to demonstrate not only my visual skills but also my ability to think critically, collaborate effectively, and craft experiences that connect people with purpose.</p>
</div>



    
    
    
    
    
    
    
    
    </> );
}
 
export default Article;