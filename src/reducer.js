import { CLEAR_CART, DECREASE, INCREASE, REMOVE, GET_TOTALS } from "./action";

const reducer = (state, action) => {

    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }
    if (action.type === DECREASE) {
        const { cart } = state

        if (action.payload.amount === 1) {
            const itemLeft = cart.filter((item) => item.id !== action.payload.id)
            return { ...state, cart: itemLeft }
        }
        else {
            let newCart = cart.map((cart) => {
                if (cart.id === action.payload.id) {

                    return { ...cart, amount: cart.amount - 1 }

                }
                return cart
            })
            return { ...state, cart: newCart }

        }

    }
    if (action.type === INCREASE) {
        const { cart } = state
        let newCart = cart.map((cart) => {
            if (cart.id === action.payload.id) {
                return { ...cart, amount: cart.amount + 1 }
            }
            return cart
        })
        return { ...state, cart: newCart }
    }
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

    return state

}

export default reducer