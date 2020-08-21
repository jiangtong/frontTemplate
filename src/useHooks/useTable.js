/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

import { useCallback, useEffect, useRef, useReducer, useMemo } from 'react';
import useRequest from '@useHooks/useRequest';

class UseTableInitState {
    current = 1; // 当前页码

    pageSize = 10; // 分页大小

    total = 0; // 总页数

    data = []; // 列表数据,

    count = 0; // 计数器主要是为了刷新

    formData = {}; // 搜搜的数据,

    sorter = null; // 排序,

    filters = null; // 筛选
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateState':
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
};

/**
 * 请求
 * @param fun 地址
 * @param deps 依赖参数，改变时重新请求
 * @param options 请求配置项  defaultPageSize默认请求条数
 * @param initRequest=true 默认进来就请求,如果希望等数据进来在请求可以使用requestAction
 * @param needPage=true 默认进来就请求,需要分页吗
 * @returns {data, loading, requestAction} data=>数据，loading=>加载状态，requestAction=>可以再次请求
 */
export default ({
    fun,
    deps = [],
    needPage = true,
    options = { defaultPageSize: 10 },
    initRequest = false
}) => {
    const initState = useMemo(() => new UseTableInitState(), []);
    const requestRef = useRef(initRequest);
    const [state, dispatch] = useReducer(reducer, {
        ...initState,
        pageSize: options.defaultPageSize
    });

    // 请求
    const { loading, requestAction } = useRequest({
        fun,
        deps: [...deps],
        initRequest: false
    });

    // 执行的事件
    const run = useCallback(() => {
        const params = {
            ...state.formData
        };

        if (needPage) {
            params.pageNum = state.current;
            params.pageSize = state.pageSize;
        }

        if (state.filters) {
            params.filters = state.filters;
        }
        if (state.sorter) {
            params.sorter = state.sorter;
        }
        requestAction(params).then(res => {
            const payload = { data: [], totals: 0 };
            if (res.success) {
                if (needPage) {
                    payload.data = res?.obj?.rows ?? [];
                    payload.total = res?.obj?.total ?? 0;
                } else {
                    payload.data = res?.obj ?? [];
                    payload.total = 0;
                }
            } else {
                payload.data = [];
                payload.total = 0;
            }

            dispatch({
                type: 'updateState',
                payload
            });
        });
    }, [state.current, state.count]);

    // 依赖变化的事件
    useEffect(() => {
        if (requestRef.current) {
            run();
        }
    }, [state.current, state.pageSize, state.count, ...deps]);

    // 分页
    const onChange = useCallback(
        (pagination, filters, sorter) => {
            dispatch({
                type: 'updateState',
                payload: {
                    current: pagination.current,
                    pageSize: pagination.pageSize,
                    count: state.count + 1,
                    sorter,
                    filters
                }
            });
        },
        [state.count]
    );

    // 重新搜索
    const reload = useCallback(() => {
        dispatch({
            type: 'updateState',
            payload: {
                count: state.count + 1,
                current: 1
            }
        });
    }, [state.count]);

    const refresh = useCallback(() => {
        dispatch({
            type: 'updateState',
            payload: { count: state.count + 1 }
        });
    }, [state.count]);

    // 主动搜索
    const searchSubmit = useCallback(
        async params => {
            // 主要是为了让dispactch或setstate可以实现异步就是可以一个一个更新数据
            await dispatch({
                type: 'updateState',
                payload: {
                    formData: params
                }
            });
            requestRef.current = true;
            await reload();
            // setTimeout(() => {
            //     dispatch({
            //         type: 'updateState',
            //         payload: {
            //             formData: params
            //         }
            //     });
            //     reload();
            // });
        },
        [reload]
    );

    return {
        // 返回用的数据
        tableProps: {
            dataSource: state?.data ?? [],
            loading,
            onChange,
            pagination: {
                current: state.current,
                pageSize: state.pageSize,
                total: state.total
            }
        },
        sorter: state.sorter,
        filters: state.filters,
        // 刷新当前页面
        refresh,
        // 搜索
        search: {
            submit: searchSubmit
        }
    };
};
