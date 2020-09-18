import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders button Get Metrics', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Get Metrics");
  expect(linkElement).toBeInTheDocument();
});

test('renders Card Identifier field ', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Card Identifier");
  expect(linkElement).toBeInTheDocument();
});

test('renders repo select with sme-web', () => {
});
