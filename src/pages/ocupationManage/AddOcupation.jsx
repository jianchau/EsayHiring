import React, { useState } from 'react'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker,
    // AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
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

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
        <Select
            style={{
            width: 70,
            }}
        >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
        </Form.Item>
    );
    // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
        // setAutoCompleteResult([]);
        } else {
        // setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    // const websiteOptions = autoCompleteResult.map((website) => ({
    //     label: website,
    //     value: website,
    // }));
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