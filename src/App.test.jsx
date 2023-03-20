/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// import jest from '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { App, WrappedApp } from './App';
import Button from './pages/PollPage/components/Button';
import PollPage from './pages/PollPage/PollPage';

describe('App', () => {
  it('Renders Main page', () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(
      'Hi! Take the test to find out what kind of Kajit you are.'
    );
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

describe('Button', () => {
  it('renders the button with the correct label', () => {
    const { getByText } = render(<Button>Click me!</Button>);
    expect(getByText('Click me!')).toBeInTheDocument();
  });

  // it('calls the handler function when clicked', () => {
  //   const handleClick = jest.fn();
  //   const { getByText } = render(
  //     <Button handler={() => handleClick()}>Click me!</Button>
  //   );
  //   fireEvent.click(getByText('Click me!'));
  //   expect(handleClick).toHaveBeenCalled();
  // });

  // it('disables the button after being clicked', () => {
  //   const handleClick = jest.fn();
  //   const { getByText } = render(
  //     <Button handler={() => handleClick()}>Click me!</Button>
  //   );
  //   fireEvent.click(getByText('Click me!'));
  //   expect(getByText('Click me!')).toBeDisabled();
  // });
});

// test('renders all questions', () => {
//   render(<PollPage />);
//   const question1 = screen.getByText(/question 1/i);
//   const question2 = screen.getByText(/question 2/i);
//   expect(question1).toBeInTheDocument();
//   expect(question2).toBeInTheDocument();
// });

// test('increments and decrements answer counter on button click', () => {
//   render(<PollPage />);
//   const yesButton = screen.getByTestId('yes-button');
//   const noButton = screen.getByTestId('no-button');
//   const counter = screen.getByTestId('counter');
//   expect(counter.textContent).toBe('0');
//   fireEvent.click(yesButton);
//   expect(counter.textContent).toBe('1');
//   fireEvent.click(noButton);
//   expect(counter.textContent).toBe('0');
// });

test('shows modal on button click', () => {
  render(
    <MemoryRouter>
      <PollPage />
    </MemoryRouter>
  );
  const showModalButton = screen.getByText(/find out the result/i);
  expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  fireEvent.click(showModalButton);
  expect(screen.getByTestId('modal')).toBeInTheDocument();
});
