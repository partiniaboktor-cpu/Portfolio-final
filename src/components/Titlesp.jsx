import React, { Component } from 'react';
import '../components/Titlesp.css'

const Titlesp = (props) => {
    return ( 

<>
<div className='three'>
    <h1 className='name'>{props.title1}</h1>
    <h1 className='name'>{props.title2}</h1>
    <h1 className='name'>{props.title3}</h1>
</div>


<div className='three'>
     <h5 className='names'>{props.title4}</h5>
    <h5 className='names'>{props.title5}</h5>
    <h5 className='names'>{props.title6}</h5>
</div>


</>


     );
}
 
export default Titlesp;