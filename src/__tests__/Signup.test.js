import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../components/Signup/Signup';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Signup", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Signup />);
  });

  it("render name input", () => {
    render(<Signup />);
    const inputEl = screen.getByTestId("name-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  })

  it("render email input", () => {
    render(<Signup />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  })

  it("render name input", () => {
    render(<Signup />);
    const inputEl = screen.getByTestId("password-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
  })

  it("pass valid email to test email input field", () => {
    render(<Signup />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");

    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
  });

  it("pass valid name to test name input field", () => {
    render(<Signup />);

    const inputEl = screen.getByTestId("name-input");
    userEvent.type(inputEl, "my name");

    expect(screen.getByTestId("name-input")).toHaveValue("my name");
  });

  it("pass valid password to test password input field", () => {
    render(<Signup />);

    const inputEl = screen.getByTestId("password-input");
    userEvent.type(inputEl, "supersecretpassword");

    expect(screen.getByTestId("password-input")).toHaveValue("supersecretpassword");
  });
});
