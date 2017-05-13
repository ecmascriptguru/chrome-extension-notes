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

export function browseCategory() {
  return { type: types.BROWSES_CATEGORIES };
}

export function newCategory() {
  return { type: types.NEW_CATEGORY };
}

export function viewCategory(id) {
  return { type: types.VIEW_CATEGORY, id };
}