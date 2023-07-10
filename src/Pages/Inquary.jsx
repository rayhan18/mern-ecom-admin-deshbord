
import { Table } from 'antd';
const Inquary = () => {
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
  return (
    <div>
      enquiries
      <div>
      <Table columns={columns} dataSource={data1} onChange={onChange}/>
      </div>
    </div>
  )
}

export default Inquary
