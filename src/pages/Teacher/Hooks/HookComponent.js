/** @format */

import React, { useState, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import HookEchart from './HookEchart';
import HookContext from './HookContext';
import HookRef from './HookRef';
import HookReducer from './HookReducer';
import HookTest from './HookTest';
import { TeacherTeachingList, EnterprisePracticeInfoList } from './HookDemo';

// eslint-disable-next-line react/no-multi-comp
function Foo({ bar, baz }) {
    console.log('-----------------------------');
    React.useEffect(() => {
        const options = { bar, baz };
    }, [bar, baz]);
    return <div>foobar</div>;
}

// eslint-disable-next-line react/no-multi-comp
function Blub() {
    console.log('+++++++++++++++++++++');
    const bar = React.useCallback(() => {}, []);
    const baz = React.useMemo(() => [1, 2, 3], []);
    return <Foo bar={bar} baz={baz} />;
}

// eslint-disable-next-line react/no-multi-comp
const CountButton = React.memo(function CountButton({ onClick, count }) {
    console.log(count);
    return (
        <button type="button" onClick={onClick}>
            {count}
        </button>
    );
});

// eslint-disable-next-line react/no-multi-comp
const A = React.memo(({ data }) => {
    console.log('AAAAAAAAAAAAAAAAAAAAA');
    console.log(data);
    return <div>A</div>;
});

// eslint-disable-next-line react/no-multi-comp
function DualCounter() {
    const [data, setData] = useState(0);

    const [count1, setCount1] = React.useState(0);
    const increment1 = React.useCallback(() => setCount1(c => c + 1), []);
    const getData = useMemo(() => {
        return { data: 1 };
    }, [data]);

    const [count2, setCount2] = React.useState(0);
    const increment2 = React.useCallback(() => setCount2(c => c + 1), []);

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    setData(c => c + 1);
                }}
            >
                changeA
            </button>
            <A data={getData}></A>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
        </>
    );
}

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/no-multi-comp
export default withRouter(props => {
    const [state, setState] = useState(0);
    const [data, setData] = useState(0);
    const [state1, setState1] = useState(() => {
        // 延迟初始化 可以
        // const initialState = someExpensiveComputation(props);

        const initialState = 1;
        return initialState;
    });

    const HookTestCom = useMemo(() => <HookTest></HookTest>, []);

    const getData = useMemo(() => {
        return { a: 1 };
    }, [data]);

    return (
        <>
            <DualCounter></DualCounter>
            <Blub></Blub>
            <A data={getData}></A>
            <button
                type="button"
                onClick={() => {
                    setData(c => c + 1);
                }}
            >
                changeA
            </button>
            {/* <TeacherTeachingList></TeacherTeachingList>
            <EnterprisePracticeInfoList></EnterprisePracticeInfoList> */}

            {/* <div>{state}</div>
            <div>{state1}</div>
            <button
                className={'aaa'}
                onClick={() => {
                    setState(prevstate => prevstate + 1);
                    setState1(prevstate => prevstate + 1);
                }}
            >
                312321
            </button>
            {HookTestCom}

            <HookContext></HookContext>
            <HookRef></HookRef>
            <HookReducer></HookReducer> */}

            {/* <HookEchart></HookEchart> */}
        </>
    );
});
