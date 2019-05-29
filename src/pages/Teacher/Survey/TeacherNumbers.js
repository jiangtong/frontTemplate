import React, {Component} from 'react';
import {withRouter} from 'react-router';
import highComponentFuc from '@pages/Teacher/commen/HighComponent';
import TestEchart from '@pages/Teacher/Survey/TestEchart';
import '@pages/Teacher/commen/assets/styles/index.less';
import {Row, Col} from 'antd';

const HighFunUse = highComponentFuc('teacherType4College')(TestEchart);

class TeacherNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        // hoistNonReactStatics的用法
        // console.log(HighFunUse.getName());
        return (
            <Col span={24} className="enrolment-container">
                <Row className="bg-white chart-content">
                    <div className="clearfix">
                        <Col span={24}>
                            <HighFunUse style={this.props.style} {...this.props}></HighFunUse>
                        </Col>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default withRouter(TeacherNumbers);

