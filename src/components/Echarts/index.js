/** @format */

import React from 'react';
import echarts from 'echarts/lib/echarts';
import EchartsForReact from 'echarts-for-react/lib/core';
import echartsConfig from '@utils/echartsConfig';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/markLine';
// import chinaMap from 'echarts/map/json/china.json';
// 配置echarts常用主题
// echarts.registerMap('china', chinaMap);
class Echart extends React.Component {
    constructor(props) {
        super(props);
        // 注册样式
        echarts.registerTheme('echartsConfig', echartsConfig);
        this.echartRef = React.createRef();
        this.onEvents = {
            click: this.onChartClick.bind(this)
        };
    }

    // componentDidMount() {}

    onChartClick(params) {
        if (this.props.onClickAction) this.props.onClickAction(params);
    }

    render() {
        const { style = { height: '300px' }, className = '' } = this.props;
        return (
            <EchartsForReact
                echarts={echarts}
                className={className}
                option={this.props.data}
                // showLoading
                notMerge
                onEvents={this.onEvents}
                style={style}
                theme="echartsConfig"
                ref={this.echartRef}
            />
        );
    }
}

export default Echart;
