import React, { Component } from 'react';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
//import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
// import Finishedsession from './Componentstrainer/finishedsession';
// import Addnewsession from './Componentstrainer/Addnewsession';
import Sidebartrainer from './sidebartrainer';
import {
  Layout, Breadcrumb,
} from 'antd';

const { Content } = Layout;

class Studentlist extends Component {
   
  render() {
    return (
       <Layout>
        <HeaderComponent />
          <Layout>
          <Sidebartrainer></Sidebartrainer>
              <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item>Trainer</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}>
        <h1>student List </h1>
               </Content>
        <FooterComponent />
       </Layout> 
    </Layout>
         </Layout>
    ); 
      
  }
}

export default Studentlist;
