import BaseSubFormRequest from '@utils/request/BaseSubFormRequest';

class Request extends BaseSubFormRequest {
    constructor() {
        super();
    }

    //  师资概况——专业
    static login(params) {
        return this.post('/user/login', params);
    }
}

export default Request;
