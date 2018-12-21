import BaseSubFormRequest from '@utils/request/BaseSubFormRequest';

class Request extends BaseSubFormRequest {
    constructor(props) {
        super(props);
    }

    teacherType4College(params) {
        return this.post('/teacher/baseInfo/teacherType4College', params);
    }
}

export default Request;
