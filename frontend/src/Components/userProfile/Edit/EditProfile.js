import React, { Component } from "react";
import { Form, Input, Tooltip, Button, Select } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "Brain",
        email: "",
        bio: "Illllllllllllllllllllllllllllove chikenaz",
        interests: "",
        github: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.profile) {
      this.setState({
        profile: {
          name: this.props.user.name,
          email: this.props.user.email,
          bio: this.props.user.bio,
          interests: this.props.user.interests,
          github: this.props.user.github
        }
      });
    }
  }

  handleChange = propName => e => {
    const { profile } = this.state;
    const newProfile = {
      ...profile,
      [propName]: e.target.value
    };
    this.setState({ profile: newProfile });
  };

  handleSubmit(e) {
    e.preventDefault();
    //this.handleEditProfile(this.state.profile);
    console.log("this.state.profile");
    console.log(this.state.profile);
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div className="EditProfile">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Name">
            <Input
              placeholder="Name"
              name="name"
              type="text"
              value={this.state.profile.name}
              onChange={this.handleChange("name")}
            />
          </FormItem>

          <FormItem {...formItemLayout} label="Email">
            <Input
              placeholder="Email"
              email="email"
              type="text"
              value={this.state.profile.email}
              onChange={this.handleChange("email")}
            />
          </FormItem>

          <FormItem {...formItemLayout} label="Github">
            <Input
              placeholder="Github"
              github="github"
              type="text"
              value={this.state.profile.github}
              onChange={this.handleChange("github")}
            />
          </FormItem>

          <FormItem {...formItemLayout} label="Bio">
            <TextArea
              rows={4}
              placeholder="Your Life Story"
              bio="bio"
              type="text"
              value={this.state.profile.bio}
              onChange={this.handleChange("bio")}
            />
            {
              // <Input
              //   placeholder="Your Life Story"
              //   bio="bio"
              //   type="text"
              //   value={this.state.profile.bio}
              //   onChange={this.handleChange("bio")}
              // />
            }
          </FormItem>

          <FormItem {...formItemLayout} label="Interests">
            <TextArea
              rows={4}
              placeholder="Tell us what lights your fire"
              interests="interests"
              type="text"
              value={this.state.profile.interests}
              onChange={this.handleChange("interests")}
            />
          </FormItem>

          <input type="submit" value="Submit" />
        </Form>
      </div>
    );
  }
}

export default EditProfile;
