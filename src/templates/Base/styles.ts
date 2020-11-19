import styled, { css } from 'styled-components'

export const TopWrapper = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    background-color: ${theme.colors.lightBg};
    position: fixed;
    top: 0;
    width: 100%;
  `}
`

export const Stack = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 13rem;
`
