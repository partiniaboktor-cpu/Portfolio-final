import React, { Component } from 'react';
import Nav from '../components/Nav';
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';
import '../pages/UIprojects.css';
import u1 from '../images/case study ux/ui1.png';
import u2 from '../images/case study ux/u2.png';
import u3 from '../images/case study ux/u3.png';
import u4 from '../images/case study ux/u4.png';
import u5 from '../images/case study ux/u5.png';
import u6 from '../images/case study ux/u6.png';
import u7 from '../images/case study ux/u7.png';
import u8 from '../images/case study ux/u8.png';
import u9 from '../images/case study ux/u9.png';
import u10 from '../images/case study ux/proj10.png';
import u11 from '../images/case study ux/proj11.png';
import u12 from '../images/case study ux/proj12.png';
import u13 from '../images/case study ux/proj13.png';
import Footer from '../components/Footer';


const UIprojects = () => {
    
    return ( <>
    
    <Nav />

<div className='mid-title'>
<PageTitle  title="UX/UI Designs"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="Impress, Engage, and Perform.
I craft user-centered, responsive designs that work beautifully across every device."></Subtitle>
</div>

<div class="containersss">
<h2>Featured websites</h2>
</div>
    

 <div className='allprojectsux'>

<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2025</h2> 
       <img className='uiimg' src={u1} alt="u1 one" />
       <p className='myportfolio'>My portfolio</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>



<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2025</h2> 
       <img className='uiimg' src={u2} alt="u1 one" />
       <p className='myportfolio'>Cartoon story</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>


<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2024</h2> 
       <img className='uiimg' src={u3} alt="u1 one" />
       <p className='myportfolio'>Offering page</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>

</div>   
    
    
    
 <div className='allprojectsux'>

<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2024</h2> 
       <img className='uiimg' src={u4} alt="u1 one" />
       <p className='myportfolio'>Maintaince</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>



<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2023</h2> 
       <img className='uiimg' src={u5} alt="u1 one" />
       <p className='myportfolio'>Kids story</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>


<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2024</h2> 
       <img className='uiimg' src={u6} alt="u1 one" />
       <p className='myportfolio'>Candles E-commerce</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>

</div>   




 <div className='allprojectsux'>

<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2023</h2> 
       <img className='uiimg' src={u7} alt="u1 one" />
       <p className='myportfolio'>Furniture E-commerce</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>



<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2023</h2> 
       <img className='uiimg' src={u8} alt="u1 one" />
       <p className='myportfolio'>Travle agency</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>


<div className='projectone'>
    <div className='contentss'>
       <h2 className='datess'>2025</h2> 
       <img className='uiimg' src={u9} alt="u1 one" />
       <p className='myportfolio'>Custom shop</p>
        <h2 className='datesss'>Live site</h2> 
    </div>
</div>

</div>   
    
    
    

<Footer /> 
    
    
    
    </> );
}
 
export default UIprojects;