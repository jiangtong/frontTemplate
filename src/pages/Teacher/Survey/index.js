import React, { Component } from 'react'
import { withRouter } from 'react-router'
import '@pages/Teacher/commen/assets/styles/index.less'
import CommenComponent from '@pages/Teacher/commen/CommenComponent'
import BaseComponment from '@pages/Teacher/commen/BaseComponment'
import TeacherNumbers from '@pages/Teacher/Survey/TeacherNumbers'

class OurfacultyComp extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    render() {
        return (
            <BaseComponment>
                <CommenComponent>
                    {[
                        {
                            title: '师资概况',
                            linkAction: e => {
                                // self.props.history.push('/teachermanager/survey/list');
                            },
                            component() {
                                return (
                                    <TeacherNumbers
                                        style={{ height: 300 }}
                                    ></TeacherNumbers>
                                )
                            }
                        }
                    ]}
                </CommenComponent>
            </BaseComponment>
        )
    }
}

export default withRouter(OurfacultyComp)
