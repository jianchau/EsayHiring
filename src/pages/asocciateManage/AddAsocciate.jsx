import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import 'moment/locale/zh-cn'
import {
    Form,
    Input,
    Select,
    Button,
    Upload,
    message,
    DatePicker
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import {lookUpDepartment} from './../../api/department'
import {lookUpOcupation} from './../../api/ocupation'
import {addAsocciate} from './../../api/asocciate'

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

const AddAsocciate = () => {
    const history = useHistory()
    const [form] = Form.useForm();
    const [loading,setLoading] = useState(false)
    const [ocupationDisabled,setOcupationDisabled] = useState(true)
    const [departmentData,setDepartmentData] = useState([])
    const [ocupationData,setOcupationData] = useState([])
    const [imageUrl,setImageUrl] = useState('')
    useEffect(()=>{
        lookUpDepartment().then(res=>{
            if(res.data.code===200){
                setDepartmentData(res.data.data)
            }
        })
    },[])
    
    const departmentOptions = departmentData.map(department=><Option value = {department.departmentName} key={department.departmentID}>{department.departmentName}</Option>)
    const ocupationOptions = ocupationData.map(ocupation=><Option value={ocupation.ocupationName} key={ocupation.ocuapationID}>{ocupation.ocupationName}</Option>)
    const onFinish = (values) => {
        values.avatar = imageUrl
        addAsocciate(values).then(res=>{
            if(res.data.code === 5001){
                message.info('该身份证号已存在！')
            }
            else if(res.data.code=== 5002){
                message.info('该工号已存在！')
            }
            else if(res.data.code === 200){
                
                message.info('添加员工成功！')
                history.push('/asocciateManage/lookUpAsocciate')
            }
        })
    };
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>点击上传头像</div>
        </div>
      );
    const getBase64 = (img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      
    const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('只能上传格式为JPG/PNG的文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片要求小于2M!');
        }
        return isJpgOrPng && isLt2M;
    }
    const handleChange = info => {
        if (info.file.status === 'uploading') {
         setLoading(true)
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>{
            console.log(imageUrl);
            setImageUrl(imageUrl)
            setLoading(false)
          }
          );
        }
    };

    const handleDepartmentOptionChange = (value,option)=>{
        lookUpOcupation({inWhichDepartment:value}).then(res=>{
            setOcupationData(res.data.data)
            setOcupationDisabled(false)
        })
    }
      
    return (
        <div class="form-wrapper">
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            initialValues={{}}
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
            name="cardID"
            label="身份证号"
            rules={[
            {
                type: 'string',
                message: '身份证号格式错误!',
            },
            {
                required: true,
                message: '此项不能为空!',
            },
            {
                len:18,
                message:'身份证号为18位'
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
                message: '请选择员工性别!',
            },
            ]}
            initialValue="请点击后选择性别"
        >
            <Select >
                <Option value="男">男</Option>
                <Option value="女">女</Option>
            </Select>
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
                type:'string',
            },
            {
                min:2,
                message:'请输入正确的年龄'
                
            },
            {
                max:2,
                message:'请输入正确的年龄'
            }
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="avatar"
            label="头像"
            rules={[
            {
                required: true,
                message: '请上传员工头像!',
            },
            ]}
        >
            <Upload
                name="avatar"
                method= 'get'
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            
        </Form.Item>
        <Form.Item
            name="phoneNumber"
            label="电话号码"
            rules={[
            {
                required: true,
                message: '请输入员工电话号码!',
            },
            ]}
        >
           <Input />
        </Form.Item>
        <Form.Item
            name="workID"
            label="工号"
            rules={[
            {
                required: true,
                message: '请输入员工工号!',
            },
            ]}
        >
           <Input />
        </Form.Item>
        <Form.Item
            name="startDate"
            label="入职时间"
            rules={[
            {
                required: true,
                message: '请选择员工入职时间!',
            },
            ]}
        >
            <DatePicker />
        </Form.Item>
        <Form.Item
            name="inWhichDepartment"
            label="所属部门"
            rules={[
            {
                required: true,
                message: '请选择员工所属部门!',
            },
            ]}
            initialValue = "请点击后选择部门"
        >
            <Select 
                onChange={handleDepartmentOptionChange}
            >
                {departmentOptions}
            </Select>
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
            initialValue="请点击后选择职位,需先选择部门"
        >
            <Select 
            disabled={ocupationDisabled}
            >
                {ocupationOptions}
            </Select>
        </Form.Item>
        
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                    添加
            </Button>
        </Form.Item>
        </Form>
        </div>
    );
};

export default AddAsocciate