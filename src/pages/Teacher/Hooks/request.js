import BaseSubFormRequest from '@utils/request/BaseSubFormRequest';

class Request extends BaseSubFormRequest {
    constructor(props) {
        super(props);
    }

    //  师资概况——专业
    enterprisePracticeInfoList(params) {
        return this.post('/major/Cooperation/schoolCompanyPage', params);
    };

    //  师资概况——专业
    teacherTeachingList(params) {
        return this.post('/teacher/teaching/teacherTeachingList', params);
    };
}

const request = new Request;

export {
    request
};
