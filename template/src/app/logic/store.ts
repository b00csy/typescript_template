import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import { rootSaga } from './saga/rootSaga';
import { createBrowserHistory } from 'history';
import { routerMiddleware, } from 'connected-react-router';
import { updateIntl } from 'react-intl-redux';
import { translationMessages } from '../trans/translator';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer(history),
   compose(applyMiddleware(routerMiddleware(history), sagaMiddleware),
       (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()));

    store.dispatch(updateIntl({
        locale: 'en',
        messages: translationMessages.en
    }))

sagaMiddleware.run(rootSaga);

export default store;