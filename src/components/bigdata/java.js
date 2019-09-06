import React from 'react';
import 'antd/dist/antd.css';
//import './index.css';
//mport Sidebar from '../sidebar/sidebar';
import { Tabs, Card, List, Checkbox} from 'antd';

const TabPane = Tabs.TabPane;

const data = [
  {
    title: 'Day 1',
  },
  {
    title: 'Day 2',
  },
  {
    title: 'Day 3',
  },
  {
    title: 'Day 4',
  },
];



function callback(key) {
  console.log(key);
}

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


class Java extends React.Component {

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
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Class details" key="1">
          <Card style={{ width: 300, margin: 'auto' }}>
            <p>Subject : Java </p>
            <p>Trainer : Nitin Reddy Ganji </p>
            <p>Duration : </p>
          </Card>
        </TabPane>

        <TabPane tab="Class schedule" key="2">
          {/* <p align="left"> */}
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.title}
                    description="description"
                  />
                  <Checkbox onChange={onChange}>Attended</Checkbox>
                  <Checkbox onChange={onChange}>Completed</Checkbox>
                </List.Item>
              )}
              />
          {/* </p> */}
        </TabPane>
        <TabPane tab="Feedback" key="3">Content of Tab Pane 3</TabPane>
      </Tabs> 
      //document.getElementById('container')
    );
  }
}

export default Java;