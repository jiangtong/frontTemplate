import React from 'react';
import ReactDOM from 'react-dom';
import store from '@useRedux/store';
import {Provider} from 'react-redux';
import Root from './router/router';
import {ConfigProvider} from 'antd';
import {HashRouter as Router} from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import echartsConfig from '@utils/echartsConfig';
import echarts from 'echarts';
import chinaMap from 'echarts/map/json/china.json';
// 配置echarts常用主题
echarts.registerTheme('echartsConfig', echartsConfig);
echarts.registerMap('china', chinaMap);

class App extends React.Component {
    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Provider store={store}>
                    <Router>
                        <Root/>
                    </Router>
                </Provider>
            </ConfigProvider>
        );
    }
}

const render = Component => {
    ReactDOM.render(<Component/>, document.getElementById('app'));
};


if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(() => {
        render(App);
    });
}

render(App);
