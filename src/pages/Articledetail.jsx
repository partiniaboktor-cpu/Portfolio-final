import React, { Component } from 'react';
import './Article.css' ;
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { div } from 'framer-motion/client';

const Article = () => {
    return ( <>
    
    
    <Nav />

<div className='mid-title'>
<PageTitle  title="Article"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>













    </> );
}
 
export default Article;