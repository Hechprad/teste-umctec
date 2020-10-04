import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 300px;
`

export const MenuItems = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 280px;
  z-index: 2;
  top: 0;
`

export const Backdrop = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 1;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

export const Title = styled.p`
  ${({ theme }) => theme.fontTypes.title}
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray4};
`

export const Item = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: normal;
  cursor: pointer;
  width: 100%;

  p {
    text-align: start;
    width: 100%;
  }

  svg {
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(180deg);
      `};
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`
