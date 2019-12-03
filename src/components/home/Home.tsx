import React, { Component } from 'react';
import './Home.scss';
import HomeCarousel from './HomeCarousel';
import HomeContent from './HomeContent';


export class home extends Component {
    render() {
        return ( 
            <div>
                <HomeCarousel/>
                <HomeContent/>
            </div>    
        )
    }
}

export default home
