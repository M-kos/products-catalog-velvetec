import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { appReducer } from './appReducer'

export const reducers = combineReducers({
  login: loginReducer,
  app: appReducer,
})
