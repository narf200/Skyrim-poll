/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// import jest from '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import { App, WrappedApp } from './App';
import Button from './pages/PollPage/components/Button';
import {
  ASSASIN,
  BARD,
  BLACK_MAMBA,
  HUNTER,
  PAWNBROKER,
  SELLER,
  WIZARD,
} from './pages/PollPage/constants/constants';
import getCalculationCharacter from './pages/PollPage/helpers/helpers';
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

  const handlers = {
    handleClick() {},
  };

  it('calls the handler function when clicked', () => {
    const clickHandler = vi.spyOn(handlers, 'handleClick');
    const { getByText } = render(
      <Button handler={clickHandler}>Click me!</Button>
    );
    fireEvent.click(getByText('Click me!'));
    expect(clickHandler).toHaveBeenCalled();
  });

  it('disables the button after being clicked', () => {
    const clickHandler = vi.spyOn(handlers, 'handleClick');
    const { getByText } = render(
      <Button handler={clickHandler}>Click me!</Button>
    );
    fireEvent.click(getByText('Click me!'));
    expect(getByText('Click me!')).toBeDisabled();
  });
});

test('renders all questions', () => {
  render(
    <MemoryRouter>
      <PollPage />
    </MemoryRouter>
  );
  const question1 = screen.getByText(/Do you like septims?/i);
  const question2 = screen.getByText(/Do you want Dwemer boots for free?/i);
  const question3 = screen.getByText(/Do you like to ride a steelstrider?/i);
  const question4 = screen.getByText(/Do you often walk on a dark night?/i);
  const question5 = screen.getByText(
    /Do you hear the clink of coins from a far?/i
  );
  const question6 = screen.getByText(/Will you take what is not lying well?/i);
  const question7 = screen.getByText(/Is there skuma in your veins?/i);
  const question8 = screen.getByText(
    /Do you know firsthand about lunar sugar?/i
  );
  const question9 = screen.getByText(
    /Do you always have a hole in your pocket?/i
  );
  const question10 = screen.getByText(/North for the Nords?/i);
  const question11 = screen.getByText(
    /Is a horse the best vehicle for moving around the mountains ?/i
  );
  const question12 = screen.getByText(
    /Have you ever absorbed a dragon's soul?/i
  );
  expect(question1).toBeInTheDocument();
  expect(question2).toBeInTheDocument();
  expect(question3).toBeInTheDocument();
  expect(question4).toBeInTheDocument();
  expect(question5).toBeInTheDocument();
  expect(question6).toBeInTheDocument();
  expect(question7).toBeInTheDocument();
  expect(question8).toBeInTheDocument();
  expect(question9).toBeInTheDocument();
  expect(question10).toBeInTheDocument();
  expect(question11).toBeInTheDocument();
  expect(question12).toBeInTheDocument();
});

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

describe('getCalculationCharacter', () => {
  test('should return Black mamba when counter is greater than or equal to 9', () => {
    const counter = 9;
    const expectedCharacter = {
      name: 'Black mamba',
      url: BLACK_MAMBA,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });

  test('should return Assasin when counter is between 5 and 8', () => {
    const counter = 7;
    const expectedCharacter = {
      name: 'Assasin',
      url: ASSASIN,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });

  test('should return Hunter when counter is between 1 and 4', () => {
    const counter = 3;
    const expectedCharacter = {
      name: 'Hunter',
      url: HUNTER,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });

  test('should return Pawnbroker when counter is between -1 and -3', () => {
    const counter = -2;
    const expectedCharacter = {
      name: 'Pawnbroker',
      url: PAWNBROKER,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });

  test('should return Wizard when counter is between -4 and -7', () => {
    const counter = -6;
    const expectedCharacter = {
      name: 'Wizard',
      url: WIZARD,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });

  test('should return Seller when counter is between -8 and -11', () => {
    const counter = -10;
    const expectedCharacter = {
      name: 'Seller',
      url: SELLER,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });

  test('should return Bard when counter is 0', () => {
    const counter = 0;
    const expectedCharacter = {
      name: 'Bard',
      url: BARD,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });

  test('should return Bard when counter is -12', () => {
    const counter = -12;
    const expectedCharacter = {
      name: 'Bard',
      url: BARD,
    };
    expect(getCalculationCharacter(counter)).toEqual(expectedCharacter);
  });
});
