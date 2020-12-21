import React from 'react'
import {Layout,Menu} from 'antd'
import {connect} from 'react-redux'

import menus from '../router/menu'

const {Sider} = Layout
const {SubMenu} = Menu  
function SideMenu(props) {
    const renderMenus = (menus)=>{
        return (
            <>
              {
                menus.map( item => {
                    if (item.children) { // 有多级菜单
                        return (
                            <SubMenu key={item.path} icon={item.icon} title={item.title}>
                                {
                                 renderMenus(item.children)
                                }
                            </SubMenu>
                        )
                    } 
                    else { 
                        return  item.meta && item.meta.hidden ? null : <Menu.Item key={item.path} icon={ item.icon }>
                        { item.title }
                        </Menu.Item>
                    }
                })
              }
            </>
        )
    }
    const handleChange = ()=>{
        console.log(112);
    }
    return (
        <Sider trigger={null} collapsible={true} collapsed={props.collapsed} >
            <div className="logo">
                <div>
                    <img src="logo.png" className="logoimg" alt=""/>
                    {props.collapsed?'':'EasyHiring'}
                </div>
            </div>
            <Menu 
                theme="dark"
                mode='inline'
                multiple={false}
                defaultSelectedKeys={['/home']}
                onOpenChange={handleChange}
            >
                {
                    renderMenus(menus)
                }
                
            </Menu>
        </Sider>
    )
}

const mapStateToProps = (state)=>{
    return{
        collapsed:state.getIn(['sideMenuReducer','collapsed'])
    }
}

export default connect(mapStateToProps,null)(SideMenu)
