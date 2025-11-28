import React from 'react';
import Nav from '../components/Nav';
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Subtitle from '../components/Subtitles';

const Motionprojects = () => {
  return (
    <>
      <Nav />


<div className='mid-title'>
<PageTitle  title="Motion graphics"></PageTitle>
</div>

<div className='sub-title'>
<Subtitle  title="“Capturing moments that speak louder than words.”"></Subtitle>
</div>

<div class="containersss">
<h2>Featured motion graphics</h2>


<div class="photo-card">
<video src={video1} autoPlay loop  playsInline></video>
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<video src={video2} autoPlay loop  playsInline ></video>
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


<div class="photo-card">
<video src={video3} autoPlay loop  playsInline ></video>
<div class="overlay"></div>
<span class="view-more">View more</span>
</div>


</div>


<Footer />


    </>
  );
};

export default Motionprojects;