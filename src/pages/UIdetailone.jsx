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
import w1 from '../images/case study ux/w1.png' ;
import w2 from '../images/case study ux/w2.png' ;
import w3 from '../images/case study ux/w3.png' ;
import w4 from '../images/case study ux/w4.png' ;
import w5 from '../images/case study ux/w5.png' ;
import w6 from '../images/case study ux/w6.png' ;
import w7 from '../images/case study ux/w7.png' ;
import w8 from '../images/case study ux/w8.png' ;
import w9 from '../images/case study ux/w9.png' ;
import w10 from '../images/case study ux/w10.png' ;
import d1 from '../images/case study ux/d1.png' ;
import d2 from '../images/case study ux/d2.png' ;
import d3 from '../images/case study ux/d3.png' ;
import d4 from '../images/case study ux/d4.png' ;




const UIdetailone = () => {
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


<h1 className='stat'>Brand match</h1>

<img className='allprojs' src={uxproj} alt="all projects" />


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
<img src={w1} alt="w2" />
<img src={w2} alt="w2" />
<img src={w3} alt="w3" />
<img src={w4} alt="w4" />
</div>


<div className='wire'>
<img src={w5} alt="w5" />
<img src={w6} alt="w6" />
<img src={w7} alt="w7" />
</div>

<div className='wire'>
<img src={w8} alt="w8" />
<img src={w9} alt="w9" />
<img src={w10} alt="w10" />
</div>


<h1 className='designproc'>Visual design</h1>
<hr className='hrr'></hr>

<div className='wire'>
<img src={d1} alt="d1" />
<img src={d2} alt="d2" />
</div>
<div className='wire'>
<img src={d3} alt="d3" />
<img src={d4} alt="d4" />
</div>



<Footer />




</>
     );
}
 
export default UIdetailone;