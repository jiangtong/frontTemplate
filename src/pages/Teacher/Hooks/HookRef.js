import React, {useRef, useImperativeHandle} from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    getState = () => {
        return 123123;
    };

    render() {
        return <div>
            ChildRef
        </div>;
    }
}


// 高阶函数
const logProps = (Component) => {
    class LogProps extends React.Component {
        render() {
            const {forwardedRef, ...rest} = this.props;
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    function forwardRef(props, ref) {
        return <LogProps {...props} forwardedRef={ref}/>;
    }

    return React.forwardRef(forwardRef);
};

const ReactComponent = logProps(Child);


const FancyInput = (props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef}/>;
};

const UseFancyInput = React.forwardRef(FancyInput);

export default (props) => {
    const inputRef = useRef(111);
    const fancyInputRef = useRef();
    let childRef = useRef(null);

    const onButtonClick = () => {
        inputRef.current.focus();
        // console.log(childRef.getState());
        console.log(childRef);
        console.log(inputRef);
    };

    return (
        <React.Fragment>
            <input ref={inputRef} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
            <Child ref={childRef}></Child>
            <ReactComponent ref={childRef}></ReactComponent>

            <UseFancyInput ref={fancyInputRef} onClick={() => {
                fancyInputRef.current.focus();
            }}/>

        </React.Fragment>
    );
}

