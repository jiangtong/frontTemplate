/** @format */

import React, { Component } from 'react';
import { Button } from 'antd';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleTest2 = this.handleTest2.bind(this);
    }

    handleTest = () => {
        console.log('test');
    };

    handleTest2() {
        console.log('test2');
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                {this.props.list.map((todo, index) => (
                    <div key={index}>
                        <span>{todo}</span>
                        <Button onClick={() => this.props.deleteTodo(index)}>
                            done
                        </Button>
                    </div>
                ))}
            </div>
        );
    }
}
