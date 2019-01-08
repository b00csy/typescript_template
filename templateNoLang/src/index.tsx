import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import  routes  from './app/routes';
import store from './app/logic/store';
import { history } from './app/logic/store';

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
            {routes}
        </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
