import { createFromIconfontCN } from '@ant-design/icons'
import { lazy } from 'react';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2282467_2d1xynktf5s.js',
  });


const menus = [
    {
        path:'/',
        key:'/',
        redirect:'/home',
        meta:{
            hidden:true
        }
    },
    {
        path:'/home',
        key:'/home',
        title:'首页',
        icon:<IconFont type="icon-shouye" />,
        component:lazy(()=>import('../pages/Home')),
    },
    {
        path:'/information',
        key:'/information',
        title:'人才信息',
        icon:<IconFont type="icon-gonggongrencaiku" />,
        redirect:'/information/lookupInformation',
        children:[
            {
                path:'/information/lookupInformation',
                key:'/information/lookupInformation',
                title:'查看人才信息',
                icon:<IconFont type="icon-gonggongrencaiku" />,
                component:lazy(()=>import('../pages/information/LookUpInformation')) 
            }
        ] 
    },
    {
        path:'/file',
        key:'/file',
        title:'员工档案',
        icon:<IconFont type="icon-ziyuan" />,
        redirect:'/file/lookUpFile',
        children:[
            {
                path:'/file/lookUpFile',
                key:'/file/lookUpFile',
                title:'查看员工档案',
                icon:<IconFont type="icon-icon-"/>,
                component:lazy(()=>import('../pages/employeeFile/LookupFile')),
            },
            {
                path:'/file/newEmployeeFile',
                key:'/file/newEmployeeFile',
                title:'新增员工档案',
                icon:<IconFont type="icon-tianjiaqiyedangan"/>,
                component:lazy(()=>import('../pages/employeeFile/NewEmployeeFile')),
            },
            {
                path:'/file/deleteEmployeeFile',
                key:'/file/deleteEmployeeFile',
                title:'删除员工档案',
                icon:<IconFont type="icon-shanchu"/>,
                component:lazy(()=>import('../pages/employeeFile/DeleteEmployeeFile')),
            },
        ]
    },
    {
        path:'/evalueate',
        key:'/evalueate',
        title:'评价员工',
        icon:<IconFont type="icon-pingjia"/>,
        redirect:'/evalueate/evalueateEmployee',
        children:[
            {
                path:'/evalueate/evalueateEmployee',
                key:'/evalueate/evalueateEmployee',
                title:'评价员工',
                icon:<IconFont type="icon-pingjia"/>,
                component:lazy(()=>import('../pages/evalueate/EvalueateEmployee'))
            }
        ]
    },
    {
        path:'/setting',
        key:'setting',
        title:'设置',
        icon:<IconFont type="icon-shezhi-"/>,
        component:lazy(()=>import('../pages/Setting'))
    }
]

export default menus