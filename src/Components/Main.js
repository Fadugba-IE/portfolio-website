import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landingpage';
import Project from './Project';
import Contact from './Contact';

const Main = () => ( 

<Switch>
    <Route exact path = "/" component = { LandingPage }/> 
    <Route exact path = "/Home" component = { LandingPage }/>
     <Route exact path = "/Contact"component = { Contact }/>
     <Route exact path = "/Project" component = { Project } /> 
     </Switch>
)

export default Main;