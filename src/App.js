import React from 'react';
import NavBar from './Components/Navbar';
import './Styles/main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Work from './Pages/Work';
import Experience from './Pages/Experience';
import Carrers from './Pages/Carrers';
import Contact from './Pages/Contact';




function App() {

  
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/aboutus' exact component={Aboutus}/>
          <Route path='/Work' exact component={Work}/>
          <Route path='/experience' exact component={Experience}/>
          <Route path='/carrers' exact component={Carrers}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
      </Router>
    </>
  )
}

export default App

