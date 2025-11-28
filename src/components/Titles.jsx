import React, { Component } from 'react';
import '../components/Title.css' ;

const Title = (props) => {
    return ( 

    <h1 className='main-title'>{props.title}</h1>


     );
}
 
export default Title;