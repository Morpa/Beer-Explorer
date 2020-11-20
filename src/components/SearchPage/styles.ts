import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};

    input {
      all: unset;
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};
      border-radius: ${theme.border.radius};
      background: ${theme.colors.lightGray};
    }
  `}
`

export const ResultsTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-style: italic;
    color: ${theme.colors.red};
  `}
`
