/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';
import MainPage from './pages/MainPage/MainPage';

describe('App', () => {
  it('Renders Skyrim poll', () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(
      'Hi! Take the test to find out what kind of Kajit you are.'
    );
  });
  it('button renders with correct text', () => {
    render(<MainPage />);
    expect(screen.getByRole('button')).toHaveTextContent('Take the test');
  });
  it('Renders not found in valid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not found');
  });
});
