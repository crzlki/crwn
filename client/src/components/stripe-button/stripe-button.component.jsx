import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    
const priceForStripe = price * 100
const publishableKey = 'pk_test_O38wClfZxWYIICmYTtaI6x2E00KisIdbCm'
const onToken = token => {
    axios({
        url:'payment',
        method: 'post',
        data: {
            amount: priceForStripe,
            token
        }
    }).then(res=>{
        alert('Payment successful')
    }).catch(err=>{
        console.log('Payment error:', JSON.parse(err))
        alert('There is issue with your payment,Please use the provided credit card')
    })

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