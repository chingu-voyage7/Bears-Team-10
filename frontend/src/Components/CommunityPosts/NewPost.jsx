import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import * as actions from '../../redux/posts';

const { Item: FormItem } = Form;

class NewPost extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { postContent } = values;
        this.props.newPost(postContent, this.props.projectId, () =>
          this.props.history.push('/new-post')
        );
      }
    });
    this.props.form.resetFields();
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className="form center pa4 br3 shadow-5">
        <Form onSubmit={this.handleSubmit} className="create-post-form">
          <FormItem
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 19 }}
            label="New Post"
          >
            {getFieldDecorator('postContent')(
              <Input.TextArea
                id="newPost"
                className="newPost"
                onChange={this.handleChange}
                autosize={{ minRows: 5, maxRows: 10 }}
              />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              <span>Submit Post</span>
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNewPostForm = withRouter(Form.create()(NewPost));

NewPost.propTypes = {
  newPost: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

// export default NewPost;
export default connect(
  null,
  actions
)(WrappedNewPostForm);
