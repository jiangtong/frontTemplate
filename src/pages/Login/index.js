import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, message } from 'antd';
import '@pages/Login/commen/assets/styles/login.less';
import Request from '@src/commen/data-commen/api/Login';
import { setSession } from '@utils/utils';
import img from '@pages/Login/commen/assets/img/xtzy.png';
import md5 from 'md5';
import img1 from '@pages/Login/commen/assets/img/background1.png';
import img2 from '@pages/Login/commen/assets/img/map.png';
import img3 from '@pages/Login/commen/assets/img/dengluyeyonghuming1.png';
import img4 from '@pages/Login/commen/assets/img/dengluyemima1.png';

class LoginComponent extends Component {
    state = {
        userName: '',
        pwd: ''
    };

    /**
     * 处理输入
     */
    handelChange(event) {
        const { name } = event.target;
        const { value } = event.target;
        this.setState({
            [name]: value
        });
    }

    simulatedLoad() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    success: true,
                    msg: '成功',
                    obj: {
                        token: 'e3b207402b6f4988b3690ff673812519',
                        userNo: 'U1541852904075',
                        userName: '马英华',
                        relationNo: '0401004',
                        relationType: 'HEADMASTER',
                        studentLoginInfo: null,
                        teacherLoginInfo: {
                            teacherNo: '0401004',
                            teacherName: '马英华',
                            sex: '女',
                            idCardNo: '',
                            birthdate: '1978-04-06',
                            politicsStatus: '',
                            nation: '',
                            nativePlace: '河北省邢台市南宫市',
                            originPlace: '河北省邢台市南宫市',
                            education: 'SS',
                            educationStr: '硕士',
                            degree: 'SS',
                            degreeStr: '硕士',
                            firstDeptName: '教辅机构',
                            firstDeptCode: '1003',
                            secondDeptName: '高职研究所（质量管理办公室）',
                            secondDeptCode: '100302',
                            professionalTitle: 'FJS',
                            professionalTitleStr: '副教授',
                            graduateSchool: '',
                            graduateMajor: '',
                            graduateDate: '',
                            hiredate: '',
                            phone: '',
                            isDoubleProfessionally: 'NO',
                            isDoubleProfessionallyStr: '否',
                            isCoreTeacher: 'NO',
                            isCoreTeacherStr: '否',
                            isMajorLeader: 'NO',
                            isMajorLeaderStr: '否',
                            isCollegeCertificate: 'NO',
                            isCollegeCertificateStr: '否',
                            isJobCertificate: 'NO',
                            isJobCertificateStr: '否',
                            managerType: 'OTHERMANAGERS',
                            managerTypeStr: '其他管理人员',
                            isQuit: 'NO',
                            isQuitStr: '否',
                            pictureUrl: ''
                        },
                        majorTeacher: null,
                        menuInfo: {
                            systemNo: 'WHHX',
                            systemName: '五横画像',
                            menuList: [
                                {
                                    menuNo: 'WHHXF1710',
                                    menuName: '师资-校领导',
                                    menuLevel: 'ONE',
                                    menuUrl: '',
                                    parentMenuNo: '',
                                    menuList: [
                                        {
                                            menuNo: 'WHHXF1710S1711',
                                            menuName: 'demo1-组件加载',
                                            menuLevel: 'TWO',
                                            menuUrl: '/teachermanager/survey',
                                            parentMenuNo: 'WHHXF1710',
                                            parentMenuLevel: 'ONE',
                                            menuList: [],
                                            moduleList: []
                                        },
                                        {
                                            menuNo: 'WHHXF1710S1712',
                                            menuName: 'demo2-context',
                                            menuLevel: 'TWO',
                                            menuUrl: '/teachermanager/growth',
                                            parentMenuNo: 'WHHXF1710',
                                            parentMenuLevel: 'ONE',
                                            menuList: [],
                                            moduleList: []
                                        },
                                        {
                                            menuNo: 'WHHXF1710S1713',
                                            menuName: 'demo3-hooks',
                                            menuLevel: 'TWO',
                                            menuUrl: '/teachermanager/hooks',
                                            parentMenuNo: 'WHHXF1710',
                                            parentMenuLevel: 'ONE',
                                            menuList: [],
                                            moduleList: []
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    errorCode: 0
                });
            }, 2000);
        });
    }

    /**
     * 登录
     */
    async goLogin() {
        const query = this.props.location?.query; // 获取到传递过来的query对象也就是登录失败的时候存的url地址
        const redirect = query?.redirect;

        if (!this.state.userName) {
            message.error('请输入账号！');
            return;
        }
        if (!this.state.pwd) {
            message.error('密码不能为空！');
            return;
        }
        const params = {
            username: this.state.userName,
            password: md5(this.state.pwd)
        };

        let res = await Request.login(params);
        res = await this.simulatedLoad();

        if (res.success) {
            setSession('auth', res.obj);
            if (res.obj.menuInfo) {
                const { menuList } = res.obj.menuInfo;
                if (menuList.length > 0) {
                    const menuItem = menuList[0];
                    if (menuItem.menuList.length > 0) {
                        this.props.history.replace(
                            redirect || menuItem.menuList[0].menuUrl
                        );
                    } else {
                        this.props.history.replace(
                            redirect || menuItem.menuUrl
                        );
                    }
                }
            }
        } else {
            message.error(res.msg || '登录失败');
        }
    }

    componentDidMount() {}

    render() {
        return (
            <Col className="login-container">
                <div className="main_container">
                    <div className="main_title">
                        <img alt="" src={img} style={{ width: '196px' }} />
                        {/* <span>校园大数据应用平台</span> */}
                    </div>
                    <div className="main_content">
                        <img alt="" className="banner" src={img1} />
                        <img alt="" className="bannericon" src={img2} />
                        <div className="main_login">
                            <h2>教学诊改五横画像平台</h2>
                            <div className="login_user">
                                <img alt="" src={img3} />
                                <input
                                    name="userName"
                                    onChange={this.handelChange.bind(this)}
                                    placeholder="请输入登录帐号"
                                    type="text"
                                    value={this.state.userName}
                                />
                            </div>

                            <div className="login_pwd">
                                <img alt="" src={img4} />
                                <input
                                    maxLength="12"
                                    name="pwd"
                                    onChange={this.handelChange.bind(this)}
                                    type="password"
                                    value={this.state.pwd}
                                />
                            </div>
                            <span className="error_info"></span>

                            <button
                                type="button"
                                className="login_btn"
                                onClick={this.goLogin.bind(this)}
                            >
                                登录
                            </button>
                        </div>
                    </div>
                    <div className="main_footer">
                        <div className="side_content_footer"></div>
                    </div>
                </div>
            </Col>
        );
    }
}

export default withRouter(LoginComponent);
