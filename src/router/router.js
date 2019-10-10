import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import BaseComponents from '@layout';
import {getSession, asyncComponent} from '@utils/utils';
// 登陆
const Login = asyncComponent(React.lazy(() => import('@pages/Login')));

// const Login = asyncComponent(() => import('@pages/Login'), '');

// 师资管理
import teachermanager from './teacher';

const Root = () => (
    <Switch>
        <Route path="/login" render={props => (getSession('auth') ? <Redirect to="/"/> : <Login/>)}
        />

        <Route
            path="/"
            render={props => (getSession('auth') ? <BaseComponents>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/majormanager/professional"/>}/>
                    {
                        [...teachermanager].map(item => {
                            return <Route key={item.path} exact path={item.path}
                                          component={item.component}></Route>;
                        })
                    }
                </Switch>
            </BaseComponents> : <Route render={() => <Redirect to="/login"/>}/>)}
        />
    </Switch>
);

export default Root;