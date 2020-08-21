/**
 *
 * @format
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * 请求
 * @param fun 地址
 * @param deps 依赖参数，改变时重新请求
 * @param initRequest=true 默认进来就请求,如果希望等数据进来在请求可以使用requestAction
 * @returns {data, loading, requestAction} data=>数据，loading=>加载状态，requestAction=>可以再次请求
 */
export default ({ fun, deps = [], initRequest = true }) => {
    const requestRef = useRef(initRequest);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const requestAction = useCallback(
        useData => {
            setLoading(true);
            requestRef.current = true;
            return fun(useData).then(res => {
                setLoading(false);
                setData(res);
                return res;
            });
        },
        [...deps]
    );

    useEffect(() => {
        if (requestRef.current) {
            requestAction();
        }
    }, [...deps]);

    return { data, loading, requestAction };
};
