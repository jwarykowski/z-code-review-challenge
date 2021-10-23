import "jest-styled-components";
import { render } from "@testing-library/react";

import Text from "./Text";

test("renders text component", () => {
  expect.assertions(2);

  const { container, getByText } = render(<Text>Example Text</Text>);

  expect(getByText("Example Text")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      color: #212322;
      font-size: 1.5em;
    }

    <p
      class="c0"
    >
      Example Text
    </p>
  `);
});
