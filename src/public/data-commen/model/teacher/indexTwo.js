export default class TeacherTwoModel {
    constructor(obj = {}) {
        this.id = obj?.id;
        this.NAME = obj?.NAME;
        this.CODE = obj?.CODE;
        this.discipline_type = obj?.discipline_type;
        this.academy_name = obj?.academy_name;
        this.cooperation_company_count = obj?.cooperation_company_count;
        this.union_textbook_count = obj?.union_textbook_count;
        this.plan_student_count = obj?.plan_student_count;
    }
}

export class TeacherTwoPageModel {
    constructor(obj = {}) {
        this.page = obj.pageNum;
        this.pageSize = obj.pageSize;
        this.rows = obj.rows?.map(item => {
            return new TeacherTwoModel(item);
        });
    }
}

