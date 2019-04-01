import React, {Component} from 'react';
import {Button} from 'antd';
import withContext from './withContext';
import Context from './context';

const Consumer = Context.Consumer;

class Children extends Component {
    render() {
        const {context} = this.props;
        return (
            <Button
                size={'small'}
                onClick={() => {
                    context.onClick(Math.random());
                }}
                style={{display: 'inline-block', width: 200}}
            >
                点击
            </Button>
        );
    }
}

export default withContext(Consumer, Children);

