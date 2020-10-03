import { IActivitiesState } from 'store/modules/Activities/types'
import { ICardsState } from 'store/modules/Cards/types'

export default interface IState {
  activities: IActivitiesState
  cards: ICardsState
}
