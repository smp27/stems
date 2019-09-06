import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import './style.css';

class Register extends Component {
  constructor(){
    super();
    this.state = {
      userDetails:{}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          userDetails:values
          }, function(){
            console.log(this.state);
            // this.props.history.push("/login");
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="register">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h1>Register</h1>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('dob', {
            rules: [{ required: true, message: 'Please enter Date of Birth!' }],
          })(
            <Input prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Date of Birth" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('technology', {
            rules: [{ required: true, message: 'Please enter Technology!' }],
          })(
            <Input prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Technology" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('interviewed_by', {
            rules: [{ required: true, message: 'Please enter Interviewed By!' }],
          })(
            <Input prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Interviewed By" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('referred_by', {
            rules: [{ required: true, message: 'Please enter Referred By!' }],
          })(
            <Input prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Referred By" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please enter Email!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Email" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button><br/>
          Already registered ? <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export default Form.create()(Register);

// import React, { Component } from 'react';
// import { Form, Icon, Input, Button } from "antd";
// import "antd/dist/antd.css";
// import './style.css';
// const FormItem = Form.Item;
//
// class Register extends Component {
//
//   handleSubmit(e){
//     console.log(this.ref);
//     e.preventDefault();
//   }
//
//   render() {
//     return (
//       <div className="register">
//         <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
//           <h1>Register</h1>
//           <FormItem>
//             <Input input="text" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" ref="name"/>
//           </FormItem>
//           <FormItem>
//             <Input input="text" prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Date of Birth" ref="dob"/>
//           </FormItem>
//           <FormItem>
//             <Input input="text" prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Technology" ref="technology"/>
//           </FormItem>
//           <FormItem>
//             <Input input="text" prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Referred By" ref="referred_by"/>
//           </FormItem>
//           <FormItem>
//             <Input input="text" prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Interviewed By" ref="interviewed_by"/>
//           </FormItem>
//           <FormItem>
//             <Input input="text" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" ref="email"/>
//           </FormItem>
//           <FormItem>
//             <Button type="submit" className="login-form-button">
//               Register
//             </Button><br/>
//             <a className="login-form-register" href="http://localhost:3000/login">Log in</a>
//           </FormItem>
//         </Form>
//       </div>
//     );
//   }
// }
//
// export default Register;
