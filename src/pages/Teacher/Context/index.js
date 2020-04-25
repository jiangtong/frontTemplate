/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Request from '@src/commen/data-commen/api/teacher/index';
import Context from './context';

const { Provider } = Context;

export default class Index extends Component {
    state = {};

    async componentDidMount() {
        console.log(this.props);

        const res = await Request.enterprisePracticeInfoList();
        console.log(res);
    }

    onClick = params => {
        this.setState({
            number: params
        });
    };

    render() {
        const { number = 0 } = this.state;
        return (
            <div>
                <Provider value={{ onClick: this.onClick, number }}>
                    <Link to="/teachermanager/growth/12">下钻</Link>
                </Provider>
                <h1>首页</h1>
                <Link to="/teachermanager/growth/12">下钻_jiangtong</Link>
            </div>
        );
    }
}
