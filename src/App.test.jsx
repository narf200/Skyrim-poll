import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App', () => {
  it('Renders Skyrim poll', () => {
    render(<WrappedApp />);

    // eslint-disable-next-line no-undef
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Skyrim poll');
  });
  it('Renders not found in valid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );

    // eslint-disable-next-line no-undef
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not found');
  });
});
