import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import Pagination from '@material-ui/lab/Pagination'

import Card from 'components/Card'
import Menu from 'components/Menu'

import { IActivitiesState, IActivity } from 'store/modules/Activities/types'
import { ICard, ICardsState } from 'store/modules/Cards/types'
import { useGetActivities } from 'hooks/useGetActivities'
import { useGetCards } from 'hooks/useGetCards'
import IState from 'store/types'

import CardBullet from './CardBullet'

import * as s from './styles'

const Activities: React.FC = () => {
  const [activity, setActivity] = useState<IActivity | null>(null)
  const [cards, setCards] = useState<ICard[]>([])
  const [dropDownData, setDropDownData] = useState<string[]>([])
  const [unit, setUnit] = useState<number>(1)
  const [selectValue, setSelectValue] = useState<string>('Prioridade(SLA)')
  const [totalItems, setTotalItems] = useState(0)
  const [totalPage, setTotalPage] = useState(1)
  const [pageContent, setPageContent] = useState<ICard[] | null>()
  const [currentPage, setCurrentPage] = useState(1)
  const [isAllChecked, setIsAllChecked] = useState(false)

  const itemsPerPage = 9

  const activitiesData = useSelector<IState, IActivitiesState>(
    state => state.activities
  )

  const cardsData = useSelector<IState, ICardsState>(state => state.cards)

  useGetActivities()
  useGetCards()

  // handle activity info
  useEffect(() => {
    if (activitiesData.data) {
      setActivity(
        activitiesData.data.find(activityItem => activityItem.id === unit) ||
          null
      )
      const names: string[] = []
      activitiesData.data.forEach(activityData => names.push(activityData.name))
      setDropDownData(names)
    }
  }, [activitiesData.data, unit])

  // handle cards info
  useEffect(() => {
    if (cardsData.data) {
      setCards(
        cardsData.data
          .filter(card => card.activityId === unit)
          .sort((a, b) => b.days - a.days)
      )
    }
  }, [cardsData.data, unit])

  // handle pagination
  useEffect(() => {
    if (cards) {
      setTotalItems(cards.length)
      setTotalPage(Math.ceil(totalItems / itemsPerPage))

      const totalBackwardPages = currentPage - 1
      const totalOrdersToBeRemoved = itemsPerPage * totalBackwardPages

      setPageContent(
        cards.slice(
          totalOrdersToBeRemoved,
          totalOrdersToBeRemoved + itemsPerPage
        )
      )
    }
  }, [cards, currentPage, totalItems])

  // reset currentPage and AllChecked if unit change
  useEffect(() => {
    if (unit) {
      setCurrentPage(1)
      setIsAllChecked(false)
    }
  }, [unit])

  const handleSelectInput = (
    event: React.FormEvent<HTMLSelectElement>
  ): void => {
    setSelectValue(event.currentTarget.value)
  }

  const handlePaginationChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  const handleAllCheckboxChange = (): void => {
    setIsAllChecked(prevState => !prevState)
  }

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log(event.currentTarget.name)
  }

  return (
    <s.Wrapper>
      <Menu />
      <s.MainContent>
        <s.Header>
          <s.DropDownWrapper>
            <s.DropDown items={dropDownData} setSelected={setUnit} />
            <s.SubTitle>Auditar conta</s.SubTitle>
          </s.DropDownWrapper>
          <s.CardsAmount>
            <s.Bullets>
              <CardBullet
                type="DELAYED"
                numberOfCards={activity ? activity.cardsCount.delayed : 0}
              />
              <CardBullet
                type="WARNING"
                numberOfCards={activity ? activity.cardsCount.warning : 0}
              />
              <CardBullet
                type="GOOD"
                numberOfCards={activity ? activity.cardsCount.good : 0}
              />
            </s.Bullets>
            <s.Total>
              <s.TotalText>Total: </s.TotalText>
              <s.TotalAmount>
                {activity
                  ? activity.cardsCount.delayed +
                    activity.cardsCount.warning +
                    activity.cardsCount.good
                  : 0}{' '}
                contas
              </s.TotalAmount>
            </s.Total>
          </s.CardsAmount>
          <s.SortContainer>
            <s.SortByText>Organizar por: </s.SortByText>
            <s.Select value={selectValue} onChange={e => handleSelectInput(e)}>
              <s.Option value="Prioridade(SLA)">Prioridade(SLA)</s.Option>
              <s.Option value="Receber documentos">Receber documentos</s.Option>
            </s.Select>
          </s.SortContainer>
        </s.Header>
        <s.CheckboxContainer onClick={() => handleAllCheckboxChange()}>
          <input
            name="selectAll"
            type="checkbox"
            checked={isAllChecked}
            onChange={handleCheckboxChange}
          />
          <s.CheckboxText>Selecionar Tudo</s.CheckboxText>
        </s.CheckboxContainer>
        <s.Cards>
          {pageContent?.map(card => (
            <Card
              key={v4()}
              cardData={card}
              checked={isAllChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </s.Cards>
        <s.PaginationContainer>
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={(e, page) => handlePaginationChange(page)}
          />
        </s.PaginationContainer>
      </s.MainContent>
    </s.Wrapper>
  )
}

export default Activities
