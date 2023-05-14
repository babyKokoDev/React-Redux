export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const REMOVE = "REMOVE"
export const CLEAR_CART = "CLEAR_CART"
export const GET_TOTALS = "GET_TOTAL"
export const TOGGLE_AMOUNT = "GET_AMOUNT"


export const removeItem = (id) => {
   return {type: REMOVE, payload: { id }}
}