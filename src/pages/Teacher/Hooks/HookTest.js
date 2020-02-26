import React, { useCallback, useState, useEffect, useMemo } from 'react';

function ComplexButton(props) {
    return <div onClick={props.onClick}>increment</div>;
}

// eslint-disable-next-line react/no-multi-comp
export default () => {
    console.log('++++++++++++++++++++++++++++++++++');
    const [count, setCount] = useState(0);
    const [count11, setCount11] = useState(count);

    useEffect(() => {
        console.log(count, 'useEffect');
    }, [count]);

    const handleIncr = useCallback(() => {
        // console.log('useCallback');
        setCount(count + 1);
    }, [count]);

    const count1 = useMemo(() => {
        // console.log(count * 10, 'useMemo');
        return count * 10;
    }, [count]);

    return (
        <div>
            {count}: {count1}
            <button
                onClick={() => {
                    setCount(c => c + 1);
                }}
            >
                加加加
            </button>{' '}
            <ComplexButton onClick={handleIncr}></ComplexButton>
        </div>
    );
};
