export const addItem = (cartItems,newItem) => {
    const existingCartItem = cartItems.find(cartItem=>(cartItem.id===newItem.id))
    if(existingCartItem){
        return cartItems.map(cartItem=>(cartItem.id===newItem.id ? 
            {...cartItem,quantity:cartItem.quantity + 1} : cartItem ))
    }
    return [...cartItems, {...newItem,quantity: 1}]
}

export const clearItem = (cartItems,aimItem) => (cartItems.filter(item=> item.id !== aimItem.id))

export const removeItem = (cartItems,aimItem) => {
    const existingCartItem = cartItems.find(cartItem=>(cartItem.id===aimItem.id))
    if(existingCartItem.quantity === 1){
        return clearItem(cartItems,aimItem)
    }
    return cartItems.map(item=>(
       item.id === aimItem.id?
          {...item, quantity: item.quantity -1}
          :
          item 
    ))
}
