import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Icon, Button } from 'antd';
import { login } from '../../redux/auth';
import { fetchProjects } from '../../redux/projects';
import './auth.css';

const { Item: FormItem } = Form;

class Login extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;
        await this.props.login(username, password);
        this.props.fetchProjects();
        this.props.history.push('/');
      }
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
  { login, fetchProjects }
)(WrappedLoginForm);
