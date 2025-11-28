import React, { Component } from 'react';
import '../pages/Projectdetailgraphic.css' ;
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';
import Nav from '../components/Nav';
import uxproj from '../images/case study ux/uxpproj.png' ;
import Projecttitle from '../components/Projecttilte';
import Titlesp from '../components/Titlesp' ;
import Footer from '../components/Footer';
import '../pages/UIdetailone.css' ;
import proc from '../images/case study ux/proc.png' ;
import off from '../images/case study ux/off.png' ;
import woff1 from '../images/case study ux/woff1.png' ;
import m30 from '../images/case study ux/Mockup 30.png' ;
import m31 from '../images/case study ux/Mockup 31.png' ;
import m32 from '../images/case study ux/Mockup 32.png' ;
import m25 from '../images/case study ux/Mockup 25.png' ;




const UIdetailtwo = () => {
    return ( 
<>

<Nav />

<div className='mid-title'>
<PageTitle  title="UX/UX Designer"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="Impress, Engage, and Perform.
I craft user-centered, responsive designs that work beautifully across every device."></Subtitle>
</div>


<h1 className='stat'>Offering page</h1>

<img className='allprojs' src={off} alt="all projects" />


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


<h1 className='designproc'>Design process</h1>
<hr className='hrr'></hr>


<img className='proc' src={proc} alt="proc" />

<h1 className='designproc'>Wireframes</h1>
<hr className='hrr'></hr>


<div className='wire'>
<img src={woff1} alt="w2" />
</div>


<h1 className='designproc'>Visual design</h1>
<hr className='hrr'></hr>

<div className='wire'>
<img src={m30} alt="d1" />
<img src={m31} alt="d2" />
</div>
<div className='wire'>
<img src={m32} alt="d3" />
<img src={m25} alt="d4" />
</div>



<Footer />




</>
     );
}
 
export default UIdetailtwo;