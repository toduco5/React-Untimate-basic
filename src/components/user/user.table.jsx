import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table, } from 'antd';
import UserUpdateModal from './user.update';
import { useState } from 'react';
import UserDetailsModal from './user.details';
import { deleteUserApi } from '../../services/api.service';
const UserTable = (props) => {
  const { dataUsers, loadUser, current, pageSize, total, setCurrent, setPageSize, setTotal } = props
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
  const [dataUpdate, setDataUpdate] = useState(null)
  const [dataDetail, setDataDetail] = useState(null)
  const [isdatadetailopen, setIsdatadetailopen] = useState(false)
  const handleDelete = async (id) => {
    const res = await deleteUserApi(id)
    console.log("res", res.data)
    if (res.data) {
      notification.success({
        message: `success`,
        description: 'User deleted successfully',
      })
      await loadUser()
    } else {
      notification.error({
        message: `error`,
        description: JSON.stringify(res.message),
      })
    }

  }
  const columns = [

    {
      title: 'STT',
      width: '5%',
      render: (_, record, index) => (
        <>
          {index + 1}
        </>
      )

    },
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      render: (_, record) => (
        <>
          <a href='#!'
            onClick={() => {
              setDataDetail(record);
              setIsdatadetailopen(true);
            }}
          >{record._id}
          </a>
        </>
      ),
    },
    {
      title: 'Họ Tên',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'SDT',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Vai trò ',
      key: 'role',
      dataIndex: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <a title='Edit' style={{ fontSize: '20px', color: "blue" }}><EditOutlined
            onClick={() => {
              setDataUpdate(record)
              setIsModalUpdateOpen(true)

            }}
          /></a>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            placement="bottom"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <a title='Delete' style={{ fontSize: '20px', color: "red" }}><DeleteOutlined /></a>
          </Popconfirm>

        </div>
      ),
    },
  ];
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];
  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current)
      }
      // if(pagination.pageSize !== pageSize){
      //   setPageSize(pagination.pageSize)
      // }
      // if(pagination.total !== total){
      //   setTotal(pagination.total)
      // }
    }
  };
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}
        pagination={
          {
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total,
            showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
          }}
        onChange={onChange}
      />
      <UserUpdateModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <UserDetailsModal
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isdatadetailopen={isdatadetailopen}
        setIsdatadetailopen={setIsdatadetailopen}
        loadUser={loadUser}
      />
    </>

  )
}
export default UserTable