import React, { Component } from 'react';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
//import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
import Finishedsession from './Componentstrainer/finishedsession';
import Addnewsession from './Componentstrainer/Addnewsession';
import {
  Layout, Breadcrumb,Icon,Tabs
} from 'antd';
// import Studentlist from './studentlist';
import Sidebartrainer from './sidebartrainer';
const { Content } = Layout;


const TabPane = Tabs.TabPane;

class TrainerBigdata extends Component {
   
  render() {
    return (
        <Layout>
          <HeaderComponent />
            <Layout>
            <Sidebartrainer></Sidebartrainer>
                <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Students</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{
                  background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}
                >
                  <Tabs defaultActiveKey="2">
                  <TabPane tab={<span><Icon type="smile" />Finshed Session</span>} key="1">
                    <Finishedsession></Finishedsession>
                  </TabPane>
                  <TabPane tab={<span><Icon type="star" />Add New Session</span>} key="2">
                    <Addnewsession></Addnewsession>
                  </TabPane>
                </Tabs>
              </Content>
            <FooterComponent />
          </Layout> 
        </Layout>
      </Layout>
    );
  }
}

export default TrainerBigdata;