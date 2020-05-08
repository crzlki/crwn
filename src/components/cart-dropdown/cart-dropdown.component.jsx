import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems,history,dispatch}) => (
    
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length?
            cartItems.map(item=>(
                <CartItem key={item.id} item={item}></CartItem>
            ))
            :
            <span className='empty-message'>Your cart is empty</span>
            }
            <CustomButton onClick={()=>{
                dispatch(toggleCartHidden()) 
                history.push('/checkout')
               
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
// {cart:{cartItems}}
const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
})
//dispatch is default props
export default withRouter(connect(mapStateToProps)(CartDropdown))