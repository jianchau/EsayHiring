import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Table, Button,Space,Popconfirm,message } from 'antd';

import {lookUpOcupation} from './../../api/ocupation'
import {deleteOcupation} from './../../api/ocupation'

const LookUpOCupation = ()=> {
    const history = useHistory()
    const [selectedRowKeys,setSelectedRowKeys] = useState([])
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
        lookUpOcupation().then(res=>{
            if(res.data.code===200){
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
    const addOcupation = ()=>{
        history.push('/ocupationManage/addOcupation') 
    }
    function confirm(ocupationID) {
        return ()=>{
            deleteOcupation({ocupationID}).then(res=>{
                if(res.data.code===200){
                    lookUpOcupation().then(res=>{
                        if(res.data.code===200){
                            setData(res.data.data)
                        }
                    })
                    message.info('删除职位成功')
                }
            })
        }
    }
      
    function cancel(e) {
    }

    const columns = [
        {
            title:'序号',
            dataIndex:'index',
            align:'center',
            render:(text,record,index)=>{return index+1}
        },
        {
            title: '职位名称',
            align:'center',
            dataIndex: 'ocupationName',
        },
        {
            title: '所属部门',
            align:'center',
            dataIndex: 'inWhichDepartment',
        },
        {
            title: '职位人数',
            align:'center',
            dataIndex: 'ocupationQuantity',
        },
        {
            title:'操作',
            align:'center',
            key:'operation',
            render:(text,record,index)=>{
                return (
                    <Space>
                        <Button type="primary">编辑</Button>
                        <Popconfirm
                            title="你确定要删除这个职位吗?"
                            onConfirm={confirm(record.ocupationID)}
                            onCancel={cancel}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type="primary">删除</Button>
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ];

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Space>
                    <Button type="primary" onClick={addOcupation}>
                        添加职位
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
                rowKey={record=>record.ocupationID}
                scroll={{
                    y:'320px'
                }}
                size="small"
                columns={columns} 
                dataSource={data} />
        </div>
    );
}

export default LookUpOCupation