import React, {useEffect, useState, useRef, useCallback} from 'react';
import Request from '@commenApi/teacher';
import TestEchart from '@pages/Teacher/Survey/TestEchart';
import Load from '@components/beijing/Loading';
import NoDataComponent from '@components/beijing/NoData';

function Timer() {
    const intervalRef = useRef();

    useEffect(() => {
        const id = setInterval(() => {
            // ...
        });
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    // ...
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

function Example(props) {
    // 把最新的 props 保存在一个 ref 中
    let latestProps = useRef(props);
    useEffect(() => {
        latestProps.current = props;
    });

    useEffect(() => {
        function tick() {
            // 在任何时候读取最新的 props
            console.log(latestProps.current);
        }

        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []); // 这个 effect 从不会重新执行
}


function useEventCallback(fn, dependencies) {
    const ref = useRef(() => {
        throw new Error('Cannot call an event handler while rendering.');
    });

    useEffect(() => {
        ref.current = fn;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fn, ...dependencies]);

    return useCallback(() => {
        const fn = ref.current;
        return fn();
    }, [ref]);
}

export default (props) => {
    const textRef = useRef();
    // eslint-disable-next-line no-unused-vars
    const [text, updateText] = useState('111');

    const [state, setState] = useState({
        loading: true,
        data: [],
        noData: false
    });

    useEffect(() => {
        textRef.current = text; // 把它写入 ref
    });

    // eslint-disable-next-line no-unused-vars
    const handleSubmit1 = useEventCallback(() => {
        console.log(text);
    }, [text]);


    const handleSubmit = useCallback(() => {
        const currentText = textRef.current; // 从 ref 读取它
        console.log(currentText);
    }, [textRef]); // 不要像 [text] 那样重新创建 handleSubmit


    // async function fetchComment() {
    //     let res = await Request.teacherType4College();
    //
    //     res = [{
    //         name: '测试',
    //         value: '111'
    //     }, {
    //         name: '测试1',
    //         value: '22'
    //     }, {
    //         name: '测试2',
    //         value: '33'
    //     }, {
    //         name: '测试3',
    //         value: '12'
    //     }];
    //
    //     setState({
    //         loading: false,
    //         data: res.length > 0 ? res : [],
    //         noData: res.length > 0 ? false : true
    //     });
    // }

    useEffect(() => {
            async function fetchComment() {
                let res = await Request.enterprisePracticeInfoList();

                res = [{
                    name: '测试',
                    value: '111'
                }, {
                    name: '测试1',
                    value: '22'
                }, {
                    name: '测试2',
                    value: '33'
                }, {
                    name: '测试3',
                    value: '12'
                }];

                setState({
                    loading: false,
                    data: res.length > 0 ? res : [],
                    noData: res.length > 0 ? false : true
                });
            }

            fetchComment();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [JSON.stringify(state.data)]
    );


    return (
        <React.Fragment>
            <div onClick={handleSubmit}>饿3213123</div>
            {
                state.data.length > 0 && !state.loading && !state.noData &&
                <TestEchart {...props} data={state.data}></TestEchart>
            }
            {
                state.loading && <Load></Load>
            }
            {
                state.noData && <NoDataComponent></NoDataComponent>
            }
        </React.Fragment>
    );
}
