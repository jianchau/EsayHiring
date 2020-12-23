import React from 'react'
import 'moment/locale/zh-cn'
import {
    Form,
    Input,
    Button,
} from 'antd';
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
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
            name="name"
            label="姓名"
            rules={[
            {
                type: 'string',
                message: '姓名格式错误!',
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
            name="gender"
            label="性别"
            rules={[
            {
                required: true,
                message: '请输入员工性别!',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="age"
            label="年龄"
            rules={[
            {
                required: true,
                message: '请输入员工年龄!',
            },
            {
                type:Number,
                message:'请输入一个合法数字'
            },
            {
                min:18,
                
            },
            {
                max:65
            }
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="ocupation"
            label="职位"
            rules={[
            {
                required: true,
                message: '请选择员工职位!',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="department"
            label="所属部门"
            rules={[
            {
                required: true,
                message: '请选择员工所属部门!',
            },
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

export default AddOcupation