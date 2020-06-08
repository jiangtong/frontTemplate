/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import saga from '@redux/saga/saga';

class Saga extends Component {
    componentDidMount() {}

    incrementAsync = () => {
        this.props.incrementAsync();
    };

    increment = () => {
        this.props.increment();
    };

    render() {
        return (
            <>
                <p>{this.props.sagaData}</p>
                <button onClick={this.increment}>点击</button>
                <button onClick={this.incrementAsync}>点击-异步</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        sagaData: state.saga
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch({ type: 'login' });
        },

        incrementAsync: () => {
            dispatch({ type: 'INCREMENT_ASYNC' });
        }
    };
};

const enchce = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

export default enchce(Saga);
