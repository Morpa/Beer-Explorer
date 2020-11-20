import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

import api from 'services/api'

import Base from 'templates/Base'
import { Beer } from 'types/Beer'

import * as S from 'components/BeerDetails/styles'

type BeerDetailsPageProps = {
  beer: Beer
}

const BeerDetailsPage = ({ beer }: BeerDetailsPageProps) => {
  return (
    <>
      <Head>
        <title>{beer.name} | Beer Explorer</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base>
        <motion.div
          initial={{ transform: 'translateY(100%)' }}
          animate={{ transform: 'translateY(0px)' }}
          exit={{ transform: 'translateY(100%)' }}
        >
          <S.BeerImage
            src={beer.image_url ?? 'img/default_beer_image.svg'}
            alt={beer.name}
          />

          <S.BeerTitle>{beer.name}</S.BeerTitle>

          <S.Highlight>{beer.tagline}</S.Highlight>

          <S.BeerDescriptionWrapper>
            <S.BeerText>{beer.description}</S.BeerText>

            <S.BeerText>
              This beer was first brewed on {beer.first_brewed}
            </S.BeerText>
          </S.BeerDescriptionWrapper>

          <S.SectionTitle>About this beer</S.SectionTitle>

          <S.DetailsList>
            <dt>
              ABV <span>(Alcohol by volume)</span>
            </dt>
            <dd>{beer.abv}</dd>

            <dt>
              EBC <span>(European Brewery Convention)</span>
            </dt>
            <dd>{beer.ebc}</dd>

            <dt>
              SRM <span>(Standard Reference Method)</span>
            </dt>
            <dd>{beer.srm}</dd>

            <dt>
              IBU <span>(International Bittering Units)</span>
            </dt>
            <dd>{beer.ibu}</dd>

            <dt>
              OG <span>(Original Gravity)</span>
            </dt>
            <dd>{beer.target_og}</dd>

            <dt>
              FG <span>(Final Gravity)</span>
            </dt>
            <dd>{beer.target_fg}</dd>

            <dt>PH</dt>
            <dd>{beer.ph}</dd>
          </S.DetailsList>

          <S.ServedIngredients>
            This beer is best served with the following ingredients :
          </S.ServedIngredients>

          <S.DiscList>
            {beer.food_pairing.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </S.DiscList>

          <S.SectionTitle>Your brewer&#39;s tips</S.SectionTitle>

          <S.Highlight>
            <blockquote>{beer.brewers_tips}</blockquote>
          </S.Highlight>

          <S.SectionTitle>Ingredients</S.SectionTitle>

          <S.SubsectionTitle>Hops</S.SubsectionTitle>

          <S.IngredientList>
            {beer.ingredients.hops.map((hop, index) => (
              <>
                <dt key={index}>
                  {hop.name} <span>({hop.attribute})</span>
                </dt>
                <dd>
                  {hop.amount.value} {hop.amount.unit}
                </dd>
              </>
            ))}
          </S.IngredientList>

          <S.IngredientList>
            {beer.ingredients.malt.map((malt, index) => (
              <>
                <dt key={index}>{malt.name}</dt>
                <dd>
                  {malt.amount.value} {malt.amount.unit}
                </dd>
              </>
            ))}
          </S.IngredientList>

          <S.SubsectionTitle>Malts</S.SubsectionTitle>

          <S.IngredientList>
            {beer.ingredients.malt.map((malt, index) => (
              <>
                <dt key={index}>{malt.name}</dt>
                <dd>
                  {malt.amount.value} {malt.amount.unit}
                </dd>
              </>
            ))}
          </S.IngredientList>

          <S.SubsectionTitle>Yeast</S.SubsectionTitle>
          <S.ServedIngredients>{beer.ingredients.yeast}</S.ServedIngredients>

          <S.SectionTitle>Contributions</S.SectionTitle>
          <S.Contributed>Contributed by {beer.contributed_by}.</S.Contributed>
        </motion.div>
      </Base>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<BeerDetailsPageProps> = async (
  context
) => {
  const response = await api.get<Beer[]>(`beers/${context.params!.beerId}`)

  return { props: { beer: response.data[0] } }
}

export default BeerDetailsPage
