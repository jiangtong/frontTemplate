import React, {Component} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Request from '@commenApi/teacher';
import NoDataComponent from '@components/beijing/NoData';
import {Spin} from 'antd';

const getDisplayName = (component) => {
    return component.displayName || component.name || 'Component';
};

/**
 * @url 接口地址
 * @WrappComponent 组件名称
 */
const highComponentFuc = (url, params = {}) => (WrappComponent) => {
    if (!url) {
        throw new Error('请填写要请求的接口名称');
    }

    if (!WrappComponent) {
        throw new Error('请填写组件名称');
    }

    class EnhanceComponent extends Component {
        static displayName = `highComponentFuc(${getDisplayName(WrappComponent)})`;

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
            res = [{
                name: '测试',
                value: '111'
            }, {
                name: '测试1',
                value: '22'
            }, {
                name: '测试2',
                value: '33'
            }, {
                name: '测试3',
                value: '12'
            }];

            this.setState({
                loading: false,
                noData: res.length > 0 ? false : true
            });

            if (res.length > 0) {
                this.setState({
                    data: res
                });
            }
        }

        render() {
            return <div style={this.props.style}>
                <Spin spinning={this.state.loading}>
                    <WrappComponent {...this.props} data={this.state.data}></WrappComponent>
                </Spin>
                {
                    this.state.noData && <NoDataComponent></NoDataComponent>
                }
            </div>;
        }
    }

    hoistNonReactStatics(EnhanceComponent, WrappComponent);

    return EnhanceComponent;
};

export default highComponentFuc;