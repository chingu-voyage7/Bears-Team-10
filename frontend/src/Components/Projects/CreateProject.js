import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import * as actions from '../../redux/projects';

const { Item: FormItem } = Form;

class CreateProject extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { projectTitle, projectDescription } = values;
        this.props.createProject(projectTitle, projectDescription, () =>
          this.props.history.push('/')
        );
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="create-project-form">
          <FormItem
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            label="Post Title"
          >
            {getFieldDecorator('projectTitle', {
              rules: [
                {
                  required: true,
                  message: 'Please enter a title for your project',
                },
                {
                  min: 10,
                  message:
                    'Project title should be at least 10 characters long',
                },
              ],
            })(<Input onChange={this.handleChange} />)}
          </FormItem>
          <FormItem
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            label="Post Description"
          >
            {getFieldDecorator('projectDescription', {
              rules: [
                {
                  required: true,
                  message: 'Please enter a description of your project',
                },
                {
                  min: 20,
                  message:
                    'Project description should be at least 20 characters long',
                },
              ],
            })(
              <Input.TextArea
                onChange={this.handleChange}
                autosize={{ minRows: 3, maxRows: 25 }}
              />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              <span>Publish Project</span>
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedCreateProjectForm = withRouter(Form.create()(CreateProject));

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default connect(
  null,
  actions
)(WrappedCreateProjectForm);
