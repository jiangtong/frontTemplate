// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';

// 让useState可以按照setState的方法使用
export default ({ initState }) => {
    let [state, setState] = useState(initState);
    let isUpdate = useRef();

    const setStateFun = (state, cb) => {
        setState(prev => {
            isUpdate.current = cb;
            return typeof state === 'function' ? state(prev) : state;
        });
    };

    useEffect(() => {
        if (isUpdate.current) {
            isUpdate.current();
        }
    });
    return [state, setStateFun];
};
