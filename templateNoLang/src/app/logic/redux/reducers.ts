import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import { connectRouter } from 'connected-react-router';

export default (history: any) => combineReducers({
    app: appReducer,
    router: connectRouter(history),
})