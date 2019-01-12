import {applyMiddleware, createStore} from 'redux';
import combineReducers from '@useRedux/reducer.js';
import thunk from 'redux-thunk';


const middleware = [thunk];
let store = createStore(combineReducers, applyMiddleware(...middleware));


if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('@useRedux/reducer.js', () => {
        const nextCombineReducers = require('@useRedux/reducer.js').default;
        store.replaceReducer(nextCombineReducers);
    });
}


export default store;