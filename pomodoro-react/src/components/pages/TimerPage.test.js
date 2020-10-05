import React from 'react';
import { render } from '@testing-library/react';
import TimerPage from './TimerPage';

test('renders learn react link', () => {
  const { getByText } = render(<TimerPage />);
  const linkElement = getByText(/tasks/i);
  expect(linkElement).toBeInTheDocument();
});
