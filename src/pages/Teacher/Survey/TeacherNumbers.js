/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import highComponentFuc from '@pages/Teacher/common/HighComponent';
// import TestEchart from '@pages/Teacher/Survey/TestEchart';
import '@pages/Teacher/common/assets/styles/index.less';
import { Row, Col } from 'antd';
import Echart from '@components/Echarts';
// import Request from '@src/common/data-commen/api/teacher/index';
// const HighFunUse = highComponentFuc('enterprisePracticeInfoList')(TestEchart);
const color = [
    '#1890ff',
    '#2FC25B',
    '#D6C11A',
    '#CC5C2A',
    '#872ACC',
    '#D6C11A'
];

// const color = [
//     'rgba(36, 56, 94)',
//     'rgba(42, 160, 207)',
//     // 'rgba(118, 106, 99)',
//     'rgba(192, 71, 161)',
//     'rgba(73,160, 174)',
//     'rgba(135,215, 226)'
// ];

class Teachervaluebers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: ''
        };
    }

    async pageAlarmStrategy() {
        // const res1 = await Request.pageAlarmStrategy();
        // console.log(res1);
    }

    async componentDidMount() {
        this.pageAlarmStrategy();
        // const res = await Request.enterprisePracticeInfoList();

        // console.log(res);
    }

    render() {
        const data = [
            {
                name: '不及格',
                value: '48648'
            },
            {
                name: '及格',
                value: '234541'
            },

            {
                name: '中',
                value: '1002489'
            },
            {
                name: '良',
                value: '897140'
            },
            {
                name: '优',
                value: '139799'
            }
        ];
        const data1 = [
            {
                name: '男',
                value: '5565216',
                total: '83.14'
            },
            {
                name: '女',
                value: '1128206.1',
                total: '16.86'
            }
        ];
        const data2 = [
            {
                name: '男',
                value: [
                    {
                        name: '土木工程学院',
                        value: '205429'
                    },
                    {
                        name: '材料科学与工程学院',
                        value: '117721'
                    },
                    {
                        name: '经济与管理学院',
                        value: '144697'
                    },
                    {
                        name: '市政与环境工程学院',
                        value: '160182'
                    },
                    {
                        name: '建筑与规划学院',
                        value: '83228'
                    },
                    {
                        name: '书法学院',
                        value: ''
                    },
                    {
                        name: '交通科学与工程学院',
                        value: '98775'
                    },
                    {
                        name: '艺术设计学院',
                        value: '81627'
                    },
                    {
                        name: '测绘与勘查工程学院',
                        value: '72795'
                    },
                    {
                        name: '电气与计算机学院',
                        value: '280547'
                    }
                ]
            },
            {
                name: '女',
                value: [
                    {
                        name: '土木工程学院',
                        value: '55790'
                    },
                    {
                        name: '材料科学与工程学院',
                        value: '42273'
                    },
                    {
                        name: '经济与管理学院',
                        value: '216273'
                    },
                    {
                        name: '市政与环境工程学院',
                        value: '103917'
                    },
                    {
                        name: '建筑与规划学院',
                        value: '135504'
                    },
                    {
                        name: '书法学院',
                        value: ''
                    },
                    {
                        name: '交通科学与工程学院',
                        value: '20994'
                    },
                    {
                        name: '艺术设计学院',
                        value: '202791'
                    },
                    {
                        name: '测绘与勘查工程学院',
                        value: '39520'
                    },
                    {
                        name: '电气与计算机学院',
                        value: '87429'
                    }
                ]
            }
        ];

        return (
            <Col span={24}>
                <Row className="bg-white chart-content">
                    <div className="clearfix" style={{ width: '100%' }}>
                        <Col span={24}>
                            <Echart
                                style={{ height: 540 }}
                                data={{
                                    tooltip: {
                                        trigger: 'axis',
                                        axisPointer: {
                                            lineStyle: {
                                                color: '#00FFC8'
                                            }
                                        },
                                        textStyle: {
                                            color: '#000',
                                            fontSize: 12
                                        }
                                    },
                                    color,
                                    // color: [
                                    // '#1890ff',
                                    // '#2FC25B',
                                    // '#13C2C2',
                                    // '#D6C11A',
                                    // '#CC5C2A',
                                    // '#872ACC',
                                    // '#5C9CF8',
                                    // '#5059CA',
                                    // '#EC7C72',
                                    // '#2a99c9',
                                    // '#61CAB2'
                                    // ],
                                    legend: {
                                        icon: 'rect',
                                        itemWidth: 12,
                                        itemHeight: 5,
                                        top: 0,
                                        data: data2.map(item => item.name)
                                    },
                                    grid: {
                                        left: '4%',
                                        right: '7%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        // name: '学生类别',
                                        type: 'category',
                                        boundaryGap: true,
                                        data:
                                            (data2[0] &&
                                                data2[0].value &&
                                                data2[0].value.map(item => {
                                                    return `${item.name}`;
                                                })) ||
                                            [],
                                        axisLabel: {
                                            rotate: 30
                                        }
                                    },
                                    yAxis: [
                                        // {
                                        //     name: '流量(万GB)',
                                        //     type: 'value'
                                        // }
                                        // {
                                        //     name: '时长(万小时)',
                                        //     type: 'value'
                                        // }

                                        {
                                            name: '',
                                            type: 'value'
                                        }
                                    ],
                                    // , {
                                    //     min: 0,
                                    //     type: 'value',
                                    //     name: '时长(万小时)',
                                    //     boundaryGap: [0.2, 0.2]
                                    // }
                                    series: data2.map(item => {
                                        return {
                                            label: {
                                                normal: {
                                                    show: true,
                                                    position: 'top'
                                                }
                                            },
                                            name: item.name,
                                            type: 'bar',
                                            // stack: '总数',
                                            // barWidth: '30%',
                                            // yAxisIndex:
                                            //     item.name === 'accutime'
                                            //         ? 1
                                            //         : 0,
                                            // type:
                                            //     item.name === 'accutime'
                                            //         ? 'line'
                                            //         : 'bar',
                                            data: item.value
                                        };
                                    })
                                }}
                            ></Echart>

                            <Echart
                                style={{ height: 520 }}
                                data={{
                                    color,
                                    tooltip: {
                                        axisPointer: {
                                            lineStyle: {
                                                color: '#00FFC8'
                                            }
                                        },
                                        textStyle: {
                                            color: '#000'
                                        }
                                    },
                                    grid: {
                                        left: '5%',
                                        right: '8%',
                                        containLabel: true
                                    },
                                    xAxis: [
                                        {
                                            type: 'category',
                                            data: data.map(item => {
                                                return `${item.name}`;
                                            })
                                            // axisLabel: {
                                            //     rotate: 40
                                            // }
                                            // name: '就医次数'
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            // name: '日均人次',
                                            // name: '消费金额(元)',
                                            // name: '人数',
                                            type: 'value'
                                        }
                                    ],
                                    series: [
                                        {
                                            name: '',
                                            type: 'bar',
                                            barWidth: '25%',
                                            data: data.map(item => {
                                                return {
                                                    name: item.name,
                                                    value: item.value
                                                    // itemStyle: {
                                                    //     color: color[index]
                                                    // }
                                                };
                                            }),
                                            label: {
                                                normal: {
                                                    show: true,
                                                    position: 'top'
                                                }
                                            }
                                            // markLine: {
                                            //     data: [
                                            //         {
                                            //             type: 'average',
                                            //             name: '平均值'
                                            //         }
                                            //     ]
                                            // }
                                        }
                                    ]
                                }}
                            ></Echart>

                            <Echart
                                style={{ height: 520 }}
                                data={{
                                    color,
                                    tooltip: {
                                        axisPointer: {
                                            lineStyle: {
                                                color: '#00FFC8'
                                            }
                                        },
                                        textStyle: {
                                            color: '#000'
                                        }
                                    },
                                    grid: {
                                        left: '5%',
                                        right: '5%',
                                        containLabel: true
                                    },
                                    xAxis: [
                                        {
                                            type: 'category',
                                            data: data.map(item => {
                                                return item.name;
                                            })
                                            // ,
                                            // axisLabel: {
                                            //     rotate: 40
                                            // }
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            name: '消费金额(元)',
                                            type: 'value'
                                        }
                                    ],
                                    series: [
                                        {
                                            name: '',
                                            type: 'bar',
                                            barWidth: '15%',
                                            data: data.map((item, index) => {
                                                return {
                                                    name: item.name,
                                                    value: item.value,
                                                    itemStyle: {
                                                        color: color[index]
                                                    }
                                                };
                                            }),
                                            label: {
                                                normal: {
                                                    show: true,
                                                    position: 'top'
                                                }
                                            }
                                            // markLine: {
                                            //     data: [
                                            //         {type: 'average', name: '平均值'}
                                            //     ]
                                            // }
                                        }
                                    ]
                                }}
                            ></Echart>

                            <Echart
                                style={{ height: 420, padding: '40px 0' }}
                                data={{
                                    title: {
                                        text: '',
                                        x: 'left',
                                        textStyle: {
                                            fontSize: 14,
                                            fontWeight: 'normal'
                                        }
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{a}<br/>{b} : {c} ({d}%)'
                                    },
                                    color,
                                    // color: [
                                    //     '#1890ff',
                                    //     '#2FC25B',
                                    //     '#1890FF',
                                    //     '#13C2C2',
                                    //     '#D6C11A',
                                    //     '#CC5C2A',
                                    //     '#872ACC',
                                    //     '#D6C11A'
                                    // ],
                                    legend: {
                                        bottom: 0,
                                        left: 'center',
                                        data:
                                            data1 &&
                                            data1.map(item => {
                                                return item.name;
                                            })
                                    },
                                    series: [
                                        {
                                            name: '',
                                            type: 'pie',
                                            radius: '50%',
                                            avoidLabelOverlap: true,
                                            center: ['50%', '50%'],
                                            data: data1 || [],

                                            // label: {
                                            //     normal: {
                                            //         position: 'inner',
                                            //         formatter:
                                            //             '{b}  \n {d}%  \n {c}万GB'
                                            //     }
                                            // },
                                            labelLine: {
                                                normal: {
                                                    show: true
                                                }
                                            },
                                            label: {
                                                formatter: '{b} {d}% {c}小时'
                                            },
                                            itemStyle: {
                                                emphasis: {
                                                    shadowBlur: 10,
                                                    shadowOffsetX: 0,
                                                    shadowColor:
                                                        'rgba(0, 0, 0, 0.5)'
                                                }
                                            }
                                        }
                                    ]
                                }}
                            ></Echart>
                            {/* <HighFunUse style={this.props.style} {...this.props}></HighFunUse> */}
                        </Col>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default withRouter(Teachervaluebers);
