import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

const UnitListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_UNIT_NAME:
      return {
        ...state,
        isFetching: true,
        items: [],
      };
    case actionTypes.GET_UNIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    case actionTypes.GET_UNIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default UnitListReducer;