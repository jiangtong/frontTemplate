/** @format */

import { useState, useEffect, useRef } from 'react';

// 让useState可以按照setState的方法使用
export default ({ initState }) => {
    const [state, setState] = useState(initState);
    const isUpdate = useRef();

    const setStateFun = (newState, cb) => {
        setState(prev => {
            isUpdate.current = cb;
            return typeof newState === 'function' ? newState(prev) : newState;
        });
    };

    useEffect(() => {
        if (isUpdate.current) {
            isUpdate.current();
        }
    });

    return [state, setStateFun];
};
