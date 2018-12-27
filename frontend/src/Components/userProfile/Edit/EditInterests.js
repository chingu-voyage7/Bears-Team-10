import React, { Component } from 'react';
import { Form, Input, Tooltip, Button, Select } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class EditInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    let interestsValue = '';
    if (this.props.user) {
      interestsValue = this.props.user.interests;
    } else {
      //interestsValue = 'Itsy Bitsy spider climbing up the spout. Down came the rain and washed the spider out';
    }
    this.setState({
      interests: interestsValue,
    });
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
    this.props.handleCancel('Interests');
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.handleEditInterests(this.state.profile);
    this.props.editProfileComponent('Interests', this.state.interests);
    console.log('this.state.interests');
    console.log(this.state.interests);
  }

  render() {
    const textPlaceholder =
      'Itsy Bitsy spider climbing up the spout. Down came the rain and washed the spider out';

    return (
      <div className="EditInterests Edit_Form">
        <h4>What do you day dream about?</h4>

        <TextArea
          placeholder={textPlaceholder}
          value={this.state.interests}
          onChange={this.handleChange('interests')}
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

export default EditInterests;
