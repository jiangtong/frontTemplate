/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Saga extends Component {
    componentDidMount() {}

    incrementAsync = () => {
        this.props.addByOneAsync();
    };

    increment = () => {
        this.props.addByOne();
    };

    render() {
        // console.log(this.props);
        return (
            <>
                <p>{this.props.rematchCount}</p>
                <button onClick={this.increment}>点击</button>
                <button onClick={this.incrementAsync}>点击-异步</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        rematchCount: state.count,
        rematchCount1: state.hhhh
    };
};

const mapDispatchToProps = ({ count: { addBy, addByAsync } }) => {
    return {
        addByOne: () => addBy(1),
        addByOneAsync: () => addByAsync(1)
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         addByOne: () => dispatch({ type: 'count/addBy', payload: 1 })
//     };
// };

const enchce = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

export default enchce(Saga);
