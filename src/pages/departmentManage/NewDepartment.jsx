import React from 'react';
import {useHistory} from 'react-router-dom'
import 'moment/locale/zh-cn';
import {
    Form,
    Input,
    Button,
    message
} from 'antd';

import {newDepartment} from './../../api/department'
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
const NewDepartment = () => {
    const history = useHistory()
    const [form] = Form.useForm();
    const onFinish = (values) => {
        newDepartment(values).then(res=>{
            console.log(res);
            if(res.data.code===200){
                message.info("添加成功")
                history.push('/departmentManage/lookUpDepartments')
            }
            else if(res.data.code === 5001){
                message.info("该部门号已经存在")
            }
            else if(res.data.code === 5002){
                message.info('该部门名称已存在')
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
            name="departmentName"
            label="部门名称"
            rules={[
            {
                type: 'string',
                message: '部门名称格式错误!',
            },
            {
                required: true,
                message: '此项不能为空!',
            },
            {
                min:2,
                message:'姓名最少2字符'
            },
            {
                max:10,
                message:'姓名最多20字符'
            }
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="departmentCode"
            label="部门代号"
            rules={[
                {
                    type: 'string',
                    message: '部门名称格式错误!',
                },
                {
                    required: true,
                    message: '此项不能为空!',
                }
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                添加
            </Button>
        </Form.Item>
        </Form>
    );
};

export default NewDepartment