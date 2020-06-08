/** @format */

import {
    put,
    call,
    // fork,
    // take,
    // takeEvery,
    takeLatest
} from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    // 延迟 1s 在执行 + 1操作
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' });
}

function* incrementAsync1() {
    // 延迟 1s 在执行 + 1操作
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
    // while (true) {
    //     yield take('INCREMENT_ASYNC');
    //     yield fork(incrementAsync);
    // }

    // 下面的写法与上面的写法上等效

    yield takeLatest('INCREMENT_ASYNC', incrementAsync);
    yield takeLatest('INCREMENT_ASYNC', incrementAsync1);
}
