import React, {Component} from 'react';
import {withRouter} from 'react-router';
import '@pages/Teacher/commen/assets/styles/index.less';
import CommenComponent from '@pages/Teacher/commen/CommenComponent';
import BaseComponment from '@pages/Teacher/commen/BaseComponment';
import HookComponent from '@pages/Teacher/Hooks/HookComponent';

class OurfacultyComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {

        return (
            <BaseComponment>
                <CommenComponent>{
                    [
                        {
                            title: 'HOOKS',
                            linkAction: (e) => {
                                // self.props.history.push('/teachermanager/survey/list');
                            },
                            component() {
                                return (
                                    <HookComponent></HookComponent>
                                );
                            }
                        }
                    ]
                }</CommenComponent>
            </BaseComponment>
        );
    }
}

export default withRouter(OurfacultyComp);

