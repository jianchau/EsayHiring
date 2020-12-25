import React from 'react'
import 'moment/locale/zh-cn'
import {
    Form,
    Input,
    Button,
    Select
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
            name="ocupation"
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
            name="department"
            label="所属部门"
            rules={[
            {
                required: true,
                message: '请选择职位所属部门!',
            },
            ]}
        >
            <Select
                defaultValue="请选择职位所属部门"
            
            />
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