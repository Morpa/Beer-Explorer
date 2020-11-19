import Link from 'next/link'

import * as S from './styles'

import { Beer } from 'types/Beer'

export type BeerListProps = {
  beers: Beer[]
}

const BeerList = ({ beers }: BeerListProps) => (
  <S.ListWrapper>
    {beers.map((beer) => (
      <S.ListItem key={beer.id}>
        <Link href="/beer/[beerId]" as={`/beer/${beer.id}`}>
          <a>
            <S.Image src={beer.image_url ?? '/ '} alt={beer.name} />
            <span>
              <S.Title>{beer.name}</S.Title>
              <S.Text>{beer.tagline}</S.Text>
            </span>
          </a>
        </Link>
      </S.ListItem>
    ))}
  </S.ListWrapper>
)

export default BeerList
