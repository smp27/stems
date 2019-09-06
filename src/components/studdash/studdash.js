import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import HeaderComponent from '../header/header';
import FooterComponent from '../footer/footer';
//import Sidebar from '../sidebar/sidebar';
import Bigdata from '../bigdata/bigdata';
import Java from '../bigdata/java';
import New from '../new/new';
import Accsettings from '../accsettings/accsettings';
import { Layout, Breadcrumb, Avatar, Icon, Menu } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const { Content } = Layout;

// function callback(key) {
//   console.log(key);
// }

class Studdash extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        value: false,
        sub: false,
        ref: false,    
        rel: false,
      mode: 'left',
    };
  }
    
    handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }

bigdata=()=>
{
    this.setState({value:true,sub:false,ref:false,rel:false});
}

java=()=>
{
    this.setState({sub:true,value:false,ref:false,rel:false});
}

new=()=>
{
    this.setState({ref:true,value:false,sub:false,rel:false});
}

accsettings=()=>
{
     this.setState({rel:true,ref:false,value:false,sub:false});
}
render(){
    // const {value} = this.state;
    // const {mode} = this.state;
    // const {rel} = this.state;
    // const {sub}=this.state;
    // const {ref}=this.state;
    //const {getFieldDecorator} = this.props.form;
return(
         <Layout>
        <HeaderComponent></HeaderComponent>
        <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
         <Menu
        onClick={this.handleClick}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Trainings</span></span>}>
          
            <Menu.Item key="1" onClick={() => {this.bigdata()}}> Bigdata </Menu.Item>
            <Menu.Item key="2" onClick={() => {this.java()}}> Java </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Assignments</span></span>}>
          <Menu.Item key="5" onClick={() => {this.new()}}> New </Menu.Item>
          <Menu.Item key="6"><a href="/completed"> Completed </a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Other</span></span>}>
          
          <Menu.Item key="9" onClick={() => {this.accsettings()}}> Account settings</Menu.Item>
          <Menu.Item key="10"><a href="/home"> Logout </a></Menu.Item>
            </SubMenu>
      </Menu>
    </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
        <div>
            <Avatar size={54} style={{ backgroundColor: '#87d068' }} icon="user" />
        </div>
            
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>Welcome Student</Breadcrumb.Item>
              </Breadcrumb>

              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
    {(this.state.value?(<Bigdata{...this.props} />):(""))}
    {(this.state.sub?(<Java{...this.props} />):(""))}
    {(this.state.ref?(<New{...this.props} />):(""))}
    {(this.state.rel?(<Accsettings{...this.props} />):(""))}
    
    </Content>
        <FooterComponent></FooterComponent>
        </Layout>
        </Layout>
        </Layout>
        
);
}
}

export default Studdash;
      
     /*const menu =(
    <Menu>
    <Menu.Item onClick={() => {this.accsettings()}}> Account settings
    </Menu.Item>
    <Menu.Item>
      <a href="/home">Profile settings</a>
    </Menu.Item>
  </Menu>
);*/