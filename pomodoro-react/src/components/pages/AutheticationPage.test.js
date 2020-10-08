import React from 'react';
import { render } from '@testing-library/react';

import AutheticationPage from './AutheticationPage';

test('renders learn react link', () => {
  const { getByText } = render(<AutheticationPage />);
  const linkElement = getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
