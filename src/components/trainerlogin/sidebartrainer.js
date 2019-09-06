import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import {
  Layout, Menu, Icon,
} from 'antd';
import { Link } from 'react-router-dom';

const {
  Sider,
} = Layout;

const SubMenu = Menu.SubMenu;

class Sidebartainer extends React.Component {
  
    state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  

  render() {
    return (
        //<Layout style={{ minHeight: '100vh' }}>
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
              <Menu.Item key="3">
                <Link to="/Bigdata">Session</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/studentlist">Students</Link>
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
              <Menu.Item key="6">
                <Link to="/Assignment">Assignment List</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/Adding">Add New Assignment</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        
         </Sider>
       //</Layout>
    );
  }
}
export default Sidebartainer;

            //<Menu.Item key="2"> <Icon type="desktop" /> <span>Classes</span> </Menu.Item>
//<Menu.Item key="5">Advance Java</Menu.Item>
//<Menu.Item key="9">Advanced Java Assignment</Menu.Item>
 //<Menu.Item key="2"> <Icon type="desktop" /> <span>Student List</span> </Menu.Item>