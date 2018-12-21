import React, {lazy, Suspense} from 'react';

import {Route} from 'react-router-dom';
import {asyncComponent} from '@utils/utils';
//师资概况
const Survey = asyncComponent(React.lazy(() => import('@pages/Teacher/Survey')));
const Context = asyncComponent(React.lazy(() => import('@pages/Teacher/Context')));

export default [
    <Route exact key={'Survey'} path="/teachermanager/survey" component={Survey}/>,
    <Route exact key={'Context'} path="/teachermanager/growth" component={Context}/>
];
