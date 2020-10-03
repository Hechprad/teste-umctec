import {
  IActivity,
  GetActivitiesDataRequest,
  GetActivitiesDataSuccess,
  IGetActivitiesDataFailure,
  ActionTypes,
} from './types'

export function getActivitiesDataRequest(): GetActivitiesDataRequest {
  return {
    type: ActionTypes.ACTIVITIES_GET_DATA_REQUEST,
  }
}

export function getActivitiesDataSuccess(
  activities: IActivity[]
): GetActivitiesDataSuccess {
  return {
    type: ActionTypes.ACTIVITIES_GET_DATA_SUCCESS,
    payload: activities,
  }
}

export function getActivitiesDataFailure(): IGetActivitiesDataFailure {
  return {
    type: ActionTypes.ACTIVITIES_GET_DATA_FAILURE,
  }
}
