import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { FaPaw } from 'react-icons/fa';

describe('Header component', () => {
  test('can render the logo', () => {
    const container = shallow(<Header />);
    expect(container.find('.logo')).toBeDefined();
  });

  test('has h1 elem', () => {
    const container = shallow(<Header />);
    const welcome = <h1 className="header-title">Bairs</h1>;
    expect(container.contains(welcome)).toEqual(true);
  });

  test('p tag with welcome message', () => {
    const props = {
      loggedIn: false
    };
    const container = mount(<Header user={props} />);
    const welcome = <p>Welcome, please sign in</p>;
    expect(container.prop('user')).toEqual({ loggedIn: false });
    expect(container.contains(welcome)).toEqual(true);
  });

  test('can welcome the user if logged in', () => {
    const props = {
      loggedIn: true,
      name: 'Carl'
    };
    const container = mount(<Header user={props} />);
    expect(container.text()).toContain('Carl');
  });
});
