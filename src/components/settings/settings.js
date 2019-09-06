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
  'Add a new role/user',
  'Remove user',
  'Generate Report',
];

class Settings extends Component {
  render() {
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
          <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Settings</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
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

export default Settings;
