import { Space, Table, Tag } from 'antd';
import { useEffect } from 'react';
import { getAllUsers } from '../features/customars/CustomarSlice';
import {useDispatch, useSelector} from 'react-redux'

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];
const Customers = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])
  const customerState = useSelector((state) => state.customer.customers)
 // console.log(customerState)
 const data1 = [];
  for(let i = 0; i < customerState.length; i++){
    if(customerState[i].role !== "admin"){
      data1.push({
        key:i+1,
        name: customerState[i].firstName + " " + customerState[i].lastName,
        email:customerState[i].email,
        mobile:customerState[i].mobile,
      })
    }
  }

  return (
    <div>
        <h3>Customers list</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  )
}

export default Customers
