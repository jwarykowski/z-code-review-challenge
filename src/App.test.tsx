import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import App from "./App";
import { ZELLER_ADMIN } from "./constants";

test("renders app component", () => {
  expect.assertions(1);

  const { container } = render(
    <MockedProvider addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("sets admin radio as selected by default", () => {
  expect.assertions(1);

  const { getByTestId } = render(
    <MockedProvider addTypename={false}>
      <App />
    </MockedProvider>
  );

  const input = getByTestId(ZELLER_ADMIN) as HTMLInputElement;

  expect(input.checked).toEqual(true);
});
