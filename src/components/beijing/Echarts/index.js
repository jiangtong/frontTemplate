import React from 'react';
import echarts from 'echarts/lib/echarts';
import EchartsForReact from 'echarts-for-react/lib/core';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';

class Echart extends React.Component {
    constructor(props) {
        super(props);
        this.echartRef = React.createRef();
        this.onEvents = {
            click: this.onChartClick.bind(this)
        };
    }

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
