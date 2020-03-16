import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import highComponentFuc from '@pages/Teacher/commen/HighComponent';
// import TestEchart from '@pages/Teacher/Survey/TestEchart';
import '@pages/Teacher/commen/assets/styles/index.less';
import { Row, Col } from 'antd';
import Echart from '@components/beijing/Echarts';
// const HighFunUse = highComponentFuc('enterprisePracticeInfoList')(TestEchart);
let color = ['#1890ff', '#2FC25B', '#D6C11A', '#CC5C2A', '#872ACC', '#D6C11A'];
import Request from '@commenApi/teacher/index';

class TeacherNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async pageAlarmStrategy() {
        let res1 = await Request.pageAlarmStrategy();
        console.log(res1);
    }

    async componentDidMount() {
        this.pageAlarmStrategy();
        let res = await Request.enterprisePracticeInfoList();

        console.log(res);
    }

    render() {
        let data = [
            {
                name: '优',
                value: 204800
            },
            {
                name: '良',
                value: 490663
            },

            {
                name: '中',
                value: 477524
            },

            {
                name: '及格',
                value: 289894
            },

            {
                name: '不及格',
                value: 156721
            }
        ];

        let data1 = [
            { name: '男', value: '86.24' },
            { name: '女', value: '13.75' }
        ];
        let data2 = [
            {
                name: '医疗支出',
                value: [
                    {
                        name: '及格',
                        value: 8627.66
                    },
                    {
                        name: '良',
                        value: 4016.44
                    },
                    {
                        name: '不及格',
                        value: 2446.43
                    },
                    {
                        name: '中',
                        value: 7751.35
                    },
                    {
                        name: '优',
                        value: 3146.37
                    }
                ]
            },
            {
                name: '商场购物',
                value: [
                    {
                        name: '及格',
                        value: 885175.0
                    },
                    {
                        name: '良',
                        value: 408502.5
                    },
                    {
                        name: '不及格',
                        value: 247385.94
                    },
                    {
                        name: '中',
                        value: 801005.48
                    },
                    {
                        name: '优',
                        value: 309296.7
                    }
                ]
            },
            {
                name: '学生上网缴费',
                value: [
                    {
                        name: '及格',
                        value: 532.0
                    },
                    {
                        name: '良',
                        value: 1166.0
                    },
                    {
                        name: '不及格',
                        value: 848.0
                    },
                    {
                        name: '中',
                        value: 1149.0
                    },
                    {
                        name: '优',
                        value: 216.0
                    }
                ]
            },
            {
                name: '教材费支出',
                value: [
                    {
                        name: '及格',
                        value: 226376.52
                    },
                    {
                        name: '良',
                        value: 244298.34
                    },
                    {
                        name: '不及格',
                        value: 67494.7
                    },
                    {
                        name: '中',
                        value: 195954.35
                    },
                    {
                        name: '优',
                        value: 108574.5
                    }
                ]
            },
            {
                name: '校医院体检费',
                value: [
                    {
                        name: '不及格',
                        value: 165.0
                    },
                    {
                        name: '中',
                        value: 220.0
                    },
                    {
                        name: '优',
                        value: 110.0
                    }
                ]
            },
            {
                name: '淋浴支出',
                value: [
                    {
                        name: '及格',
                        value: 116280.9
                    },
                    {
                        name: '良',
                        value: 95548.45
                    },
                    {
                        name: '不及格',
                        value: 36587.34
                    },
                    {
                        name: '中',
                        value: 138610.12
                    },
                    {
                        name: '优',
                        value: 53655.95
                    }
                ]
            },
            {
                name: '用电支出',
                value: [
                    {
                        name: '及格',
                        value: 80.0
                    },
                    {
                        name: '优',
                        value: 15.0
                    },
                    {
                        name: '良',
                        value: 10.0
                    },
                    {
                        name: '不及格',
                        value: 42.0
                    },
                    {
                        name: '中',
                        value: 47.0
                    }
                ]
            },
            {
                name: '补卡支出',
                value: [
                    {
                        name: '及格',
                        value: 540.0
                    },
                    {
                        name: '良',
                        value: 0.0
                    },
                    {
                        name: '不及格',
                        value: 420.0
                    },
                    {
                        name: '中',
                        value: 330.0
                    },
                    {
                        name: '优',
                        value: 60.0
                    }
                ]
            },
            {
                name: '购热水支出',
                value: [
                    {
                        name: '及格',
                        value: 28902.92
                    },
                    {
                        name: '良',
                        value: 21051.35
                    },
                    {
                        name: '不及格',
                        value: 9378.09
                    },
                    {
                        name: '中',
                        value: 33752.53
                    },
                    {
                        name: '优',
                        value: 11604.2
                    }
                ]
            },
            {
                name: '还款类',
                value: [
                    {
                        name: '及格',
                        value: 504090.58
                    },
                    {
                        name: '良',
                        value: 315779.37
                    },
                    {
                        name: '不及格',
                        value: 177752.59
                    },
                    {
                        name: '中',
                        value: 516581.94
                    },
                    {
                        name: '优',
                        value: 179312.8
                    }
                ]
            },
            {
                name: '餐费支出',
                value: [
                    {
                        name: '及格',
                        value: 3290352.27
                    },
                    {
                        name: '良',
                        value: 2034578.68
                    },
                    {
                        name: '不及格',
                        value: 928404.75
                    },
                    {
                        name: '中',
                        value: 3361249.75
                    },
                    {
                        name: '优',
                        value: 1346151.6
                    }
                ]
            }
        ];
        return (
            <Col span={24} className="enrolment-container">
                <Row className="bg-white chart-content">
                    <div className="clearfix">
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
                                        '#1890ff',
                                        '#2FC25B',
                                        '#13C2C2',
                                        '#D6C11A',
                                        '#CC5C2A',
                                        '#872ACC',
                                        '#5C9CF8',
                                        '#5059CA',
                                        '#EC7C72',
                                        '#2a99c9',
                                        '#61CAB2'
                                    ],
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
                                        right: '7%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        name: '',
                                        type: 'category',
                                        boundaryGap: true,
                                        data:
                                            (data2[0] &&
                                                data2[0]['value'] &&
                                                data2[0]['value'].map(item => {
                                                    return item.name;
                                                })) ||
                                            []
                                        // axisLabel: {
                                        //     rotate: 30
                                        // }
                                    },
                                    yAxis: {
                                        // name: '流量(万GB)',
                                        name: '',
                                        type: 'value'
                                    },
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
                                            // yAxisIndex: item.name === 'accutime' ? 1 : 0,
                                            // type: item.name === 'accutime' ? 'line' : 'bar',
                                            data: item.value
                                        };
                                    })
                                }}
                            ></Echart>

                            <Echart
                                style={{ height: 520 }}
                                data={{
                                    color: [
                                        '#1890ff',
                                        '#2FC25B',
                                        '#1890FF',
                                        '#13C2C2',
                                        '#D6C11A',
                                        '#CC5C2A',
                                        '#872ACC',
                                        '#D6C11A'
                                    ],
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
                                                return item.name;
                                            })
                                            // ,
                                            // axisLabel: {
                                            //     rotate: 40
                                            // },
                                            // name: ''
                                        }
                                    ],
                                    yAxis: [
                                        {
                                            // name: '流量(GB)',
                                            name: '',
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
                                            // ,
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
                                style={{ height: 520 }}
                                data={{
                                    color: [
                                        '#1890ff',
                                        '#2FC25B',
                                        '#1890FF',
                                        '#13C2C2',
                                        '#D6C11A',
                                        '#CC5C2A',
                                        '#872ACC',
                                        '#D6C11A'
                                    ],
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
                                            name: '就医次数',
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
                                    color: [
                                        '#1890ff',
                                        '#2FC25B',
                                        '#1890FF',
                                        '#13C2C2',
                                        '#D6C11A',
                                        '#CC5C2A',
                                        '#872ACC',
                                        '#D6C11A'
                                    ],
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
                                            //         formatter: '{b}  \n {d}%  \n {c}万小时'
                                            //     }
                                            // },
                                            labelLine: {
                                                normal: {
                                                    show: true
                                                }
                                            },
                                            label: {
                                                formatter: '{b} {d}%'
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
                            {/*<HighFunUse style={this.props.style} {...this.props}></HighFunUse>*/}
                        </Col>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default withRouter(TeacherNumbers);
