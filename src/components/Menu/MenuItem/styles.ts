import styled from 'styled-components'
import { themeColors } from 'styles/theme'

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 72px;
  cursor: pointer;

  & + & {
    margin-top: ${({ theme }) => theme.spacing(1)}px;
  }
`

interface IBorder {
  selectedItem: boolean
}

export const Border = styled.div<IBorder>`
  width: 4px;
  height: 100%;
  background-color: ${({ theme, selectedItem }) =>
    selectedItem ? theme.colors.blue2 : 'transparent'};
  border-top-right-radius: ${({ theme }) => theme.spacing(1 / 2)}px;
  border-bottom-right-radius: ${({ theme }) => theme.spacing(1 / 2)}px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;

  svg {
    align-self: center;
  }

  p {
    text-align: center;
  }
`

interface IText {
  color: keyof typeof themeColors
}

export const Text = styled.p<IText>`
 ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme, color }) => theme.colors[color]};
  width: 90px;
`
