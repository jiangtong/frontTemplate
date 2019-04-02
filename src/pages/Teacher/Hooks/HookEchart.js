import React, {useEffect, useState} from 'react';
import {request} from '@pages/Teacher/commen/request';
import TestEchart from '@pages/Teacher/Survey/TestEchart';
import Load from '@components/beijing/Loading';
import NoDataComponent from '@components/beijing/NoData';

export default (props) => {
    const [state, setState] = useState({
        loading: true,
        data: [],
        noData: false
    });


    async function fetchComment() {
        let res = await request.teacherType4College();

        res = [{
            name: '测试',
            value: '111'
        }, {
            name: '测试1',
            value: '22'
        }, {
            name: '测试2',
            value: '33'
        }, {
            name: '测试3',
            value: '12'
        }];

        setState({
            loading: false,
            data: res.length > 0 ? res : [],
            noData: res.length > 0 ? false : true
        });
    }

    useEffect(() => {
            fetchComment();
        }, [JSON.stringify(state.data)]
    );


    return (
        <React.Fragment>
            {
                state.data.length > 0 && !state.loading && !state.noData &&
                <TestEchart {...props} data={state.data}></TestEchart>
            }
            {
                state.loading && <Load></Load>
            }
            {
                state.noData && <NoDataComponent></NoDataComponent>
            }
        </React.Fragment>
    );
}
