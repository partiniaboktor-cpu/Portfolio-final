import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/GraphicProjects';
import Projectdetail from './pages/Projectdetailgraphic';
import Contactpage from './pages/Contactpage';
import About from './pages/About';
import Photographyprojects from './pages/Photographyprojects';
import Onephotography from './pages/Onephotography';
import Twophotography from './pages/Twophotography';
import Webprojects from './pages/Webprojects';
import Oneweb from './pages/Oneweb';
import Twoweb from './pages/Twoweb';
import Projectdetailgraphictwo from './pages/Projectdetailgraphictwo';
import Motionprojects from './pages/Motionprojects';
import Motiondetailone from './pages/Motiondetailone';
import Motiondetailtwo from './pages/Motiondetailtwo';
import UIprojects from './pages/UIprojects';
import UIdetailone from './pages/UIdetailone';
import UIdetailtwo from './pages/UIdetailtwo';
import Article from './pages/Article';


const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projectdetail' element={<Projectdetail />} />
        <Route path='/Contactpage' element={<Contactpage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Photography' element={<Photographyprojects />} />
        <Route path='/Photographydetailone' element={<Onephotography />} />
        <Route path='/Photographydetailtwo' element={<Twophotography />} />
        <Route path='/web' element={<Webprojects />} />
        <Route path='/webdetailone' element={<Oneweb />} />
        <Route path='/webdetailtwo' element={<Twoweb />} />
        <Route path='/graphicdetailtwo' element={<Projectdetailgraphictwo />} />
        <Route path='/motionprojects' element={<Motionprojects />} />
        <Route path='/motiondetailone' element={<Motiondetailone />} />
        <Route path='/motiondetailtwo' element={<Motiondetailtwo />} />
        <Route path='/uiprojects' element={<UIprojects />} />
        <Route path='/uidetailone' element={<UIdetailone />} />
        <Route path='/uidetailtwo' element={<UIdetailtwo />} />
        <Route path='/Article' element={<Article />} />


        

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;