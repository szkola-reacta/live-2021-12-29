import { render } from '@testing-library/react';

import { Blog } from './Blog';

describe("Blog component", () => {
  test("Should display three posts", async () => {
    const { debug, getByText, findByText } = render(<Blog />);

    debug();
    getByText('Posts');
    await findByText('News 2');
  })
});
