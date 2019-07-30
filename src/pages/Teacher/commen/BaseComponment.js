/*
 * 使用方法
 * @popverData      可选参数 弹出框值 数组形式和render个数对应
 * @title           可选参数 标题     数组形式和render个数对应
 * @render          必填参数 组件内容
 * @linkStatus      可选参数 是否需要跳转链接
 * 有疑问联系 北京前端
 *
 *
 * <Popover trigger="click" content={this.props.popverData[index]}>
                                <i>1</i>
                            </Popover>
                            <i>2</i>
                            <i>3</i>
                            其中内容按照界面需求设计 可以写多个CommenComponent 组件
 *
 * */
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {menuWarnList} from '@actions/menuWarnList';

class BaseComponment extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.menuWarnListAction({menuUrl: this.props.location.pathname});
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.children
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        menuWarnListAction(data) {
            dispatch(menuWarnList(data));
        }
    };
};


const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);
export default enhance(BaseComponment);


