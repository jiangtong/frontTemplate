/** @format */

// 上一个状态
import { useEffect, useRef } from 'react';

/**
 *
 * @param {*} state
 * @returns
 */
const usePrevious = state => {
    const ref = useRef();

    useEffect(() => {
        ref.current = state;
    });

    return ref.current;
};

export default usePrevious;
