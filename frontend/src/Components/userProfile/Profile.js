import React, { Component } from 'react';
import { Avatar, Button } from 'antd';

import EditProfile from './Edit/EditProfile';
import EditName from './Edit/EditName';
import EditEmail from './Edit/EditEmail';
import EditBio from './Edit/EditBio';
import EditInterests from './Edit/EditInterests';
import EditGithub from './Edit/EditGithub';

import { FaEdit } from 'react-icons/fa';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show_Name: false,
      Show_Email: false,
      Show_Bio: false,
      Show_Interests: false,
      Show_Github: false,
    };
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.editProfileComponent = this.editProfileComponent.bind(this);
  }

  editProfileComponent(a, b) {
    console.log(a);
    console.log(b);
    this.handleCancel(a);
  }

  handleUploadPhoto() {
    console.log('upload photo');
  }

  handleCancel(value) {
    const keyValue = 'Show_' + value;
    this.setState({
      [keyValue]: false,
    });
  }

  sortShowEdit = event => {
    // console.log(event.currentTarget.className);
    const className = event.currentTarget.className;
    const showValue = className.match(/[^\s]+/);
    const clickedValue = 'Show_' + showValue;
    const newValue = this.state[clickedValue] ? false : true;

    let { showValues } = this.state;
    let stateKeys = Object.keys(this.state);
    let newState;
    //turns off any other edit screen that may have been left open
    stateKeys.forEach(x => {
      if (x != clickedValue) {
        newState = {
          ...showValues,
          [x]: false,
        };
      }
      this.setState({
        ...newState,
        [clickedValue]: newValue,
      });
    });

    // this.setState({
    //   [clickedValue]: newValue
    // });
  };

  render() {
    return (
      <div className="Profile">
        <div className="Profile_Photo Profile_Component">
          <div className="Profile_photo_image">
            {this.state.photo ? (
              this.props.user.photo
            ) : (
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                U
              </Avatar>
            )}
          </div>
          <div
            className="Profile_upload_photo"
            onClick={this.handleUploadPhoto}
          >
            <Button type="dashed">Upload</Button>
          </div>
        </div>

        <div className="Profile_name Profile_Component">
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

        <div className="Profile_Email Profile_Component">
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

        <div className="Profile_Bio Profile_Component">
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
        <div className="Profile_Interests Profile_Component">
          {this.state.Show_Interests ? (
            <EditInterests
              handleCancel={this.handleCancel}
              editProfileComponent={this.editProfileComponent}
            />
          ) : (
            <div className="Profile_Field">
              <div className="Interests Edit_Icon" onClick={this.sortShowEdit}>
                <FaEdit />
              </div>
              <div className="Display_Value">
                Interests: {this.props.interests}
              </div>
            </div>
          )}
        </div>

        <div className="Profile_Github Profile_Component">
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
    );
  }
}

export default Profile;
