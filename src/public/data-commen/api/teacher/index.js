import BaseSubFormRequest from '@utils/request/BaseSubFormRequest';
import './mockApi';
import TeacherModel, {TeacherPageModel} from '@commenModel/teacher';
import {TeacherTwoPageModel} from '@commenModel/teacher/indexTwo';

class Request extends BaseSubFormRequest {
    constructor(props) {
        super(props);
    }
    
    //  师资概况——专业
    static enterprisePracticeInfoList(params) {
        return this.post('/bigdata/alarmStrategy/enterprisePracticeInfoList', params).then((res) => {
            return new TeacherPageModel(res.success ? res?.obj : {});
        });
    };
    
    //  师资概况——专业
    static pageAlarmStrategy(params) {
        return this.post('/bigdata/alarmStrategy/pageAlarmStrategy', params).then((res) => {
            return new TeacherTwoPageModel(res.success ? res?.obj : {});
        });
    };
    
    //  师资概况——专业
    static findById(params) {
        return this.post('/bigdata/alarmStrategy/findById', params).then((res) => {
            return new TeacherModel(res.success ? res?.obj : {});
        });
    };
}

export default Request;
