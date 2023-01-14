export const initialstate = {
  itemArray: "Snacks",
  cardObject: {},
  cartItems: [],
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_CATEGORY_NAME": {
      return {
        ...state,
        itemArray: action.payload,
      };
    }
    case "ADD_Card_ARRAY": {
      return {
        ...state,
        cardObject: action.payload,
      };
    }
    case "ADD_CART_ITEM": {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case "REMOVE_CART_ITEM": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload
        ),
      };
    }
    case "RESET": {
      return {
        ...state,
        cartItems: [],
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
