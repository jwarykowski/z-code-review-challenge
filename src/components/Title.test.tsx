import "jest-styled-components";
import { render } from "@testing-library/react";

import Title from "./Title";

test("renders title component", () => {
  expect.assertions(2);

  const { container, getByText } = render(<Title>Example Title</Title>);

  expect(getByText("Example Title")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      color: #212322;
      font-size: 2em;
      font-weight: bold;
    }

    <h1
      class="c0"
    >
      Example Title
    </h1>
  `);
});
