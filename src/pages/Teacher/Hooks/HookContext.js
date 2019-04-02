import React, {useContext} from 'react';

const Context = React.createContext();

const Child = (props) => {
    const context = useContext(Context);
    // console.log(context);
    return <div>
        {
            context.name
        }
    </div>;
};

export default (props) => {
    return (
        <React.Fragment>
            <Context.Provider value={{name: '111'}}>
                <Child></Child>
            </Context.Provider>
        </React.Fragment>
    );
}
