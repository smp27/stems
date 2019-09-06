import React, { Component } from 'react';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
//import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
// import Finishedsession from './Componentstrainer/finishedsession';
import Assignmentlist from './Componentstrainer/assignmentlist';
//import Addnewsession from './Addnewsession';
import {
  Layout, Breadcrumb,Button,
} from 'antd';
// import Studentlist from './studentlist';
import Sidebartrainer from './sidebartrainer';
const { Content } = Layout;

class Assignment extends Component {
   
  render() {
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
          <Sidebartrainer></Sidebartrainer>
              <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item><h1><font color="blue">Assignment List</font></h1>
                   <div align="right"><Button  type="primary" icon="plus" size="large"><a href="/Adding">Assignment</a></Button></div>
            </Breadcrumb.Item>
     </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
        
      <Assignmentlist></Assignmentlist>  
   
  
        </Content>
        <FooterComponent />
       </Layout> 
    </Layout>
         </Layout>
        );
  }
}
    export default Assignment;

 //<TabPane tab={<span><Icon type="star" />Add New Session</span>} key="2">
    //  <Assignmentlist></Assignmentlist>
    //</TabPane>

 /*<Tabs defaultActiveKey="2">
    <TabPane tab={<span><Icon type="smile" />Assignment List</span>} key="1">
      <Assignmentlist></Assignmentlist>   </TabPane>
      
      <div>
                  <Row>
                    <Col span={10} pull={20}>
                    <a href="http://localhost:3000/register"><Button type="primary" icon="plus" size="large">Add New</Button></a>
                  </Col>
                  </Row></div>
      
      
      */