import React, { Component } from "react";
import { Form, Input, Tooltip, Button, Select } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;

class EditBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.profile) {
      this.setState({
        bio: this.props.user.bio
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
    this.props.handleCancel("Bio");
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.handleEditBio(this.state.profile);
    this.props.editProfileComponent("Bio", this.state.bio);
    console.log("this.state.bio");
    console.log(this.state.bio);
  }

  render() {
    return (
      <div className="EditBio">
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Bio">
            <Input
              placeholder="Bio"
              bio="bio"
              type="text"
              value={this.state.bio}
              onChange={this.handleChange("bio")}
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

export default EditBio;
