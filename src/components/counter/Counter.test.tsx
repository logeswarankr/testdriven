import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component', () => {
  render(<Counter />);
  const headingElement = screen.getByText(/count/i);
  expect(headingElement).toBeInTheDocument();
});

test('increments count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  const countElement = screen.getByText(/count: 1/i);
  expect(countElement).toBeInTheDocument();
});

test('decrements count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/decrement/i);
  fireEvent.click(decrementButton);
  const countElement = screen.getByText(/count: -1/i);
  expect(countElement).toBeInTheDocument();
});
