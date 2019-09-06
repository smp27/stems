
import React from "react";
//import ReactDOM from "react-dom";
import "antd/dist/antd.css";
//import "./index.css";
import { Form, DatePicker, Button, Select,Breadcrumb,Layout } from "antd";

const { Option } = Select;

class Addnewsession extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD")
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
        ]
      };
      document.write("Received values of form: ", values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    // const rangeConfig = {
    //   rules: [{ type: "array", required: true, message: "Please select time!" }]
    // };
    return (
        
         <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item><h1><font color="blue">Add new Session</font></h1>
       
            </Breadcrumb.Item>
     </Breadcrumb>
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="Date/Day">
          {getFieldDecorator("date-picker", config)(<DatePicker />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Topics[multiple]" hasFeedback>
          {getFieldDecorator("select-multiple", {
            rules: [{ required: true, message: "Select topics", type: "array" }]
          })(
            <Select
              mode="multiple"
              placeholder="Please today's topics"
            >
              <Option value="red">Apache</Option>
              <Option value="green">Spark</Option>
              <Option value="blue">Map-Reduce</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Attendies" hasFeedback>
          {getFieldDecorator("select", {
            rules: [{ required: true, message: "Please select Attendies" }]
          })(
          <Select placeholder="Attanding students">
            <Option value="reethi">Reethi</Option>
            <Option value="komal">Komal </Option>
          </Select>
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Duration">
          <Select placeholder="Select Duration">
            <Option value="one-hr">1 hr</Option>
            <Option value="two-hr">2 hr </Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
</Layout>
    );
  }
}




export default Form.create()(Addnewsession);
