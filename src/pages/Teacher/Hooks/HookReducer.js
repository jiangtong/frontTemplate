import React, {useReducer} from 'react';

const initState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return initState;
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
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



export default (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <React.Fragment>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'reset'})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </React.Fragment>
    );
}


