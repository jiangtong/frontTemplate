export default class TeacherModel {
    constructor(obj = {}) {
        this.id = obj?.id;
        this.strategyName = obj?.strategyName;
        this.strategyTarget = obj?.strategyTarget;
        this.startDate = obj?.startDate;
        this.endDate = obj?.endDate;
        this.removeFlag = obj?.removeFlag;
        this.status = obj?.status;
        this.strategyTargetCollege = obj?.strategyTargetCollege;
    }

    removeFlagAction() {
        return this.removeFlag === 0 ? '失效' : '未失效';
    }
}

export class TeacherPageModel {
    constructor(obj = {}) {
        this.page = obj.pageNum;
        this.pageSize = obj.pageSize;
        this.rows = obj.rows?.map(item => {
            return new TeacherModel(item);
        });
    }
}

