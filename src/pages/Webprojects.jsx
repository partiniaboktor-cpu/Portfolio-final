import React from 'react';
import Nav from '../components/Nav';
import web1 from '../images/web1.png';
import web2 from '../images/web2.png';
import web3 from '../images/web3.png';
import web4 from '../images/web4.png';
import '../pages/Photographyprojects.css' ;
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';

const Motionprojects = () => {
  return (
    <>
      <Nav />


<div className='mid-title'>
<PageTitle  title="web programming"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>

<div class="containersss">
<h2>Featured web programming</h2>


<div class="photo-card">
<img src={web1} alt="Photo 1" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<img src={web2} alt="Photo 2" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<img src={web3} alt="Photo 3" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<img src={web4} alt="Photo 4" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>
</div>


<Footer />


    </>
  );
};

export default Motionprojects;