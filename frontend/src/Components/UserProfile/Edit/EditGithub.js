import React, { Component } from 'react';
// needed to fix props validation
import PropTypes from 'prop-types';
//
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class EditGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.github) {
      this.setState({
        github: this.props.github,
      });
    }
  }

  handleChange = propName => e => {
    this.setState({ [propName]: e.target.value });
  };

  handleCancel() {
    this.props.handleCancel('Github');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editProfileComponent('Github', this.state.github);
  }

  render() {
    return (
      <div className="EditGithub Edit_Form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Input
              placeholder="Github"
              github="github"
              type="text"
              value={this.state.github}
              onChange={this.handleChange('github')}
            />
          </FormItem>
          <div className="FormButtons">
            <Button type="primary" htmlType="submit" value="Submit">
              Submit
            </Button>
            <Button type="danger" onClick={this.handleCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

EditGithub.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  editProfileComponent: PropTypes.func.isRequired,
  github: PropTypes.string.isRequired,
};

export default EditGithub;
