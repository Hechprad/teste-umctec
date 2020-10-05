import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Circle = styled.div<{ type: 'DELAYED' | 'WARNING' | 'GOOD' }>`
  background-color: ${({ theme, type }) => {
    switch (type) {
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`

export const Text = styled.p`
 ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme }) => theme.colors.gray4};
`
