import React from 'react';
import './loading.less';

class Loading extends React.Component {
    render() {
        return (
            <div className="shield" style={{display: 'flex'}}>
                <span className={'item-1'}></span>
                <span className={'item-2'}></span>
                <span className={'item-3'}></span>
                <span className={'item-4'}></span>
                <span className={'item-5'}></span>
                <span className={'item-6'}></span>
                <span className={'item-7'}></span>
            </div>
        );
    }
}

export default Loading;

