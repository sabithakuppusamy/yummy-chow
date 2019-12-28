import React, { Component } from 'react';
import {Card, CardDeck} from 'react-bootstrap';


var menu = [{
    name: "Dinner",
    image: require('../../assets/menu-image-dinner.jpg')
},
{
    name: "Dessert",
    image: require('../../assets/menu-image-dessert.jpg')
},
{
    name: "Beverage",
    image: require('../../assets/menu-image-beverage.jpg')
}];


export class MenuList extends Component {    
    render() {
        const menuList = menu.map((items)=>
        
        <Card className="bg-dark text-white">
        <Card.Img id="yummyChowMenu" variant="top" src={items.image} />
        <Card.ImgOverlay>
            <Card.Body>
            <Card.Text>
                <h1>{items.name}</h1>
            </Card.Text>
            </Card.Body>
        </Card.ImgOverlay>
        </Card>
        );
        return(
        <CardDeck>{menuList}</CardDeck>
        )  
    }
}