import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
        <Header/>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        <Footer/>
        
    </div>
  );
}

export default App;
