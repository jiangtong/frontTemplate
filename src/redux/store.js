/** @format */

import { applyMiddleware, createStore } from 'redux';
import combineReducers from '@redux/reducer.js';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import saga from './saga/saga';
import saga1 from './saga/saga1';
import watchAndLog from './saga/watchlog';

const sagaMiddleware = createSagaMiddleware();

// const middleware = [thunk];
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

// 动态执行saga，注意：run函数只能在store创建好之后调用
sagaMiddleware.run(saga);
sagaMiddleware.run(saga1);
sagaMiddleware.run(watchAndLog);

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('@redux/reducer.js', () => {
        const nextCombineReducers = combineReducers.default;
        store.replaceReducer(nextCombineReducers);
    });
}

export default store;
