import React, { useReducer } from 'react';

const initState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return initState;
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            initState;
    }
};

// function useReducer(reducer, initialState) {
//     const [state, setState] = useState(initialState);
//
//     function dispatch(action) {
//         const nextState = reducer(state, action);
//         setState(nextState);
//     }
//
//     return [state, dispatch];
// }

export default () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <>
            Count: {state.count}
            <button type="button" onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
            <button
                type="button"
                onClick={() => dispatch({ type: 'increment' })}
            >
                +
            </button>
            <button
                type="button"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                -
            </button>
        </>
    );
};
