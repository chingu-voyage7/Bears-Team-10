import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Icon, Button } from 'antd';
import * as actions from '../../redux/auth';
import './auth.css';

const { Item: FormItem } = Form;

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password, () =>
      this.props.history.push('/')
    );
  };

  handleChange = e => {
    const { id: fieldName, value: fieldValue } = e.target;
    this.setState({ [fieldName]: fieldValue }, () => {
      this.props.form.setFieldsValue({
        [fieldName]: fieldValue,
      });
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please enter your email id' }],
          })(
            <Input
              onChange={this.handleChange}
              prefix={<Icon type="user" />}
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your password' }],
          })(
            <Input
              onChange={this.handleChange}
              prefix={<Icon type="lock" />}
              placeholder="Password"
              type="password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            <span>Login</span>
          </Button>
        </FormItem>
        <FormItem>
          <Link to="/register">
            <span>Register</span>
          </Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = withRouter(Form.create()(Login));

export default connect(
  null,
  actions
)(WrappedLoginForm);
