import React, { Component } from 'react';
import './index.scss';

class NoDataCom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                className={'no_block'}
                style={{ height: document.body.clientHeight - 64 }}
            >
                <div>
                    <img src={require('@public/img/wushuju.png')} alt="" />
                    无关联信息，无查看权限
                </div>
            </div>
        );
    }
}

export default NoDataCom;
