import React,{useState,useEffect} from 'react'
import {Layout,Menu} from 'antd'
import {connect} from 'react-redux'
import {useHistory,useLocation} from 'react-router-dom'

import menus from '../router/menus'

const {Sider} = Layout
const {SubMenu} = Menu  
function SideMenu(props) {
    const history = useHistory()
    const location = useLocation()
    const {pathname} = location
    const openKey = pathname==='/notFound'?'':'/'+pathname.split('/')[1]
    const [selectedKeys,setSelectedKeys] = useState([pathname])
    const [openKeys,setOpenKeys] = useState([openKey])
    useEffect(()=>{
        setSelectedKeys([pathname])
    },[pathname])
    useEffect(()=>{
        setOpenKeys([openKey])
    },[openKey])
    
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
    const handleChange = (openKeys)=>{
        setOpenKeys([openKeys[1]])
        setSelectedKeys([pathname])
        history.push(openKeys[1])
    }
    const handleClick = (detail)=>{
        history.push(detail.keyPath[0])
        setSelectedKeys([detail.key])
    }
    return (
        <Sider trigger={null} collapsible={true} collapsed={props.collapsed} >
            <div className="logo">
                <div>
                    <img src="../../logo.png" className="logoimg" alt=""/>
                    {props.collapsed?'':'EasyHiring'}
                </div>
            </div>
            <Menu 
                theme="dark"
                mode='inline'
                multiple={false}
                onOpenChange={handleChange}
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                onClick={handleClick}
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
