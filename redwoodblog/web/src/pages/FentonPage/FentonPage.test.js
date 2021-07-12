import { render } from '@redwoodjs/testing'

import FentonPage from './FentonPage'

describe('FentonPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FentonPage />)
    }).not.toThrow()
  })
})
