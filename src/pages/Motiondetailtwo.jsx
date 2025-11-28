import React, { Component } from 'react';
import '../pages/Projectdetailgraphic.css' ;
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';
import Nav from '../components/Nav';
import allprojs from '../images/allprojs.png' ;
import Projecttitle from '../components/Projecttilte';
import Titlesp from '../components/Titlesp' ;
import Footer from '../components/Footer';
import video2 from "../videos/video2.mp4";

const Motiondetailtwo = () => {
    return ( 
<>

<Nav />

<div className='mid-title'>
<PageTitle  title="Motion graphics"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>


<h1 className='stat'>Featured motion graphics</h1>

<video src={video2} autoPlay loop  playsInline></video>


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
<Titlesp title4="2" ></Titlesp>
</div>

<div className='titis'>
<Titlesp title5="Motion graphics" ></Titlesp>
</div>

<div className='titis'>
<Titlesp title6="After effects" ></Titlesp>
</div>
</div>



<hr className='hrr'></hr>

<Projecttitle />

<hr className='hrr'></hr>


<Footer />




</>
     );
}
 
export default Motiondetailtwo;