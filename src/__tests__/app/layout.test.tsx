import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import RootLayout from '@/app/layout';

vi.mock('next/font/google', () => {
  return {
    Inter: vi.fn(() => ({
      className: 'mock-inter-class',
    })),
  };
});

test('renders children inside RootLayout', () => {
  const { getByText } = render(
    <RootLayout>
      <div>Test Child</div>
    </RootLayout>,
    { container: document }
  );
  const childElement = getByText(/Test Child/i);
  expect(childElement).toBeInTheDocument();
});
