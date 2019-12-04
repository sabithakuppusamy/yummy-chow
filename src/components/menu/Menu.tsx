import React, { Component } from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import './Menu.scss';

var dinner = require('../../assets/menu-image-dinner.jpg');
var dessert = require('../../assets/menu-image-dessert.jpg');
var beverage = require('../../assets/menu-image-beverage.jpg');

export class Menu extends Component {
    render() {
        return (
            <div className="container">
                <div className="small-gap"></div>
               <CardDeck>
                    <Card className="bg-dark text-white">
                        <Card.Img id="indikaMenu" variant="top" src={dinner} />
                        <Card.ImgOverlay>
                            <Card.Body>
                            <Card.Text>
                                <h1>Dinner</h1>
                            </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        <Card.Footer>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Footer>
                    </Card>
                    <Card className="bg-dark text-white">
                        <Card.Img id="indikaMenu" variant="top" src={dessert} />
                        <Card.ImgOverlay>
                            <Card.Body>
                            <Card.Text>
                                <h1>Dessert</h1>
                            </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        <Card.Footer>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Footer>
                    </Card>
                    <Card className="bg-dark text-white">
                        <Card.Img id="indikaMenu" variant="top" src={beverage} />
                        <Card.ImgOverlay>
                            <Card.Body>
                            <Card.Text>
                                <h1>Beverage Program</h1>
                            </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        <Card.Footer>
                            <Card.Link href="#"> Card Link</Card.Link>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
            </div>
        )
    }
}

export default Menu
