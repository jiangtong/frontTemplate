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

    get(url, data = {}, config = {}) {
        return this.httpRequest.get(url, {...config, params: {...data}});
    }

    post(url, data = undefined, config = {}) {
        return this.httpRequest.post(url, data, {
            ...config,
            // headers: {
            //         'Content-Type': 'application/json'
            // },
        });
    }

    upload(url, data = undefined, config = {}) {
        return this.httpRequest.upload(url, data, {...config});
    }
}

let request = new BaseSubJsonRequest;

export {
    request
};

export default BaseSubJsonRequest;
