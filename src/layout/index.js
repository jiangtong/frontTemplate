import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon, Layout, Menu, Button, message, Modal} from 'antd';
import {getSession} from '@utils/utils';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class BaseComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            menuList: []
        };
        this.openKeys = [];
        this.current = [];
    }

    goHome() {
        this.props.history.push('/fullHome');
    }

    renderMenu(data, path) {
        let that = this;
        return data.map(function (item) {
            if (item['menuList'] && item['menuList'].length > 0) {
                return (<SubMenu key={item['menuNo']}
                                 title={<span>{item['menuLevel'] === 'ONE' ? <Icon type="appstore"/> : ''}
                                     <span>{item['menuName']}</span></span>}>
                    {::this.renderMenu(item.menuList, path)}
                </SubMenu>);
            }

            if (path) {
                if (path.indexOf(item['menuUrl']) > -1) {
                    that.openKeys = [item['parentMenuNo']];
                    that.current = [item['menuNo']];
                }
            }
            return (<MenuItem key={item['menuNo']} onClick={() => {
                this.props.history.push(item['menuUrl']);
            }}>
                {item['menuLevel'] === 'ONE' ? <Icon type="desktop"/> : ''}
                <span>{item['menuName']}</span>
            </MenuItem>);
        }, this);
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        // this.breadCrumb = [];
        // this.renderBreadcrumb(this.state.menuList, this.props.history.location.pathname);
        // this.breadCrumb.reverse();

        let menus = JSON.parse(getSession('auth'));
        let {menuInfo} = menus;
        let {menuList} = menuInfo;
        let menu = this.renderMenu(menuList, this.props.history.location.pathname);

        return (<Layout>
            <Header className="header headerBC">
                <div>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </Button>
                    <img style={{height: 50}} src={require('@public/img/xtzy.png')}/>
                    {/*<img style={{*/}
                    {/*height: 30,*/}
                    {/*marginLeft: 15*/}
                    {/*}} src={require('./img/school_name.png')}/>*/}

                    <div style={{display: 'flex', float: 'right', color: 'white'}}>
                       <span style={{marginRight: '15px'}}>
                           <Icon type="user" style={{marginRight: 6}}/>{JSON.parse(getSession('auth'))['userName']}
                       </span>
                        <span style={{marginRight: '15px', cursor: 'pointer'}} onClick={this.goHome.bind(this)}><Icon
                            type="home" style={{marginRight: 6}}/>领导驾驶舱</span>
                    </div>
                </div>
            </Header>

            <Layout style={{minHeight: document.body.clientHeight - 64}}>
                <Sider width={this.state.collapsed ? 80 : 220}
                       trigger={null}
                       collapsible
                       collapsed={this.state.collapsed}
                       style={{
                           height: document.body.clientHeight - 64,
                           overflowY: 'auto'
                       }}
                >
                    <div style={{
                        minHeight: '100%',
                        paddingBottom: '50px',
                        background: '#283B5C',
                        color: '#FFF'
                    }}>
                        <Menu
                            className="left-menu"
                            mode="inline"
                            defaultSelectedKeys={this.current}
                            defaultOpenKeys={this.openKeys}
                        >
                            {menu}
                        </Menu>
                    </div>
                </Sider>
                <Layout style={{
                    height: document.body.clientHeight - 64,
                    overflowY: 'auto'
                }}>
                    <Content style={{minHeight: 'max-content'}} className={'aiContent'}>
                        {this.props.children}
                    </Content>
                    <Footer><p style={{
                        textAlign: 'center',
                        margin: 0,
                        fontSize: '12px'
                    }}>版权所有 © 三盟科技股份有限公司 2013- {new Date().getFullYear()} 保留一切权利</p></Footer>
                </Layout>
            </Layout>
        </Layout>);
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        chartsResizeFun: function (data) {
            // dispatch(chartsResize(data));
        }
    };
};

const enchce = compose(connect(mapStateToProps, mapDispatchToProps), withRouter);

export default enchce(BaseComponents);


