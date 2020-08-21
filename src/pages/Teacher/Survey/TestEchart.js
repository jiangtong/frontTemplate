/** @format */

import React, { Component } from 'react';
// import Echart from '@components/Echarts';
import { withRouter } from 'react-router-dom';
// import lottie from 'lottie-web';
// import highComponentFuc from '@pages/Teacher/commen/HighComponent';
import '../common/assets/styles/index.less';
import lessModule from '../common/assets/styles/index.module.less';
import cssModule from '../common/assets/styles/index.module.css';
import '../common/assets/styles/index.css';
// import animation from './pencil.json';
import scssModule from '../common/assets/styles/index.module.scss';
import '../common/assets/styles/index.scss';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.'
// ];

// 装饰器写法
// @highComponentFuc('teacherType4College')
class TestEchart extends Component {
    async componentDidMount() {
        // lottie.loadAnimation({
        //     container: document.getElementById('name'),
        //     renderer: 'svg',
        //     loop: true,
        //     autoplay: true,
        //     animationData: animation
        // });
        // let res1 = await Request.pageAlarmStrategy();
    }

    render() {
        return (
            <div>
                <div style={{ height: 50 }} id="name"></div>

                <div className="csscolor">css</div>
                <div className={cssModule.color_name}>cssModule</div>

                <div className="color">less111</div>
                <div className={lessModule.color_ccc}>lessModle</div>

                <div className="scsscolor">scss</div>
                <div className={scssModule.color}>scssModule</div>

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
                    // eslint-disable-next-line react/jsx-closing-tag-location
                ></Echart> */}
            </div>
        );
    }
}

export default withRouter(TestEchart);
