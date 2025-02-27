import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import { MemoryRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "./Pages/login";

test("renders SignUP component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/AIS discipline referral form/i)).toBeInTheDocument();
});

test("renders Login component on /login route", () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <Route path="/login" component={Login} />
    </MemoryRouter>
  );
  expect(screen.getByText(/welcome back!/i)).toBeInTheDocument();
});
