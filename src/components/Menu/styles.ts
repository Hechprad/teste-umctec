import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue1};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 100px;
  height: 100vh;
  z-index: 3;
  position: fixed;
  top: 0px;
`

export const MenuLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 90px;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  box-shadow: ${props => props.theme.shadows.gray1};
`
export const LogoText1 = styled.p`
  ${({ theme }) => theme.fontTypes.body}
  font-weight: 600;
  align-self: center;
  margin-right: ${({ theme }) => theme.spacing(1 / 2)}px;
  color: ${({ theme }) => theme.colors.white1};
`

export const LogoText2 = styled.p`
  ${({ theme }) => theme.fontTypes.body}
  align-self: center;
  color: ${({ theme }) => theme.colors.white1};
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 72px;

  border-left: ${({ theme }) =>
    `${theme.spacing(1 / 2)}px solid ${theme.colors.blue2}`};

  & + & {
    margin-top: ${({ theme }) => theme.spacing(3)}px;
  }
`

export const MenuText = styled.p`
 ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme }) => theme.colors.gray3};
`
