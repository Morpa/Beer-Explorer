import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TopLine from '.'

describe('<TopLine />', () => {
  it('should render the topline', () => {
    renderWithTheme(<TopLine />)

    expect(screen.getByLabelText(/loading/i)).toHaveStyle({
      background: 'linear-gradient(to left, #fdc830, #f37335)'
    })
  })
})
