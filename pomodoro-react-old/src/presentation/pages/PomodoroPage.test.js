import React from 'react';
import { render } from '@testing-library/react';

import PomodoroPage from './PomodoroPage';

test('Component render', () => {
  const { getByText } = render(<PomodoroPage />);
  const linkElement = getByText(/Short Rest/i);
  expect(linkElement).toBeInTheDocument();
});
