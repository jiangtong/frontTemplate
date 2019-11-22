import React from 'react';
import {asyncComponent} from '@utils/utils';
//师资概况
const Survey = asyncComponent(React.lazy(() => import('@pages/Teacher/Survey')));
const Context = asyncComponent(React.lazy(() => import('@pages/Teacher/Context')));
const childrenA = asyncComponent(React.lazy(() => import('@pages/Teacher/Context/childrenA')));
const childrenAA = asyncComponent(React.lazy(() => import('@pages/Teacher/Context/childrenAA')));
const childrenAAA = asyncComponent(React.lazy(() => import('@pages/Teacher/Context/childrenAAA')));
const Hooks = asyncComponent(React.lazy(() => import('@pages/Teacher/Hooks')));
const HookDetail = asyncComponent(React.lazy(() => import('@pages/Teacher/Hooks/HookDetail')));

export default [{
    path: '/',
    breadcrumb: 'Home'
}, {
    path: '/teachermanager',
    breadcrumb: '教师管理'
}, {
    path: '/teachermanager/survey',
    component: Survey,
    breadcrumb: '/教师管理/11'
}, {
    path: '/teachermanager/growth',
    component: Context,
    breadcrumb: '内容'
}, {
    path: '/teachermanager/growth/:id',
    component: childrenA,
    breadcrumb: ':id'
}, {
    path: '/teachermanager/growth/:id/哈哈',
    component: childrenAA,
    breadcrumb: '哈哈'
}, {
    path: '/teachermanager/growth/:id/哈哈/:name',
    component: childrenAAA,
    breadcrumb: ':name'
}, {
    path: '/teachermanager/hooks',
    component: Hooks,
    breadcrumb: '/教师管理/13'
}, {
    path: '/teachermanager/hooks/detail',
    component: HookDetail,
    breadcrumb: '/教师管理/14'
}];