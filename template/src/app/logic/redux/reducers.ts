import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import { intlReducer } from 'react-intl-redux';
import { connectRouter } from 'connected-react-router';

export default (history: any) => combineReducers({
    app: appReducer,
    intl: intlReducer,
    router: connectRouter(history),
})