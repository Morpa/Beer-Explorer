import styled, { css } from 'styled-components'

export const ListWrapper = styled.ul`
  li + li {
    ${({ theme }) => css`
      border-top: 1px solid ${theme.colors.gray};
    `}
  }
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    a {
      line-height: 1.5;
      padding: ${theme.spacings.xxsmall};
      height: 9.6rem;
      display: grid;
      grid-template-columns: 50px 1fr;
      grid-gap: ${theme.spacings.small};
      text-decoration: none;
      color: inherit;
    }

    a,
    span {
      overflow: hidden;
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.font.sizes.xlarge};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightBlack};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 7.5rem;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
`
