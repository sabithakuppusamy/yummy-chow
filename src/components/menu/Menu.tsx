import React from 'react';
import {MenuList} from './MenuList';
import './Menu.scss';
import axios from 'axios';

axios.get('http://localhost:5000/menu')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

const Menu = ()=> {
    return (
            <div className="container">
                <div className="small-gap"></div>
                    <MenuList/>
            </div>
        )
    }

    export default Menu;
