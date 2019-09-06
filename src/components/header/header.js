import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import "antd/dist/antd.css";
import {
  Layout, Menu,
} from 'antd';

const { Header } = Layout;

class HeaderComponent extends Component {
  render() {
    return (
      <Header className="header" >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px'}}
        >
          <Menu.Item key="1"><Link to="/dashboard">STEMS</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderComponent;
