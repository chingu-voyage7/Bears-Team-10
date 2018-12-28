import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class EditName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.display_name) {
      this.setState({
        display_name: this.props.display_name,
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
    this.props.handleCancel('Name');
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.handleEditName(this.state.profile);
    this.props.editProfileComponent('display_name', this.state.display_name);
    console.log('this.state.display_name');
    console.log(this.state.display_name);
  }

  render() {
    return (
      <div className="EditName Edit_Form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Input
              placeholder="Name"
              display_name="display_name"
              type="text"
              value={this.state.display_name}
              onChange={this.handleChange('display_name')}
            />
          </FormItem>
          <div className="FormButtons">
            {
              // <input type="submit" value="Submit" />
            }
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

export default EditName;
