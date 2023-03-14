import { createStore,compose,applyMiddleware } from 'redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';
import middleware from './middleware';


const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
    applyMiddleware(middleware)
));
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
