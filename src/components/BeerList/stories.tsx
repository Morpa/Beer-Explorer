import { Story, Meta } from '@storybook/react/types-6-0'
import BeerList from '.'

import { Beer } from 'types/Beer'

import beers from './mock'

export default {
  title: 'BeerList',
  component: BeerList,
  args: { beers }
} as Meta

export const Default: Story<Beer[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BeerList beers={args} {...args} />
  </div>
)
