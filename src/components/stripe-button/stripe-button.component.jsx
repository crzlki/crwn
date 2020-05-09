import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    
const priceForStripe = price * 100
const publishableKey = 'pk_test_O38wClfZxWYIICmYTtaI6x2E00KisIdbCm'
const onToken = token => {
    console.log(token)
    alert('success')
}

return (
    <StripeCheckout 
    label='Pay now'
    billingAddress
    shippingAddress
    name = 'CRZ Roy App'
    image = 'https://svgshare.com/i/CUz.svg'
    description = {`Your total is $${price}`}
    amount = {priceForStripe}
    panelLabel = 'Pay now'
    token = {onToken}
    stripeKey = {publishableKey}
    ></StripeCheckout>
)
}

export default StripeCheckoutButton