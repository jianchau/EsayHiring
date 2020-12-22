import React from 'react'
import {Redirect,Switch} from 'react-router-dom'

import menus from './menus'

function RedirectRouterView() {
    let arr = []
    const renderRedirectRoutes = (menus) => {
        return menus.forEach(item=>{
            if(item.redirect){
                if(item.children){
                    arr.push (<Redirect path={item.path} exact to={item.redirect} key={item.key}/>)
                    renderRedirectRoutes(item.children)
                }
                else{
                    arr.push (<Redirect path={item.path} exact to={item.redirect} key={item.key}/>)
                } 
            }
        })
    }
    renderRedirectRoutes(menus)
    return (
        <Switch>
            {arr}
        </Switch>
    )
}

export default RedirectRouterView
