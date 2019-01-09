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
    this.props.form.validateFields((err, value) => {
      if (!err) {
        const { postContent } = value;
        this.props.newPost(postContent, () =>
          this.props.history.push('/new-post')
        );
      }
    });
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
                className="newPost"
                onChange={this.handleChange}
                autosize={{ minRows: 5, maxRows: 25 }}
              />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              <span>Submit Post</span>
            </Button>
          </FormItem>
        </Form>
        {/* <textarea className="newPost" />
        <button
          className="submit button"
          type="button"
          onClick={this.onButtonSubmit}
        >
          Submit Post
        </button> */}
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
};

// export default NewPost;
export default connect(
  null,
  actions
)(WrappedNewPostForm);
