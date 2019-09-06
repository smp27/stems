import React, { Component } from 'react';
import './style.css';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
import {
  Layout, Breadcrumb, Card, Col, Row,
} from 'antd';
import { connect } from 'react-redux';

const { Content } = Layout;

class Dashboard extends Component {

  componentDidMount() {
      // console.log(this.props.userData);
  }

  render() {
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
          <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Students" bordered={false}>Number of Students: 100</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Classes" bordered={false}>Number of batches: 8</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Trainers" bordered={false}>Number of trainers : 10</Card>
                  </Col>
                </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Passed out students" bordered={false}>Number of Students Passed out: 500</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Batches completed" bordered={false}>Number of batches completed: 8</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Placement" bordered={false}>Placement of Students: 10</Card>
                  </Col>
                </Row>
              </div>
              </Content>
              <FooterComponent />
            </Layout>
          </Layout>
        </Layout>
    );
  }
}


Dashboard.propTypes = {
};

const mapStateToProps = state => ({
  userData: state.userData
});

export default connect(mapStateToProps)(Dashboard);
