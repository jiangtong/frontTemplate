import React, { Component } from 'react'
import withContext from './withContext'
import Context from './context'

const Consumer = Context.Consumer

class Children extends Component {
    render() {
        const { context } = this.props
        return (
            <div>
                <h1>childrenAAA</h1>
            </div>
        )
    }
}

export default withContext(Consumer, Children)
