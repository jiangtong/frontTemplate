import React, {Component} from 'react';
import {withRouter} from 'react-router';
import highComponentFuc from '@pages/Teacher/commen/HighComponent';
import TestEchart from '@pages/Teacher/Survey/TestEchart';
import '@pages/Teacher/commen/assets/styles/index.less';
import {Row, Col} from 'antd';
import Echart from '@components/beijing/Echarts';

const HighFunUse = highComponentFuc('enterprisePracticeInfoList')(TestEchart);
let color = ['#1890ff', '#2FC25B', '#D6C11A', '#CC5C2A', '#872ACC', '#D6C11A'];

class TeacherNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        let data = [
            {
                'name': '人文社会科学学院',
                'value': 19.402
            },
            {
                'name': '信息学院',
                'value': 34.267
            },
            {
                'name': '园林学院',
                'value': 68.086
            },
            {
                'name': '外语学院',
                'value': 14.422
            },
            {
                'name': '工学院',
                'value': 41.761
            },
            {
                'name': '材料科学与技术学院',
                'value': 34.987
            },
            {
                'name': '林学院',
                'value': 43.801
            },
            {
                'name': '水土保持学院',
                'value': 33.868
            },
            {
                'name': '环境科学与工程学院',
                'value': 19.222
            },
            {
                'name': '理学院',
                'value': 12.863
            },
            {
                'name': '生物科学与技术学院',
                'value': 31.781
            },
            {
                'name': '经济管理学院',
                'value': 68.36
            },
            {
                'name': '自然保护区学院',
                'value': 9.441
            },
            {
                'name': '艺术设计学院',
                'value': 21.411
            }
        ];
        let data1 = [
            {
                'name': '1-3元',
                'value': 473
            },
            {
                'name': '3-5元',
                'value': 1220
            },
            {
                'name': '5-7元',
                'value': 2125
            },
            {
                'name': '7-9元',
                'value': 1858
            },
            {
                'name': '9-10.42元',
                'value': 873
            }
        ];

        let data2 = [
            {
                'name': '女',
                'value': [
                    {
                        'name': '15:00-16:00',
                        'value': 11
                    },
                    {
                        'name': '16:00-17:00',
                        'value': 227
                    },
                    {
                        'name': '17:00-18:00',
                        'value': 242
                    },
                    {
                        'name': '18:00-19:00',
                        'value': 242
                    },
                    {
                        'name': '19:00-20:00',
                        'value': 302
                    },
                    {
                        'name': '20:00-21:00',
                        'value': 417
                    },
                    {
                        'name': '21:00-22:00',
                        'value': 550
                    },
                    {
                        'name': '22:00-23:00',
                        'value': 123
                    }
                ]
            },
            {
                'name': '男',
                'value': [
                    {
                        'name': '15:00-16:00',
                        'value': 3
                    },
                    {
                        'name': '16:00-17:00',
                        'value': 3
                    },
                    {
                        'name': '17:00-18:00',
                        'value': 19
                    },
                    {
                        'name': '18:00-19:00',
                        'value': 39
                    },
                    {
                        'name': '19:00-20:00',
                        'value': 49
                    },
                    {
                        'name': '20:00-21:00',
                        'value': 65
                    },
                    {
                        'name': '21:00-22:00',
                        'value': 91
                    },
                    {
                        'name': '22:00-23:00',
                        'value': 66
                    }
                ]
            }
        ];

        return (
            <Col span={24} className="enrolment-container">
                <Row className="bg-white chart-content">
                    <div className="clearfix">
                        <Col span={24}>
                            <Echart style={{height: 540}} data={{
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        lineStyle: {
                                            color: '#00FFC8'
                                        }
                                    },
                                    backgroundColor: 'rgba(255,255,255,0.70)',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 12
                                    }
                                },
                                color: ['#1890ff', '#2FC25B', '#13C2C2', '#D6C11A', '#CC5C2A', '#872ACC', '#D6C11A'],
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
                                    data: data2[0] && data2[0]['value'] && data2[0]['value'].map(item => {
                                        return item.name;
                                    }) || []
                                },
                                yAxis: {
                                    // name: '流量(万GB)',
                                    name: '每小时内人数',
                                    type: 'value'
                                }
                                // , {
                                //     min: 0,
                                //     type: 'value',
                                //     name: '时长(万小时)',
                                //     boundaryGap: [0.2, 0.2]
                                // }
                                ,

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
                            }}></Echart>


                            <Echart style={{height: 520}}
                                    data={{
                                        color: ['#1890ff', '#2FC25B', '#1890FF', '#13C2C2', '#D6C11A', '#CC5C2A', '#872ACC', '#D6C11A'],
                                        tooltip: {
                                            axisPointer: {
                                                lineStyle: {
                                                    color: '#00FFC8'
                                                }
                                            },
                                            backgroundColor: 'rgba(255,255,255,0.70)',
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
                                                // name: ''
                                                ,
                                                axisLabel: {
                                                    rotate: 40
                                                }
                                            }
                                        ],
                                        yAxis: [
                                            {
                                                // name: '流量(GB)',
                                                name: '消费金额(元)',
                                                type: 'value'
                                            }
                                        ],
                                        series: [{
                                            name: '',
                                            type: 'bar',
                                            barWidth: '25%',
                                            data: data.map((item, index) => {
                                                return {
                                                    name: item.name, value: item.value
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
                                        }]
                                    }}></Echart>


                            <Echart style={{height: 520}}
                                    data={{
                                        color: ['#1890ff', '#2FC25B', '#1890FF', '#13C2C2', '#D6C11A', '#CC5C2A', '#872ACC', '#D6C11A'],
                                        tooltip: {
                                            axisPointer: {
                                                lineStyle: {
                                                    color: '#00FFC8'
                                                }
                                            },
                                            backgroundColor: 'rgba(255,255,255,0.70)',
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
                                        series: [{
                                            name: '',
                                            type: 'bar',
                                            barWidth: '15%',
                                            data: data.map((item, index) => {
                                                return {
                                                    name: item.name, value: item.value, itemStyle: {
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
                                        }]
                                    }}></Echart>

                            <Echart style={{height: 420}} data={{
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
                                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                                },
                                legend: {
                                    bottom: 0,
                                    left: 'center',
                                    data: data1 && data1.map(item => {
                                        return item.name;
                                    })
                                },
                                series: [{
                                    name: '',
                                    type: 'pie',
                                    radius: '50%',
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
                                        formatter: '{b} {d}人'
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }]
                            }}></Echart>
                            {/*<HighFunUse style={this.props.style} {...this.props}></HighFunUse>*/}
                        </Col>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default withRouter(TeacherNumbers);

