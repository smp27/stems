
import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Table } from 'antd';
import reqwest from 'reqwest';
import{ Breadcrumb, Layout } from 'antd';
const columns = [{
  title: 'Date',
  dataIndex: 'name',
  
  render: name => `${name.first} ${name.last}`,
  width: '20%',
},  {
  title: 'Topics',
  dataIndex: 'email',
    render: text => <a href="/overview">{text}</a>,
}];

class Finishedsession extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
     
    });
  }

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }

  render() {
    return (
        
        <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item><h1><font color="blue">Finished Session</font></h1>
       
            </Breadcrumb.Item>
     </Breadcrumb>
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
        </Layout>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('container'));
          
export default Finishedsession;
//ReactDOM.render(<App />, document.getElementById("container"));
/* // <div align="right"><Button  type="primary" icon="plus" size="large" onClick={()=>{this.props.click2()}}> New Session</a></Button></div>*/