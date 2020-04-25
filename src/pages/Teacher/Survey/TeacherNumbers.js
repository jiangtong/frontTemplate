/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import highComponentFuc from '@pages/Teacher/commen/HighComponent';
// import TestEchart from '@pages/Teacher/Survey/TestEchart';
import '@pages/Teacher/commen/assets/styles/index.less';
import { Row, Col } from 'antd';
import Echart from '@components/Echarts';
import Request from '@src/commen/data-commen/api/teacher/index';
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
//     'rgba(36, 56, 94, 1)',
//     'rgba(42, 160, 207, 1)',
//     'rgba(137, 125, 119, 1)'
// ];

class Teachervaluebers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // res1: []
        };
    }

    async pageAlarmStrategy() {
        // const res1 = await Request.studentNetAddress();
        // this.setState({
        //     res1: res1.obj
        // });
    }

    async componentDidMount() {
        // this.consumeStruct();
        // this.moreData();
        // this.pageAlarmStrategy();
        // const res = await Request.enterprisePracticeInfoList();
        // console.log(res);
    }

    render() {
        const data = [
            {
                name: '1-3元',
                value: 36
            },
            {
                name: '3-5元',
                value: 63
            },
            {
                name: '5-7元',
                value: 91
            },
            {
                name: '7-9元',
                value: 141
            },
            {
                name: '9-10.42元',
                value: 74
            }
        ];
        const radarData = [
            {
                name: '2016',
                value: [
                    {
                        name: '餐饮',
                        value: '18131306.55'
                    },
                    {
                        name: '购物',
                        value: '1758304.40'
                    },
                    {
                        name: '淋浴',
                        value: '652190.05'
                    },
                    {
                        name: '热水',
                        value: '167983.83'
                    },
                    {
                        name: '医疗',
                        value: '7627.51'
                    },
                    {
                        name: '网络',
                        value: '4728.00'
                    },
                    {
                        name: '用电',
                        value: '172.00'
                    },
                    {
                        name: '其他',
                        value: '1504583.36'
                    }
                ]
            },
            {
                name: '2017',
                value: [
                    {
                        name: '餐饮',
                        value: '14565602.41'
                    },
                    {
                        name: '购物',
                        value: '1152830.36'
                    },
                    {
                        name: '淋浴',
                        value: '593851.73'
                    },
                    {
                        name: '热水',
                        value: '193906.35'
                    },
                    {
                        name: '医疗',
                        value: '5384.67'
                    },
                    {
                        name: '网络',
                        value: '5084.00'
                    },
                    {
                        name: '用电',
                        value: '171.00'
                    },
                    {
                        name: '其他',
                        value: '12528487.97'
                    }
                ]
            },
            {
                name: '2018',
                value: [
                    {
                        name: '餐饮',
                        value: '2707181.54'
                    },
                    {
                        name: '购物',
                        value: '1515242.84'
                    },
                    {
                        name: '淋浴',
                        value: '554498.77'
                    },
                    {
                        name: '热水',
                        value: '159096.52'
                    },
                    {
                        name: '医疗',
                        value: '2865.29'
                    },
                    {
                        name: '网络',
                        value: '6759.00'
                    },
                    {
                        name: '用电',
                        value: '293.00'
                    },
                    {
                        name: '其他',
                        value: '13019281.49'
                    }
                ]
            },
            {
                name: '2019',
                value: [
                    {
                        name: '餐饮',
                        value: '7169017.30'
                    },
                    {
                        name: '购物',
                        value: '2306910.36'
                    },
                    {
                        name: '淋浴',
                        value: '213932.50'
                    },
                    {
                        name: '热水',
                        value: '49818.39'
                    },
                    {
                        name: '医疗',
                        value: '20043.90'
                    },
                    {
                        name: '网络',
                        value: '156.00'
                    },
                    {
                        name: '用电',
                        value: '126.00'
                    },
                    {
                        name: '其他',
                        value: '777363.43'
                    }
                ]
            }
        ];

        const data2 = [
            {
                name: '学生人数',
                value: [
                    {
                        name: 1,
                        value: 2536
                    },
                    {
                        name: 2,
                        value: 572
                    },
                    {
                        name: 3,
                        value: 5235
                    },
                    {
                        name: 4,
                        value: 3788
                    },
                    {
                        name: 5,
                        value: 3917
                    },
                    {
                        name: 6,
                        value: 4111
                    },
                    {
                        name: 7,
                        value: 1580
                    },
                    {
                        name: 8,
                        value: 75
                    },
                    {
                        name: 9,
                        value: 3266
                    },
                    {
                        name: 10,
                        value: 3012
                    },
                    {
                        name: '11',
                        value: 14998
                    },
                    {
                        name: '12',
                        value: 14111
                    }
                ]
            },
            {
                name: '教工人数',
                value: [
                    {
                        name: 1,
                        value: 2098
                    },
                    {
                        name: 2,
                        value: 620
                    },
                    {
                        name: 3,
                        value: 3984
                    },
                    {
                        name: 4,
                        value: 4119
                    },
                    {
                        name: 5,
                        value: 3715
                    },
                    {
                        name: 6,
                        value: 3412
                    },
                    {
                        name: 7,
                        value: 1997
                    },
                    {
                        name: 8,
                        value: 163
                    },
                    {
                        name: 9,
                        value: 5241
                    },
                    {
                        name: 10,
                        value: 4278
                    },
                    {
                        name: '11',
                        value: 4552
                    },
                    {
                        name: 4113,
                        value: '0'
                    }
                ]
            }
        ];
        return (
            <Col span={24} className="enrolment-container">
                <Row className="bg-white chart-content">
                    <div className="clearfix">
                        {/* <Five></Five> */}

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
                                    color: [
                                        // 'red',
                                        'rgba(36, 56, 94, 1)',
                                        'rgba(42, 160, 207, 1)',
                                        'rgba(208, 93, 175, 1)'
                                    ],
                                    // color: [
                                    //     '#1890ff',
                                    //     '#2FC25B',
                                    //     '#13C2C2',
                                    //     '#D6C11A',
                                    //     '#CC5C2A',
                                    //     '#872ACC',
                                    //     '#5C9CF8',
                                    //     '#5059CA',
                                    //     '#EC7C72',
                                    //     '#2a99c9',
                                    //     '#61CAB2'
                                    // ],
                                    legend: {
                                        icon: 'rect',
                                        itemWidth: 12,
                                        itemHeight: 5,
                                        top: 0,
                                        data: data2.map(item => {
                                            return item.name;
                                        })
                                    },
                                    grid: {
                                        left: '4%',
                                        right: '10%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        // name: '就餐人数',
                                        type: 'category',
                                        boundaryGap: true,
                                        data:
                                            (data2[0] &&
                                                data2[0].value &&
                                                data2[0].value.map(item => {
                                                    return `${item.name}月`;
                                                })) ||
                                            []
                                        // axisLabel: {
                                        //     rotate: 30
                                        // }
                                    },
                                    yAxis: [
                                        {
                                            type: 'value',
                                            name: '就餐人数'
                                            // name: '时长(万小时)'
                                            // name: '流量(万GB)'
                                        }
                                        // {
                                        //     type: 'value',
                                        //     name: '时长(万小时)'
                                        // }
                                    ],
                                    // yAxis: {
                                    //     // name: '流量(万GB)',
                                    //     // name: '每小时内人数',

                                    //     type: 'value'
                                    // },
                                    // , {
                                    //     min: 0,
                                    //     type: 'value',
                                    // name: '时长(万小时)',
                                    //     boundaryGap: [0.2, 0.2]
                                    // }
                                    series: data2.map(item => {
                                        return {
                                            label: {
                                                normal: {
                                                    // formatter(value) {
                                                    //     return value.data.value
                                                    //         .split('.')
                                                    //         .join(':');
                                                    // },
                                                    show: true,
                                                    position: 'top'
                                                }
                                            },
                                            // step: 'start',

                                            name: item.name,
                                            // type:
                                            //     item.name === '上网流量'
                                            //         ? 'bar'
                                            //         : 'line',

                                            type: 'bar',
                                            // stack: '总数',
                                            // barWidth: '30%',
                                            // yAxisIndex:
                                            //     item.name === '上网流量'
                                            //         ? 0
                                            //         : 1,
                                            // type: item.name === 'accuvalue' ? 'line' : 'bar',
                                            data: item.value
                                        };
                                    })
                                }}
                            />
                            <Echart
                                style={{ height: 520 }}
                                data={{
                                    color: [
                                        'rgba(36, 56, 94, 1)',
                                        'rgba(42, 160, 207, 1)',
                                        'rgba(208, 93, 175, 1)'
                                    ],
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
                                            // name: '就医次数',

                                            type: 'category',
                                            data: data.map(item => {
                                                return item.name;
                                            }),
                                            axisLabel: {
                                                rotate: 40
                                            }
                                            // name: '早餐缺失率'

                                            // name: '学生'
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            name: '人数',

                                            // min: 0.35,
                                            // max: 0.4,

                                            type: 'value'

                                            // axisLabel: {
                                            //     formatter: '{value} '
                                            // }
                                        }
                                    ],
                                    series: [
                                        {
                                            name: '',
                                            type: 'bar',
                                            // barWidth: '25%',
                                            data: data.map(item => {
                                                return {
                                                    name: item.name,
                                                    value: item.value
                                                    // itemStyle: {
                                                    //     color: color[index]
                                                    // }
                                                };
                                            }),
                                            // markLine: {
                                            //     show: true,
                                            //     lineStyle: {
                                            //         color: 'red'
                                            //     },
                                            //     data: [
                                            //         {
                                            //             type: 'average',
                                            //             name: '平均值'
                                            //         }
                                            //     ]
                                            // },
                                            label: {
                                                normal: {
                                                    // formatter(value) {
                                                    //     return value.data.value
                                                    //         .split('.')
                                                    //         .join(':')
                                                    //         .padEnd(4, '0');
                                                    // },
                                                    show: true,
                                                    position: 'top'
                                                }
                                            }
                                            // ,
                                            // markLine: {
                                            //     data: [
                                            //         {type: 'average', name: '平均值'}
                                            //     ]
                                            // }
                                        }
                                    ]
                                }}
                            />

                            <Echart
                                style={{ height: 520 }}
                                data={{
                                    color: [
                                        'rgba(36, 56, 94, 1)',
                                        'rgba(42, 160, 207, 1)',
                                        'rgba(208, 93, 175, 1)'
                                    ],
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
                                    tooltip: {
                                        axisPointer: {
                                            lineStyle: {
                                                color: '#000'
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
                            />

                            {/* 饼图 */}
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
                                    color: [
                                        'rgba(36, 56, 94, 1)',
                                        'rgba(42, 160, 207, 1)',
                                        'rgba(208, 93, 175, 1)',
                                        'rgba(85, 125, 185, 1)',
                                        'rgba(87, 175, 188, 1)'
                                    ],
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
                                            data &&
                                            data.map(item => {
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
                                            data: data || [],

                                            label: {
                                                normal: {
                                                    // formatter: value => {
                                                    //     return (
                                                    //         `${value.data.name}   ${value.data.value}%` +
                                                    //         `   ${value.data.count}元`
                                                    //     );
                                                    // }
                                                    // position: 'inner',
                                                    formatter: '{b}  {c}人'
                                                    // formatter:
                                                    //     '{b}  {d}%  {c}万元'
                                                }
                                            },
                                            labelLine: {
                                                normal: {
                                                    show: true
                                                }
                                            },
                                            // label: {
                                            //     formatter: '{b} {d}%'
                                            // },
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
                            />

                            <Echart
                                style={{ height: 540 }}
                                data={{
                                    tooltip: {},
                                    legend: {
                                        data: radarData.map(item => {
                                            return item.name;
                                        })
                                    },
                                    color: [
                                        'rgba(36, 56, 94, 1)',
                                        'rgba(42, 160, 207, 1)',
                                        'rgba(208, 93, 175, 1)'
                                    ],
                                    // color: [
                                    //     '#1890ff',
                                    //     '#2FC25B',
                                    //     '#13C2C2',
                                    //     '#D6C11A',
                                    //     '#CC5C2A',
                                    //     '#872ACC',
                                    //     '#5C9CF8',
                                    //     '#5059CA',
                                    //     '#EC7C72',
                                    //     '#2a99c9',
                                    //     '#61CAB2'
                                    // ],
                                    radar: {
                                        // shape: 'circle',
                                        name: {
                                            textStyle: {
                                                color: '#000'
                                            }
                                        },
                                        indicator:
                                            (radarData[0] &&
                                                radarData[0].value &&
                                                radarData[0].value.map(item => {
                                                    return {
                                                        name: item.name
                                                    };
                                                })) ||
                                            []
                                    },
                                    series: [
                                        {
                                            name: '',
                                            type: 'radar',
                                            // areaStyle: {normal: {}},
                                            data: radarData.map(item => {
                                                return {
                                                    // label: {
                                                    //     normal: {
                                                    //         // formatter(value) {
                                                    //         //     return value.data.value
                                                    //         //         .split('.')
                                                    //         //         .join(':');
                                                    //         // },
                                                    //         show: true,
                                                    //         position: 'inside'
                                                    //     }
                                                    // },
                                                    name: item.name,
                                                    // type: 'bar',
                                                    // stack: '总数',
                                                    // barWidth: '30%',
                                                    // yAxisIndex: item.name === 'accuvalue' ? 1 : 0,
                                                    // type: item.name === 'accuvalue' ? 'line' : 'bar',
                                                    value: item.value.map(
                                                        subItem => {
                                                            return subItem.value;
                                                        }
                                                    )
                                                };
                                            })
                                        }
                                    ]
                                }}
                            />

                            {/* <HighFunUse style={this.props.style} {...this.props}></HighFunUse> */}
                        </Col>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default withRouter(Teachervaluebers);
