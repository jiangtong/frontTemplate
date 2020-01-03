import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './index.scss';


class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (<div className="container">
                <div className="header">HEADER</div>
                <div className="menu">MENU</div>
                <div className="content">
                    <div className={'tab1'}>tab1</div>
                    <div className={'tab2'}>tab2</div>
                    <div className={'tab3'}>tab3</div>
                    <div className={'tab4'}>tab4</div>

                    <div className={'long1'}></div>

                    <div className={'long2'}></div>
                </div>
                <div className="footer">FOOTER</div>
            </div>
        );
    }
}

export default withRouter(Grid);
