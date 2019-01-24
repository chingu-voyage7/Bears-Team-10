import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Icon, message } from 'antd';
import axios from 'axios';

const { Item: FormItem } = Form;

const handleSubmit = (props, projectId, e) => {
  e.preventDefault();
  props.form.validateFields(async (err, values) => {
    if (!err) {
      const { collaboratorUsername } = values;
      try {
        const res = await axios('/api/projects/addCollaborator', {
          method: 'post',
          data: {
            projectId,
            collaboratorUsername,
          },
        });
        if (res.status === 200) {
          // const res = await axios.get('/api/posts/fetchProjectCollaborators');
          // dispatch({ type: FETCH_COLLABORATORS, value: res.data.collaborators });
          message.success(res.data.message);
        }
      } catch (error) {
        message.error(error.response.data.message);
      }
    }
  });
  props.form.resetFields();
};

const AddCollaborator = props => {
  const {
    form: { getFieldDecorator },
    projectId,
  } = props;
  return (
    <Form layout="inline" onSubmit={e => handleSubmit(props, projectId, e)}>
      <FormItem>
        {getFieldDecorator('collaboratorUsername', {
          rules: [
            { type: 'email', message: 'Valid E-mail required!' },
            { required: true, message: 'Please enter your E-mail' },
          ],
          initialValue: '',
        })(
          <Input
            prefix={<Icon type="user" />}
            placeholder="Collaborator's Email"
            autoComplete="off"
          />
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          <span>Add Collaborator</span>
        </Button>
      </FormItem>
    </Form>
  );
};

AddCollaborator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

const WrappedAddCollaborator = Form.create()(AddCollaborator);

export default WrappedAddCollaborator;
