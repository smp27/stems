import React, { Component } from 'react';
import {
  Layout,
} from 'antd';

const { Footer } = Layout;

class FooterComponent extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
          STEMS | Reliable Software Resources.
        </Footer>
    );
  }
}

export default FooterComponent;
