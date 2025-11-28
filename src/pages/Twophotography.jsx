import React, { Component } from 'react';
import '../pages/Projectdetailgraphic.css' ;
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';
import Nav from '../components/Nav';
import allprojs from '../images/allprojs.png' ;
import Projecttitle from '../components/Projecttilte';
import Titlesp from '../components/Titlesp' ;
import Footer from '../components/Footer';
import photo2 from '../images/photo2.png' ;

const Onephotography = () => {
    return ( 
<>

<Nav />

<div className='mid-title'>
<PageTitle  title="Photography"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>


<h1 className='stat'>Featured photography</h1>

<img className='allprojs' src={photo2} alt="all projects" />


<Projecttitle />

<hr className='hrr'></hr>


<div className='threes'>
<div className='titi'>
<Titlesp title1="Timeframe" ></Titlesp>
</div>

<div className='titi'>
<Titlesp title2="My rols" ></Titlesp>
</div>

<div className='titi'>
<Titlesp title3="Tools" ></Titlesp>
</div>
</div>



<div className='threes'>
<div className='titis'>
<Titlesp title4="1" ></Titlesp>
</div>

<div className='titis'>
<Titlesp title5="Photography" ></Titlesp>
</div>

<div className='titis'>
<Titlesp title6="Camera professional" ></Titlesp>
</div>
</div>



<hr className='hrr'></hr>

<Projecttitle />

<hr className='hrr'></hr>


<Footer />




</>
     );
}
 
export default Onephotography;