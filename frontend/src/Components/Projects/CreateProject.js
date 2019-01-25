import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import * as actions from '../../redux/projects';

const { Item: FormItem } = Form;

class CreateProject extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { projectTitle, projectDescription } = values;
        this.props.createProject(
          projectTitle,
          projectDescription,
          async newProjectId => {
            await this.props.fetchProjects();
            this.props.history.push(`/project/${newProjectId}`);
          }
        );
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="create-project-form">
        <Row>
          <Col offset={8}>
            <h1>Create a new project</h1>
          </Col>
          <Col offset={4} span={20}>
            <FormItem
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
              label="Project Title"
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
              label="Project Description"
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
                  autosize={{ minRows: 10, maxRows: 25 }}
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col offset={16}>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="public-project"
              >
                <span>Publish Project</span>
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedCreateProjectForm = withRouter(Form.create()(CreateProject));

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default connect(
  null,
  actions
)(WrappedCreateProjectForm);
