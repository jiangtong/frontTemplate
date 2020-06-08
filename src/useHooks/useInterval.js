/** @format */

import { useEffect, useRef } from 'react';

export default (callback, delay) => {
    const savedCallBack = useRef();

    useEffect(() => {
        savedCallBack.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallBack.current();
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};
