import React, { Component } from 'react';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {
        name: '',
        email: '',
        github: ''
      },
      veiw_edit: false
    };
    this.handleEditProfile = this.handleEditProfile.bind(this);
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.profile){
      this.setState({
        profile:{
          name: this.props.name,
          email: this.props.email,
          github: this.props.github
        }
      });
    }
    console.log(this.state);
  }

  handleEditProfile(){
    let veiw = this.state.veiw_edit ? false : true;
    this.setState({
      veiw_edit: veiw
    });
  }

  handleUploadPhoto(){
    console.log('upload photo');
  }

  handleChange = (propName) => (e) => {
    const {profile} = this.state;
    const newProfile = {
      ...profile,
      [propName]: e.target.value
    };
    this.setState({profile: newProfile})
  }

  handleSubmit(e){
    e.preventDefault();
    this.handleEditProfile();
    console.log('this.state');
    console.log(this.state);
  }

  render() {
    return (
      <div className="Profile">

        <div className="Profile_photo">
          <div className="Profile_photo_image">Image</div>
          <div className="Profile_upload_photo" onClick={this.handleUploadPhoto}>[Insert]Upload Photo</div>
         </div>

         <div className="Profile_edit" onClick={this.handleEditProfile}>[Insert]Edit</div>

         {
           (this.state.veiw_edit) ?
            <div className="Profile_edit">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  </label>
                  <input type="text" name="name" placeholder="Name" value={this.state.name}
                  onChange={this.handleChange('name')} />


                <label>
                  Email:
                  <input type="text" name="email" placeholder="Email" value={this.state.email}
                  onChange={this.handleChange('email')} />
                </label>

                <label>
                  Github:
                  <input type="text" name="github" placeholder="Github" value={this.state.github}
                  onChange={this.handleChange('github')} />
                </label>

              <input type="submit" value="Submit" />
              </form>
            </div>
            :
            <div className="Profile_contents">
              <div className="Profile_name">
                Name: {this.state.profile.name}
              </div>
              <div className="Profile_email">
               Email: {this.state.profile.email}
              </div>
              <div className="Profile_github">
               Github: {this.state.profile.github}
              </div>
            </div>
}
      </div>
    );
  }
}

export default Profile;
