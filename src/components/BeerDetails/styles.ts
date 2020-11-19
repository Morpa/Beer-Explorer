import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const Layout = styled(motion.div)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.white};
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
    border: 2px solid ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
  `}
`

export const BeerTitle = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const SectionTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
    padding-top: ${theme.spacings.small};
    border-top: 1px solid ${theme.colors.white};
  `}
`

export const SubsectionTitle = styled.h4`
  font-style: italic;
`

export const DetailsList = styled.dl`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;

    dt {
      text-align: right;
    }

    dt span {
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
