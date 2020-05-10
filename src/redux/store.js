import { createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewaes = []
if(process.env.NODE_ENV === 'development'){
    middlewaes.push(logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middlewaes))

export const persistor = persistStore(store)

// export default { store, persistor}