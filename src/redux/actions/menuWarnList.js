export const SUCCESS = 'menuWarnList/success';
export const FAIL = 'menuWarnList/fail';
import BaseSubFormRequest from '@utils/request/BaseSubFormRequest';

export function getListSuccess(data) {
    return {
        type: SUCCESS,
        obj: data
    };
}

export function getListFail() {
    return {type: FAIL};
}

export function menuWarnList(data) {
    return async dispatch => {
        const res = await BaseSubFormRequest.post('/warn/menuWarnList', data);
        if (res.success) {
            dispatch(getListSuccess(res.obj || []));
        } else {
            dispatch(getListFail());
        }
    };
}
