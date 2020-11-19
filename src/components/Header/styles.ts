import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    z-index: ${theme.layers.base};
    border-bottom: 2px solid ${theme.colors.secondary};
    margin: 0 ${theme.spacings.xsmall};
  `}
`

export const LogoWrapper = styled.div``

export const IconWrapper = styled.div`
  a {
    color: inherit;
    text-decoration: none;

    > svg {
      display: block;
      width: 3rem;
    }
  }

  ${media.lessThan('medium')`
    position: absolute;
    left: 90%;
    transform: translateX(-50%);
  `}
`
