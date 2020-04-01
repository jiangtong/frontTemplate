import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withContext from './withContext';
import Context from './context';

const { Consumer } = Context;

const Children = () => {
    return (
        <div>
            <h1>childrenA</h1>

            <Link to="/teachermanager/growth/12/哈哈">下钻</Link>
        </div>
    );
};

export default withContext(Consumer, Children);
