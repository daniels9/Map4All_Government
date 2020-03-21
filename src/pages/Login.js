import React from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';
import {
  useHistory,
} from "react-router-dom";
import './Restriction.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends React.Component {
  

  constructor(props) {

    super(props);
    this.state = {};

  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  onFinish = values => {

    console.log('Success:', values);

    this.props.history.push("/government");

  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {

    return (
      <div className="Login">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Benutzername"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Passwort"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  };
}

export default Login;
