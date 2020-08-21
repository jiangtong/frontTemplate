/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
// import store from '@redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import { init } from '@rematch/core';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import thunk from 'redux-thunk';

import * as models from '@redux/models/model';
import dolphins from '@redux/originalRedux/dolphins';

import Root from './router/router';

import '@src/common/styles/index.scss';

const store = init({
    name: 'rematch',
    models,
    // 如果要使用原来的redux，需要引入下面的配置
    redux: {
        reducers: {
            dolphins
        },
        middlewares: [thunk]
    }
});

// console.log(store);

process.env.NODE_ENV === 'production' &&
    Sentry.init({
        release: 'baili_004',
        logErrors: true,
        dsn: 'http://58b585d90eb348b3ab5d4ab3d4f317ac@localhost:9000/2'
    });

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

// console.log(window.devicePixelRatio);
