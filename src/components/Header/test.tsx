import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render the header with search visible', () => {
    renderWithTheme(<Header isVisible />)

    expect(screen.getByLabelText(/beer explorer/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /search/i })).toBeInTheDocument()
  })

  it('should render the header with back visible', () => {
    renderWithTheme(<Header />)

    expect(screen.getByLabelText(/beer explorer/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument()
  })
})
