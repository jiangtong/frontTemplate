import React, {Component} from 'react';
import Echart from '@components/beijing/Echarts';
import {withRouter} from 'react-router-dom';
// import highComponentFuc from '@pages/Teacher/commen/HighComponent';

//装饰器写法
// @highComponentFuc('teacherType4College')
class TestEchart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }

    componentDidUpdate(prevProps) {

    }

    componentDidMount() {
        // this.chartItem = echarts.init(document.getElementById('TestEchart'), 'echartsConfig');
        // let options = {
        //     title: {
        //         text: '全校授课教师分类数量以及占比',
        //         x: 'left',
        //         textStyle: {
        //             fontSize: 14,
        //             fontWeight: 'normal'
        //         }
        //     },
        //     tooltip: {
        //         trigger: 'item',
        //         formatter: '{a} <br/>{b} : {c} ({d}%)'
        //     },
        //     legend: {
        //         bottom: 0,
        //         left: 'center',
        //         data: this.props.data && this.props.data.map(item => {
        //             return item.name;
        //         })
        //     },
        //     series: [
        //         {
        //             name: '',
        //             type: 'pie',
        //             radius: '55%',
        //             center: ['50%', '50%'],
        //             data: this.props.data || [],
        //             itemStyle: {
        //                 emphasis: {
        //                     shadowBlur: 10,
        //                     shadowOffsetX: 0,
        //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //                 }
        //             }
        //         }
        //     ]
        // };
        //
        // this.chartItem.on('click', function (params) {
        //     this.props.onClickAction(params);
        // }, this);
        //
        // this.chartItem.setOption(options);
    }

    render() {
        console.log(this.props);
        return <Echart onClickAction={(params) => {
            if (this.props.onClickAction) this.props.onClickAction(params);
        }} data={{
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
                data: this.props.data && this.props.data.map(item => {
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
        }
        }></Echart>;
        // return <div id={'TestEchart'} style={this.props.style}></div>;
    }
}

//hoistNonReactStatics的用法绑定静态方法不丢失
// TestEchart.getName = () => {
//
// };

export default withRouter(TestEchart);