import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import "antd/dist/antd.css";
import {
  Layout, Menu, Icon,
} from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1"><Link to="/students">Students</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/trainers">Trainers</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/classes">Classes</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/settings">Settings</Link></Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Trainings</span></span>}>
              <Menu.Item key="11"><Link to="/bigdata"> Bigdata </Link></Menu.Item>
              <Menu.Item key="12"><Link to="/java"> Java </Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Assignments</span></span>}>
              <Menu.Item key="5"><Link to="/new">New </Link></Menu.Item>
              <Menu.Item key="6"><Link to="/completed"> Completed </Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="5"><Link to="/logout">Logout</Link></Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
