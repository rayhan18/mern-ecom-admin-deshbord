import { Space, Table } from 'antd';
import { getProducts } from '../features/product/ProductSlice';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { BiSolidEdit,BiTrash } from "react-icons/bi";
import {useDispatch ,useSelector} from 'react-redux';
const columns = [
    {
      title: 'SNO',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter:(a,b)=> a.title.length - b.title.length
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter:(a,b)=> a.description.length - b.description.length
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter:(a,b)=> a.price.length - b.price.length
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter:(a,b)=> a.quantity.length - b.quantity.length
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      
    },
    {
      title: 'Status',
      key: 'tags',
      dataIndex: 'tags',
     
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to="/"><BiSolidEdit/> {record.name}</Link>
          <Link to="#"><BiTrash className='text-danger'/></Link>
        </Space>
      ),
    },
  ];
  
const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[])
  const productState = useSelector((state)=>state.product.products)
   //console.log(productState)
   const data1 =[]
   for (let i = 0; i<productState.length; i++) {
     data1.push({
      key: i + 1 ,
      title:productState[i].title,
      description:productState[i].description,
      price: `$ ${productState[i].price}`,
      quantity: productState[i].quantity,
      category:productState[i].category,
      status:productState[i].status, 

     })
   }
  return (
    <div>
        <h3>ProductList</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  )
}

export default ProductList
