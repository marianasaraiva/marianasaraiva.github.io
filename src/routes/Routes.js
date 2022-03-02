import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/projects" component={ Projects } />
    </Switch>
  );
}

export default Routes;
