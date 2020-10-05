import {
  ICard,
  GetCardsDataRequest,
  GetCardsDataSuccess,
  IGetCardsDataFailure,
  ActionTypes,
} from './types'

export function getCardsDataRequest(): GetCardsDataRequest {
  return {
    type: ActionTypes.CARDS_GET_DATA_REQUEST,
  }
}

export function getCardsDataSuccess(cards: ICard[]): GetCardsDataSuccess {
  return {
    type: ActionTypes.CARDS_GET_DATA_SUCCESS,
    payload: cards,
  }
}

export function getCardsDataFailure(): IGetCardsDataFailure {
  return {
    type: ActionTypes.CARDS_GET_DATA_FAILURE,
  }
}
