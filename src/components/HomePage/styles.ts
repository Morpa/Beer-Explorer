import styled, { css } from 'styled-components'

export const PaginationLayout = styled.nav`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};
    display: flex;

    a + a {
      margin-left: 1rem;
    }
  `}
`

export const PaginationLink = styled.a`
  ${({ theme }) => css`
    flex: 1;
    display: block;
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.secondary};
    width: 100%;
    text-align: center;
    color: inherit;
    text-decoration: none;
    margin-bottom: 3rem;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`
