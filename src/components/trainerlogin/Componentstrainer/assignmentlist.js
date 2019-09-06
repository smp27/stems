import React from "react";
//import ReactDOM from "react-dom";
import "antd/dist/antd.css";
//import "./index.css";
import { List, message, Spin, Input,Breadcrumb,Layout } from "antd";
import reqwest from "reqwest";

import InfiniteScroll from "react-infinite-scroller";
const { TextArea } = Input;

const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

class Assignmentlist extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true
  };

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results
      });
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: res => {
        callback(res);
      }
    });
  };

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true
    });
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false
      });
    });
  };

  render() {
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item><h1><font color="blue">Assignment List</font></h1>
        
            </Breadcrumb.Item>
     </Breadcrumb>
        
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.name.last}
                  //title={item.email}
                  // description={item.nat}
                  //content={item.email}
                  description={item.gender}
                />
                <List.Item.Meta
                  //title={item.name.last}
                  //title={item.email}
                  // description={item.nat}
                  //content={item.email}
                  description={item.email}
                />

                <div>
                  <TextArea
                    placeholder="Comments"
                    autosize={{ minRows: 2, maxRows: 6 }}
                  />
                </div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
</Layout>
    );
  }
}

export default Assignmentlist;
//ReactDOM.render(<InfiniteListExample />, document.getElementById("container"));
