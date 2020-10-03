import React, { useEffect, useState } from 'react'

import Menu from 'components/Menu'
import { useSelector } from 'react-redux'

import { IActivitiesState, IActivity } from 'store/modules/Activities/types'
import { useGetActivities } from 'hooks/useGetActivities'
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

  useGetActivities()

  useEffect(() => {
    if (activitiesData) {
      setActivities(activitiesData)
    }
  }, [activitiesData])

  console.log(activitiesData)

  return (
    <s.Wrapper>
      <Menu />
      <s.PageTitle>Activities page</s.PageTitle>
    </s.Wrapper>
  )
}

export default Activities
