import * as types from '../constants/ActionTypes';

export function browseCategory() {
  return { type: types.BROWSES_CATEGORIES };
}

export function newCategory() {
  return { type: types.NEW_CATEGORY };
}

export function viewCategory(id) {
  return { type: types.VIEW_CATEGORY, id };
}