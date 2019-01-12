/**
 * Created by yangqian on 2017/11/20.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import store from '@useRedux/store';
import {Provider} from 'react-redux';
import Root from './router/router';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const history = createHistory();

// renderWithHotReload(FlexWithAntd);

class App extends React.Component {
    render() {
        return (
            <LocaleProvider locale={zh_CN}>
                <Provider store={store}>
                    <Router history={history}>
                        <Root/>
                    </Router>
                </Provider>
            </LocaleProvider>
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
