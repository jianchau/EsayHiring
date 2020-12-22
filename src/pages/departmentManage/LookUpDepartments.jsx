import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Table, Button,Space } from 'antd';

const columns = [
    {
        title:'序号',
        dataIndex:'index',
        align:'center',
        render:(text,record,index)=>{return index+1}
    },
    {
        title: '部门名称',
        align:'center',
        dataIndex: 'name',
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
        dataIndex:'departmentOcupations'
    },
    {
        title:'操作',
        align:'center',
        render:()=>{
            return (
                <>
                    <Button type="primary">详情</Button>
                    <Button type="primary">详情</Button>
                </>
            )
        }
    }
];

const data = [];

const DepartmentManage = ()=> {
    const history = useHistory()
    const [selectedRowKeys,setSelectedRowKeys] = useState([])
    const [loading,setLoading] = useState(false)
    
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
    const addDepartment = ()=>{
        history.push('/departmentManage/addDepartment') 
    }

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
                bordered
                scroll={{
                    y:'320px'
                }}
                size="small"
                columns={columns} 
                dataSource={data} />
        </div>
    );
}

export default DepartmentManage