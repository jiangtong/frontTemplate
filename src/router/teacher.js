/** @format */

import React from 'react';
import { asyncComponent } from '@utils/utils';
// 师资概况
const Survey = asyncComponent(
    React.lazy(() => import('../pages/Teacher/Survey/index'))
);

const Saga = asyncComponent(
    React.lazy(() => import('../pages/Teacher/Saga/index'))
);

const Rematch = asyncComponent(
    React.lazy(() => import('../pages/Teacher/Rematch/index'))
);

export default [
    {
        path: '/',
        breadcrumb: 'Home'
    },
    {
        path: '/teachermanager',
        breadcrumb: '教师管理'
    },
    {
        path: '/teachermanager/survey',
        component: Survey,
        breadcrumb: '教师管理/11'
    },
    {
        path: '/teachermanager/saga',
        component: Saga
    },
    {
        path: '/teachermanager/rematch',
        component: Rematch
    }
];
