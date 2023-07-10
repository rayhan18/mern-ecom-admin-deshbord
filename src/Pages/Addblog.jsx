import { useState } from "react";
import CoustomLayout from "../Components/CoustomLayout"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import { Button } from "react-bootstrap";

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';


const Addblog = () => {
    const [desc, setDesc] = useState('');

    const handleDesc =(e)=>{
        setDesc(e)
    }
    //upload  file to server
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        progress: {
          strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
          },
          strokeWidth: 3,
          format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        },
      };
  return (
    <div>
      <h3 className="mb-4">Add blog</h3>
     
     <div className="my-2">
     <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
     </div>
      <div>
        <form action="">
        <CoustomLayout type="text" label="enter blog title" placeholder=""
            />
            <select name="" id="" className="form-control py-3 mb-3">
                <option value="" >selecte blog category</option>
            </select>
            <ReactQuill theme="snow" value={desc} onChange={(evt)=>{handleDesc(evt)}} />
            <Button className="success my-5 rounded" type="submit">Add Blog</Button>
        </form>
      </div>
    </div>
  )
}

export default Addblog
