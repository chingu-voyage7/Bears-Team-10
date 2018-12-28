import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class EditEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.profile) {
      this.setState({
        email: this.props.user.email,
      });
    }
  }

  handleChange = propName => e => {
    console.log(propName);
    console.log(e.target.value);

    // const { profile } = this.state;
    // const newProfile = {
    //   ...profile,
    //   [propName]: e.target.value
    // };
    this.setState({ [propName]: e.target.value });
  };

  handleCancel() {
    this.props.handleCancel('Email');
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.handleEditEmail(this.state.profile);
    this.props.editProfileComponent('Email', this.state.email);
    console.log('this.state.email');
    console.log(this.state.email);
  }

  render() {
    return (
      <div className="EditEmail Edit_Form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Email">
            <Input
              placeholder="Name"
              email="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
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

export default EditEmail;
