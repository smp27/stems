import React, { Component } from 'react';
import './styleS.css';
import "antd/dist/antd.css";
import $ from jQuery;
import {
  Layout, Menu,
} from 'antd';

const { Sider } = Layout;

class Sidebarstud extends Component {
  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1"><a href="/Home">Home</a></Menu.Item>
            <Menu.Item key="2"><a href="/Logout">Logout</a></Menu.Item>
            
        </Menu>
      </Sider>
    );
  }
}

export default Sidebarstud;
