/** @format */

import axios from 'axios';
import qs from 'qs';
import { createHashHistory } from 'history';
import { clearLocal } from '@utils/utils';

const history = createHashHistory();

class BaseRequest {
    constructor(options) {
        this.dataMethodDefaults = {
            baseURL: '',
            timeout: 60000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            transformRequest: [
                (data, headers) => {
                    if (
                        headers['Content-Type'] ===
                        'application/x-www-form-urlencoded'
                    ) {
                        return qs.stringify(data);
                    }
                    if (headers['Content-Type'] === 'multipart/form-data') {
                        return data;
                    }
                    return JSON.stringify(data);
                }
            ]
        };

        this.defaultRequestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            ...options
        };

        this.request = axios.create({ ...this.dataMethodDefaults, ...options });

        // 请求参数可以做一些操作
        this.request.interceptors.request.use(
            config => {
                return config;
            },
            err => {
                return Promise.reject(err);
            }
        );

        // 请求响应拦截
        this.request.interceptors.response.use(
            response => {
                // 对响应数据做点什么
                return new Promise(resolve => {
                    const useResponse = response.data;
                    if (parseInt(useResponse.errorCode, 10) === 401) {
                        resolve(useResponse);
                        // 清楚缓存 这里先注释了吧
                        clearLocal();
                        const { pathname } = history.location;
                        history.replace({
                            pathname: '/login',
                            query: {
                                redirect: pathname
                            }
                        });
                    } else {
                        resolve(useResponse);
                    }
                });
            },
            error => {
                // 对响应错误做点什么
                let errMsg = '';
                if (error && error.response) {
                    switch (error.response.status) {
                        case 400:
                            errMsg = '请求错误';
                            break;
                        case 401:
                            errMsg = '未授权，请重新登录';
                            break;
                        case 403:
                            errMsg = '拒绝访问';
                            break;
                        case 404:
                            errMsg = '请求出错';
                            break;
                        case 405:
                            errMsg = '请求方式错误';
                            break;
                        case 408:
                            errMsg = '请求超时';
                            break;
                        case 500:
                            errMsg = '服务器错误';
                            break;
                        case 501:
                            errMsg = '服务未实现';
                            break;
                        case 502:
                            errMsg = '网络错误';
                            break;
                        case 503:
                            errMsg = '服务不可用';
                            break;
                        case 504:
                            errMsg = '网络超时(504)';
                            break;
                        case 505:
                            errMsg = 'HTTP版本不受支持';
                            break;
                        default:
                            errMsg = '连接出错!';
                    }
                }
                return new Promise(resolve => {
                    resolve({
                        msg: errMsg,
                        success: false
                    });
                });
            }
        );
    }

    get(url, data = {}) {
        return this.request.get(url, data);
    }

    post(url, data = undefined, config = {}) {
        return this.request.post(url, data, {
            ...this.defaultRequestOptions,
            ...config
        });
    }

    upload(url, data = undefined, config = {}) {
        return this.request.post(url, data, {
            ...config,
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }

    downLoad(url, data = undefined, config = {}) {
        return this.request
            .post(url, data, {
                ...this.defaultRequestOptions,
                ...config,
                responseType: 'blob'
            })
            .then(response => {
                const useData = response;
                if (!useData) {
                    return new Promise(resolve => {
                        resolve({ success: false, msg: '文件下载失败' });
                    });
                }
                const downUrl = window.URL.createObjectURL(new Blob([useData]));
                const link = document.createElement('a');
                link.style.display = 'none';
                link.href = downUrl;
                link.setAttribute('download', data.fileName);
                document.body.appendChild(link);
                link.click();
                return new Promise(resolve => {
                    resolve({ success: true, msg: '文件下载成功' });
                });
            });
    }
}

export function createHttpClient(options) {
    return new BaseRequest(options);
}

export default BaseRequest;
