import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import Default from './components/pages/Default';

import {Route, Switch} from 'react-router-dom';
import Navbars from './components/Navbar';
import SingleRoom from './components/pages/SingleRoom';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbars/>
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path ="/rooms/" component ={Rooms}/>
        <Route exact path ="/rooms/:slug" component ={SingleRoom}/>
        <Route component = {Default}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
