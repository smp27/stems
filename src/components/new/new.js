import React from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Card, Icon, Upload, message, Button } from 'antd';

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
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
};

class New extends React.Component{
    render(){
        return(
            
  <Card align ='left' title="Assignment List">
    
    <p 
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 10,
        fontWeight: 500,
      }}
    >
    </p>
    <Card
      type="inner"
      title="Big-data"
      extra=<Upload {...props}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>
    >
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Java"
      extra=<Upload {...props}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>
    >
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Sql"
      extra=<Upload {...props}>
    <Button>
      <Icon type="upload" /> Click to Upload
    </Button>
  </Upload>
    >
      Inner Card content
    </Card>
    
  </Card>
            
);
    }
}
export default New;