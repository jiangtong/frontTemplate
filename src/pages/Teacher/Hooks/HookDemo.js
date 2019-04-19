import React, {useState, useEffect} from 'react';
import {Table} from 'antd';
import {request} from './request';

const useRenderPage = (requestUrl) => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    useEffect(() => {
        request[requestUrl]({pageNum: page}).then(res => {
            setList(res.obj.rows);
            setPage(res.obj.page);
            setTotal(res.obj.total);
        });
    }, [page]);

    const pageChange = (pagination) => {
        setPage(pagination.current);
    };
    return [list, page, total, pageChange];
};

const renderTabel = (ListDom, requestUrl) => {
    const [list, page, total, pageChange] = useRenderPage(requestUrl);
    return (
        <React.Fragment>
            <ListDom list={list} onChange={pageChange} pagination={{total: total, current: page}}></ListDom>
            {/*可以在此处抽象分页搜索等等，所以在此多抽象了一层*/}
        </React.Fragment>
    );
};

const EnterprisePracticeInfoList = () => {
    const ListDom = ({list, pagination, onChange}) => {
        return <Table
            onChange={onChange}
            columns={[{
                title: '序号',
                dataIndex: 'index'
            }, {
                title: '专业名称',
                dataIndex: 'NAME'
            }, {
                title: '专业编号',
                dataIndex: 'CODE'
            }, {
                title: '专业大类',
                dataIndex: 'discipline_type'
            }, {
                title: '所属系部',
                dataIndex: 'academy_name'
            }, {
                title: '合作企业数量',
                dataIndex: 'cooperation_company_count'
            }, {
                title: '联合开发课程',
                dataIndex: 'union_course_count'
            }, {
                title: '联合开发教材数量',
                dataIndex: 'union_textbook_count'
            }, {
                title: '订单班培养人数',
                dataIndex: 'plan_student_count'
            }, {
                title: '现代学徒制培养人数',
                dataIndex: 'apprentice_student_count'
            }, {
                title: '接受顶岗实习人数',
                dataIndex: 'practice_student_count'
            }, {
                title: '捐赠设备数量',
                dataIndex: 'donation_device_count'
            }, {
                title: '专业教师人数',
                dataIndex: 'teacher_count'
            }]}
            dataSource={list}
            pagination={pagination}></Table>;
    };

    return renderTabel(ListDom, 'enterprisePracticeInfoList');
};

const TeacherTeachingList = () => {
    const ListDom = ({list, pagination, onChange}) => {
        return <Table
            columns={[{
                title: '序号',
                dataIndex: 'index'
            }, {
                title: '姓名',
                dataIndex: 'teacherName'
            }, {
                title: '工号',
                dataIndex: 'teacherCode'
            }, {
                title: '职称',
                dataIndex: 'professionTitle'
            }, {
                title: '部门',
                dataIndex: 'deptName'
            }, {
                title: '专业',
                dataIndex: 'majorName'
            }, {
                title: '课程数',
                dataIndex: 'courseNum'
            }, {
                title: '班级数',
                dataIndex: 'classNum'
            }, {
                title: '调代课数',
                dataIndex: 'substituteClassNum'
            }, {
                title: '每周课时',
                dataIndex: 'workload'
            }, {
                title: '参与专业建设',
                dataIndex: 'majorBuildNum'
            }, {
                title: '参与课程建设',
                dataIndex: 'courseBuildNum'
            }, {
                title: '参与基地建设',
                dataIndex: 'trainBuildNum'
            }]}
            onChange={onChange}
            pagination={pagination}
            dataSource={list}></Table>;
    };

    return renderTabel(ListDom, 'teacherTeachingList');
};

export {
    TeacherTeachingList,
    EnterprisePracticeInfoList
};