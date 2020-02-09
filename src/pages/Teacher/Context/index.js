import React, { Component } from 'react'
import Context from './context'
import { Link } from 'react-router-dom'

import ChildrenA from './childrenA'
import ChildrenB from './childrenB'

const Provider = Context.Provider

export default class Index extends Component {
    state = {}

    constructor(props) {
        super(props)
    }

    onClick = params => {
        this.setState({
            number: params
        })
    }

    render() {
        const { number = 0 } = this.state
        return (
            <div>
                <h1>首页</h1>
                <Link to={'/teachermanager/growth/12'}>下钻</Link>
            </div>
        )
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
