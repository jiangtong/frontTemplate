import React, { Component } from 'react';
import withContext from './withContext';
import Context from './context';

const { Consumer } = Context;

const Children = props => {
    const { context } = props;
    return (
        <div>
            <h1>childrenAAA</h1>
        </div>
    );
};
export default withContext(Consumer, Children);
