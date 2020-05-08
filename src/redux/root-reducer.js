
import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'


export default combineReducers({
    user: userReducer
})


// reducer is a pure function  as a center to handle diff actions