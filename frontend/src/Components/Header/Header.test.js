import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

test('can render the logo', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Header />, container);

  expect(container.textContent).toContain('Bairs');
});
