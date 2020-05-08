import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewaes = [logger]

const store = createStore(rootReducer,applyMiddleware(...middlewaes))

export default store