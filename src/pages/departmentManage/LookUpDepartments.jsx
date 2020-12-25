import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Table, Button,Space,Popconfirm} from 'antd';

import {deleteDepartment} from './../../api/department'
import {lookUpDepartment} from './../../api/department'

const LookUpDepartment = ()=> {
    const history = useHistory()
    const [selectedRowKeys,setSelectedRowKeys] = useState([])
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
        lookUpDepartment().then(res=>{
            setData(res.data.data)
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
        setSelectedRowKeys(selectedRowKeys)
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const addDepartment = ()=>{
        history.push('/departmentManage/addDepartment') 
    }
    function confirm(departmentID) {
        return ()=>{
            deleteDepartment({departmentID:departmentID}).then(res=>{
                if(res.data.code===200){
                    lookUpDepartment().then(res=>{
                setData(res.data.data)
            })
                }
            }).catch(err=>console.log(err))
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
            title:'部门代号',
            dataIndex:'departmentCode',
            align:'center',
        },
        {
            title: '部门名称',
            align:'center',
            dataIndex: 'departmentName',
        },
        {
            title: '部门经理',
            align:'center',
            dataIndex: 'departmentManager',
        },
        {
            title: '部门人数',
            align:'center',
            dataIndex: 'departmentQuantity',
        },
        {
            title:'部门职位',
            align:'center',
            dataIndex:'departmentOcupations',
        },
        {
            title:'操作',
            align:'center',
            render:(text,record)=>{
                return (
                    <Space>
                        <Button type="primary">编辑</Button>
                        <Popconfirm
                            title="你确定要删除该部门吗?"
                            onConfirm={confirm(record.departmentID)}
                            onCancel={cancel}
                            okText="确认"
                            cancelText="取消"
                        >
                            <Button type="primary" >删除</Button>
                        </Popconfirm>,
                    </Space>
                )
            }
        }
    ];
    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Space>
                    <Button type="primary" onClick={addDepartment}>
                        添加部门
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
                bordered={true}
                rowKey={(record)=>record.departmentID}
                scroll={{
                    y:'320px'
                }}
                size="small"
                columns={columns} 
                dataSource={data} />
        </div>
    );
}

export default LookUpDepartment