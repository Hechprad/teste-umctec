interface IBillSources {
  label: string
  value: number | string
}

export interface ICard {
  id: number
  activityId: number
  patientName: string
  days: number
  status: string
  healthInsurance: string
  billSources: IBillSources[]
  value: number
  pendencies: number
  billTypes: string[]
  showAttachment: boolean
  showDocument: boolean
  hasPendingDocument: boolean
}

export interface ICardsState {
  data: ICard[] | null
  hasError: boolean
  isLoading: boolean
}

export enum ActionTypes {
  CARDS_GET_DATA_REQUEST = 'CARDS_GET_DATA_REQUEST',
  CARDS_GET_DATA_SUCCESS = 'CARDS_GET_DATA_SUCCESS',
  CARDS_GET_DATA_FAILURE = 'CARDS_GET_DATA_FAILURE',
}

export interface IGetCardsDataRequest {
  type: typeof ActionTypes.CARDS_GET_DATA_REQUEST
}

export interface IGetCardsDataSuccess {
  type: typeof ActionTypes.CARDS_GET_DATA_SUCCESS
  payload: ICard[]
}

export interface IGetCardsDataFailure {
  type: typeof ActionTypes.CARDS_GET_DATA_FAILURE
}

export type GetCardsDataRequest = IGetCardsDataRequest
export type GetCardsDataSuccess = IGetCardsDataSuccess
export type GetCardsDataFailure = IGetCardsDataFailure
