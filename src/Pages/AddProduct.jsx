import { Button } from "react-bootstrap"
import CoustomLayout from "../Components/CoustomLayout"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const AddProduct = () => {
    const [desc, setDesc] = useState('');

    const handleDesc =(e)=>{
        setDesc(e)
    }
  return (
    <div>
      <div className="mb-4">Add Product</div>
      <div>
        <form action="" className="action">
        <CoustomLayout type="text" label="Add Product title"/>
            <CoustomLayout type="number" label="Add Product price"/>
            <select name="" id="" className="form-control py-3 mb-3">
                <option value="" >selecte  category</option>
            </select>
            <select name="" id="" className="form-control py-3 mb-3">
                <option value="" >selecte Brand</option>
            </select>
            <select name="" id="" className="form-control py-3 mb-3">
                <option value="" >selecte color</option>
            </select>
           
            <ReactQuill theme="snow" value={desc} onChange={(evt)=>{handleDesc(evt)}} />
           
           <div className="my-2">
           <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
           </div>
            <Button className="my-3" type="submit">Add Product</Button>
            
        </form>
      </div>
    </div>
  )
}

export default AddProduct
