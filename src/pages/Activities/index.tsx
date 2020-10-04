import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import Card from 'components/Card'
import Menu from 'components/Menu'

import { IActivitiesState, IActivity } from 'store/modules/Activities/types'
import { ICardsState } from 'store/modules/Cards/types'
import { useGetActivities } from 'hooks/useGetActivities'
import { useGetCards } from 'hooks/useGetCards'
import IState from 'store/types'

import * as s from './styles'

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([])

  const {
    data: activitiesData,
    isLoading: activitiesIsLoading,
    hasError: activitiesHasError,
  } = useSelector<IState, IActivitiesState>(state => ({
    data: state.activities.data,
    isLoading: state.activities.isLoading,
    hasError: state.activities.hasError,
  }))

  const {
    data: cardsData,
    isLoading: cardsIsLoading,
    hasError: cardsHasError,
  } = useSelector<IState, ICardsState>(state => ({
    data: state.cards.data,
    isLoading: state.cards.isLoading,
    hasError: state.cards.hasError,
  }))

  useGetActivities()
  useGetCards()

  useEffect(() => {
    if (activitiesData) {
      setActivities(activitiesData)
    }
  }, [activitiesData])

  return (
    <s.Wrapper>
      <Menu />
      <s.MainContent>
        <s.PageTitle>Activities page</s.PageTitle>
        <s.Cards>
          {cardsData?.map(card => (
            <Card key={v4()} cardData={card} />
          ))}
        </s.Cards>
      </s.MainContent>
    </s.Wrapper>
  )
}

export default Activities
