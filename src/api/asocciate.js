import request from './../utils/request'
const addAsocciate = (params) => {
    return request.post('/asocciate/addAsocciate',params)
}

const lookUpAsocciate = (params) => {
    return request.get('/asocciate/lookUpAsocciate',{params})
}

const deleteAsocciate = (params) => {
    return request.get('/asocciate/deleteAsocciate',{params})
}


export {addAsocciate,lookUpAsocciate,deleteAsocciate}