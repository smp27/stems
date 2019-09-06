import React from 'react';
import 'antd/dist/antd.css';
//import './index.css';
//import Sidebar from '../sidebar/sidebar';
import { Tabs, Card } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

class Bigdata extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'left',
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }

  render() {
    // const {mode} = this.state;
    return(     
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Class details" key="1">
          <Card style={{ width: 300, margin: 'auto' }} >
            <p>Subject : Big-data </p>
            <p>Trainer : Nitin Reddy Ganji </p>
            <p>Duration : </p>
          </Card>
        </TabPane>
        <TabPane tab="Class schedule" key="2">
        </TabPane>
        <TabPane tab="Feedback" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>   
    );
  }

}

export default Bigdata;