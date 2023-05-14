import { CLEAR_CART, DECREASE, INCREASE, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./action";
import cartItems from "./cart-items";
const initialStore = {
    cart : cartItems,
    total : 0,
    amount : 0
}


const reducer = (state=initialStore , action) => {

    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }
    // if (action.type === DECREASE) {
    //     const { cart } = state

    //         let newCart = cart.map((cart) => {
    //             if (cart.id === action.payload.id) {

    //                 return { ...cart, amount: cart.amount - 1 }

    //             }
    //             return cart
    //         })
    //         return { ...state, cart: newCart }

    // }
    // if (action.type === INCREASE) {
    //     const { cart } = state
    //     let newCart = cart.map((cart) => {
    //         if (cart.id === action.payload.id) {
    //             return { ...cart, amount: cart.amount + 1 }
    //         }
    //         return cart
    //     })
    //     return { ...state, cart: newCart }
    // }
    if (action.type === REMOVE) {
        const { cart } = state
        const itemLeft = cart.filter((item) => item.id !== action.payload.id)
        return { ...state, cart: itemLeft }
    }

   
    if (action.type === GET_TOTALS){
        let newObject = state.cart.reduce((Total, cart)=>{
            Total.amount += cart.amount
            let totalPrice = cart.amount * cart.price
            Total.total += totalPrice
           return Total
        }, {total : 0, amount : 0})  
        let {total, amount} = newObject
        total = parseFloat(total.toFixed(2))
        return {...state, total:total, amount:amount}
    }


    if (action.type === TOGGLE_AMOUNT){
        const { cart } = state
        let newCart = cart.map((cart) => {
            if (cart.id === action.payload.id) {
                if (action.payload.toogler === 'inc'){
                    return { ...cart, amount: cart.amount + 1 }
                }
                if (action.payload.toogler === 'dec'){
                    return { ...cart, amount: cart.amount - 1 }
                }
            }
            return cart
        })
        return { ...state, cart: newCart }
    }

    return state

}

export default reducer