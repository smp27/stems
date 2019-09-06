import React from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

class Accsettings extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
       const { getFieldDecorator } = this.props.form;
    return (
        // <h2 align="left"> Change your password here!</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('current password', {
            rules: [{ required: true, message: 'Please enter your current password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.20)' }} />} type="password" placeholder="Current Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('new password', {
            rules: [{ required: true, message: 'Please enter your new password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="New Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('re-enter new password', {
            rules: [{ required: true, message: 'Please re-enter your new password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.20)' }} />} type="password" placeholder="Re-enter new password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Change my password!!!
          </Button>
           </Form.Item>
        </Form>
        
);

  }
}

//const WrappedAccsettings = Form.create({ name: 'normal_login' })(Accsettings);

//ReactDOM.render(<WrappedAccsettings />, document.getElementById('container'));
export default  Form.create() (Accsettings);