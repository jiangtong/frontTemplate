import React, {useState} from 'react';
import HookEchart from './HookEchart';

export default (props) => {
    const [state, setState] = useState(0);
    const [state1, setState1] = useState(() => {
        // 延迟初始化 可以
        // const initialState = someExpensiveComputation(props);

        let initialState = 1;
        return initialState;
    });

    return (
        <div>
            <p>
                <div>{state}</div>
                <div>{state1}</div>
            </p>
            <button onClick={() => {
                setState(prevstate => prevstate + 1);
                setState1(prevstate => prevstate + 1);
            }}>加
            </button>

            <HookEchart></HookEchart>
        </div>
    );
}
