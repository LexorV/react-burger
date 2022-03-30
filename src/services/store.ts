import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import {socketMiddleware} from '../services/middleware/socketMiddleware';
import thunkMiddleware from 'redux-thunk';
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
  } from './action/wsOrdes';
  
import thunk from 'redux-thunk';
const wsActions = {
    wsInit: WS_CONNECTION_START,
    wsSendMessage: WS_SEND_MESSAGE,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE
  };
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsActions)));
export const store = createStore(rootReducer, enhancer);
export default store;