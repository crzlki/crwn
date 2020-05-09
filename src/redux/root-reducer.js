
import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer, //stored in firebase
    cart: cartReducer
})


export default persistReducer(persistConfig,rootReducer)


// reducer is a pure function  as a center to handle diff actions