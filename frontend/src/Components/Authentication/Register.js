import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Input, Icon, Button } from 'antd';
import { register } from '../../redux/auth';
import { fetchProjects } from '../../redux/projects';
import './auth.css';

const { Item: FormItem } = Form;

class Register extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;
        await this.props.register(username, password);
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
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
              { type: 'email', message: 'Valid E-mail required!' },
              { required: true, message: 'Please enter your E-mail' },
            ],
            initialValue: '',
          })(
            <Input
              onChange={this.handleChange}
              prefix={<Icon type="user" />}
              placeholder="Email"
              autoComplete="off"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please enter your password' },
              {
                len: 6,
                message: 'Password should be at least 6 characters in length',
              },
            ],
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
            <span>Register</span>
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegisterForm = Form.create()(Register);

export default withRouter(
  connect(
    null,
    { register, fetchProjects }
  )(WrappedRegisterForm)
);
