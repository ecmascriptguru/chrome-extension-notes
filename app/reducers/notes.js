import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  type: ActionTypes.BROWSE_NOTES,
  categories: [],
  notes: []
};

const actionsMap = {
  [ActionTypes.BROWSE_NOTES](state, action) {
    return {...state};
  }
};

export default function notes(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  console.log(action.type);
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
