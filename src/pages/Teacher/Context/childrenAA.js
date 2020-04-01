import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withContext from './withContext';
import Context from './context';

const { Consumer } = Context;

class Children extends Component {
    render() {
        return (
            <div>
                <h1>childrenAA</h1>
                <Link to="/teachermanager/growth/12/哈哈/11">下钻</Link>
            </div>
        );
    }
}

export default withContext(Consumer, Children);
