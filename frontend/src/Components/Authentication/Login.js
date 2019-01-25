import React, { Component } from 'react';
// needed to fix props validation
import PropTypes from 'prop-types';
//
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Icon, Button } from 'antd';
import { login, fetchUser } from '../../redux/auth';
import { fetchUserProfile } from '../../redux/profile';
import { fetchProjects } from '../../redux/projects';
import { fetchPosts } from '../../redux/posts';
import './auth.css';

const { Item: FormItem } = Form;

class Login extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;
        await this.props.login(username, password);
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
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h1>Login</h1>
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
              autoComplete="false"
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" className="login" htmlType="submit">
            <span>Login</span>
          </Button>
        </FormItem>
        <FormItem>
          <Link className="register" to="/register">
            <span>Register</span>
          </Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = withRouter(Form.create()(Login));

// needed to fix props validation
Login.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  fetchUserProfile: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};
//

export default connect(
  null,
  { login, fetchProjects, fetchPosts, fetchUser, fetchUserProfile }
)(WrappedLoginForm);
