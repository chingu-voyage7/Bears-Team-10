import React, { Component } from 'react';
import { Input, Button } from 'antd';

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
    if (this.props.interests) {
      interestsValue = this.props.interests;
    } else {
      // interestsValue = 'Itsy Bitsy spider climbing up the spout. Down came the rain and washed the spider out';
    }
    this.setState({
      interests: interestsValue,
    });
  }

  handleChange = propName => e => {
    this.setState({ [propName]: e.target.value });
  };

  handleCancel() {
    this.props.handleCancel('Interests');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editProfileComponent('Interests', this.state.interests);
  }

  render() {
    const textPlaceholder =
      'Itsy Bitsy spider climbing up the spout. Down came the rain and washed the spider out';

    return (
      <div className="EditInterests Edit_Form">
        <h5>What do you day dream about?</h5>

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
