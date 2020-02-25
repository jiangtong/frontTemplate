import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Request from '@commenApi/teacher/index';

export default class Index extends Component {
    state = {};

    async componentDidMount() {
        let res = await Request.enterprisePracticeInfoList();

        console.log(res);
    }
    constructor(props) {
        super(props);
    }

    onClick = params => {
        this.setState({
            number: params
        });
    };

    render() {
        const { number = 0 } = this.state;
        return (
            <div>
                <h1>首页</h1>
                <Link to={'/teachermanager/growth/12'}>下钻_jiangtong</Link>
            </div>
        );
    }
}

{
    /*<Provider value={{onClick: this.onClick, number}}>*/
}
{
    /*<Link to={"/teachermanager/growth/12"}>下钻</Link>*/
}
{
    /*<ChildrenA/>*/
}
{
    /**/
}
{
    /*<ChildrenB/>*/
}
{
    /*</Provider>*/
}
