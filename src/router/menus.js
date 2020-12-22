import Icon, { createFromIconfontCN } from '@ant-design/icons'
import { lazy } from 'react';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2282467_469tve9doz9.js',
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
        path:'/departmentManage',
        key:'/departmentManage',
        title:'部门管理',
        icon:<IconFont type="icon-bumen" />,
        redirect:'/departmentManage/lookUpDepartments',
        children:[
            {
                path:'/departmentManage/lookUpDepartments',
                key:'/departmentManage/lookUpDepartments',
                title:'查看部门',
                icon:<IconFont type="icon-bumen" />,
                component:lazy(()=>import('../pages/departmentManage/LookUpDepartments'))
            },
            {
                path:'/departmentManage/addDepartment',
                key:'/departmentManage/addDepartment',
                title:'添加部门',
                icon:<IconFont type="icon-tianjia" />,
                component:lazy(()=>import('../pages/departmentManage/NewDepartment'))
            }
        ]
    },
    {
        path:'/ocupationManage',
        key:'/ocupationManage',
        title:'职位管理',
        icon:<IconFont type="icon-zhiwei" />,
        redirect:'/ocupationManage/lookUpOcupations',
        children:[
            {
                path:'/ocupationManage/lookUpOcupations',
                key:'/ocupationManage/lookUpOcupations',
                title:'查看职位',
                icon:<IconFont type="icon-zhiwei" />,
                component:lazy(()=>import('../pages/ocupationManage/LookUpOcupations'))
            },
            {
                path:'/ocupationManage/addOcupation',
                key:'/ocupationManage/addOcupation',
                title:'添加职位',
                icon:<IconFont type="icon-tianjia" />,
                
                component:lazy(()=>import('../pages/ocupationManage/AddOcupation'))
            }
        ]
    },
    {
        path:'/asocciateManage',
        key:'/asocciateManage',
        title:'员工管理',
        icon:<IconFont type="icon-yuangongguanli-" />,
        redirect:'/asocciateManage/lookUpAsocciate',
        children:[
            {
                path:'/asocciateManage/lookUpAsocciate',
                key:'/asocciateManage/lookUpAsocciate',
                title:'查看员工',
                icon:<IconFont type="icon-yuangongguanli-" />,
                component:lazy(()=>import('../pages/asocciateManage/LookUpAsocciate'))
            },
            {
                path:'/asocciateManage/addAsocciate',
                key:'/asocciateManage/addAsocciate',
                title:'添加员工',
                icon:<IconFont type="icon-icontd" />,
                component:lazy(()=>import('../pages/asocciateManage/AddAsocciate'))
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