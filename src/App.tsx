import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import './App.scss';
import Home from './components/home/Home';
import Menu from './components/menu/Menu'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
        <Switch>
        <Route  path='/' exact component={Home}></Route>
        <Route  path='/home' exact component={Home}></Route>
        <Route  path='/menu' exact component={Menu}></Route>
        </Switch>
    </Router>
  );
}

export default App;
