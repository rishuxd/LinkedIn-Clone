import { SET_LOADING_STATUS } from "../Actions/actionType";

export const initState = {
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default articleReducer;
