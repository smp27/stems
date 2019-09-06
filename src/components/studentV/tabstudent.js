import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  //overflow: 'hidden',
};


class Tabstudent extends React.Component{
render()
    {
return(
    <Collapse bordered={false} >
    <Panel header="Training" key="1" style={customPanelStyle}>
      <p><a href="Bigdata">Bigdata</a></p>
        <p><a href="Java">Java</a></p>
    </Panel>
    <Panel header="Assignments" key="2" style={customPanelStyle}>
      <p><a href="New">New</a></p>
        <p><a href="Completed">Completed</a></p>
    </Panel>
    <Panel header="Other" key="3" style={customPanelStyle}>
      <p><a href="home">Logout</a></p>
    </Panel>
  </Collapse>
    );

  //document.getElementById('container')
}
}
export default Tabstudent;
          