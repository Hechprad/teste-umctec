import { Reducer } from 'redux'
import { ActionTypes, ICardsState } from './types'

const INITIAL_STATE: ICardsState = {
  data: null,
  hasError: false,
  isLoading: true,
}

const cards: Reducer<ICardsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CARDS_GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case ActionTypes.CARDS_GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case ActionTypes.CARDS_GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    default:
      return state
  }
}

export default cards
