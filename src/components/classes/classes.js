import React, { Component } from 'react';
import "antd/dist/antd.css";
import HeaderComponent from '../header/header';
import Sidebar from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
import {
  Layout, Breadcrumb,Button,Row,Col,List,Avatar,
} from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const listData = [];
for (let i = 1; i <= 25; i++) {
  listData.push({
    link: '/classdetails',
    title: `Class ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Java',
    content: 'Class details like timing, students and trainers',
  });
}

class Classes extends Component {
  render() {
    return (
        <Layout>
          <HeaderComponent />
          <Layout>
          <Sidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Classes</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
              <div>
                <Row>
                  <Col span={18} push={6}>
                    <h3 style={{ margin: '16px 0' }}>Available Classes</h3>
                  </Col>
                  <Col span={6} pull={18}>
                    <Link to="/register"><Button type="primary" icon="plus" size="large">Add New</Button></Link>
                  </Col>
                </Row>
              </div>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 5,
                }}
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<Link to={item.link}>{item.title}</Link>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
              </Content>
              <FooterComponent />
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

export default Classes;
