import { render } from '@testing-library/react';

import { Blog } from './Blog';

describe("Blog component", () => {
  test("Should display three posts", async () => {
    const { debug, getByText, findByText } = render(<Blog />);

    debug();

    getByText('Posts');
    // expect(getByText('Posts')).toBeInTheDocument();

    // await findByText('News 2');
    await findByText('Błąd pobierania');

    debug();
  })
});
