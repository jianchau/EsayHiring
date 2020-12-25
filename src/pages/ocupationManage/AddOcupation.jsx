import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import 'moment/locale/zh-cn'
import {
    Form,
    Input,
    Button,
    Select,
    message
} from 'antd';

import {lookUpDepartment} from './../../api/department'
import {addOcupation} from './../../api/ocupation'

const {Option} = Select
const formItemLayout = {
    labelCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 8,
        },
    },
    wrapperCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 11,
        },
        sm: {
        span: 24,
        offset: 11,
        },
    },
};

const AddOcupation = () => {
    const history = useHistory()
    const [departmentData,setDepartmentData]= useState([])
    useEffect(()=>{
        lookUpDepartment().then(res=>{
            if(res.data.code===200){
                setDepartmentData(res.data.data)                
            }
        })
    },[])
    const departmentOptions = departmentData.map(department=><Option value={department.departmentName} key={department.departmentID}>{department.departmentName}</Option>)
    
    const [form] = Form.useForm();

    const onFinish = (values) => {
        addOcupation(values).then(res=>{
            if(res.data.code===200){
                message.info('添加职位成功')
                history.push('/ocupationManage/lookUpOcupations')
            }
        })
    };


    return (
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
        }}
        scrollToFirstError
        >
        <Form.Item
            name="ocupationName"
            label="职位名称"
            rules={[
            {
                required: true,
                message: '请填写职位名称!',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="inWhichDepartment"
            label="所属部门"
            initialValue="请选择职位所属部门"
            rules={[
            {
                required: true,
                message: '请选择职位所属部门!',
            },
            ]}
        >
            <Select>
                {departmentOptions}
            </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                添加
            </Button>
        </Form.Item>
        </Form>
    );
};

export default AddOcupation