/** @format */

import React, { Suspense } from 'react';

/**
 * 存储
 * @param {*} key :键名
 * @param {*} value ：所存入的值
 */
export const setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * 读取
 * @param {*} key ：键名
 */
export const getLocal = key => {
    if (!key) {
        return undefined;
    }
    return localStorage.getItem(key);
};

// 删除本地临时存储
export const removeLocal = key => localStorage.removeItem(key);

// clear清除所有的key/value
export const clearLocal = () => localStorage.clear();

/**
 * 存储
 * @param {*} key :键名
 * @param {*} value ：所存入的值
 */
export const setSession = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};
/**
 * 读取
 * @param {*} key ：键名
 */
export const getSession = key => {
    if (!key) {
        return undefined;
    }
    return sessionStorage.getItem(key);
};

// 去除字符串中所有的空格， 返回值：没有空格的字符串
export const Trim = (str, is_global) => {
    let result;
    result = str.replace(/(^\s+)|(\s+$)/g, '');
    if (is_global.toLowerCase() === 'g') {
        result = result.replace(/\s/g, '');
    }
    return result;
};

// 判断是否空字符
export const notNull = str =>
    str !== undefined && str !== null && str !== '' && str.trim() !== '';

// JS操作cookies方法!
// 写cookies
export const setCookie = (name, value) => {
    const Days = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${escape(
        value
    )};expires=${exp.toGMTString()}; path=/`;
};

// 读取cookies
export const getCookie = name => {
    let arr;
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    if (arr === document.cookie.match(reg)) return unescape(arr[2]);

    return null;
};

// 删除cookies
export const delCookie = name => {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = getCookie(name);
    if (cval !== null)
        document.cookie = `${name}=${cval};expires=${exp.toGMTString()}; path=/`;
};

// 获取地址栏参数
export const getParam = () => {
    const res = {};
    window.location.search
        .substr(1)
        .split('&')
        .forEach(i => {
            const j = i.split('=');
            res[j[0]] = j[1];
        });
    return res;
};

// 判断是否为手机号
export const isPoneAvailable = phone => {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
        return false;
    }
    return true;
};

// 判断是否为电话号码
export const isTelAvailable = tel => {
    const myreg = /^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (!myreg.test(tel)) {
        return false;
    }
    return true;
};

// 判断是否为邮箱地址
export const isEmailAvailable = email => {
    const myreg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!myreg.test(email)) {
        return false;
    }
    return true;
};

// 判断是否为数字
export const isNum = num => {
    const myreg = new RegExp('^[0-9]*$');
    if (!myreg.test(num)) {
        return false;
    }
    return true;
};

// 判断是否是对象
export const isObj = obj => {
    return (
        obj &&
        typeof obj === 'object' &&
        Object.prototype.toString.call(obj).toLowerCase() === '[object Object]'
    );
};

// 判断是否是数组
export const isArray = obj => {
    return obj && typeof obj === 'object' && obj.constructor === Array;
};

// 判断对象是否相等
export const isObjectValueEqual = (objA, objB) => {
    return JSON.stringify(objA) === JSON.stringify(objB);
};

// 数组数字倒序是否正确
export const ArrayNumSortTure = (arr, order = false) => {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (!order) {
                if (arr[i] && arr[j] && i < j && arr[i] <= arr[j]) {
                    flag = true;
                }
            } else if (arr[i] && arr[j] && i < j && arr[i] >= arr[j]) {
                flag = true;
            }
        }
        // if(arr[i] && arr[i+1] && arr[i]<=arr[i+1]){
        //     flag = true;
        // }
    }
    return !flag;
};

export const GetStrActualLength = str => {
    // /<summary>获得字符串实际长度，中文2，英文1</summary>
    // /<param name="str">要获得长度的字符串</param>
    let realLength = 0;
    const len = str.length;
    let charCode = -1;
    for (let i = 0; i < len; i += 1) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

// 解析hash地址栏
export const getHashParam = () => {
    const res = {};
    const startIndex = window.location.hash.indexOf('?') + 1;
    window.location.hash
        .substr(startIndex)
        .split('&')
        .forEach(i => {
            const j = i.split('=');
            res[j[0]] = j[1];
        });
    return res;
};

/**
 * 扁平化数据结构 => 树形结构数据结构
 * @param items 原始数据
 * @param id 最外层父节点id
 * @param parentId 依据遍历的key
 * @returns {*}
 */
export const nest = (items, id = -1, link = 'parentId') =>
    items
        .filter(item => item[link] === id)
        .map(item => ({
            ...item,
            children: this.nest(items, item.id)
        }));

// 按需异步加载组件
export const asyncComponent = (Component, fallback = null) => {
    return props => {
        return (
            <Suspense fallback={fallback}>
                <Component {...props} />
            </Suspense>
        );
    };
};
