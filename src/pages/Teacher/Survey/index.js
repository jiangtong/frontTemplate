/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import { Card } from 'antd';
import TeacherNumbers from '@pages/Teacher/Survey/TeacherNumbers';
import '../common/assets/styles/index.css';
import TestEchart from '@pages/Teacher/Survey/TestEchart';
// import Error from '@pages/Teacher/Survey/Error';
import Tinymce from '@pages/Teacher/Survey/Tinymce';

// function a1(a, b, c, d) {
//     console.log(a, b, c, d);
// }

// a1();

class OurfacultyComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            count: 0,
            name: [1, 2]
        };
        // console.log('parent_constructor');
    }

    shouldComponentUpdate() {
        // console.log(nextState, this.state);
        // console.log(nextState.name === this.state.name);
        return true;
    }

    onClick = () => {
        // console.log(a, b, c, d);
        const { name } = this.state;
        const obj = [...name, 3];
        this.setState(prevState => ({
            count: prevState.count + 1,
            name: obj
        }));
    };

    componentDidMount() {}

    render() {
        return (
            <>
                <Tinymce></Tinymce>
                {/* <Error></Error> */}
                {/* <TestEchart></TestEchart> */}
                {/* <div className="csscolor">12311</div>12311 aaa */}
                {/* <Card title="11">dsdasd</Card> */}
                <button onClick={this.onClick}>点击</button>
                {this.state.name.join('.')}
                <TeacherNumbers style={{ height: 300 }} />
                {/* <Error></Error> */}
                <TestEchart></TestEchart>
                {/* <TestEchart></TestEchart>
                 */}
            </>
        );
    }
}

export default withRouter(OurfacultyComp);
