import React, { Component } from 'react';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
import FooterComponent from '../footer/footer';
import {
  Layout, Breadcrumb,List,Card,Menu,
} from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Sider } = Layout;
const { SubMenu } = Menu;

const students = [
  {
    name: 'Student 1',
  },
  {
    name: 'Student 2',
  },
  {
    name: 'Student 3',
  },
  {
    name: 'Student 4',
  },
];

const data = [
  'Trainer : Trainer Name',
  'Start Date : date',
  'Expected end date: date',
  'Students: ',
];

class ClassDetails extends Component {
  render() {
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1"><Link to="/classdetails">Overview</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/sessiondetails">Sessions</Link></Menu.Item>
                <SubMenu key="3" title={<span>Settings</span>}>
                  <Menu.Item key="31"><Link to="/register">Add Student</Link></Menu.Item>
                  <Menu.Item key="32"><Link to="/login">Delete Student</Link></Menu.Item>
                </SubMenu>
            </Menu>
          </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Class Details</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
              <h3 style={{ margin: '16px 0' }}>Class Details</h3>
              <div>
                <List
                  size="large"
                  bordered
                  dataSource={data}
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                />
                <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={students}
                  renderItem={item => (
                    <List.Item>
                      <Card title={item.name}>Student Name</Card>
                    </List.Item>
                  )}
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

export default ClassDetails;
