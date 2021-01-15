const storageItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export let initialState = {
  items: storageItems || [],
  // subTotal: storageItems
  //   .reduce((acc, item) => acc + item.price * item.pQty, 0)
  //   .toFixed(2),
  // cartCount: storageItems.length,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        payload: action.payload,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        payload: action.payload,
      };
    case "INCREASE":
      return {
        ...state,
        payload: action.payload,
      };
    case "DECREASE":
      return {
        ...state,
        payload: action.payload,
      };
    case "CLEAR_CART":
      return {
        items: [],
      };

    default:
      return state;
  }
};
