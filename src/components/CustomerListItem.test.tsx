import "jest-styled-components";
import { render } from "@testing-library/react";

import CustomerListItem from "./CustomerListItem";
import { ZELLER_ADMIN } from "../constants";

test("renders customer list item component", () => {
  expect.assertions(3);

  const name = "Jonathan Warykowski";
  const role = ZELLER_ADMIN;

  const { container, getByText } = render(
    <CustomerListItem key="customer1" name={name} role={role} />
  );

  const customerInitial = getByText(name.charAt(0).toUpperCase());
  const customerName = getByText(name);

  expect(customerInitial).toBeInTheDocument();
  expect(customerName).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});
