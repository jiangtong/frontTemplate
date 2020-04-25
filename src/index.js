import React from 'react';
import ReactDOM from 'react-dom';
import store from '@useRedux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import echartsConfig from '@utils/echartsConfig';
import echarts from 'echarts/lib/echarts';
import Root from './router/router';
import '@src/commen/styles/index.less';
// import chinaMap from 'echarts/map/json/china.json';
// 配置echarts常用主题
echarts.registerTheme('echartsConfig', echartsConfig);
// echarts.registerMap('china', chinaMap);

const App = () => {
    return (
        <Provider locale={zh_CN}>
            <Provider store={store}>
                <Router>
                    <Root />
                </Router>
            </Provider>
        </Provider>
    );
};

const render = Component => {
    ReactDOM.render(<Component />, document.getElementById('app'));
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(() => {
        render(App);
    });
}

render(App);
