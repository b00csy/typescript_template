import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import  routes  from './app/routes';
import store from './app/logic/store';
import { history } from './app/logic/store';
import { IntlProvider } from 'react-intl-redux';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <div>
            {routes}
        </div>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
