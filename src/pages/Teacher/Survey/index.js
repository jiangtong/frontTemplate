import React, {Component} from 'react';
import {withRouter} from 'react-router';
import '@pages/Teacher/commen/assets/styles/index.less';
import CommenComponent from '@pages/Teacher/commen/CommenComponent';
import BaseComponment from '@pages/Teacher/commen/BaseComponment';
import TeacherNumbers from '@pages/Teacher/Survey/TeacherNumbers';
import {getPermission} from '@utils/utils';

class OurfacultyComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //判断权限
            TeacherNumbersStatus: getPermission(props, '师资概况')
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <BaseComponment>
                {
                    this.state.TeacherNumbersStatus && <CommenComponent>{
                        [
                            {
                                title: '师资概况',
                                linkAction: (e) => {
                                    // self.props.history.push('/teachermanager/survey/list');
                                },
                                component() {
                                    return (
                                        <TeacherNumbers style={{height: 300}}></TeacherNumbers>
                                    );
                                }
                            }
                        ]
                    }</CommenComponent>
                }
            </BaseComponment>
        );
    }
}

export default withRouter(OurfacultyComp);

