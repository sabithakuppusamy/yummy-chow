import React, { Component } from 'react';
import './Home.scss';
import HomeCarousel from './HomeCarousel';
import HomeContent from './HomeContent';


const Home = ()=> {
    return ( 
            <div>
                <HomeCarousel/>
                <HomeContent/>
            </div>    
        )
}

export default Home;
