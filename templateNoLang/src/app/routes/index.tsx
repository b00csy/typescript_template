import * as React from 'react';
import { Route, Switch } from 'react-router';
import App from '../containers/App/App';

/*
react-router examples
https://scotch.io/tutorials/routing-react-apps-the-complete-guide
*/

const routes = (
  <Switch>
    <Route exact={true} path="/" component={App}/>
  </Switch>
);

export default routes;