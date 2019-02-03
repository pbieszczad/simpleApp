import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk';

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    reduxThunk,
    routerMiddleware(history),
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
);

export default store;
