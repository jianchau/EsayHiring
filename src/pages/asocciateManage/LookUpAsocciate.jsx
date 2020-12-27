import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Table, Button,Space,Image } from 'antd';
import moment from 'moment'

import {lookUpAsocciate} from './../../api/asocciate'

moment.locale('zh-CN')
const columns = [
    {
        title:'序号',
        dataIndex:'index',
        align:'center',
        render:(text,record,index)=>{return index+1}
    },
    {
        title:'工号',
        align:'center',
        dataIndex:'workID'
    },
    {
        title:'头像',
        align:'center',
        dataIndex:'avatar',
        render:(text,record,index)=><Image alt='' src={record.avatar}/>
    },
    {
        title: '姓名',
        align:'center',
        dataIndex: 'name'
    },
    {
        title: '性别',
        align:'center',
        dataIndex: 'gender'
    },
    {
        title: '年龄',
        align:'center',
        dataIndex: 'age'
    },
    {
        title:'电话号码',
        align:'center',
        dataIndex:'phoneNumber'
        
    },
    {
        title:'职位',
        align:'center',
        dataIndex:'ocupation'
    },
    {
        title:'所属部门',
        align:'center',
        dataIndex:'inWhichDepartment'
    },
    {
        title:'入职时间',
        align:'center',
        // dataIndex:'startDate'
        render:(text,record,index)=>moment(record.startDate).format('YYYY'+ '年' + 'MM' + '月' + 'DD' + '日')
    },
    {
        title:'操作',
        align:'center',
        key:"operation",
        render:()=>{
            return (
                <Space>
                    <Button type="primary">档案</Button>
                    <Button type="primary">删除</Button>
                </Space>
            )
        }
    }
];

const LookUpAsocciate = ()=> {
    const history = useHistory()
    const [selectedRowKeys,setSelectedRowKeys] = useState([])
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        lookUpAsocciate().then(res=>{
            if(res.data.code === 200){
                setData(res.data.data)
            }
        })
    },[])
    const start = () => {
        setLoading(true);
        setTimeout(() => {
            // setSelectedRowKeys([]),
            setLoading(false)
        }, 1000);
    };

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys)
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const addAsocciate = ()=>{
        history.push('/asocciateManage/addAsocciate') 
    }

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Space>
                    <Button type="primary" onClick={addAsocciate}>
                        添加员工
                    </Button>
                    <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                        批量删除
                    </Button>
                </Space>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table 
                rowSelection={rowSelection} 
                bordered
                rowKey = {record=>record.ocupationID}
                scroll={{
                    y:'320px'
                }}
                size="small"
                columns={columns} 
                dataSource={data} />
        </div>
    );
}

export default LookUpAsocciate