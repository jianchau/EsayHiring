import request from './../utils/request'

const addOcupation = (params)=>{
    return request.post('/ocupation/addOcupation',params)
}

const lookUpOcupation = ()=>{
    return request.get('/ocupation/lookUpOcupation')
}

const deleteOcupation = (params)=>{
    return request.get('/ocupation/deleteOcupation',{params})
}
export {addOcupation,lookUpOcupation,deleteOcupation}