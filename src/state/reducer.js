import actions from './actions';

export const initialState = {
  basket: [],
  user: null,
  items: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actions.REMOVE_FROM_BASKET:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) newBasket.splice(index, 1);
      else console.warn(`Cant remove product (id: ${action.id})`);
      return {
        ...state,
        basket: newBasket,
      };
    case actions.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actions.ADD_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export default reducer;
