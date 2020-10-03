import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from 'services/api'
import { IState } from 'store'

import {
  getActivitiesDataRequest,
  getActivitiesDataSuccess,
  getActivitiesDataFailure,
} from 'store/modules/Activities/actions'
import { IActivitiesState } from 'store/modules/Activities/types'

export const useGetActivities = (): void => {
  const dispatch = useDispatch()

  const activitiesData = useSelector<IState, IActivitiesState>(
    state => state.activities
  )

  const getActivities = useCallback((): void => {
    dispatch(getActivitiesDataRequest())
    api
      .get('activities')
      .then(response => {
        dispatch(getActivitiesDataSuccess(response.data))
      })
      .catch(e => {
        console.error(e)
        dispatch(getActivitiesDataFailure())
      })
  }, [dispatch])

  useEffect(() => {
    if (!activitiesData.data) {
      getActivities()
    }
  }, [activitiesData.data, dispatch, getActivities])
}
