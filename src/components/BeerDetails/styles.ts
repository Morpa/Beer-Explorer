import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const Layout = styled(motion.div)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.lightBg};
  `}
`

export const BeerImage = styled.img`
  ${({ theme }) => css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 12.5rem;
    height: 12.5rem;
    object-fit: contain;
    border-radius: 50%;
    border: 2px solid ${theme.colors.secondary};
    padding: ${theme.spacings.xxsmall};
  `}
`

export const BeerTitle = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const BeerDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
`

export const BeerText = styled.p``

export const SectionTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xsmall};
    border-top: 1px solid ${theme.colors.secondary};
  `}
`

export const SubsectionTitle = styled.h4`
  font-style: italic;
  padding-top: 2rem;
`

export const DetailsList = styled.dl`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;

    dt {
      display: flex;
      align-items: center;
      justify-content: space-baseline;
      text-align: right;
    }

    dt span {
      margin-left: 1rem;
      font-size: ${theme.font.sizes.xsmall};
    }

    dd {
      font-weight: ${theme.font.bold};
    }

    ${media.greaterThan('medium')`
      grid-template-columns: auto 1fr auto 1fr;
    `}
  `}
`

export const IngredientList = styled.dl`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;

    dt {
      display: inline-flex;
      align-items: center;
      font-weight: ${theme.font.bold};
    }

    dt span {
      margin-left: 1ch;
      font-weight: normal;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
export const Highlight = styled.div`
  border-radius: 0.4rem;
  padding: 2rem;

  background: linear-gradient(to left, #fdc830, #f37335);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`

export const DiscList = styled.ul`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xsmall};

    li {
      list-style-type: disc;
    }
  `}
`

export const ServedIngredients = styled.p`
  margin: 1rem 0;
`

export const Contributed = styled.p`
  margin: 1rem 0;
`
