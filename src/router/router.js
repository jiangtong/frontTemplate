/** @format */

import React from 'react';
import { getSession } from '@utils/utils';

import { Switch, Route, Redirect } from 'react-router-dom';
import BaseComponents from '@layout';
import useSuspense from '@useHooks/useSuspense';
// 师资管理
import teachermanager from './teacher';
// 登陆
const Model = () => import('@pages/Login');

const Root = () => {
    const Login = useSuspense(Model);

    // const [teachermanager, setTeachermanager] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTeachermanager([
    //             {
    //                 path: '/',
    //                 breadcrumb: 'Home'
    //             },
    //             {
    //                 path: '/teachermanager',
    //                 breadcrumb: '教师管理'
    //             },
    //             {
    //                 path: '/teachermanager/survey',
    //                 component: '/Teacher/Survey',
    //                 breadcrumb: '教师管理/11'
    //             },
    //             {
    //                 path: '/teachermanager/growth',
    //                 component: '/Teacher/Context',
    //                 breadcrumb: '教师管理/context'
    //             }
    //         ]);
    //     }, 5000);
    // });
    return (
        <Switch>
            <Route
                path="/login"
                render={() =>
                    getSession('auth') ? <Redirect to="/" /> : <Login />
                }
            />

            <Route
                path="/"
                render={() =>
                    getSession('auth') ? (
                        <BaseComponents>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        <Redirect to="/majormanager/professional" />
                                    )}
                                />
                                {[...teachermanager].map(item => {
                                    return (
                                        <Route
                                            key={item.path}
                                            exact
                                            path={item.path}
                                            component={
                                                item.component
                                                // &&
                                                // asyncComponent(
                                                //     React.lazy(() =>
                                                //         import(
                                                //             /* webpackChunkName: "[request]" */
                                                //             `../pages${item.component}`
                                                //         )
                                                //     )
                                                // )
                                            }
                                        />
                                    );
                                })}
                            </Switch>
                        </BaseComponents>
                    ) : (
                        <Route render={() => <Redirect to="/login" />} />
                    )
                }
            />
        </Switch>
    );
};

export default Root;
