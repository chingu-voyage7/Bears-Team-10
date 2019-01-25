import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Icon, Button } from 'antd';
import { register, fetchUser } from '../../redux/auth';
import { fetchUserProfile } from '../../redux/profile';
import { fetchProjects } from '../../redux/projects';
import { fetchPosts } from '../../redux/posts';
import './auth.css';

const { Item: FormItem } = Form;

class Register extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;
        await this.props.register(username, password);
        await this.props.fetchUser();
        this.props.fetchUserProfile();
        this.props.fetchProjects();
        this.props.fetchPosts();
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
        <h1>Register</h1>
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
                min: 6,
                message: 'Password should be at least 6 characters in length',
              },
            ],
          })(
            <Input
              onChange={this.handleChange}
              prefix={<Icon type="lock" />}
              placeholder="Password"
              type="password"
              autoComplete="false"
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" className="register" htmlType="submit">
            <span>Register</span>
          </Button>
        </FormItem>
        <FormItem>
          <Link className="login" to="/login">
            <span>Login</span>
          </Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegisterForm = Form.create()(Register);

// needed to fix props validation
Register.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  fetchUserProfile: PropTypes.func.isRequired,
  form: PropTypes.shape.isRequired,
  register: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
};
//

export default withRouter(
  connect(
    null,
    { register, fetchProjects, fetchPosts, fetchUser, fetchUserProfile }
  )(WrappedRegisterForm)
);
