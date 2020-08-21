/** @format */

import BaseSubFormRequest from '@utils/request/BaseSubFormRequest';
// import TeacherModel, { TeacherPageModel } from '@commenModel/teacher';
// import { TeacherTwoPageModel } from '@commenModel/teacher/indexTwo';

class Request extends BaseSubFormRequest {
    //  师资概况——专业
    static enterprisePracticeInfoList(params) {
        return this.post(
            '/bigdata/alarmStrategy/enterprisePracticeInfoList',
            params
        );
    }

    //  师资概况——专业
    static pageAlarmStrategy(params) {
        return this.post('/bigdata/alarmStrategy/pageAlarmStrategy', params);
    }

    //  师资概况——专业
    static studentNetAddress(params) {
        return this.post('/bigdata/action/report/studentNetAddress', params);
        //     .then(
        //     res => {
        //         return new TeacherModel(res.success ? res?.obj : {});
        //     }
        // );
    }

    static studentNetFlow(params) {
        return this.post('/bigdata/action/report/studentNetFlow', params);
    }

    static studentNetFlowHour(params) {
        return this.post('/bigdata/action/report/studentNetFlowHour', params);
    }

    static studentNetDevice(params) {
        return this.post('/bigdata/action/report/studentNetDevice', params);
    }

    static diningPercent(params) {
        return this.post('/bigdata/action/report/diningPercent', params);
    }

    static studentMoveRecord(params) {
        return this.post('/bigdata/action/report/studentMoveRecord', params);
    }

    static studentAllSqrt(params) {
        return this.post('/bigdata/action/report/studentAllSqrt', params);
    }

    static studentGradeTwoSqrt(params) {
        return this.post('/bigdata/action/report/studentGradeTwoSqrt', params);
    }

    static moreData(params) {
        return this.post('/bigdata/action/report/diningPercent', params);
    }

    static studentGradeOneSqrt(params) {
        return this.post('/bigdata/action/report/studentGradeOneSqrt', params);
    }

    static studentMiddleStand(params) {
        return this.post('/bigdata/action/report/studentMiddleStand', params);
    }

    static studentGradeThreeSqrt(params) {
        return this.post(
            '/bigdata/action/report/studentGradeThreeSqrt',
            params
        );
    }

    static consumeStruct(params) {
        return this.post('/bigdata/action/report/consumeStruct', params);
    }
}

export default Request;
