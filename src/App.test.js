import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/your name/i);
  expect(screen.getByRole('heading', { name: /projects that read like production/i })).toBeInTheDocument();
});
