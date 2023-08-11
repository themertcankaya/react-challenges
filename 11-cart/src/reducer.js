import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const getItem = newCart.get(itemId);
    const updateItem = { ...getItem, amount: getItem.amount + 1 };
    newCart.set(itemId, updateItem);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const getItem = newCart.get(itemId);

    if (getItem.amount === 0) {
      return state;
    }

    const updateItem = { ...getItem, amount: getItem.amount - 1 };
    newCart.set(itemId, updateItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    const updateCart = new Map(
      action.payload.data.map((item) => [item.id, item])
    );
    return { ...state, loading: false, cart: updateCart };
  }

  throw new Error(`no matchin action type: ${action.type}`);
};

export default reducer;
