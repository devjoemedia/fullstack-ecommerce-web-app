
export const initialState = {
  cartCount: 0,
  subTotal: 0,
  items: [],
};

export const reducer = (state, action) => {
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
      let item =
        state.items[
          state.items.findIndex((item) => item.id === action.payload.id)
        ];

      if (item.pQty < 5) {
        item.pQty++;
        item.totalPrice = (item.pQty * item.price).toFixed(2);
      } else {
        item.pQty = 5;
      }
      return {
        ...state,
        payload: action.payload,
      };
    case "DECREASE":
      // state.items[
      //   state.items.findIndex((item) => item.id === action.payload.id)
      // ].pQty--;

      let item1 =
        state.items[
          state.items.findIndex((item) => item.id === action.payload.id)
        ];

      if (item1.pQty > 1) {
        item1.pQty--;
        item1.totalPrice = (item1.pQty * item1.price).toFixed(2);
        console.log(item1);
      } else {
        item1.pQty = 1;
      }
      return {
        ...state,
        items: state.items,
      };

    default:
      return state;
  }
};

export default reducer;
