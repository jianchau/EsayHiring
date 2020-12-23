import React from 'react'
import {Route,Switch} from 'react-router-dom'

import menus from './menus'
import RedirectRouterView from '../router/redirectRouterView'
function RouterView() {
    let arr = []
    const renderRoutes = (menus)=>{
        menus.forEach(item=>{
            if(!item.children){
                if(!item.redirect){
                    arr.push(<Route path={item.path} component={item.component} key={item.key} exact />)
                }            
            }
            else{
                return (renderRoutes(item.children))   
            }
        })
    }
    
   renderRoutes(menus)
    return (
        <Switch>
            {arr}
            <RedirectRouterView />
        </Switch>
    )
}

export default RouterView
