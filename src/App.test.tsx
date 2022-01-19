import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders hello', () => {
  render(<App />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});

