import {
    MenuFoldOutlined,
   
  
   
  } from '@ant-design/icons';
  import {  Button, Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
  const { Header, Sider, Content } = Layout;
  import { AiOutlineAppstore ,AiOutlineUser,AiOutlineUnorderedList} from "react-icons/ai";
import {Outlet, redirect, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import { Avatar, Badge,  } from 'antd'
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    defaultSortOrder: 'descend',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];
const data1 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    product:'Product-1',
    status: 'Status-1',
    address: 'New York No. 1 Lake Park',
  },
  {
     key: '2',
    name: 'John Brown',
    age: 32,
    product:'Product-2',
    status: 'Status-2',
    address: 'New York No. 1 Lake Park',
  },
  
  
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const MainLayout = () => {
  const data = [
    {
      type: 'jan',
      sales: 38,
    },
    {
      type: 'fab',
      sales: 52,
    },
    {
      type: 'mar',
      sales: 61,
    },
    {
      type: 'app',
      sales: 145,
    },
    {
      type: 'may',
      sales: 48,
    },
    {
      type: 'jun',
      sales: 38,
    },
    {
      type: 'jul',
      sales: 38,
    },
    {
      type: 'agust',
      sales: 38,
    },
    {
      type: 'sep',
      sales: 38,
    },
    {
      type: 'oct',
      sales: 38,
    },
    {
      type: 'nov',
      sales: 38,
    },
    {
      type: 'des',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      
      return "#fffd33";
    },
    label: {
     
      position: 'middle',
     
      style: {
        fill: '#000',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical bg-warning py-2 text-center d-flex">
         <img className="logo" src={logo} alt="" />
          <h5 className='logotitle'>Ecom</h5>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({key}) =>{
            if(key === 'signout'){
               redirect("/")
            }else{
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineAppstore />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4'/>,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineAppstore className='fs-4'/>,
              label: 'Catalog',
              children:[
                {
                  key: 'product',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Product list',
                },
                {
                  key: 'brand',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Brand',
                },
                {
                  key: 'brand-list',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Brand list',
                },
                {
                  key: 'category',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Category',
                },
                {
                  key: 'list-category',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Category list',
                },
                {
                  key: 'color',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Color list',
                },
              ]
            },
            {
              key: 'Orders',
              icon: <AiOutlineUnorderedList className='fs-4'/>,
              label: 'Orders',
            },
            {
              key: 'blogs',
              icon: <AiOutlineUnorderedList className='fs-4'/>,
              label: 'Blogs',
              children:[
                {
                  key: 'blog',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Add blog',
                },
                {
                  key: 'blog-list',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: '  Blog list',
                },
                {
                  key: 'blog-category',
                  icon: <AiOutlineAppstore className='fs-4'/>,
                  label: ' Add blog category ',
                },
              ]
            },
            {
              key: 'Inquiries',
              icon: <AiOutlineUnorderedList className='fs-4'/>,
              label: 'Inquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          {/* header right */}
          <div className='float-end me-3 align-items-center py-2'>
            <div>

            <h5 className='mr-2'>
             <img style={{width:'2rem'}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" /> User name</h5>
            </div>
         
          </div>
          
          {/* <AiOutlineBell className='float-end fs-2 mx-3 my-2'/>
            <Badge className='float-end text-white bg-danger rounded-circle p-1 h5 '>0</Badge> */}
          <Badge count={0} showZero className='float-end'>
          <Avatar shape="square" size="large" />
    </Badge>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        
        <Outlet/>

       
        </Content>
        <div className='mt-3 p-5'>
          <he>Income service</he>
          <div>
           <Column {...config} />

          </div>
        </div>
        <div className='mt-4'>
          <h4>Recent Orders</h4>
          <div>
          <Table columns={columns} dataSource={data1} onChange={onChange}/>
          </div>
        </div>
      </Layout>
    </Layout>
   
    </div>
  )
}

export default MainLayout
