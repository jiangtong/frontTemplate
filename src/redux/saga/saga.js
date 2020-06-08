/** @format */
import {
    take,
    put,
    all
    // call
} from 'redux-saga/effects';

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    while (true) {
        const action = yield take('login');
        console.log(action);
        yield put({ type: 'to_login_in', name: '111' }); // do some logger operation //与 take 并行
    }
}

// take 和 takeEvery 都是监听某个 action, 但是两者的作用却不一致，
// takeEvery 是每次 action 触发的时候都响应，而 take 则是执行流执行到 take 语句时才响应。
// takeEvery 只是监听 action, 并执行相对应的处理函数，对何时执行 action 以及如何响应 action 并没有多大的控制权，被调用的任务无法控制何时被调用，
// 并且它们也无法控制何时停止监听，它只能在每次 action 被匹配时一遍又一遍地被调用。但是 take 可以在 generator 函数中决定何时响应一个 action 以及 响应后的后续操作。

/**
 *
 *例如在监听所有类型的 action 触发时进行 logger 操作，使用 takeEvery 实现如下：
import { takeEvery } from 'redux-saga'

function* watchAndLog(getState) {
  yield* takeEvery('*', function* logger(action) {
      //do some logger operation //在回调函数体内
  })
}
复制代码使用 take 实现如下：
import { take } from 'redux-saga/effects'

function* watchAndLog(getState) {
  while(true) {
    const action = yield take('*')
    //do some logger operation //与 take 并行
  })
}
复制代码其中 while(true) 的意思是一旦到达流程最后一步（logger），通过等待一个新的任意的 action 来启动一个新的迭代（logger 流程）。
 */

function* loginIn() {
    while (true) {
        const action = yield take('to_login_in');

        yield put({ type: 'INCREMENT' });
        console.log(action);
    }
}

export default function* rootSaga() {
    yield all([incrementAsync(), loginIn()]);
}
