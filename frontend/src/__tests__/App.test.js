import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

  describe('app component', () => {
    it('contains a header with the "Hello"', () => {
      const app = shallow(<App/>);
      expect(app.containsMatchingElement(<h1>Hello</h1>)).toEqual(true);
    });
  });
