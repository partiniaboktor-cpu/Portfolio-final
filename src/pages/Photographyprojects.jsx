import React from 'react';
import Nav from '../components/Nav';
import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';
import photo4 from '../images/photo4.png';
import '../pages/Photographyprojects.css' ;
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';

const Photographyprojects = () => {
  return (
    <>
      <Nav />


<div className='mid-title'>
<PageTitle  title="Photography"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>

<div class="containersss">
<h2>Featured Photography</h2>


<div class="photo-card">
<img src={photo1} alt="Photo 1" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<img src={photo2} alt="Photo 2" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<img src={photo3} alt="Photo 3" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<img src={photo4} alt="Photo 4" />
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>
</div>


<Footer />


    </>
  );
};

export default Photographyprojects;