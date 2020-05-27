import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landingpage';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';

const Main = () => ( 

<Switch>
    <Route exact path = "/" component = { LandingPage }/> 
    <Route exact path = "/Home" component = { LandingPage }/>
     <Route exact path = "/Contact"component = { Contact }/>
     <Route exact path = "/Project" component = { Project } /> 
    <Route exact path = "/Resume" component = { Resume }/>
     </Switch>
)

export default Main;