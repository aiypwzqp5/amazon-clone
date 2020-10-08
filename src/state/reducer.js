import actions from './actions';

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actions.REMOVE_FROM_BASKET:
      return {};
    case actions.EMPTY_BASKET:
      return {};
    case actions.SET_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
