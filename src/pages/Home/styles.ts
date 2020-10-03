import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: ${({ theme }) => `${theme.spacing(5)}px`};
`

export const PageTitle = styled.h3`
  ${({ theme }) => theme.fontTypes.heading}
  color: ${({ theme }) => theme.colors.gray3};
  margin: ${({ theme }) => `${theme.spacing(2)}px 0 ${theme.spacing(5)}px`};
`
