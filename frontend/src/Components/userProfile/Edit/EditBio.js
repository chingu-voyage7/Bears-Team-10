import React, { Component } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

class EditBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    let bioValue = '';
    if (this.props.bio) {
      bioValue = this.props.bio;
    } else {
      // bioValue = 'A wise old owl lived in an oak, the more he saw the less he spo...';
    }
    this.setState({
      bio: bioValue,
    });
  }

  handleChange = propName => e => {
    this.setState({ [propName]: e.target.value });
  };

  handleCancel() {
    this.props.handleCancel('Bio');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editProfileComponent('Bio', this.state.bio);
  }

  render() {
    const textPlaceholder =
      'A wise old owl lived in an oak, the more he saw the less he spo...';
    return (
      <div className="EditBio Edit_Form">
        <h5> Give us those sweet deets </h5>

        <TextArea
          placeholder={textPlaceholder}
          value={this.state.bio}
          onChange={this.handleChange('bio')}
          rows={4}
        />
        <div className="FormButtons">
          <Button type="primary" onClick={this.handleSubmit} value="Submit">
            Submit
          </Button>
          <Button type="danger" onClick={this.handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default EditBio;
