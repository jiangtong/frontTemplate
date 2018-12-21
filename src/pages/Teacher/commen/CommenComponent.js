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
import {Col} from 'antd';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

class CommenComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let {children, menuWarnListData} = this.props;
        return (
            <Col span={24} className="main_content margin_top20" style={this.props.style}>
                {
                    children.map((item, index) => {
                        // let showWaring = true;
                        // if (item.showWaring === undefined) {
                        //     showWaring = true;
                        // } else {
                        //     showWaring = false;
                        // }

                        return (
                            <Col span={24} className="main_content_wrapper" style={{width: `${100 / children.length}%`}}
                                 key={index}>
                                <Col className="main_content_title">
                                <span>
                                    <img src={require('@public/img/ico1.png')}/>
                                    {
                                        item.link ?
                                            <Link to={item.link}>{item.linkTitle}</Link> : ''
                                    }
                                    {item.title}
                                </span>
                                </Col>
                                <Col span={24} className="main_content_body">
                                    {item.component()}
                                </Col>
                            </Col>
                        );
                    })
                }
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuWarnListData: state.menuWarnList.menuDic
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};


const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);


export default enhance(CommenComponent);

