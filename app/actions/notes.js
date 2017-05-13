import * as types from '../constants/ActionTypes';

export function browseNotes() {
  return { type: types.BROWSE_NOTES };
}

export function newNote(categoryId, params) {
  return { type: types.NEW_NOTE, params };
}

export function viewNote(id) {
  return { type: types.VIEW_NOTE, id};
}