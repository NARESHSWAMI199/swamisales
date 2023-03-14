import { createStore,compose,applyMiddleware } from 'redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';
import { routerMiddleware, push } from 'react-router-redux'
store.dispatch(push('/foo'))
const middleware = routerMiddleware(browserHistory)

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(push('/login'))
export default store;
