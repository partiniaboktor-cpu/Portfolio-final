import React, { Component } from 'react';
import '../pages/GraphicProjects.css' ;
import Nav from '../components/Nav';
import PageTitle from '../components/PageTitle' ;
import Subtitle from '../components/Subtitles';
import Minititle from '../components/Minititle';
import gone from '../images/gone.png'
import gtwo from '../images/gtwo.png'
import gthree from '../images/gthree.png'
import gfour from '../images/gfour.png'
import gfive from '../images/gfive.png'
import gsix from '../images/gsix.png'
import r1 from '../images/r1.png'
import r2 from '../images/r2.png'
import r3 from '../images/r3.png'
import r4 from '../images/r4.png'
import r5 from '../images/r5.png'
import r6 from '../images/r6.png'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import Footer from '../components/Footer';


const Projects = () => {

    return (  
<>
<Nav />


<div className='mid-title'>
<PageTitle  title="graphic designer"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>


<div className='seemore'>

<div className='minititlte'>
    <Minititle title='Stationary'></Minititle>
</div>

<h3 className='mini-title'>See more</h3>

</div>

<hr className='hrr'></hr>

<div className='pros'>
<img src={gone} alt="gone" />
<img src={gtwo} alt="gtwo" />
<img src={gthree} alt="gthree" />
<img src={gfour} alt="gfour" />
<img src={gfive} alt="gfive" />
<img src={gsix} alt="gsix" />
</div>





<div className='seemore'>

<div className='minititlte'>
    <Minititle title='Rebranding'></Minititle>
</div>

<h3 className='mini-title'>See more</h3>

</div>

<hr className='hrr'></hr>

<div className='pros'>
<img src={r1} alt="r1" />
<img src={r2} alt="r2" />
<img src={r3} alt="r3" />
<img src={r4} alt="r4" />
<img src={r5} alt="r5" />
<img src={r6} alt="r6" />
</div>



<div className='seemore'>

<div className='minititlte'>
    <Minititle title='Posters'></Minititle>
</div>

<h3 className='mini-title'>See more</h3>

</div>

<hr className='hrr'></hr>

<div className='pros'>
<img src={p1} alt="p1" />
<img src={p2} alt="p2" />
<img src={p3} alt="p3" />
<img src={p4} alt="p4" />
<img src={p5} alt="p5" />
</div>


<Footer />


</>
    );
}
 
export default Projects;