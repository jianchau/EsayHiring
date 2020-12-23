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
        title:'工号',
        align:'center',
        dataIndex:'asocciateID',
    },
    {
        title: '姓名',
        align:'center',
        dataIndex: 'name',
    },
    {
        title: '性别',
        align:'center',
        dataIndex: 'gender',
    },
    {
        title: '年龄',
        align:'center',
        dataIndex: 'age',
    },
    {
        title:'职位',
        align:'center',
        dataIndex:'ocupation'
    },
    {
        title:'所属部门',
        align:'center',
        dataIndex:'department'
    },
    {
        title:'入职时间',
        align:'center',
        dataIndex:'startTime'
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

const LookUpAsocciate = ()=> {
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