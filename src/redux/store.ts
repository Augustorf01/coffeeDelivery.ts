import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger' // alternativa ao logger (redux-devtools extensão do chrome/edge)

import { rootReducer } from './root-reducer'

export const store = createStore(rootReducer, applyMiddleware(logger))
