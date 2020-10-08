import React from 'react';
import { render } from '@testing-library/react';

import TimerPage from './TimerPage';

test('Component render', () => {
  const { getByText } = render(<TimerPage />);
  const linkElement = getByText(/Short Rest/i);
  expect(linkElement).toBeInTheDocument();
});
