import React from 'react'
import {Layout,Menu} from 'antd'
import {connect} from 'react-redux'
import {
    
  } from '@ant-design/icons';

const {Sider} = Layout
const {SubMenu} = Menu  
function SideMenu(props) {
    console.log(props);
    return (
        <Sider trigger={null} collapsible={true} collapsed={props.collapsed} >
            <div className="logo">
                <div>
                    <img src="logo.png" className="logoimg" alt=""/>
                    {props.collapsed?'':'EasyHiring'}
                </div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item >
                    首页
                </Menu.Item>
                <SubMenu title="人才信息">
                    <Menu.Item>查看人才信息</Menu.Item>
                </SubMenu>
                <SubMenu title="员工档案">
                    <Menu.Item>新建员工档案</Menu.Item>
                    <Menu.Item>查看员工档案</Menu.Item>
                    <Menu.Item>删除员工档案</Menu.Item>
                </SubMenu>
                <SubMenu title="评价员工">
                    <Menu.Item>评价员工</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}
const mapStateToProps = (state)=>{
    console.log(state);
    return{
    collapsed:state.getIn(['sideMenuReducer','collapsed'])

    }
}


export default connect(mapStateToProps,null)(SideMenu)
