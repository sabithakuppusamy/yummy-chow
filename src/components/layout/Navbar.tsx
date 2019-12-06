import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="nav-wrapper white">
                    <div className="nav-container">
                        <Link to='/home' className="brand-logo grey-text text-darken-3 berkshire-swag-gfont"> 
                        Yummy Chow</Link>                   
                        <ul className="right">
                            <li>
                                <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                                    <i className="material-icons right grey-text text-darken-3">menu</i>
                                </a>
                            </li>
                            <ul id='dropdown1' className='dropdown-content'>
                                <li><Link to='/home' >one</Link></li>
                                <li><Link to='/home' >two</Link></li>
                            </ul>
        
                        </ul>
                    </div>                
                </nav>
            </div>
        );
    }
}

 
export default Navbar;