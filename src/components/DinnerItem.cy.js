import React from 'react'
import DinnerItem from './DinnerItem'

describe('<DinnerItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DinnerItem />)
  })
})