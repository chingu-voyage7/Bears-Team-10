import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

describe('Header component', () => {
  test('can render the logo', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Header />, container);

    expect(container.textContent).toContain('Bairs');
  });

  test('has logo', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Header />, container);

    expect(container);
  });
});
