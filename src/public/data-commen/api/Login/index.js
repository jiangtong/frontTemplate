import BaseSubFormRequest from '@utils/request/BaseSubFormRequest';

class Request extends BaseSubFormRequest {
    constructor(props) {
        super(props);
    }

    //  师资概况——专业
    static login(params) {
        return this.post('/user/login', params);
    };
}

export default Request;


