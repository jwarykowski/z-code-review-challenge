import "jest-styled-components";
import { render, fireEvent } from "@testing-library/react";

import RoleListItem from "./RoleListItem";

test("renders role list item component", () => {
  expect.assertions(3);

  const label = "Testing";
  const isSelected = true;
  const handleOnChange = jest.fn();

  const { container, getByTestId, getByText } = render(
    <RoleListItem
      label={label}
      isSelected={isSelected}
      handleOnChange={handleOnChange}
    />
  );

  const input = getByTestId("Testing") as HTMLInputElement;

  expect(getByText("Testing")).toBeInTheDocument();
  expect(input.checked).toEqual(true);
  expect(container.firstChild).toMatchSnapshot();
});

test("input is unselected when is selected is false", async () => {
  expect.assertions(1);

  const label = "Testing";
  const isSelected = false;
  const handleOnChange = jest.fn();

  const { getByTestId } = render(
    <RoleListItem
      data-testid={label}
      label={label}
      isSelected={isSelected}
      handleOnChange={handleOnChange}
    />
  );

  const input = getByTestId("Testing") as HTMLInputElement;

  expect(input.checked).toEqual(false);
});

test("calls handle on change when input changed", () => {
  expect.assertions(1);

  const label = "Testing";
  const isSelected = false;
  const handleOnChange = jest.fn();

  const { getByText } = render(
    <RoleListItem
      label={label}
      isSelected={isSelected}
      handleOnChange={handleOnChange}
    />
  );

  fireEvent.click(getByText(/Testing/));

  expect(handleOnChange).toBeCalledTimes(1);
});
