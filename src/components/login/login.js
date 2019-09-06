import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import './style.css';
import { loginuser, loginerror } from '../../actions/auth';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password: "",
      remember: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if(e.target.name === 'remember')
      this.setState({ [e.target.name]: e.target.checked });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password,
      remember: this.state.remember
    }
    if(userData.username === 'admin' && userData.password === '123456') {
      this.props.dispatch(loginuser(userData));
    } else {
      this.props.dispatch(loginerror());
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if(nextProps.loginStatus) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="login">
        <Form onSubmit={this.onSubmit} className="login-form">
          <h1>Log In</h1>
          <Form.Item>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" name="username" onChange={this.onChange} value={this.state.username} />
          </Form.Item>
          <Form.Item>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password" onChange={this.onChange} value={this.state.password} />
          </Form.Item>
          <Form.Item>
              <Checkbox name="remember" onChange={this.onChange}>Remember me</Checkbox>
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button><br/>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  // loginuser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginStatus: state.loginStatus
});

export default connect(mapStateToProps)(Login);
