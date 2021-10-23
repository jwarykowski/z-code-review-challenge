import "jest-styled-components";
import { render, fireEvent } from "@testing-library/react";

import RoleList from "./RoleList";
import { ZELLER_ADMIN, ZELLER_MANAGER } from "../constants";

test("renders role list component", () => {
  expect.assertions(4);

  const role = ZELLER_ADMIN;
  const setRole = jest.fn();

  const { container, getByText } = render(
    <RoleList role={role} setRole={setRole} />
  );

  expect(getByText("User Types")).toBeInTheDocument();
  expect(getByText("Admin")).toBeInTheDocument();
  expect(getByText("Manager")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

test("calls set role when admin label clicked", () => {
  expect.assertions(2);

  const role = ZELLER_MANAGER;
  const setRole = jest.fn();

  const { getByText } = render(<RoleList role={role} setRole={setRole} />);

  fireEvent.click(getByText(/Admin/));

  expect(setRole).toBeCalledTimes(1);
  expect(setRole).toBeCalledWith(ZELLER_ADMIN);
});

test("calls set role when manager label clicked", () => {
  expect.assertions(2);

  const role = ZELLER_ADMIN;
  const setRole = jest.fn();

  const { getByText } = render(<RoleList role={role} setRole={setRole} />);

  fireEvent.click(getByText(/Manager/));

  expect(setRole).toBeCalledTimes(1);
  expect(setRole).toBeCalledWith(ZELLER_MANAGER);
});
