/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TeacherNumbers from '@pages/Teacher/Survey/TeacherNumbers';
// import TestEchart from '@pages/Teacher/Survey/TestEchart';
// import Demo from '@pages/Teacher/Survey/Demo';
// import Error from '@pages/Teacher/Survey/Error';

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

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState, this.state);
        console.log(nextState.name === this.state.name);
        return true;
    }

    onClick = () => {
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
                <button onClick={this.onClick}>点击</button>

                {this.state.name.join('.')}
                <TeacherNumbers style={{ height: 300 }} />
                {/* <Error></Error> */}

                {/* <TestEchart></TestEchart> */}
                {/* <TestEchart></TestEchart>
                 */}
            </>
        );
    }
}

export default withRouter(OurfacultyComp);
