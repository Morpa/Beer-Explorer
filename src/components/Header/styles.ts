import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;
    z-index: ${theme.layers.menu};
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`

export const LogoWrapper = styled.div``

export const IconWrapper = styled.div`
  a {
    color: inherit;
    text-decoration: none;

    > svg {
      display: block;
      width: 2rem;
    }
  }

  ${media.lessThan('medium')`
    position: absolute;
    left: 90%;
    transform: translateX(-50%);
  `}
`
