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
    
</div>



    
    
    
    
    
    
    
    
    </> );
}
 
export default Article;