/** @format */

import { useEffect, useRef, useState } from 'react';

export default initialValue => {
    const [state, setState] = useState(initialValue);
    const stateRef = useRef(state);

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    return [state, stateRef, setState];
};
