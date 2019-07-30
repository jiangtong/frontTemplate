import {createHttpClient} from '@utils/request/BaseRequest';

/**
 * 可以使用createHttpClient重新更改请求头等信息
 * 也可以在get或者post的config添加特定的请求头信息
 */

class BaseSubJsonRequest {
    constructor() {
        this.httpRequest = createHttpClient({
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    /**
     * @url 接口地址
     * @data 数据
     * @config 具体的请求头的信息配置
     */

    static get(url, data = {}, config = {}) {
        return new this().httpRequest.get(url, {...config, params: {...data}});
    }

    static post(url, data = undefined, config = {}) {
        return new this().httpRequest.post(url, data, {
            ...config
            // headers: {
            //         'Content-Type': 'application/json'
            // },
        });
    }

    static upload(url, data = undefined, config = {}) {
        return new this().httpRequest.upload(url, data, {...config});
    }
}

export default BaseSubJsonRequest;
