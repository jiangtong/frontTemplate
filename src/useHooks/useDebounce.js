/** @format */

// 防抖
import { useRef, useCallback, useEffect } from 'react';

export default (fn, delay) => {
    const timeoutRef = useRef();

    const cancel = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    const run = useCallback(
        (...args) => {
            timeoutRef.current = setTimeout(() => {
                fn(...args);
            }, delay);
        },
        [delay, cancel]
    );

    useEffect(() => cancel, []);

    return { run, cancel };
};
