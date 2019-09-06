import React, { Component } from 'react';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
//import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
//import Sidebartrainer from '../trainerlogin/sidebartrainer';
import Finishedsession from '../trainerlogin/Componentstrainer/finishedsession';
import Addnewsession from '../trainerlogin/Componentstrainer/Addnewsession';
import Addnewassignment from '../trainerlogin/Componentstrainer/addnewassignment';
import Assignmentlist from '../trainerlogin/Componentstrainer/assignmentlist';
import {
  Layout, Breadcrumb, Menu, Icon
} from 'antd';

const { Content,Sider } = Layout;
const SubMenu=Menu.SubMenu;

class TrainerDashboard extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            value:false,
            sub:false,
            ass3:false,
            ass4:false
        };
    }
    
    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
    
    click1=()=>
    {
        this.setState({value:true, sub:false,ass3:false,ass4:false});
        
    }
    
    click2=()=>
    {
        this.setState({sub:true, value:false,ass3:false,ass4:false});
       // this.setState({sub:true, value:false});
        
    }
    click3=()=>
    {
        this.setState({ass3:true,value:false, sub:false,ass4:false});
        
    }
    click4=()=>
    {
        this.setState({ass4:true, sub:false,value:false,ass3:false});
        
    }
    
    
  render() {
      // const value=this.state;
      // const sub=this.state;
      // const ass3=this.state;
      // const ass4=this.state;
      return (
        <Layout>
        <HeaderComponent />
          <Layout>
          <Sider  width={200} style={{ background: '#fff' }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Class</span>
                </span>
              }
            >
              <Menu.Item key="3" onClick={()=>{this.click1()}}>
                Session
              </Menu.Item>
              <Menu.Item key="4" onClick={()=>{this.click2()}}>
            Students
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Assignment</span>
                </span>
              }
            >
              <Menu.Item key="6" onClick={()=>{this.click3()}}>
                Assignment List
              </Menu.Item>
              <Menu.Item key="8" onClick={()=>{this.click4()}}>
                Add New Assignment
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        
         </Sider>
        
        
        
              <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item>Trainer</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}>
                  {(this.state.value?(<Finishedsession {...this.props} />) : (""))}
                  {(this.state.sub?(<Addnewsession {...this.props}/>):(""))}
                  {(this.state.ass3?(<Assignmentlist{...this.props}/>):(""))}
                  {(this.state.ass4?(<Addnewassignment {...this.props}/>):(""))}
                
             </Content>
        <FooterComponent />
       </Layout> 
    </Layout>
         </Layout>
        
         );
  }
}

export default TrainerDashboard;







/*<HeaderComponent/>
         
         <Sidebartrainer>
        //<Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
             }}>
         <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Trainer</Breadcrumb.Item>
              </Breadcrumb>
        </Content>
        </Sidebartrainer>
             <FooterComponent/>
        </Layout>
*/