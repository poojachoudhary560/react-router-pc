import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Topic from './Topic';

const Routes = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:topicId`}>
        <Topic />
      </Route>
      <Route path={`${match.path}`}>
        <h3>Please select a Topic </h3>
      </Route>
    </Switch>
  );
};

export default Routes;
