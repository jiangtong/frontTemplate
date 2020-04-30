/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
// import * as Sentry from '@sentry/browser';
import store from '@useRedux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Root from './router/router';
import '@src/commen/styles/index.less';

// Sentry.init({
//     release: 'baili_003',
//     dsn:
//         'https://f9cacce74225410ea3bdcdabbdeb525e@o383900.ingest.sentry.io/5214399'
// });

const App = () => {
    return (
        <ConfigProvider locale={zh_CN}>
            <Provider store={store}>
                <Router>
                    <Root />
                </Router>
            </Provider>
        </ConfigProvider>
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

console.log(window.devicePixelRatio);
