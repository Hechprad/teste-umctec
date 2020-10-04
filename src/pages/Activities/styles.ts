import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

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
  color: ${({ theme }) => theme.colors.gray4};
  width: 100%;
  text-align: center;
  margin: ${({ theme }) => `${theme.spacing(2)}px 0 ${theme.spacing(5)}px`};
`

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: ${({ theme }) => `${theme.spacing(5)}px`};
  margin-left: 100px;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  width: 100%;
  height: 100%;
  margin: ${({ theme }) => `${theme.spacing(8)}px`};
  margin-left: 100px;
`
