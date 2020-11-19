import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BeerList from '.'

import beers from './mock'

const props = beers.slice(0, 1)

describe('<BeerList />', () => {
  it('should render the beer item', () => {
    renderWithTheme(<BeerList beers={props} />)

    expect(
      screen.getByRole('heading', { name: props[0].name })
    ).toBeInTheDocument()

    expect(screen.getByText(/Buzz/i)).toBeInTheDocument()

    expect(screen.getByText(/a real bitter experience./i)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props[0].name })).toHaveAttribute(
      'src',
      props[0].image_url
    )
  })
})
