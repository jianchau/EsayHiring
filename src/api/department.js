// import qs from 'qs'
import request from './../utils/request'

const newDepartment = (params) =>{
    return request.post('/department/newDepartment',params)
}

const lookUpDepartment = () =>{
    return request.get('/department/lookUpDepartment')
}

const deleteDepartment = (params)=>{
    // console.log('params',params);
    return request.get('/department/deleteDepartment',{params})
}

export  {newDepartment,lookUpDepartment,deleteDepartment}