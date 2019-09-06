import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
import HeaderComponent from '../header/header';
import FooterComponent from '../footer/footer';
import {
  Layout, Breadcrumb,List,Menu,Dropdown, Icon,
} from 'antd';

const { Content } = Layout;
const { Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/register">Add Student</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/login">Delete Student</Link>
    </Menu.Item>
  </Menu>
);

const data = [
  'Session details',
  'technology',
  'trainer',
  'Students',
];

class ClassSession extends Component {
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
                <Menu.Item key="2"><Link to="/trainers">Sessions</Link></Menu.Item>
                <Menu.Item key="3">
                  <Dropdown overlay={menu} trigger={['click']}>
                    <Link className="ant-dropdown-link" to="/home">
                      Settings <Icon type="down" />
                    </Link>
                  </Dropdown>
                </Menu.Item>
            </Menu>
          </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Class Session</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
              <h3 style={{ margin: '16px 0' }}>Class Session</h3>
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

export default ClassSession;
