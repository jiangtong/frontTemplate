import React, { useState, useMemo } from 'react';
import HookEchart from './HookEchart';
import HookContext from './HookContext';
import HookRef from './HookRef';
import HookReducer from './HookReducer';
import HookTest from './HookTest';
import { TeacherTeachingList, EnterprisePracticeInfoList } from './HookDemo';

const A = React.memo(({ data }) => {
    console.log('AAAAAAAAAAAAAAAAAAAAA');
    console.log(data);
    return <div>A</div>;
});

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/no-multi-comp
export default props => {
    const [state, setState] = useState(0);
    const [data, setData] = useState(0);
    const [state1, setState1] = useState(() => {
        // 延迟初始化 可以
        // const initialState = someExpensiveComputation(props);

        let initialState = 1;
        return initialState;
    });

    const HookTestCom = useMemo(() => <HookTest></HookTest>, []);

    const getData = useMemo(() => {
        return { data: 11 };
    }, [data]);

    return (
        <React.Fragment>
            <A data={getData}></A>
            <button
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
        </React.Fragment>
    );
};
