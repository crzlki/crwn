import { createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
// import { fetchCollectionsStart } from './shop/shop.sagas'
import rootSaga from './root.sagas'

import rootReducer from './root-reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewaes = [sagaMiddleware]

if(process.env.NODE_ENV === 'development'){
    middlewaes.push(logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middlewaes))

sagaMiddleware.run(rootSaga) // use root for watching mutiple sagas

export const persistor = persistStore(store)

// export default { store, persistor}