import React, { Component } from 'react';
import './styleD.css';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
import FooterComponent from '../footer/footer';
//import Sidebarstud from '../sidebar/sidebar';
import Tabstudent from './tabstudent';
import Bigdata from '../bigdata/bigdata';
import Java from '../bigdata/java';
import {
  Layout, Breadcrumb, Avatar, 
} from 'antd';

const { Content } = Layout;

class StudentV extends Component {
    
  render() {
     
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
            
            <div>
            <Avatar size='large' style={{ backgroundColor: '#87d068' }} icon="user" />
            </div>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Welcome Student</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 30, minHeight: 280,
              }}
              >
              <Tabstudent>
                <Bigdata></Bigdata>
                <Java></Java>
                </Tabstudent>
              </Content>
              <FooterComponent />
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

            


                 
export default StudentV;
