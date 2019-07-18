import React, {useState, useContext} from 'react';

const Context = React.createContext();

const Child = (props) => {
    const context = useContext(Context);
    return <div>
        <button onClick={() => {
            context.onChangeValueAct('222');
        }}>context 点击
        </button>
        {
            context.name
        }
    </div>;
};

export default (props) => {
    const [name, setName] = useState('111');
    return (
        <React.Fragment>
            <Context.Provider value={{
                name: name,
                onChangeValueAct: (name) => {
                    setName(name);
                }
            }}>
                <Child></Child>
            </Context.Provider>
        </React.Fragment>
    );
}
