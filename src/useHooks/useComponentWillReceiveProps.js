/** @format */
import { useRef, useEffect } from 'react';

const useComponentWillReceiveProps = (callback, dependencies) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        callback();
    }, [callback, dependencies]);
};

export default useComponentWillReceiveProps;
