import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaPaw } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'
import { Dropdown, Menu, Icon } from 'antd'
import { fetchUser } from '../../redux/auth'
import { connect } from 'react-redux'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const { user } = this.props

    const onClick = ({ key }) => {
      // message.info(`Click on item ${key}`);
    }

    const menu = (
      <Menu>
        <Menu.Item key="1">
          {user && user.isLoggedIn ? (
            <FaSignOutAlt
              title="logout"
              onClick={() => console.log('leaving')}
            />
          ) : (
            <FaSignInAlt title="login" onClick={() => console.log('here')} />
          )}
        </Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    )

    return (
      <div className="header-div">
        <div className="logo">
          <FaPaw />
          <h1 className="header-title">Bairs</h1>
        </div>
        <p>
          Welcome,{' '}
          {user && user.isLoggedIn ? `${user.name}!` : 'please sign in'}
        </p>
        {/* dropdown */}
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            Hover me, Click menu item <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(Header)

