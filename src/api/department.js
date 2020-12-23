import request from './../utils/request'

const newDepartment = (params) =>{
    console.log(115);
    return request.post('/department/newDepartment',params)
}

export  {newDepartment}