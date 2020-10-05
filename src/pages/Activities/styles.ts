import styled from 'styled-components'
import DropDownComponent from 'components/Dropdown'
import { MenuItems } from 'components/Dropdown/styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
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
  align-items: flex-start;
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
  width: calc(100% - 80px);
  height: 100%;
  margin: ${({ theme }) => `0 ${theme.spacing(5)}px ${theme.spacing(5)}px`};
`
export const Header = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 160px);
  height: 90px;
  margin: ${({ theme }) => `${theme.spacing(5)}px`};

  @media (max-width: 1000px) {
    height: 190px;
    flex-direction: column;
  }
`

export const DropDownWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const DropDown = styled(DropDownComponent)`
  ${MenuItems} {
    margin-top: 28px;
  }
`

export const SubTitle = styled.p`
 ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme }) => theme.colors.gray3};
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`

export const CardsAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
`

export const Bullets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Total = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`

export const TotalText = styled.p`
 ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme }) => theme.colors.gray3};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`

export const TotalAmount = styled.p`
 ${({ theme }) => theme.fontTypes.caption}
  color: ${({ theme }) => theme.colors.gray4};
`

export const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;

  @media (max-width: 1000px) {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`

export const SortByText = styled.p`
  ${({ theme }) => theme.fontTypes.body}
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.gray4};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`

export const Select = styled.select`
  ${({ theme }) => theme.fontTypes.body}
  height: 40px;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  padding: ${({ theme }) => `0 ${theme.spacing(1)}px 0 ${theme.spacing(1)}px`};
  color: ${({ theme }) => theme.colors.gray3};
  cursor: pointer;
`

export const Option = styled.option`
  ${({ theme }) => theme.fontTypes.body}
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.gray4};
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 38px);
  margin: ${({ theme }) => `130px 0 ${theme.spacing(5)}px`};
  cursor: pointer;

  @media (max-width: 1000px) {
    justify-content: center;
    margin: ${({ theme }) => `${theme.spacing(30)}px 0 ${theme.spacing(5)}px`};
    width: 100%;
  }
`

export const CheckboxText = styled.p`
  ${({ theme }) => theme.fontTypes.body}
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.gray4};
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* classes from material-ui */
  .MuiPagination-ul {
    svg {
      height: 25px;
      width: 25px;
    }

    button:hover {
      background-color: ${({ theme }) => theme.colors.blue1};
      border-radius: 5px;
    }
  }
  .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-page {
    color: ${({ theme }) => theme.colors.gray3};
  }

  .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-page.Mui-selected {
    background-color: ${({ theme }) => theme.colors.blue2};
    color: ${({ theme }) => theme.colors.white1};
    border-radius: 5px;
  }
`
