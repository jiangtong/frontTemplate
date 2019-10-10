import React, {useState, useEffect} from 'react';
import {Table, message} from 'antd';
import {withRouter} from 'react-router-dom';
import Request from '@commenApi/teacher';

const useRenderPage = (requestUrl) => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        async function initData() {
            const res = await Request[requestUrl]({pageNum: page});
            setList(res.rows);
            setPage(res.page);
            setTotal(res.total);
        }

        initData();
    }, [page]);

    const pageChange = (pagination) => {
        setPage(pagination.current);
    };

    return [list, page, total, pageChange];
};

const renderTabel = (ListDom, requestUrl) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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

    return renderTabel(ListDom, 'pageAlarmStrategy');
};

const TeacherTeachingList = withRouter((props) => {
    const ListDom = ({list, pagination, onChange}) => {
        return <Table
            columns={[{
                title: '序号',
                dataIndex: 'index'
            }, {
                title: '姓名',
                dataIndex: 'strategyName'
            }, {
                title: '工号',
                dataIndex: 'strategyTarget'
            }, {
                title: '职称',
                dataIndex: 'startDate'
            }, {
                title: '部门',
                dataIndex: 'endDate'
            }, {
                title: '专业',
                dataIndex: 'removeFlag'
            }, {
                title: '课程数',
                dataIndex: 'status'
            }, {
                title: '班级数',
                dataIndex: 'strategyTargetCollege'
            }, {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span style={{color: '#1890ff'}} onClick={async () => {
                        props.history.push('/teachermanager/hooks/detail')
                        // const res = await Request.findById();
                        // message.success(res.strategyTargetCollege)
                    }}>
                       详情
                    </span>
                )
            }]}
            onChange={onChange}
            pagination={pagination}
            dataSource={list}></Table>;
    };

    return renderTabel(ListDom, 'enterprisePracticeInfoList');
});

export {
    TeacherTeachingList,
    EnterprisePracticeInfoList
};
