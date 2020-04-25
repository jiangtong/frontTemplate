/** @format */

import React, { Component } from '@src/pages/IntersectionObserver/react';
import { withRouter } from '@src/pages/IntersectionObserver/react-router';
import './index.scss';

class Intersection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.io = new IntersectionObserver(entries => {
            console.log(entries);
        });

        console.log(this.io);
        this.io.observe(document.getElementById('green'));
    }

    componentWillUnmount() {
        if (this.io) {
            this.io.disconnect();
        }
    }

    render() {
        return (
            <div className="container">
                <div id="long"></div>

                <div id="green"></div>
            </div>
        );
    }
}

export default withRouter(Intersection);
