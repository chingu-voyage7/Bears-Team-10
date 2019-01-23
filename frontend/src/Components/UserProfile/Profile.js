import React, { Component } from 'react';
// needed to fix props validation
import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';

import { connect } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { fetchUserProfile, updateProfileComponent } from '../../redux/profile';

import EditName from './Edit/EditName';
import EditBio from './Edit/EditBio';
import EditInterests from './Edit/EditInterests';
import EditGithub from './Edit/EditGithub';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show_Display_Name: false,
      Show_Bio: false,
      Show_Interests: false,
      Show_Github: false,
    };
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.editProfileComponent = this.editProfileComponent.bind(this);
  }

  async componentDidMount() {
    this.props.fetchUserProfile();
  }

  sortShowEdit = event => {
    const className = event.currentTarget.className;
    const showValue = className.match(/[^\s]+/);
    const clickedValue = `Show_${showValue}`;
    const newValue = !this.state[clickedValue];
    const { showValues } = this.state;
    const stateKeys = Object.keys(this.state);
    let newState;
    // turns off any other edit screen that may have been left open
    stateKeys.forEach(x => {
      if (x !== clickedValue) {
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
  };

  handleUploadPhoto() {
    console.log('upload photo');
  }

  handleCancel(value) {
    const keyValue = `Show_${value}`;
    this.setState({
      [keyValue]: false,
    });
  }

  editProfileComponent(key, value) {
    this.handleCancel(key);
    this.props.updateProfileComponent(key.toLowerCase(), value);
  }

  render() {
    return (
      <div className="Profile">
        <div className="Profile_Photo Profile_Component Grid_Item">
          <div className="Profile_photo_image">
            {this.state.photo ? (
              this.props.profile.profile_picture
            ) : (
              <Avatar
                size={64}
                style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
              >
                {this.props.profile.display_name
                  ? this.props.profile.display_name
                  : 'User'}
              </Avatar>
            )}
          </div>
          {
            // <div
            //   className="Profile_upload_photo"
            //   onClick={this.handleUploadPhoto}
            //   // This needs to be added with the new eslint stuff
            //   role="presentation"
            //   //
            // >
            //   <Button type="dashed">Upload</Button>
            // </div>
          }
        </div>

        <div
          className="Display_Name Edit_Icon Grid_Item"
          onClick={this.sortShowEdit}
          role="presentation"
        >
          <FaEdit />
        </div>
        {this.state.Show_Display_Name ? (
          <div className="Value_Content_Name Value_Content Grid_Item">
            <EditName
              display_name={this.props.profile.display_name}
              handleCancel={this.handleCancel}
              editProfileComponent={this.editProfileComponent}
            />
          </div>
        ) : (
          <div className="Value_Content_Name Value_Content Grid_Item">
            {this.props.profile.display_name}
          </div>
        )}
        <div className="Value_Header_Name Value_Header Grid_Item">
          <h3>Name</h3>
        </div>

        <div
          className="Bio Edit_Icon Grid_Item"
          onClick={this.sortShowEdit}
          role="presentation"
        >
          <FaEdit />
        </div>
        {this.state.Show_Bio ? (
          <div className="Value_Content_Bio Value_Content Grid_Item">
            <EditBio
              bio={this.props.profile.bio}
              handleCancel={this.handleCancel}
              editProfileComponent={this.editProfileComponent}
            />
          </div>
        ) : (
          <div className="Value_Content_Bio Value_Content Grid_Item">
            {this.props.profile.bio}
          </div>
        )}
        <div className="Value_Header_Bio Value_Header Grid_Item">
          <h3>Bio</h3>
        </div>

        <div
          className="Interests Edit_Icon Grid_Item"
          onClick={this.sortShowEdit}
          role="presentation"
        >
          <FaEdit />
        </div>
        {this.state.Show_Interests ? (
          <div className="Value_Content_Interests Value_Content Grid_Item">
            <EditInterests
              interests={this.props.profile.interests}
              handleCancel={this.handleCancel}
              editProfileComponent={this.editProfileComponent}
            />
          </div>
        ) : (
          <div className="Value_Content_Interests Value_Content Grid_Item">
            {this.props.profile.interests}
          </div>
        )}
        <div className="Value_Header_Interests Value_Header Grid_Item">
          <h3>Interests</h3>
        </div>

        <div
          className="Github Edit_Icon Grid_Item"
          onClick={this.sortShowEdit}
          role="presentation"
        >
          <FaEdit />
        </div>
        {this.state.Show_Github ? (
          <div className="Value_Content_Github Value_Content Grid_Item">
            <EditGithub
              github={this.props.profile.github}
              handleCancel={this.handleCancel}
              editProfileComponent={this.editProfileComponent}
            />
          </div>
        ) : (
          <div className="Value_Content_Github Value_Content Grid_Item">
            {this.props.profile.github}
          </div>
        )}
        <div className="Value_Header_Github Value_Header Grid_Item">
          <h3>Github</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: () => {
    dispatch(fetchUserProfile());
  },
  updateProfileComponent: (key, value) => {
    dispatch(updateProfileComponent(key, value));
  },
});

// needed to fix props validation
Profile.propTypes = {
  fetchUserProfile: PropTypes.func.isRequired,
  updateProfileComponent: PropTypes.func.isRequired,
  profile: PropTypes.string.isRequired,
};
//

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
