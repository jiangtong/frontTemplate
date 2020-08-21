/** @format */

const Mock = require('mockjs');

function MockApi(app) {
    app.post(
        '/bigdata/alarmStrategy/enterprisePracticeInfoList',
        (req, res) => {
            res.json(
                Mock.mock({
                    success: true,
                    msg: '成功',
                    obj: {
                        total: 200,
                        'rows|10': [
                            {
                                'index|+1': 1,
                                courseName: 'courseName',
                                teacher: '测试',
                                'code|1000-500000': 500000,
                                'range|1-20': 20,
                                avg_score: 'avg_score',
                                max_sxore: 'max_sxore',
                                min_sxore: 'min_sxore',
                                all_avg_sxore: 'all_avg_sxore',
                                all_max_sxore: 'all_max_sxore',
                                all_min_sxore: 'all_min_sxore',
                                warnType: '学分预警',
                                status: 1
                            }
                        ]
                    },
                    errorCode: null
                })
            );
        }
    );

    app.post('/bigdata/alarmStrategy/pageAlarmStrategy', (req, res) => {
        res.json(
            Mock.mock({
                success: true,
                msg: '成功',
                obj: {
                    total: 100,
                    'rows|10': [
                        {
                            'index|+1': 1,
                            courseName: 'courseName',
                            teacher: 'mockmock',
                            'code|1000-500000': 500000,
                            'range|1-20': 20,
                            avg_score: 'avg_score',
                            max_sxore: 'max_sxore',
                            min_sxore: 'min_sxore',
                            all_avg_sxore: 'all_avg_sxore',
                            all_max_sxore: 'all_max_sxore',
                            all_min_sxore: 'all_min_sxore',
                            warnType: '学分预警',
                            status: 1
                        }
                    ]
                },
                errorCode: null
            })
        );
    });
}

module.exports = MockApi;
