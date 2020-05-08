
import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})


// reducer is a pure function  as a center to handle diff actions