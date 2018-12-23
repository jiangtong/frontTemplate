import React, {Component, Fragment} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {request} from '@pages/Teacher/commen/request';
import Load from '@components/beijing/Loading';
import NoDataComponent from '@components/beijing/NoData';

// const request = new Request();

const getDisplayName = (component) => {
    return component.displayName || component.name || 'Component';
};

const highComponentFuc = (url) => (WrappComponent) => {
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
            let res = await request.teacherType4College();

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
                {
                    this.state.data.length > 0 && !this.state.loading && !this.state.noData &&
                    <WrappComponent {...this.props} data={this.state.data}></WrappComponent>
                }
                {
                    this.state.loading && <Load></Load>
                }
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