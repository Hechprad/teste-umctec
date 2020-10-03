import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from 'services/api'
import IState from 'store/types'

import {
  getCardsDataRequest,
  getCardsDataSuccess,
  getCardsDataFailure,
} from 'store/modules/Cards/actions'
import { ICardsState } from 'store/modules/Cards/types'

export const useGetCards = (): void => {
  const dispatch = useDispatch()

  const cardsData = useSelector<IState, ICardsState>(state => state.cards)

  const getCards = useCallback((): void => {
    dispatch(getCardsDataRequest())
    api
      .get('cards')
      .then(response => {
        dispatch(getCardsDataSuccess(response.data))
      })
      .catch(e => {
        console.error(e)
        dispatch(getCardsDataFailure())
      })
  }, [dispatch])

  useEffect(() => {
    if (!cardsData.data) {
      getCards()
    }
  }, [cardsData.data, dispatch, getCards])
}
