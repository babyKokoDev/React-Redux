import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./action";

const reducer = (state, action) => {

    if (action.type === CLEAR_CART){
        return {...state, cart : []}
    }
    if (action.type === DECREASE){
        console.log("you decreased an amount");
    }
    if (action.type === INCREASE){
        console.log("you increased an amount");
    }
    if (action.type === REMOVE){
        const {cart} = state
        const itemLeft = cart.filter((item)=>item.id !== action.payload.id)
        return {...state, cart : itemLeft}
    }
    return state

  }

  export default reducer