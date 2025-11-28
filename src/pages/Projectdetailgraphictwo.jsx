import React, { Component } from 'react';
import '../pages/Projectdetailgraphic.css' ;
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';
import Nav from '../components/Nav';
import g22 from '../images/g22.png' ;
import Projecttitle from '../components/Projecttilte';
import Titlesp from '../components/Titlesp' ;
import Footer from '../components/Footer';

const Projectdetail = () => {
    return ( 
<>

<Nav />

<div className='mid-title'>
<PageTitle  title="graphic designer"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>


<h1 className='stat'>Rebranding</h1>

<img className='allprojs' src={g22} alt="all projects" />


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
<Titlesp title4="2-3 months" ></Titlesp>
</div>

<div className='titis'>
<Titlesp title5="graphic designer" ></Titlesp>
</div>

<div className='titis'>
<Titlesp title6="Figma , adobe illustartor" ></Titlesp>
</div>
</div>



<hr className='hrr'></hr>

<Projecttitle />

<hr className='hrr'></hr>


<Footer />




</>
     );
}
 
export default Projectdetail;