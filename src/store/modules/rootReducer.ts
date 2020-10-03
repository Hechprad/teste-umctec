import { combineReducers } from 'redux'

import activities from './Activities/reducer'
import cards from './Cards/reducer'

export default combineReducers({
  activities,
  cards,
})
