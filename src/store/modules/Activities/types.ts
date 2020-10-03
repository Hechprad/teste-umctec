interface ICardsCount {
  delayed: number
  warning: number
  good: number
}

export interface IActivity {
  id: number
  name: string
  cardsCount: ICardsCount
}

export interface IActivitiesState {
  data: IActivity[] | null
  hasError: boolean
  isLoading: boolean
}

export enum ActionTypes {
  ACTIVITIES_GET_DATA_REQUEST = 'ACTIVITIES_GET_DATA_REQUEST',
  ACTIVITIES_GET_DATA_SUCCESS = 'ACTIVITIES_GET_DATA_SUCCESS',
  ACTIVITIES_GET_DATA_FAILURE = 'ACTIVITIES_GET_DATA_FAILURE',
}

export interface IGetActivitiesDataRequest {
  type: typeof ActionTypes.ACTIVITIES_GET_DATA_REQUEST
}

export interface IGetActivitiesDataSuccess {
  type: typeof ActionTypes.ACTIVITIES_GET_DATA_SUCCESS
  payload: IActivity[]
}

export interface IGetActivitiesDataFailure {
  type: typeof ActionTypes.ACTIVITIES_GET_DATA_FAILURE
}

export type GetActivitiesDataRequest = IGetActivitiesDataRequest
export type GetActivitiesDataSuccess = IGetActivitiesDataSuccess
export type GetActivitiesDataFailure = IGetActivitiesDataFailure
