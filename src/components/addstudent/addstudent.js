import React, { Component } from 'react';
import $ from 'jquery';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
import HeaderComponent from '../header/header';
import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
import {
  Form, Icon, Layout, Breadcrumb,Input,Button,Row,Col,List,Avatar,
} from 'antd';
import { addStudent } from "../../actions/auth";
import { connect } from "react-redux"

const { Content } = Layout;
const Search = Input.Search;

class AddStudent extends Component {

  constructor(){
    super();
    this.state = {
        studentData: {
            name: '',
            title: '',
            description: ''
        }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static componentWillReceiveProps(props) {
      console.log(props);
  }

  onChange(e) {
    let studentData = Object.assign({}, this.state.studentData);
    studentData[e.target.name] = e.target.value;
    return this.setState({studentData});
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.studentData);
    this.props.dispatch(addStudent(this.state.studentData));
  }

  render() {
      const { studentData } = this.state;
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
          <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Add Student</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
                <div className="addStudent">
                    <Form onSubmit={this.onSubmit} className="student-form">
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" name="name" onChange={this.onChange} value={studentData.name} />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Title" name="title" onChange={this.onChange} value={studentData.title} />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Description" name="description" onChange={this.onChange} value={studentData.description} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
              </Content>
              <FooterComponent />
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

const mapStateToProps = state => ({
    studentsList: state.students
})

export default connect(mapStateToProps)(AddStudent);
