import React, {Component} from 'react';
import Context from './context';
import ChildrenA from './childrenA';
import ChildrenB from './childrenB';

const Provider = Context.Provider;

export default class Index extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    onClick = params => {
        this.setState({
            number: params
        });
    };

    render() {
        const {number = 0} = this.state;
        return (
            <Provider value={{onClick: this.onClick, number}}>
                <ChildrenA/>
                <ChildrenB/>
            </Provider>
        );
    }
}
