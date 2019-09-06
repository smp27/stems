import React from "react";
//import ReactDOM from "react-dom";
import "antd/dist/antd.css";
//import "./index.css";
import {
  Form,
  Select,
  Button,
  Upload,
  Icon,
  Input,
  DatePicker,Layout,Breadcrumb
} from "antd";

const { Option } = Select;

class Addnewassignment extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        document.write("Received values of form: ", values);
      }
    });
  };

  normFile = e => {
    document.write("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    return (
        
        <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item><h1><font color="blue">Add New Assignment</font></h1>
        
            </Breadcrumb.Item>
     </Breadcrumb>
        
      <Form onSubmit={this.handleSubmit} >
        
        <Form.Item 
        label="Topic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("note", {
            rules: [{ required: true, message: "Please input assignment name" }]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="class"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
         >
             {getFieldDecorator("select", {
            rules: [{ required: true, message: "Please select a class" }]
          })(
            <Select placeholder="Please select a class">
              <Option value="Big Data">Big Data</Option>
              <Option value="Java">Java</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item
          label="Assignment"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("note", {
            rules: [{ required: true, message: "Add assignment " }]
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label="Task"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("note", {
            rules: [
              { required: false, message: "Please input assignment name" }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item 
             label="DeadLine"
             labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}>
          {getFieldDecorator("date-picker", config)(<DatePicker />)}
        </Form.Item>

        <Form.Item
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
          label="Upload"
          extra="upload task related files"
        >
          {getFieldDecorator("upload", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Dragger">
          <div className="dropbox">
            {getFieldDecorator("dragger", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            )}
          </div>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
</Layout>

    );
  }
}

export default Form.create()(Addnewassignment);
//const WrappedDemo = Form.create({ name: "validate_other" })(Demo);

//ReactDOM.render(<WrappedDemo />, document.getElementById("container"));

 