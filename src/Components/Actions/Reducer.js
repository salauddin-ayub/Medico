import { ADD_TO_CART, INCREMENT_COUNT, CLEAR_CART } from "./ActionTypes"

const initialState = {
  cartItems: [],
  count: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        count: 0,
      }
    default:
      return state
  }
}

export default cartReducer
