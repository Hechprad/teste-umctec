import styled from 'styled-components'
import { themeColors } from 'styles/theme'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
  height: 270px;
  box-shadow: ${({ theme }) => theme.shadows.gray2};
  border-radius: ${({ theme }) => theme.spacing(1 / 2)}px;
  padding: ${({ theme }) => `${theme.spacing(2)}px ${theme.spacing(3)}px`};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
`

export const StartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

interface IDays {
  status: 'DELAYED' | 'WARNING' | 'GOOD'
}

export const Days = styled.div<IDays>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme, status }) => {
    switch (status) {
      case 'DELAYED':
        return theme.colors.redOrange1
      case 'WARNING':
        return theme.colors.yellow1
      case 'GOOD':
        return theme.colors.green1
      default:
        return theme.colors.green1
    }
  }};
  border-radius: 50%;
  width: 72px;
  height: 72px;

  p {
    text-align: center;
    width: 100%;
  }
  p + p {
    margin-top: 2px;
  }
  p:first-child {
    margin-left: 2px;
  }
`

export const DaysText = styled.p`
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white1};
`

interface IText {
  color?: keyof typeof themeColors
}

export const Text = styled.p<IText>`
  ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray4};
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${({ theme }) => theme.spacing(2)}px;

  p {
    text-align: start;
    width: 100%;
  }
`

export const Name = styled.p`
  ${({ theme }) => theme.fontTypes.title}
  color: ${({ theme }) => theme.colors.gray4};
`

export const LabelText = styled.p`
  ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme }) => theme.colors.gray3};
`

export const LabelValue = styled.p`
  ${({ theme }) => theme.fontTypes.body}
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.gray4};
`

export const LabelsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(2)}px;

  p {
    text-align: start;
    width: 100%;
  }
`

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Amount = styled.div`
  background-color: ${({ theme }) => theme.colors.blue1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing(1 / 2)}px;
  padding: ${({ theme }) => theme.spacing(3 / 2)}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export const AmountValue = styled.p`
  ${({ theme }) => theme.fontTypes.title}
  color: ${({ theme }) => theme.colors.gray4};
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.blue2};
  padding: ${({ theme }) => `${theme.spacing(1)}px ${theme.spacing(3)}px`};
`

export const Pendencies = styled.p`
  ${({ theme }) => theme.fontTypes.caption}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue2};
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export const BillType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  border: 2px solid ${({ theme }) => theme.colors.gray4};

  & + & {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`

export const EndItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg + svg {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`
