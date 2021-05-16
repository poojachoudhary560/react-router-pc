import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Topics from './components/topics/Topics';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
