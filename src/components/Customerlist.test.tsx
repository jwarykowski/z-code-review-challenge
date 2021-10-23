import "jest-styled-components";
import { MockedProvider } from "@apollo/client/testing";
import { render, waitFor } from "@testing-library/react";

import CustomerList from "./Customerlist";
import { ZELLER_ADMIN } from "../constants";
import { LIST_ZELLER_CUSTOMERS } from "../graphql/queries";

test("renders role title header", () => {
  expect.assertions(1);

  const role = "Superadmin";

  const { getByText } = render(
    <MockedProvider addTypename={false}>
      <CustomerList role={role} />
    </MockedProvider>
  );

  expect(getByText("Superadmin Users")).toBeInTheDocument();
});

test("renders customer list when request successful", async () => {
  expect.assertions(3);

  const listCustomersMock = {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            {
              email: "customer@zeller.com",
              id: "customer1",
              name: "Jonathan Warykowski",
              role: ZELLER_ADMIN,
            },
          ],
        },
      },
    },
  };

  const mocks = [listCustomersMock];

  const { container, queryByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CustomerList role={ZELLER_SUPER_ADMIN} />
    </MockedProvider>
  );

  await waitFor(() => {
    expect(queryByText("Loading users...")).not.toBeInTheDocument();
  });

  expect(container.firstChild).toMatchSnapshot();
});
