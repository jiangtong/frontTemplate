import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './index.scss';

class Intersection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let io = new IntersectionObserver(entries => {
            console.log(entries);
        });

        console.log(io)
        io.observe(document.getElementById('green'));

    }

    render() {
        return (<div className="container">
            <div id={'long'}>

            </div>

            <div id={'green'}>

            </div>
        </div>);
    }
}

export default withRouter(Intersection);
