import React, { Component } from "react";
import { Form, Input, Tooltip, Button, Select } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;

class EditInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.profile) {
      this.setState({
        interests: this.props.user.interests
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
    this.props.handleCancel("Interests");
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.handleEditInterests(this.state.profile);
    this.props.editProfileComponent("Interests", this.state.interests);
    console.log("this.state.interests");
    console.log(this.state.interests);
  }

  render() {
    return (
      <div className="EditInterests">
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Interests">
            <Input
              placeholder="Interests"
              interests="interests"
              type="text"
              value={this.state.interests}
              onChange={this.handleChange("interests")}
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

export default EditInterests;
