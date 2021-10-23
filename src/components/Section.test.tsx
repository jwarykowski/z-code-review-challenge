import "jest-styled-components";
import { render } from "@testing-library/react";

import Section from "./Section";

test("renders section component", () => {
  expect.assertions(2);

  const { container, getByText } = render(<Section>Example Section</Section>);

  expect(getByText("Example Section")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      background: #ffffff;
      margin-bottom: 2.5rem;
    }

    <section
      class="c0"
    >
      Example Section
    </section>
  `);
});
