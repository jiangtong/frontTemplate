/** @format */
import { take, select } from 'redux-saga/effects';

export default function* watchlog() {
    while (true) {
        const action = yield take('*');
        const state = yield select();

        console.log('action', action);
        console.log('state after', state);
    }
}
