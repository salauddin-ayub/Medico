import { ADD_TO_CART, CLEAR_CART, INCREMENT_COUNT } from "./ActionTypes"

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  }
}
export const clearCart = () => ({
  type: CLEAR_CART,
})

