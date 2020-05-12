// saga is a watcher ,root file helps to manage mutiple work streams

import { all, call } from 'redux-saga/effects'
import { shopSagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'


export default function* rootSaga(){
    yield all([call(userSagas),call(cartSagas),call(shopSagas)])
}

// export default function* rootSaga(){
//     // there is order without all method
//     yield call(fetchCollectionsStart)
//     yield saga2
//     yield saga3
// }