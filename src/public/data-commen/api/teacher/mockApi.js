import Mock from 'mockjs';


//当前预警配置列表
Mock.mock('/bigdata/alarmStrategy/enterprisePracticeInfoList', {
    'success': true,
    'msg': '成功',
    'obj': {
        'pageNum': 1,
        'pageSize': 10,
        'size': 4,
        'startRow': 1,
        'endRow': 4,
        'total': 4,
        'pages': 1,
        'rows': [
            {
                'id': '1',
                'strategyName': '测2试',
                'strategyTarget': '40040,40210',
                'startDate': '2018-08-08',
                'endDate': '2018-08-08',
                'removeFlag': 0,
                'status': '失效',
                'strategyTargetCollege': '电力工程学院、康尼学院'
            },
            {
                'id': '26d3e3123ac3456fa051f5fe606341ce',
                'strategyName': '测试哈哈哈1111111',
                'strategyTarget': '10002,10003',
                'startDate': '2018-02-02',
                'endDate': '2018-03-03',
                'removeFlag': 0,
                'status': '失效',
                'strategyTargetCollege': ''
            },
            {
                'id': '4460877565db4bda93f0b43ed0a73950',
                'strategyName': '测1试',
                'strategyTarget': '40040,40210',
                'startDate': '2016-06-06',
                'endDate': '2017-07-07',
                'removeFlag': 0,
                'status': '失效',
                'strategyTargetCollege': '电力工程学院、康尼学院'
            },
            {
                'id': 'a3b8d33bd6734887b6dbceada0abd808',
                'strategyName': '测试',
                'strategyTarget': '10002,10003',
                'startDate': '2018-02-02',
                'endDate': '2018-03-03',
                'removeFlag': 0,
                'status': '失效',
                'strategyTargetCollege': ''
            }
        ],
        'prePage': 0,
        'nextPage': 0,
        'isFirstPage': true,
        'isLastPage': true,
        'hasPreviousPage': false,
        'hasNextPage': false,
        'navigatePages': 8,
        'navigatepageNums': [
            1
        ],
        'navigateFirstPage': 1,
        'navigateLastPage': 1,
        'lastPage': 1,
        'firstPage': 1
    },
    'errorCode': null
});


//当前预警配置列表
Mock.mock('/bigdata/alarmStrategy/pageAlarmStrategy', {
    'success': true,
    'msg': '成功',
    'obj': {
        'pageNum': 1,
        'pageSize': 10,
        'size': 4,
        'startRow': 1,
        'endRow': 4,
        'total': 4,
        'pages': 1,
        'rows': [
            {
                'NAME': '1',
                'CODE': '测2试',
                'discipline_type': '40040,40210',
                'academy_name': '2018-08-08',
                'cooperation_company_count': '2018-08-08',
                'union_course_count': 0,
                'union_textbook_count': '失效',
                'plan_student_count': '电力工程学院、康尼学院'
            },
            {
                'id': '26d3e3123ac3456fa051f5fe606341ce',
                'strategyName': '测试哈哈哈1111111',
                'strategyTarget': '10002,10003',
                'startDate': '2018-02-02',
                'endDate': '2018-03-03',
                'removeFlag': 0,
                'status': '失效',
                'strategyTargetCollege': ''
            },
            {
                'id': '4460877565db4bda93f0b43ed0a73950',
                'strategyName': '测1试',
                'strategyTarget': '40040,40210',
                'startDate': '2016-06-06',
                'endDate': '2017-07-07',
                'removeFlag': 0,
                'status': '失效',
                'strategyTargetCollege': '电力工程学院、康尼学院'
            },
            {
                'id': 'a3b8d33bd6734887b6dbceada0abd808',
                'strategyName': '测试',
                'strategyTarget': '10002,10003',
                'startDate': '2018-02-02',
                'endDate': '2018-03-03',
                'removeFlag': 0,
                'status': '失效',
                'strategyTargetCollege': ''
            }
        ],
        'prePage': 0,
        'nextPage': 0,
        'isFirstPage': true,
        'isLastPage': true,
        'hasPreviousPage': false,
        'hasNextPage': false,
        'navigatePages': 8,
        'navigatepageNums': [
            1
        ],
        'navigateFirstPage': 1,
        'navigateLastPage': 1,
        'lastPage': 1,
        'firstPage': 1
    },
    'errorCode': null
});

//根据预警配置id获取详细预警配置策略信息
Mock.mock('/bigdata/alarmStrategy/findById', {
    'success': true,
    'msg': '成功',
    'obj': {
        'id': '26d3e3123ac3456fa051f5fe606341ce',
        'strategyName': '测试哈哈哈1111111',
        'strategyTarget': '40210,40141',
        'startDate': '2018-02-02',
        'endDate': '2018-03-03',
        'removeFlag': 1,
        'status': '失效',
        'schoolCollege': [
            {
                'collegeName': '电力工程学院',
                'collegeCode': '40040',
                'selectFlag': false
            },
            {
                'collegeName': '康尼学院',
                'collegeCode': '40210',
                'selectFlag': false
            },
            {
                'collegeName': '机械工程学院',
                'collegeCode': '40010',
                'selectFlag': false
            },
            {
                'collegeName': '计算机工程学院',
                'collegeCode': '40070',
                'selectFlag': false
            },
            {
                'collegeName': '自动化学院',
                'collegeCode': '40050',
                'selectFlag': false
            },
            {
                'collegeName': '外国语学院',
                'collegeCode': '40141',
                'selectFlag': false
            },
            {
                'collegeName': '材料工程学院',
                'collegeCode': '40020',
                'selectFlag': false
            },
            {
                'collegeName': '能源与动力工程学院',
                'collegeCode': '40030',
                'selectFlag': false
            },
            {
                'collegeName': '通信工程学院',
                'collegeCode': '40060',
                'selectFlag': false
            },
            {
                'collegeName': '经济与管理学院',
                'collegeCode': '40081',
                'selectFlag': false
            },
            {
                'collegeName': '人文与社会科学学院',
                'collegeCode': '40131',
                'selectFlag': false
            },
            {
                'collegeName': '艺术与设计学院',
                'collegeCode': '40100',
                'selectFlag': false
            },
            {
                'collegeName': '建筑工程学院',
                'collegeCode': '40090',
                'selectFlag': false
            },
            {
                'collegeName': '汽车与轨道交通学院',
                'collegeCode': '40111',
                'selectFlag': false
            },
            {
                'collegeName': '环境工程学院',
                'collegeCode': '40121',
                'selectFlag': false
            },
            {
                'collegeName': '工业中心',
                'collegeCode': '40171',
                'selectFlag': false
            },
            {
                'collegeName': '国际合作与交流处',
                'collegeCode': '10110',
                'selectFlag': false
            },
            {
                'collegeName': '机械工程学院(联合培养)',
                'collegeCode': 'L40010',
                'selectFlag': false
            },
            {
                'collegeName': '自动化学院(电气工程学院)',
                'collegeCode': 'L40050',
                'selectFlag': false
            },
            {
                'collegeName': '建筑工程学院(路桥与港航工程学联合培养)',
                'collegeCode': 'L40090',
                'selectFlag': false
            }
        ],
        'alarmStrategyType': [],
        'alarmPush': []
    },
    'errorCode': null
});

//获取所有学院列表
Mock.mock('/bigdata/school/listCollege', {
    'success': true,
    'msg': '成功',
    'obj': [
        {
            'id': null,
            'collegeName': '电力工程学院',
            'collegeCode': '40040',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '康尼学院',
            'collegeCode': '40210',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '机械工程学院',
            'collegeCode': '40010',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '计算机工程学院',
            'collegeCode': '40070',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '自动化学院',
            'collegeCode': '40050',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '外国语学院',
            'collegeCode': '40141',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '材料工程学院',
            'collegeCode': '40020',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '能源与动力工程学院',
            'collegeCode': '40030',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '通信工程学院',
            'collegeCode': '40060',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '经济与管理学院',
            'collegeCode': '40081',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '人文与社会科学学院',
            'collegeCode': '40131',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '艺术与设计学院',
            'collegeCode': '40100',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '建筑工程学院',
            'collegeCode': '40090',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '汽车与轨道交通学院',
            'collegeCode': '40111',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '环境工程学院',
            'collegeCode': '40121',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '工业中心',
            'collegeCode': '40171',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '国际合作与交流处',
            'collegeCode': '10110',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '机械工程学院(联合培养)',
            'collegeCode': 'L40010',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '自动化学院(电气工程学院)',
            'collegeCode': 'L40050',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        },
        {
            'id': null,
            'collegeName': '建筑工程学院(路桥与港航工程学联合培养)',
            'collegeCode': 'L40090',
            'collegePriority': null,
            'majorName': null,
            'majorCode': null,
            'majorPriority': null,
            'grade': null,
            'classCode': null,
            'className': null,
            'classPriority': null
        }
    ],
    'errorCode': null
});