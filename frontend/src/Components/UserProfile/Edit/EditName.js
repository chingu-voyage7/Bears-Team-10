import React, { Component } from 'react';
// needed to fix props validation
import PropTypes from 'prop-types';
//
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class EditName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.display_name) {
      this.setState({
        display_name: this.props.display_name,
      });
    }
  }

  handleChange = propName => e => {
    this.setState({ [propName]: e.target.value });
  };

  handleCancel() {
    this.props.handleCancel('Display_Name');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editProfileComponent('Display_Name', this.state.display_name);
  }

  render() {
    return (
      <div className="EditName Edit_Form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Input
              placeholder="Name"
              display_name="display_name"
              type="text"
              value={this.state.display_name}
              onChange={this.handleChange('display_name')}
            />
          </FormItem>
          <div className="FormButtons">
            {
              // <input type="submit" value="Submit" />
            }
            <Button type="primary" htmlType="submit" value="Submit">
              Submit
            </Button>
            <Button type="danger" onClick={this.handleCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

// needed to fix props validation
EditName.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  editProfileComponent: PropTypes.func.isRequired,
  display_name: PropTypes.string.isRequired,
};
//

export default EditName;
