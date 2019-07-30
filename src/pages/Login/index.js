import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Col, message} from 'antd';
import '@pages/Login/commen/assets/styles/login.less';
import Request from '@commenApi/Login';
import {setSession} from '@utils/utils';

import md5 from 'md5';


class LoginComponent extends Component {
    state = {
        userName: '',
        pwd: ''
    };

    /**
     * 处理输入
     */
    handelChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    simulatedLoad() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    'success': true,
                    'msg': '成功',
                    'obj': {
                        'token': 'e3b207402b6f4988b3690ff673812519',
                        'userNo': 'U1541852904075',
                        'userName': '马英华',
                        'relationNo': '0401004',
                        'relationType': 'HEADMASTER',
                        'studentLoginInfo': null,
                        'teacherLoginInfo': {
                            'teacherNo': '0401004',
                            'teacherName': '马英华',
                            'sex': '女',
                            'idCardNo': '',
                            'birthdate': '1978-04-06',
                            'politicsStatus': '',
                            'nation': '',
                            'nativePlace': '河北省邢台市南宫市',
                            'originPlace': '河北省邢台市南宫市',
                            'education': 'SS',
                            'educationStr': '硕士',
                            'degree': 'SS',
                            'degreeStr': '硕士',
                            'firstDeptName': '教辅机构',
                            'firstDeptCode': '1003',
                            'secondDeptName': '高职研究所（质量管理办公室）',
                            'secondDeptCode': '100302',
                            'professionalTitle': 'FJS',
                            'professionalTitleStr': '副教授',
                            'graduateSchool': '',
                            'graduateMajor': '',
                            'graduateDate': '',
                            'hiredate': '',
                            'phone': '',
                            'isDoubleProfessionally': 'NO',
                            'isDoubleProfessionallyStr': '否',
                            'isCoreTeacher': 'NO',
                            'isCoreTeacherStr': '否',
                            'isMajorLeader': 'NO',
                            'isMajorLeaderStr': '否',
                            'isCollegeCertificate': 'NO',
                            'isCollegeCertificateStr': '否',
                            'isJobCertificate': 'NO',
                            'isJobCertificateStr': '否',
                            'managerType': 'OTHERMANAGERS',
                            'managerTypeStr': '其他管理人员',
                            'isQuit': 'NO',
                            'isQuitStr': '否',
                            'pictureUrl': ''
                        },
                        'majorTeacher': null,
                        'menuInfo': {
                            'systemNo': 'WHHX',
                            'systemName': '五横画像',
                            'menuList': [{
                                'menuNo': 'WHHXF1710',
                                'menuName': '师资-校领导',
                                'menuLevel': 'ONE',
                                'menuUrl': '',
                                'parentMenuNo': '',
                                'menuList': [{
                                    'menuNo': 'WHHXF1710S1711',
                                    'menuName': 'demo1-组件加载',
                                    'menuLevel': 'TWO',
                                    'menuUrl': '/teachermanager/survey',
                                    'parentMenuNo': 'WHHXF1710',
                                    'parentMenuLevel': 'ONE',
                                    'menuList': [],
                                    'moduleList': []
                                }, {
                                    'menuNo': 'WHHXF1710S1712',
                                    'menuName': 'demo2-context',
                                    'menuLevel': 'TWO',
                                    'menuUrl': '/teachermanager/growth',
                                    'parentMenuNo': 'WHHXF1710',
                                    'parentMenuLevel': 'ONE',
                                    'menuList': [],
                                    'moduleList': []
                                }, {
                                    'menuNo': 'WHHXF1710S1713',
                                    'menuName': 'demo3-hooks',
                                    'menuLevel': 'TWO',
                                    'menuUrl': '/teachermanager/hooks',
                                    'parentMenuNo': 'WHHXF1710',
                                    'parentMenuLevel': 'ONE',
                                    'menuList': [],
                                    'moduleList': []
                                }]
                            }]
                        }
                    },
                    'errorCode': 0
                });
            }, 2000);
        });
    }

    /**
     * 登录
     */
    async goLogin() {
        if (!this.state.userName) {
            message.error('请输入账号！');
            return;
        }
        if (!this.state.pwd) {
            message.error('密码不能为空！');
            return;
        }
        let params = {
            username: this.state.userName,
            password: md5(this.state.pwd)
        };

        let res = await Request.login(params);
        res = await this.simulatedLoad();

        if (res.success) {
            setSession('auth', res.obj);
            if (res.obj.menuInfo) {
                let {menuList} = res.obj.menuInfo;
                if (menuList.length > 0) {
                    let menuItem = menuList[0];
                    if (menuItem.menuList.length > 0) {
                        this.props.history.replace(menuItem.menuList[0].menuUrl);
                    } else {
                        this.props.history.replace(menuItem.menuUrl);
                    }
                }
            }
        } else {
            message.error(res.msg || '登录失败');
        }
    }

    componentDidMount() {

    }

    render() {
        return (<Col className="login-container">
            <div className="main_container">
                <div className="main_title">
                    <img alt=""
                         src={require('@pages/Login/commen/assets/img/xtzy.png')}
                         style={{'width': '196px'}}
                    />
                    {/*<span>校园大数据应用平台</span>*/}
                </div>
                <div className="main_content">
                    <img alt=""
                         className="banner"
                         src={require('@pages/Login/commen/assets/img/background1.png')}
                    />
                    <img alt=""
                         className="bannericon"
                         src={require('@pages/Login/commen/assets/img/map.png')}
                    />
                    <div className="main_login">
                        <h2>教学诊改五横画像平台</h2>
                        <div className="login_user">
                            <img alt=""
                                 src={require('@pages/Login/commen/assets/img/dengluyeyonghuming1.png')}
                            />
                            <input name="userName"
                                   onChange={this.handelChange.bind(this)}
                                   placeholder="请输入登录帐号"
                                   type="text"
                                   value={this.state.userName}
                            />
                        </div>

                        <div className="login_pwd">
                            <img alt=""
                                 src={require('@pages/Login/commen/assets/img/dengluyemima1.png')}
                            />
                            <input maxLength="12"
                                   name="pwd"
                                   onChange={this.handelChange.bind(this)}
                                   type="password"
                                   value={this.state.pwd}
                            />
                        </div>
                        <span className="error_info"></span>

                        <button className="login_btn"
                                onClick={this.goLogin.bind(this)}
                        >登录
                        </button>
                    </div>
                </div>
                <div className="main_footer">
                    <div className="side_content_footer">
                        © 版权所有 邢台职业技术学院 技术支持 三盟科技股份有限公司
                    </div>
                </div>
            </div>
        </Col>);
    }
}

export default withRouter(LoginComponent);

