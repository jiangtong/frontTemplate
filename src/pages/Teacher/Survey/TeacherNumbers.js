import React, { Component } from 'react'
import { withRouter } from 'react-router'
import highComponentFuc from '@pages/Teacher/commen/HighComponent'
import TestEchart from '@pages/Teacher/Survey/TestEchart'
import '@pages/Teacher/commen/assets/styles/index.less'
import { Row, Col } from 'antd'
import Echart from '@components/beijing/Echarts'
const HighFunUse = highComponentFuc('enterprisePracticeInfoList')(TestEchart)
let color = ['#1890ff', '#2FC25B', '#D6C11A', '#CC5C2A', '#872ACC', '#D6C11A']
import Request from '@commenApi/teacher/index'

class TeacherNumbers extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        let res = await Request.enterprisePracticeInfoList()

        console.log(res)
    }

    render() {
        let data = [
            {
                name: '优',
                value: 40535
            },
            {
                name: '良',
                value: 335150
            },
            {
                name: '中',
                value: 560745
            },
            {
                name: '及格',
                value: 87187
            },
            {
                name: '不及格',
                value: 3354
            }
        ]

        let data1 = [
            {
                name: '及格',
                value: '17.09'
            },
            { name: '良', value: '19.00' },
            { name: '不及格', value: '1.73' },
            { name: '中', value: '60.24' },
            { name: '优', value: '1.95' }
        ]
        let data2 = [
            {
                name: '优',
                value: [
                    {
                        name: '1',
                        value: '4688.5'
                    },
                    {
                        name: '2',
                        value: ''
                    },
                    {
                        name: '3',
                        value: ''
                    },
                    {
                        name: '4',
                        value: '1050.3'
                    },
                    {
                        name: '5',
                        value: '10709.0'
                    },
                    {
                        name: '6',
                        value: '10107.9'
                    },
                    {
                        name: '7',
                        value: '5226.5'
                    },
                    {
                        name: '8',
                        value: ''
                    },
                    {
                        name: '9',
                        value: '10843.3'
                    },
                    {
                        name: '10',
                        value: '12004.9'
                    },
                    {
                        name: '11',
                        value: '13088.3'
                    },
                    {
                        name: '12',
                        value: '14702.1'
                    }
                ]
            },
            {
                name: '良',
                value: [
                    {
                        name: '1',
                        value: '38482.6'
                    },
                    {
                        name: '2',
                        value: ''
                    },
                    {
                        name: '3',
                        value: ''
                    },
                    {
                        name: '4',
                        value: '11601.7'
                    },
                    {
                        name: '5',
                        value: '116303.0'
                    },
                    {
                        name: '6',
                        value: '116530.6'
                    },
                    {
                        name: '7',
                        value: '56963.7'
                    },
                    {
                        name: '8',
                        value: ''
                    },
                    {
                        name: '9',
                        value: '123651.5'
                    },
                    {
                        name: '10',
                        value: '118872.7'
                    },
                    {
                        name: '11',
                        value: '123694.9'
                    },
                    {
                        name: '12',
                        value: '140317.0'
                    }
                ]
            },
            {
                name: '中',
                value: [
                    {
                        name: '1',
                        value: '141979.4'
                    },
                    {
                        name: '2',
                        value: ''
                    },
                    {
                        name: '3',
                        value: ''
                    },
                    {
                        name: '4',
                        value: '42482.6'
                    },
                    {
                        name: '5',
                        value: '444349.3'
                    },
                    {
                        name: '6',
                        value: '436588.0'
                    },
                    {
                        name: '7',
                        value: '199717.5'
                    },
                    {
                        name: '8',
                        value: ''
                    },
                    {
                        name: '9',
                        value: '496034.8'
                    },
                    {
                        name: '10',
                        value: '489577.0'
                    },
                    {
                        name: '11',
                        value: '497845.8'
                    },
                    {
                        name: '12',
                        value: '544379.0'
                    }
                ]
            },
            {
                name: '及格',
                value: [
                    {
                        name: '1',
                        value: '46382.7'
                    },
                    {
                        name: '2',
                        value: ''
                    },
                    {
                        name: '3',
                        value: ''
                    },
                    {
                        name: '4',
                        value: '13609.6'
                    },
                    {
                        name: '5',
                        value: '146651.7'
                    },
                    {
                        name: '6',
                        value: '140473.5'
                    },
                    {
                        name: '7',
                        value: '62346.6'
                    },
                    {
                        name: '8',
                        value: ''
                    },
                    {
                        name: '9',
                        value: '153823.4'
                    },
                    {
                        name: '10',
                        value: '155934.6'
                    },
                    {
                        name: '11',
                        value: '153815.2'
                    },
                    {
                        name: '12',
                        value: '169148.8'
                    }
                ]
            },
            {
                name: '不及格',
                value: [
                    {
                        name: '1',
                        value: '4182.9'
                    },
                    {
                        name: '2',
                        value: ''
                    },
                    {
                        name: '3',
                        value: ''
                    },
                    {
                        name: '4',
                        value: '1413.0'
                    },
                    {
                        name: '5',
                        value: '16322.5'
                    },
                    {
                        name: '6',
                        value: '14417.3'
                    },
                    {
                        name: '7',
                        value: '5310.7'
                    },
                    {
                        name: '8',
                        value: ''
                    },
                    {
                        name: '9',
                        value: '15775.3'
                    },
                    {
                        name: '10',
                        value: '16270.6'
                    },
                    {
                        name: '11',
                        value: '15641.9'
                    },
                    {
                        name: '12',
                        value: '16364.6'
                    }
                ]
            }
        ]

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
                                            return item.name
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
                                                    return item.name + '月'
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
                                        }
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
                                                return item.name
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
                                            data: data.map((item, index) => {
                                                return {
                                                    name: item.name,
                                                    value: item.value
                                                    // itemStyle: {
                                                    //     color: color[index]
                                                    // }
                                                }
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
                                                return item.name
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
                                                }
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
                                                return item.name
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
        )
    }
}

export default withRouter(TeacherNumbers)
