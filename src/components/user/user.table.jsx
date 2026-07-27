import {  Table, } from 'antd';
import { getUserApi } from '../../services/api.service';
import { useState,useEffect } from 'react';
const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([

  ])
  useEffect(()=>{
  loadUser()

  },[])
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      render: text => <a>{text}</a>,
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
  const loadUser = async () => {
    const res = await getUserApi()
    console.log("res ebd: ",res)
    setDataUsers(res.data)
  }
  return (
    <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />

  )
}
export default UserTable