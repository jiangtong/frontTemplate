import React from 'react';
import 'echarts';
import EchartsForReact from 'echarts-for-react';

class Echart extends React.Component {
    constructor(props) {
        super(props);
        this.echartRef = React.createRef();
        this.onEvents = {
            'click': this.onChartClick.bind(this)
        };
    }

    onChartClick(params) {
        if (this.props.onClickAction) this.props.onClickAction(params);
    }

    render() {
        const {style = {height: '300px'}, className = {}} = this.props;
        return <EchartsForReact className={className}
                                option={this.props.data}
            // showLoading
                                notMerge
                                onEvents={this.onEvents}
                                style={style}
                                theme={'echartsConfig'}
                                ref={this.echartRef}
        ></EchartsForReact>;
    }
}

export default Echart;