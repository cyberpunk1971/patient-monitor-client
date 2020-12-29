import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<MemoryRouter>
      <App />
    </MemoryRouter>);
    expect(button.toJSON()).toMatchSnapshot();
  })
})
