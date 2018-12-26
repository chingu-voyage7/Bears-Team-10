import React, { Component } from "react";
import { Form, Input, Tooltip, Button, Select } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;

class EditName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.profile) {
      this.setState({
        name: this.props.user.name
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
    this.props.handleCancel("Name");
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.handleEditName(this.state.profile);
    this.props.editProfileComponent("Name", this.state.name);
    console.log("this.state.profile");
    console.log(this.state.profile);
  }

  render() {
    return (
      <div className="EditName">
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Name">
            <Input
              placeholder="Name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
            />
          </FormItem>
          <div className="FormButtons">
            <input type="submit" value="Submit" />
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
