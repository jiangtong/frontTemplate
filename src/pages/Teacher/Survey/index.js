/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CommenComponent from '@pages/Teacher/commen/CommenComponent';
import BaseComponment from '@pages/Teacher/commen/BaseComponment';
import TeacherNumbers from '@pages/Teacher/Survey/TeacherNumbers';
import TestEchart from '@pages/Teacher/Survey/TestEchart';

class OurfacultyComp extends Component {
    componentDidMount() {}

    render() {
        return (
            <BaseComponment>
                <CommenComponent>
                    {[
                        {
                            title: '师资概况',
                            component() {
                                return (
                                    <>
                                        {/* <TestEchart></TestEchart> */}
                                        <TeacherNumbers
                                            style={{ height: 300 }}
                                        />
                                    </>
                                );
                            }
                        }
                    ]}
                </CommenComponent>
            </BaseComponment>
        );
    }
}

export default withRouter(OurfacultyComp);
