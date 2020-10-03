import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { IActivitiesState } from 'store/modules/Activities/types'

import rootReducer from 'store/modules/rootReducer'

export interface IState {
  activities: IActivitiesState
}

const store = createStore(rootReducer, composeWithDevTools())

export default store
