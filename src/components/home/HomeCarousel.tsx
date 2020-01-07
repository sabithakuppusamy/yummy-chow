import React from 'react'
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom';


var slide1 = require('../../assets/slide1.jpg');
var slide2 = require('../../assets/slide2.jpg');
var slide3 = require('../../assets/slide3.jpg');

const HomeCarousel = ()=> {
    return ( 
            <Carousel id="homeCarousel">
                <Carousel.Item>
                   <img width={900} height={600} alt="900x600" src={slide1}/>
                   <Carousel.Caption id="homeCarouselCaption">
                        <h1>Yummy Chow!</h1>
                        <h3 className="medium-top-gap"> Yummy chow is now serving Lunch Buffet </h3>
                        <p>Yummy Chow is serving lunch buffet featuring our new Silk Road cuisine. Grilled meats, Curries, Vegetables, Salads, Fresh Baked Breads & Homemade Desserts.</p>
                        <button className="waves-effect waves-light btn-flat red white-text">
                        <Link className="white-text" to='/menu' ><strong>Explore our menu</strong>
                            <i className="material-icons right">arrow_forward</i></Link> 
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={600} alt="900x600" src={slide2}/>
                    <Carousel.Caption id="homeCarouselCaption">
                        <h1 className="medium-top-gap">Operation Hours</h1>
                        <p className="medium-top-gap"><strong>Tuesday thru Friday</strong> 11:00am -2:00pm; 5:30pm – 9:30pm</p>
                        <p> <strong>Saturday:</strong> 5:30pm – 9:30pm</p>
                        <p><strong>Sunday:</strong> 11:00am -2:00pm; 5:30pm – 9:30pm</p>
                        <p><strong>Monday:</strong> CLOSED</p>
                        <button className="waves-effect waves-light btn-flat red white-text">
                        <Link className="white-text" to='/menu' ><strong>Explore our menu</strong>
                            <i className="material-icons right">arrow_forward</i></Link> 
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={600} alt="900x600" src={slide3}/>
                    <Carousel.Caption id="homeCarouselCaption">                        
                        <h1 className="medium-top-gap">Contact Us</h1>
                        <p className="medium-top-gap"><strong>Email: </strong><a className="white-text" href="sabi95oct@gmail.com">sabi95oct@gmail.com</a></p>
                        <p> <strong>Call us: </strong><a className="white-text" href="tel:(713) 524-2170">(61) 410597815</a> </p>
                        <p><strong>Location: </strong>57,Basinview Dr, VIC-3029</p>
                        <p className="white-text"><em><strong>*Complimentary Valet Parking</strong></em></p>                      
                        <button className="waves-effect waves-light btn-flat red white-text">
                        <Link className="white-text" to='/menu' ><strong>Explore our menu</strong>
                            <i className="material-icons right">arrow_forward</i></Link> 
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }

    export default HomeCarousel;
