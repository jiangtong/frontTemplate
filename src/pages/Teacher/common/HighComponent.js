/** @format */

import React, { Component } from 'src/pages/Teacher/common/react';
import hoistNonReactStatics from 'src/pages/Teacher/common/hoist-non-react-statics';
import Request from 'src/pages/Teacher/common/@src/common/data-commen/api/teacher';
import NoDataComponent from 'src/pages/Teacher/common/@components/NoDataCom';
import { Spin } from 'antd';

const getDisplayName = component => {
    return component.displayName || component.name || 'Component';
};

/**
 * @url 接口地址
 * @WrappComponent 组件名称
 */
const highComponentFuc = (url, params = {}) => WrappComponent => {
    if (!url) {
        throw new Error('请填写要请求的接口名称');
    }

    if (!WrappComponent) {
        throw new Error('请填写组件名称');
    }

    class EnhanceComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                data: [],
                noData: false
            };
        }

        async componentDidMount() {
            let res = await Request[url](params);
            res = [
                {
                    name: '测试',
                    value: '111'
                },
                {
                    name: '测试1',
                    value: '22'
                },
                {
                    name: '测试2',
                    value: '33'
                },
                {
                    name: '测试3',
                    value: '12'
                }
            ];

            this.setState({
                loading: false,
                noData: !(res.length > 0)
            });

            if (res.length > 0) {
                this.setState({
                    data: res
                });
            }
        }

        render() {
            return (
                <div style={this.props.style}>
                    <Spin spinning={this.state.loading}>
                        <WrappComponent
                            {...this.props}
                            data={this.state.data}
                        />
                    </Spin>
                    {this.state.noData && <NoDataComponent></NoDataComponent>}
                </div>
            );
        }
    }

    hoistNonReactStatics(EnhanceComponent, WrappComponent);

    EnhanceComponent.displayName = `highComponentFuc(${getDisplayName(
        WrappComponent
    )})`;

    return EnhanceComponent;
};

export default highComponentFuc;
