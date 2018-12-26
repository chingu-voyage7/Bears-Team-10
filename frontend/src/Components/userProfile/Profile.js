import React, { Component } from "react";
import EditProfile from "./Edit/EditProfile";
import EditName from "./Edit/EditName";
import EditEmail from "./Edit/EditEmail";
import EditBio from "./Edit/EditBio";
import EditInterests from "./Edit/EditInterests";
import EditGithub from "./Edit/EditGithub";

import { FaEdit } from "react-icons/fa";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show_Edit: false,
      Show_Name: false,
      Show_Email: false,
      Show_Bio: false,
      Show_Interests: false
    };
    this.handleEditProfile = this.handleEditProfile.bind(this);
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.editProfileComponent = this.editProfileComponent.bind(this);
  }

  handleEditProfile() {
    let show = this.state.Show_edit ? false : true;
    this.setState({
      Show_edit: show
    });
  }

  editProfileComponent(a, b) {
    console.log(a);
    console.log(b);
    this.handleCancel(a);
  }

  handleUploadPhoto() {
    console.log("upload photo");
  }

  handleCancel(value) {
    const keyValue = "Show_" + value;
    this.setState({
      [keyValue]: false
    });
  }

  sortShowEdit = event => {
    // console.log(event.currentTarget.className);
    const className = event.currentTarget.className;
    const showValue = className.match(/[^\s]+/);
    const clickedValue = "Show_" + showValue;

    const newValue = this.state[clickedValue] ? false : true;
    this.setState({
      [clickedValue]: newValue
    });
  };

  render() {
    const bottomBorder = {
      border: "1px solid black",
      width: "100%",
      padding: "10px"
    };

    return (
      <div className="Profile">
        <div
          style={{
            background: "black",
            width: "100%",
            border: "1px solid black",
            padding: "10px"
          }}
        >
          {" "}
        </div>
        <div className="Profile_photo">
          <div className="Profile_photo_image">Image</div>
          <div
            className="Profile_upload_photo"
            onClick={this.handleUploadPhoto}
          >
            [Insert]Upload Photo
          </div>
        </div>

        <div className="Profile_contents" style={bottomBorder}>
          <div className="Profile_name" style={bottomBorder}>
            {this.state.Show_Name ? (
              <EditName
                handleCancel={this.handleCancel}
                editProfileComponent={this.editProfileComponent}
              />
            ) : (
              <div className="Profile_Field">
                <div className="Name Edit_Icon" onClick={this.sortShowEdit}>
                  <FaEdit />
                </div>
                <div className="Display_Value">Name: {this.props.name}</div>
              </div>
            )}
          </div>
          <div className="Profile_Email" style={bottomBorder}>
            {this.state.Show_Email ? (
              <EditEmail
                handleCancel={this.handleCancel}
                editProfileComponent={this.editProfileComponent}
              />
            ) : (
              <div className="Profile_Field">
                <div className="Email Edit_Icon" onClick={this.sortShowEdit}>
                  <FaEdit />
                </div>
                <div className="Display_Value">Email: {this.props.email}</div>
              </div>
            )}
          </div>
          <div className="Profile_Bio" style={bottomBorder}>
            {this.state.Show_Bio ? (
              <EditBio
                handleCancel={this.handleCancel}
                editProfileComponent={this.editProfileComponent}
              />
            ) : (
              <div className="Profile_Field">
                <div className="Bio Edit_Icon" onClick={this.sortShowEdit}>
                  <FaEdit />
                </div>
                <div className="Display_Value">Bio: {this.props.bio}</div>
              </div>
            )}
          </div>
          <div className="Profile_Interests" style={bottomBorder}>
            {this.state.Show_Interests ? (
              <EditInterests
                handleCancel={this.handleCancel}
                editProfileComponent={this.editProfileComponent}
              />
            ) : (
              <div className="Profile_Field">
                <div
                  className="Interests Edit_Icon"
                  onClick={this.sortShowEdit}
                >
                  <FaEdit />
                </div>
                <div className="Display_Value">
                  Interests: {this.props.interests}
                </div>
              </div>
            )}
          </div>
          <div className="Profile_Github" style={bottomBorder}>
            {this.state.Show_Github ? (
              <EditGithub
                handleCancel={this.handleCancel}
                editProfileComponent={this.editProfileComponent}
              />
            ) : (
              <div className="Profile_Field">
                <div className="Github Edit_Icon" onClick={this.sortShowEdit}>
                  <FaEdit />
                </div>
                <div className="Display_Value">Github: {this.props.github}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
