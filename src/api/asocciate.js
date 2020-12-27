import reqest from './../utils/request'
import request from './../utils/request'
const addAsocciate = (params)=>{
    return request.post('/asocciate/addAsocciate',params)
}

const lookUpAsocciate = (params)=>{
    return request.get('/asocciate/lookUpAsocciate',{params})
}


export {addAsocciate,lookUpAsocciate}