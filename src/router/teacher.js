import React from 'react';
import {asyncComponent} from '@utils/utils';
//师资概况
const Survey = asyncComponent(React.lazy(() => import('@pages/Teacher/Survey')));
const Context = asyncComponent(React.lazy(() => import('@pages/Teacher/Context')));
const Hooks = asyncComponent(React.lazy(() => import('@pages/Teacher/Hooks')));
const HookDetail = asyncComponent(React.lazy(() => import('@pages/Teacher/Hooks/HookDetail')));

export default [{
    path: '/teachermanager/survey',
    component: Survey
}, {
    path: '/teachermanager/growth',
    component: Context
}, {
    path: '/teachermanager/hooks',
    component: Hooks
}, {
    path: '/teachermanager/hooks/detail',
    component: HookDetail
}];

