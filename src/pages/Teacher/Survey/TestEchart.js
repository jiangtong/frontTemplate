import React, { Component } from 'react';
// import Echart from '@components/beijing/Echarts';
import { withRouter } from 'react-router-dom';
// import highComponentFuc from '@pages/Teacher/commen/HighComponent';
import '@pages/Teacher/commen/assets/styles/index.less';
import lessModule from '../commen/assets/styles/index.module.less';
import cssModule from '../commen/assets/styles/index.module.css';
import '../commen/assets/styles/index.css';

import scssModule from '../commen/assets/styles/index.module.scss';
import '../commen/assets/styles/index.scss';
//装饰器写法
// @highComponentFuc('teacherType4College')
class TestEchart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // async componentDidMount() {
    //     // let res1 = await Request.pageAlarmStrategy();
    // }

    render() {
        return (
            <div>
                <div className={'color'}>less 11</div>
                <div className={lessModule.color1}>lessModle</div>
                <div className={cssModule.color}>cssModule</div>
                <div className={'csscolor'}>css</div>

                <div className={scssModule.color}>scssModule</div>
                <div className={'scsscolor'}>scss</div>
                {/* <Echart
                    onClickAction={params => {
                        if (this.props.onClickAction)
                            this.props.onClickAction(params);
                    }}
                    data={{
                        title: {
                            text: '全校授课教师分类数量以及占比',
                            x: 'left',
                            textStyle: {
                                fontSize: 14,
                                fontWeight: 'normal'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        legend: {
                            bottom: 0,
                            left: 'center',
                            data:
                                this.props.data &&
                                this.props.data.map(item => {
                                    return item.name;
                                })
                        },
                        series: [
                            {
                                name: '',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '50%'],
                                data: this.props.data || [],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    }}
                ></Echart> */}
            </div>
        );
    }
}

export default withRouter(TestEchart);
