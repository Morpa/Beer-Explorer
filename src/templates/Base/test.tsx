import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/TopLine', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TopLine"></div>
    }
  }
})

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render the base component', () => {
    renderWithTheme(
      <Base>
        <h1>Content</h1>
      </Base>
    )

    expect(screen.getByTestId('Mock TopLine')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
  })
})
