import React, {Component, Fragment} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Request from '@pages/Teacher/commen/request';
import Load from '@components/beijing/Loading';
import NoDataComponent from '@components/beijing/NoData';

const request = new Request();

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
            const res = await request[url]();

            if (res) {
                this.setState({
                    loading: false
                });

                if (res.obj.left.length > 0) {
                    this.setState({
                        data: res.obj.left,
                        noData: false
                    });
                } else {
                    this.setState({
                        noData: true
                    });
                }
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