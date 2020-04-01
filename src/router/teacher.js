import React from 'react';
import { asyncComponent } from '@utils/utils';
// 师资概况
const Survey = asyncComponent(
    React.lazy(() => import('../pages/Teacher/Survey/index'))
);
const Context = asyncComponent(
    React.lazy(() => import('../pages/Teacher/Context/index'))
);
const Hooks = asyncComponent(
    React.lazy(() => import('../pages/Teacher/Hooks/index'))
);

// const childrenA = asyncComponent(
//     React.lazy(() => import('@pages/Teacher/Context/childrenA'))
// );

// const childrenAA = asyncComponent(
//     React.lazy(() => import('@pages/Teacher/Context/childrenAA'))
// );
// const childrenAAA = asyncComponent(
//     React.lazy(() => import('@pages/Teacher/Context/childrenAAA'))
// );
// const Hooks = asyncComponent(React.lazy(() => import('@pages/Teacher/Hooks')));
// const HookDetail = asyncComponent(
//     React.lazy(() => import('@pages/Teacher/Hooks/HookDetail'))
// );
// const Grid = asyncComponent(React.lazy(() => import('@pages/Teacher/Grid')));
// const IntersectionObserver = asyncComponent(
//     React.lazy(() => import('@pages/yangqian/IntersectionObserver'))
// );

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
        path: '/teachermanager/growth',
        component: Context,
        breadcrumb: '教师管理/context'
    },
    {
        path: '/teachermanager/hooks',
        component: Hooks,
        breadcrumb: '教师管理/context'
    }
];
