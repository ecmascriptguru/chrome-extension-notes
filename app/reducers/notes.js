import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  type: PageTypes.BROWSE_NOTES,
  categories: [],
  notes: []
};

const actionsMap = {
  [ActionTypes.BROWSE_NOTES](state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }, ...state];
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
