import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden:true
}

const cartRudcer = (state=INITIAL_STATE, action)=>{
    console.log(CartActionTypes)
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            console.log(state.hidden)
            return {
                ...state,
                hidden: !state.hidden
            }
            default: 
            return state
    }
}
export default cartRudcer