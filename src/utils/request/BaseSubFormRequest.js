import {createHttpClient} from '@utils/request/BaseRequest';

/**
 * 可以使用createHttpClient重新更改请求头等信息
 * 也可以在get或者post的config添加特定的请求头信息
 */

class BaseSubFormRequest {
    constructor() {
        this.httpRequest = createHttpClient({});
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
        return this.httpRequest.post(url, data, {...config});
    }

    upload(url, data = undefined, config = {}) {
        return this.httpRequest.upload(url, data, {...config});
    }
}

export default BaseSubFormRequest;