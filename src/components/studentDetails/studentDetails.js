import React, { Component } from 'react';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
import {
  Layout, Breadcrumb,List,
} from 'antd';

const { Content } = Layout;

const data = [
  'Student : Student Name',
  'Start Date : date',
  'Expected end date: date',
  'courses ',
];

class StudentDetails extends Component {
  render() {
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
          <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Student Details</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
              <h3 style={{ margin: '16px 0' }}>Student Details</h3>
              <div>
                <List
                  size="large"
                  bordered
                  dataSource={data}
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                />
              </div>
              </Content>
              <FooterComponent />
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

export default StudentDetails;
