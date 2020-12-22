import React,{Suspense} from 'react'
import {connect} from 'react-redux'
import { Layout} from 'antd';
import {Spin} from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import SideMenu from './SideMenu'
import {changeCollapsed} from '../store/actionCreators'
import RouterView from '../router/routerView'
import RedirectRouterView from '../router/redirectRouterView'
const { Header,Content } = Layout;
const Main = (props)=> {
    const toggle = () => {
        props.changeCollapsed()
    };
    return (
        <Layout>
            <SideMenu />
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <Suspense fallback={<Spin />}>
                    <RouterView />
                    <RedirectRouterView />
                </Suspense>
                
            </Content>
            </Layout>
        </Layout>
    );
}
const mapStateToProps = (state)=>({
    collapsed:state.getIn(['sideMenuReducer','collapsed'])
})
const mapDispatchToProps = {changeCollapsed}

export default connect(mapStateToProps,mapDispatchToProps)(Main)