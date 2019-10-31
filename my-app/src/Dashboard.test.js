import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test("Does it render", () => {
    render(<Dashboard/>)
  })

  test("Shouldn't render", () => {
    render(<Dashboar/>)
  })
  test("does it contain strike", () => {
    const {getByText} = render(<Dashboard/>)

    getByText(/STRIKE/i)

  })

  test("does it contain increase", () => {
    const {getByText} = render(<Dashboard/>)

    getByText(/Increase/i)

  })

