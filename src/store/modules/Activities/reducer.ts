import { Reducer } from 'redux'
import { ActionTypes, IActivitiesState } from './types'

const INITIAL_STATE: IActivitiesState = {
  data: null,
  hasError: false,
  isLoading: true,
}

const activities: Reducer<IActivitiesState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ActionTypes.ACTIVITIES_GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case ActionTypes.ACTIVITIES_GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case ActionTypes.ACTIVITIES_GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    default:
      return state
  }
}

export default activities
