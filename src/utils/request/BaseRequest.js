import axios from 'axios';
import qs from 'qs';
import createHistory from 'history/createHashHistory';
// import {removeSession} from 'Utilies/sessionUtilies';

const history = createHistory();
class BaseRequest {
    constructor(options) {
        this.dataMethodDefaults = {
            baseURL: '/portrait/',
            timeout: 60000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            transformRequest: [function (data, headers) {
                if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
                    return qs.stringify(data);
                } else {
                    return JSON.stringify(data);
                }
            }]
        };

        this.defaultRequestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            ...options
        };

        this.request = axios.create({...this.dataMethodDefaults, ...options});


        // 请求参数可以做一些操作
        this.request.interceptors.request.use((config) => {
            return config;
        }, (err) => {
            return Promise.reject(err);
        });

        // 请求响应拦截
        this.request.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return new Promise(resolve => {
                const useResponse = response.data;
                if (parseInt(useResponse.errorCode) === 401) {
                    resolve(useResponse);

                    // 这里先注释了吧
                    // removeSession('auth');
                    // history.push('/login');
                } else {
                    resolve(useResponse);
                }
            });
        }, function (error) {
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
                        errMsg = `连接出错!`;
                }
            }
            return new Promise((resolve => {
                resolve({
                    msg: errMsg,
                    success: false
                });
            }));
        });
    }

    get(url, data = {}) {
        return this.request.get(url, data);
    }

    post(url, data = undefined, config = {}) {
        return this.request.post(url, data, {...this.defaultRequestOptions, ...config});
    }

    upload(url, data = undefined, config = {}) {
        return this.request.post(url, data, {...this.defaultRequestOptions}, {
            ...config,
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }
}


export function createHttpClient(options) {
    return new BaseRequest(options);
}

export default BaseRequest;