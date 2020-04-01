/* eslint-disable react/no-multi-comp */
import React, { useState, useContext } from 'react';

const Context = React.createContext();

const Child = _props => {
    const context = useContext(Context);
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    context.onChangeValueAct('222');
                }}
            >
                context 点击
            </button>
            {context.name}
        </div>
    );
};

export default _props => {
    const [name, setName] = useState('111');
    return (
        <>
            <Context.Provider
                value={{
                    name,
                    onChangeValueAct: usename => {
                        setName(usename);
                    }
                }}
            >
                <Child></Child>
            </Context.Provider>
        </>
    );
};
