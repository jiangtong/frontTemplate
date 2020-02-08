import React, { Component } from 'react';
import { withRouter } from 'react-router';
import highComponentFuc from '@pages/Teacher/commen/HighComponent';
import TestEchart from '@pages/Teacher/Survey/TestEchart';
import '@pages/Teacher/commen/assets/styles/index.less';
import { Row, Col } from 'antd';
import Echart from '@components/beijing/Echarts';
const HighFunUse = highComponentFuc('enterprisePracticeInfoList')(TestEchart);
let color = ['#1890ff', '#2FC25B', '#D6C11A', '#CC5C2A', '#872ACC', '#D6C11A'];

class TeacherNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(document.referrer);
    }

    render() {
        let data = [
            {
                name: '特优',
                value: 40535
            },
            {
                name: '优',
                value: 335150
            },

            {
                name: '良',
                value: 560745
            },

            {
                name: '差',
                value: 87187
            },

            {
                name: '特差',
                value: 3354
            }
        ];

        let data1 = [
            {
                name: '非贫困',
                value: '83.71'
            },
            {
                name: '贫困',
                value: '16.29'
            }
        ];

        let data2 = [
            {
                name: '特优',
                value: [
                    {
                        name: '2019',
                        value: '210'
                    },
                    {
                        name: '2020',
                        value: '954'
                    }
                ]
            },
            {
                name: '优',
                value: [
                    {
                        name: '2019',
                        value: '2046'
                    },
                    {
                        name: '2020',
                        value: '2032'
                    }
                ]
            },
            {
                name: '良',
                value: [
                    {
                        name: '2019',
                        value: '6487'
                    },
                    {
                        name: '2020',
                        value: '3448'
                    }
                ]
            },
            {
                name: '差',
                value: [
                    {
                        name: '2019',
                        value: '1840'
                    },
                    {
                        name: '2020',
                        value: '3162'
                    }
                ]
            },
            {
                name: '特差',
                value: [
                    {
                        name: '2019',
                        value: '186'
                    },
                    {
                        name: '2020',
                        value: '1427'
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
                                        '#D6C11A'
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
                                        name: '人',
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
                                            type: 'line',
                                            // stack: '总数',
                                            // barWidth: '20%',
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
                                            name: '借书次数',
                                            type: 'value'
                                        }
                                    ],
                                    series: [
                                        {
                                            name: '',
                                            type: 'bar',
                                            barWidth: '25%',
                                            data: data.map((item, index) => {
                                                return {
                                                    name: item.name,
                                                    value: item.value
                                                    // , itemStyle: {
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
