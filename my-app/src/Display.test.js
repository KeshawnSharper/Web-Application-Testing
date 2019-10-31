import React from 'react';
import { render } from '@testing-library/react';


import Display from './Display';

test("Does it render", () => {
    render(<Display/>)
  })
  test("Testing will jest get the text if it shares an element", () => {
    const { getByText } = render(<Display/>)
    getByText("Balls")
  })
  test("Testing will jest get the text if it shares an element", () => {
    const { getByText } = render(<Display/>)
    getByText(/BALLS/i)
  })
  test("Getting Home team text", () => {
    const { getByText } = render(<Display/>)
    getByText(/Home Team/i)
  })