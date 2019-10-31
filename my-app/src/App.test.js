   import React from 'react';
   import { render } from '@testing-library/react';
  
   import App,{sum} from "./App"



test("Does it render", () => {
  render(<App />)
})
test("Making sure my test is honest", () => {
  const { getByText }= render(<App />)

  getByText(/Hello/i)
})
test("Testing if Baseball Scoreboard is in my component", () => {
  const { getByText }= render(<App />)
  getByText(/Baseball Scoreboard/i)
})
test("testing sum of 1 + 4", () => {
  expect(sum(1,4)).toBe(5)
})
test("testing sum of 1 + 6 != 5", () => {
  expect(sum(1,6)).toBe(5)
})



